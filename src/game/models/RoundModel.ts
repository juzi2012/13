module game {
	enum DeckTypeEnum {
		Error = 255,//未识别
		None = 0,//过牌为空
		Single,//高牌-散牌-乌龙1
		Double,//对子2
		TwoDouble,//两对3
		Three,//三张4
		ShunZi,//顺子5
		TongHua,//同花6
		Gourd,//葫芦7
		Bomb,//炸弹8
		TongHuaShun,//同花顺9
		FiveBomb//五炸10
	}
	export class Result{
		public constructor(){

		}
		public cards:Array<ResultCard>;
		public bipai:Array<ResultBP>;
	}
	export class ResultCard{
		public constructor(){

		}
		public cards:Array<PorkVO>;
		public uid:string;
		public sc:number;//最后得分
		public ty:number;//特殊牌型ai
		public ty1:number; //前墩牌型
		public ty2:number;//中墩牌型
		public ty3:number;//下墩牌型
		public tid:number;//所在的位置
	}
	export class DaQiang{
		public constructor(){
			this.tarIds = [];
		}
		public uid:string;
		public tarIds:Array<string>;
	}
	export class Win{
		public constructor(){
		}
		public uid:string;
		public w1:string;
		public w2:string;
		public w3:string;
	}
	export class ResultBP{
		public constructor(){

		}
		public dq:DaQiang;//打枪
		public px:number;//特俗牌型
		public ql:number;//全垒打 1是
		public uid:string;
		public rs:Array<any>;
		public scoretop:number;//上分数
		public scoremid:number;//中分数
		public scoredown:number;//下分数
		public scoretopstr:string;//上分数
		public scoremidstr:string;//中分数
		public scoredownstr:string;//下分数
		public wins:Array<Win>;
		public initRS():void{
			this.scoretop = 0;
			this.scoremid = 0;
			this.scoredown = 0;
			this.dq = new DaQiang();
			this.dq.uid= this.uid;
			this.wins = [];
			for(let i:number=0;i<this.rs.length;i++){
				let bp:any = this.rs[i];
				this.scoretop+=bp['sc1'];
				this.scoremid+=bp['sc2'];
				this.scoredown+=bp['sc3'];
				if(bp['dq']==1){
					if(this.dq.tarIds.indexOf(bp['uid'])==-1){
						this.dq.tarIds.push(bp['uid'])
					}
				}
				let win:Win = new Win();
				win.uid = bp['uid'];
				
				win.w1 = bp['w1'];
				win.w2 = bp['w2'];
				win.w3 = bp['w3'];
				this.wins.push(win);
			}
			this.scoretop*=-1;
			this.scoremid*=-1;
			this.scoredown*=-1;
			this.scoretopstr = this.scoretop>0?("+"+this.scoretop):this.scoretop.toString();
			this.scoremidstr = this.scoremid>0?("+"+this.scoremid):this.scoremid.toString();
			this.scoredownstr = this.scoredown>0?("+"+this.scoredown):this.scoredown.toString();
		}
		public getWinById(uid:string):Win
		{
			for(let i:number=0;i<this.wins.length;i++){
				if(this.wins[i].uid==uid){
					return this.wins[i];
				}
			}
			return null;
		}
	}
	export class RoundModel {
		public constructor() {

		}
		private _myCard:Array<PorkVO>;
		public cardStr:string="";
		public serverCard:Array<number>;
		
		public duizi:Array<any>;
		public santiao:Array<any>;
		public liadui:Array<any>;
		public shunzi:Array<any>;
		public tonghua:Array<any>;
		public hulu:Array<any>;
		public tiezhi:Array<any>;
		public tonghuashun:Array<any>;
		public wutong:Array<any>;

		public result:Result;

		private typeClickCount1:number=0;
		private typeClickCount2:number=0;
		private typeClickCount3:number=0;
		private typeClickCount4:number=0;
		private typeClickCount5:number=0;
		private typeClickCount6:number=0;
		private typeClickCount7:number=0;
		private typeClickCount8:number=0;
		private typeClickCount9:number=0;

		private _listCard:Array<PorkVO>;

		public get listCard(): Array<PorkVO>{
			return this._listCard;
		}
		public set listCard(value){
			this._listCard = value;
			this.setAllType();
			this.typeClickCount1=0;
			this.typeClickCount2=0;
			this.typeClickCount3=0;
			this.typeClickCount4=0;
			this.typeClickCount5=0;
			this.typeClickCount6=0;
			this.typeClickCount7=0;
			this.typeClickCount8=0;
			this.typeClickCount9=0;
			PorkUtil.SortCard(this._listCard);
		}
		public get myCard():Array<PorkVO>{
			return this._myCard;
		}
		public set myCard(value){
			this._myCard = value;
			this.listCard = value;
			this.cardStr = ""
			for(let i:number=0;i<this._myCard.length;i++){
				this.cardStr+=this._myCard[i].point+",";
			}
		}
		public jieSuanSingle(msg:T2C_JieSuanSingle):void
		{
			this.result = new Result();
			this.result.cards =new Array<ResultCard>();
			this.result.bipai =new Array<ResultBP>();
			for(let item of msg.sc){
				let resultCard:ResultCard = new ResultCard();
				resultCard.cards = new Array<PorkVO>();
				for(let i:number=0;i<item['cds'].length;i++){
					let vo:PorkVO = new PorkVO(PorkUtil.ChangeServerCardToClient(item['cds'][i]))
					resultCard.cards.push(vo);
				}

				resultCard.uid = item["uid"];
				resultCard.sc = item["sc"];
				resultCard.ty = item["ty"];
				resultCard.ty1 = item["ty1"];
				resultCard.ty2 = item["ty2"];
				resultCard.ty3 = item["ty3"];
				resultCard.tid = GameModel.ins.roomModel.getTidByUid(resultCard.uid);
				this.result.cards.push(resultCard);
				this.setUserScore(resultCard.uid,resultCard.sc);
			}
			this.result.cards.sort((a,b)=>{
				return a.tid-b.tid;
			})
			for(let bpItem of msg.bp){
				let bp:ResultBP = new ResultBP();
				bp.px = bpItem['px'];
				bp.ql = bpItem['ql'];
				bp.rs = bpItem['rs'];
				bp.uid = bpItem['uid'];
				bp.initRS();
				this.result.bipai.push(bp);
			}
			App.MessageCenter.dispatch(MsgEnum.GAME_SINGLE_RESULT);
		}
		private setUserScore(uid:string,score:number):void
		{
			GameModel.ins.roomModel.getUserById(uid).sc+=score;
		}
		//获取用户是不是有特殊牌型
		// public getPaiXing(uid:number):number
		// {

		// }
		public setAllType():void
		{
			this.duizi = PorkUtil.findDuiZi(this._listCard);
			this.santiao= PorkUtil.findSanTiao(this._listCard);
			this.liadui = PorkUtil.findLiaDui(this._listCard);
			this.shunzi = PorkUtil.findShunZi(this._listCard);
			this.tonghua = PorkUtil.findTongHua(this._listCard);
			this.hulu = PorkUtil.findHuLu(this._listCard);
			this.tiezhi= PorkUtil.findTieZhi(this._listCard);
			this.tonghuashun= PorkUtil.findTongHuaShun(this._listCard);
			this.wutong= PorkUtil.findWuTong(this._listCard);
		}
		public getTypeByClick(chooseType:string):Array<any>
		{
			let ary = [];
			switch(chooseType){
				case "btntype1":
					if(this.typeClickCount1==this.duizi.length){
						ary=[];
						this.typeClickCount1=0;
					}else{
						ary = this.duizi[this.typeClickCount1%this.duizi.length].concat();
						this.typeClickCount1+=1;
					}
				break;
				case "btntype2":
					
					if(this.typeClickCount2==this.liadui.length){
						ary=[];
						this.typeClickCount2=0;
					}else{
						ary = this.liadui[this.typeClickCount2%this.liadui.length].concat();
						this.typeClickCount2+=1;
						ary.push(this.getResetSingle(ary));
					}
				break;
				case "btntype3":
					
					if(this.typeClickCount3==this.santiao.length){
						ary=[];
						this.typeClickCount3=0;
					}else{
						ary = this.santiao[this.typeClickCount3%this.santiao.length].concat();
						this.typeClickCount3++;
					}
				break;
				case "btntype4":
					
					if(this.typeClickCount4==this.shunzi.length){
						ary=[];
						this.typeClickCount4=0;
					}else{
						ary = this.shunzi[this.typeClickCount4%this.shunzi.length].concat();
						this.typeClickCount4++;
					}
				break;
				case "btntype5":
					
					if(this.typeClickCount5==this.tonghua.length){
						ary=[];
						this.typeClickCount5=0;
					}else{
						ary = this.tonghua[this.typeClickCount5%this.tonghua.length].concat();
						this.typeClickCount5++;
					}
				break;
				case "btntype6":
					
					if(this.typeClickCount6==this.hulu.length){
						ary=[];
						this.typeClickCount6=0;
					}else{
						ary = this.hulu[this.typeClickCount6%this.hulu.length].concat();
						this.typeClickCount6++;
					}
				break;
				case "btntype7":
					
					if(this.typeClickCount7==this.tiezhi.length){
						ary=[];
						this.typeClickCount7=0;
					}else{
						ary = this.tiezhi[this.typeClickCount7%this.tiezhi.length].concat();
						this.typeClickCount7++;
						ary.push(this.getResetSingle(ary));
					}
				break;
				case "btntype8":
					
					if(this.typeClickCount8==this.tonghuashun.length){
						ary=[];
						this.typeClickCount8=0;
					}else{
						ary = this.tonghuashun[this.typeClickCount8%this.tonghuashun.length].concat();
						this.typeClickCount8++;
					}
				break;
				case "btntype9":
					
					if(this.typeClickCount9==this.wutong.length){
						ary=[];
						this.typeClickCount9=0;
					}else{
						ary = this.wutong[this.typeClickCount9%this.wutong.length].concat();
						this.typeClickCount9++;
					}
				break;
			}
			return ary;
		}
		//当拿到的是两对或者是铁支等四张牌型的时候，获取剩下的一个单张牌，补齐5张
		private getResetSingle(ary:Array<PorkVO>):PorkVO{
			let restAry:Array<PorkVO>=[];
			for(let i:number=0;i<this._listCard.length;i++){
				let p:PorkVO = this._listCard[i];
				if(ary.indexOf(p)<0){
					restAry.push(p);
				}
			}
			for(let i:number=restAry.length-1;i>0;i--){
				if(this.checkHasSameNum(restAry[i].point,restAry,1)==false&&this.checkHasSameNum(restAry[i].point,ary,0)==false){
					return restAry[i];
				}
			}
			return restAry[restAry.length-1];
		}
		public getResultBPByUid(uid:string):ResultBP
		{
			for(let i:number=0;i<this.result.bipai.length;i++){
				if(this.result.bipai[i].uid==uid){
					return this.result.bipai[i];
				}
			}
			return null
		}
		//数组里面是否有重复的num的
		private checkHasSameNum(num:number,arr:Array<PorkVO>,min:number):boolean
		{
			let len:number=0
			for(let i:number=0;i<arr.length;i++){
				if(arr[i].point == num){
					len+=1;
				}
			}
			if(len>min){
				return true;
			}else{
				return false;
			}
		}
	}

}