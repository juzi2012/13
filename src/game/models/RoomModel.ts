module game {
	export class RoomInfo{
		public constructor(){
			
		}
		public rp:number;//房间类型
		public fc:number;//"fc":1, //1 房主付 2均分
		public friend:number;//"friend":0,//备用
		public jm:number;//"jm":0,    //是否加马
		public nnum:number;//"nnum":0,   //当前局数
		public pn:number;//"pn":2, //人数
		public safe:string;//"safe":"",//备用
		public snum:number;//"snum":8,//总局数
		public zuid:string=""; //庄家uid
		public zz:number=0; //坐庄模式
	}
	export class User{
		public constructor(){
			
		}
		public avatar:string;
		public card:Array<number>;
		public gold:number;
		public gps:string;
		public name:string;
		public status:number;//是否已经准备
		public tid:number;//座位号
		public uid:string;
		private _sc:number=0;//得分
		public set sc(value:number){
			this._sc = value;
		}
		public get sc():number{
			return this._sc;
		}
		public bp:number;//是否已经摆牌
	}
	export class JieSuanAllItem{
		public constructor() {
		}
		public uid:string;
		public scoreArr:Array<number>;
		public resultScore:number=0;
	}
	export class RoomModel {
		public constructor() {
		}
		public zuid:string;//庄家的id
		public fname:string;//"fname":"房主",
		public fuid:string;//"fuid":"房主uid",
		public gps:string;//"gps":"",//备用
		public rid:number;//"rid":"721500",//房间号
		public rinfo:RoomInfo;//"rinfo": //房间信息
		public users:Array<User>;//玩家信息
		public meInfo:User;//我的信息
		public fzInfo:User;//房主信息

		public js:string;//是否有申请解散的uid，如果有的话，则进来要直接打开解散面板
		public jt:number;//解散剩余时间
		public ju:any;//解散人员操作
		public of:Array<string>;//离线玩家id
		public roundArr:Array<RoundModel>;

		public reConnectState:number=0;//重连进来的游戏状态 0未开始，1已开始，2结算
		public isDismiss:boolean=false;//是否已经解散房间了
		public isAllFinish:boolean=false;//是否所有的牌局都结束，为了方便弹出单局结算后弹出所有结算
		public hasPlayedJu:number=0;
		public isReConnectInRoom:boolean=false;//是否是重新回到游戏界面

		public jieSuanAll:Array<JieSuanAllItem>;

		public isSingleOpen:boolean=false;
		public setRoomInfo(msg:T2C_Enter_Room):void
		{
			this.roundArr = [];
			this.fname = msg.fname;
			this.fuid = msg.fuid;
			this.zuid = msg.zuid;
			this.gps = msg.gps;
			this.rid = msg.rid;
			this.rinfo = new RoomInfo();
			this.rinfo.fc = msg.rinfo.fc;
			this.rinfo.rp = msg.rinfo.rp;
			this.rinfo.friend = msg.rinfo.friend;
			this.rinfo.jm = msg.rinfo.jm;
			this.rinfo.nnum = msg.rinfo.nnum;
			this.rinfo.pn = msg.rinfo.pn;
			this.rinfo.safe = msg.rinfo.safe;
			this.rinfo.snum = msg.rinfo.snum;
			this.rinfo.zz = msg.rinfo.zz;
			if(this.rinfo.zz==1){
				this.rinfo.zuid = this.zuid; 
			}
			if(this.users==null){
				this.users = new Array<User>();
			}
			for(let i:number=0;i<msg.users.length;i++){
				if(msg.users[i].uid!=""){
					let user:User = new User();
					user.avatar = msg.users[i].avatar;
					user.card = msg.users[i].card;
					user.gold = msg.users[i].gold;
					user.gps = msg.users[i].gps;
					user.name = msg.users[i].name;
					user.status = msg.users[i].status;
					user.tid = msg.users[i].tid;
					user.uid = msg.users[i].uid;
					this.checkisNew(user);
				}
			}
			for(let i:number=0;i<this.users.length;i++){
				if(this.users[i].uid==GameModel.ins.uid){
					let u:User = this.users.splice(i,1)[0];
					this.users.unshift(u)
				}
			}
		}
		public reConnectSetRoomInfo(msg:T2C_ReConnect):void
		{
			this.roundArr = [];
			this.fname = msg.fname;
			this.fuid = msg.fuid;
			this.rid = msg.rid;

			this.js = msg.js;
			this.jt = msg.jt;
			this.of = msg.of;
			this.rinfo = new RoomInfo();
			this.rinfo.fc = msg.rinfo.fc;
			this.rinfo.friend = msg.rinfo.friend;
			this.rinfo.jm = msg.rinfo.jm;
			this.rinfo.nnum = msg.rinfo.nnum;
			this.rinfo.pn = msg.rinfo.pn;
			this.rinfo.rp = msg.rinfo.rp;
			this.rinfo.safe = msg.rinfo.safe;
			this.rinfo.snum = msg.rinfo.snum;
			this.rinfo.zuid = msg.dealer;
			this.rinfo.zz = msg.rinfo.zz;
			this.reConnectState = msg.status;
			if(this.users==null){
				this.users = new Array<User>();
			}
			for(let i:number=0;i<msg.users.length;i++){
				if(msg.users[i].uid!=""){
					let user:User = new User();
					user.avatar = msg.users[i].avatar;
					user.card = msg.users[i].hc;
					user.gold = msg.users[i].gold;
					user.gps = msg.users[i].gps;
					user.name = msg.users[i].name;
					user.status = msg.users[i].rd;
					user.tid = msg.users[i].pos;//座位号
					user.uid = msg.users[i].uid;
					user.bp = msg.users[i].bp;//摆牌
					user.sc = msg.users[i].sc;
					this.checkisNew(user);
				}
			}
			for(let i:number=0;i<this.users.length;i++){
				if(this.users[i].uid==GameModel.ins.uid){
					if(this.users[i].card!=null){
						this.addRound(this.users[i].card);
					}
					let u:User = this.users.splice(i,1)[0];
					this.users.unshift(u)
				}
			}
		}
		public removeUser(uid:string):void
		{
			for(let i:number=0;i<this.users.length;i++){
				if(uid==this.users[i].uid){
					this.users.splice(i,1);
					break;
				}
			}
		}
		public getUserById(uid:string):User{
			for(let i:number=0;i<this.users.length;i++){
				if(uid==this.users[i].uid){
					return this.users[i];
				}
			}
		}
		private checkisNew(user:User):void{
			let isnew:boolean=true;
			for(let i:number=0;i<this.users.length;i++){
				if(user.uid==this.users[i].uid){
					isnew=false;
					break;
				}
			}
			if(isnew){
				this.users.push(user);
				if(user.uid == this.fuid){
					this.fzInfo = user;
				}
				if(user.uid == GameModel.ins.uid){
					this.meInfo = user;
				}
				App.MessageCenter.dispatch(MsgEnum.NEW_UESR_IN,user);
			}
		}
		public addRound(card:Array<number>):void
		{
			let roundModel:RoundModel = new RoundModel();
			roundModel.serverCard = card;
			let arr:Array<PorkVO> = new Array<PorkVO>();
			for(let i:number=0;i<card.length;i++){
				let num:number = PorkUtil.ChangeServerCardToClient(card[i]);
				let vo:PorkVO = new PorkVO(num);
				arr.push(vo);
			}
			roundModel.myCard = arr;
			roundModel.setAllType();
			roundModel.myCard = PorkUtil.SortCard(roundModel.myCard);
			GameModel.ins.roundModel=roundModel;
			this.roundArr.push(roundModel);
			console.log(roundModel.cardStr);
		}
		public setJieSuanAll(msg:T2C_JieSuanAll):void
		{
			this.isAllFinish=true;
			this.jieSuanAll = [];
			this.hasPlayedJu = 0;
			for(let item in msg.sc){
				let jiesuanItem:JieSuanAllItem = new JieSuanAllItem();
				jiesuanItem.uid = item;
				jiesuanItem.scoreArr = msg.sc[item];
				this.hasPlayedJu = jiesuanItem.scoreArr.length;
				for(let i:number=0;i<jiesuanItem.scoreArr.length;i++){
					jiesuanItem.resultScore+=jiesuanItem.scoreArr[i];
				}
				this.jieSuanAll.push(jiesuanItem);
			}
			this.jieSuanAll.sort((a,b)=>{return b.resultScore-a.resultScore})
		}
		public checkIsOffLine(uid:string):boolean
		{
			if(this.of==null){
				return false;
			}else{
				if(this.of.indexOf(uid)<0){
					return false;
				}else{
					return true;
				}
			}
		}
		public getIsAccept($uid:string):number{
			for(let uid in this.ju){
				if($uid==uid){
					if(this.ju['uid']==1){
						return 1;
					}else if(this.ju['uid']==0){
						return 0;
					}
				}
			}
			return -1;
		}
		public getTidByUid(uid:string):number
		{
			for(let i:number=0;i<this.users.length;i++){
				if(this.users[i].uid==uid){
					if(this.fuid==uid){
						return 0;
					}else{
						return this.users[i].tid;
					}
				}
			}
			return 1;
		}	
	}
}