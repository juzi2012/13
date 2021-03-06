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
	//特殊牌型要扣分的对象
	export class TeSuPaiTarget{
		public constructor(){

		}
		public uid:string;
		public tc:number;
	}
	export class Win{
		public constructor(){
		}
		public uid:string;
		public w1:string;
		public w2:string;
		public w3:string;
	}
	//这个类是记录了坐庄玩法时其他玩家是上中下墩的分数
	export class ZZOtherScore{
		public constructor(){
		}
		public uid:string;
		public topscore:number;
		public midscore:number;
		public downscore:number;
	}
	//全垒打的目标
	export class QLDTarget{
		public constructor(){
		}
		public uid:string;
		public tarUidArr:Array<string>;
	}
	export class ResultBP{
		public constructor(){

		}
		public dq:Array<DaQiang>;//打枪
		public px:number;//特俗牌型
		public ql:number;//全垒打 1是
		public qlTar:QLDTarget;
		public uid:string;
		public rs:Array<any>;
		public scoretop:number;//上分数
		public scoremid:number;//中分数
		public scoredown:number;//下分数
		public scoretopstr:string;//上分数
		public scoremidstr:string;//中分数
		public scoredownstr:string;//下分数
		public wins:Array<Win>;
		public otherScores:Array<ZZOtherScore>;
		public tesuPaiTarArr:Array<TeSuPaiTarget>;
		public mapaiTarArr:Array<string>;
		public initRS():void{
			this.scoretop = 0;
			this.scoremid = 0;
			this.scoredown = 0;
			this.dq = new Array<DaQiang>();
			this.otherScores = new Array<ZZOtherScore>();
			this.wins = [];
			if(this.ql>0){
				this.qlTar = new QLDTarget();
				this.qlTar.uid = this.uid;
				this.qlTar.tarUidArr = [];
			}
			if(this.px>0){
				this.tesuPaiTarArr = [];
			}
			//标记马牌
			this.mapaiTarArr = [];
			if(GameModel.ins.roomModel.rinfo.zz==0){
				if(this.uid == GameModel.ins.uid){//算分模式下，只要记录我自己对比的牌里面的马牌个数
					for(let i:number=0;i<this.rs.length;i++){
						if(this.rs[i]['mp']>0){
							this.mapaiTarArr.push(this.rs[i]['uid']);
						}
					}
				}
			}else{
				for(let i:number=0;i<this.rs.length;i++){
					if(this.rs[i]['mp']>0){
						this.mapaiTarArr.push(this.rs[i]['uid']);
					}
				}
			}

			for(let i:number=0;i<this.rs.length;i++){
				let bp:any = this.rs[i];
				let dq1:DaQiang = new DaQiang();
				this.dq.push(dq1);
				if(GameModel.ins.roomModel.rinfo.zz==0){
					if(this.uid==GameModel.ins.uid){
						this.scoretop+=bp['sc1'];
						this.scoremid+=bp['sc2'];
						this.scoredown+=bp['sc3'];
					}else{
						if(bp['uid']==GameModel.ins.uid){
							this.scoretop=bp['sc1'];
							this.scoremid=bp['sc2'];
							this.scoredown=bp['sc3'];
						}
					}
				}else{
					//这个是算庄家的总分
					this.scoretop+=bp['sc1'];
					this.scoremid+=bp['sc2'];
					this.scoredown+=bp['sc3'];
					let zzotherscore:ZZOtherScore = new ZZOtherScore();
					zzotherscore.uid = bp['uid'];
					zzotherscore.topscore = bp['sc1'];
					zzotherscore.midscore = bp['sc2'];
					zzotherscore.downscore = bp['sc3'];
					this.otherScores.push(zzotherscore);
				}
				if(this.px>0){
					let tesupaitar:TeSuPaiTarget = new TeSuPaiTarget();
					tesupaitar.uid = bp['uid'];
					tesupaitar.tc = bp['tc'];
					this.tesuPaiTarArr.push(tesupaitar);
				}
				if(bp['dq']==1){
					dq1.uid = this.uid;
					if(dq1.tarIds.indexOf(bp['uid'])==-1){
						dq1.tarIds.push(bp['uid'])
					}
					if(this.qlTar!=null){
						this.qlTar.tarUidArr.push(bp['uid']);
					}
				}
				if(GameModel.ins.roomModel.rinfo.zz==1){
					if(bp['dq']==-1){
						dq1.uid=bp['uid'];
						if(dq1.tarIds.indexOf(this.uid)==-1){
							dq1.tarIds.push(this.uid)
						}
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
		public getTeSuPaiTarByUid(uid:string):TeSuPaiTarget
		{
			for(let i:number=0;i<this.tesuPaiTarArr.length;i++){
				if(this.tesuPaiTarArr[i].uid==uid){
					return this.tesuPaiTarArr[i];
				}
			}
			return null;
		}
		//多人的时候，大枪不是简单的当前总分翻倍，而是要找到跟谁比牌而翻倍的，所以要拿到当前对比的人的分数
		public getDQFanBeiScore(uid:string):any
		{
			for(let i:number=0;i<this.rs.length;i++){
				let bp:any = this.rs[i];
				if(uid==bp['uid']){
					return bp;
				}
			}
			return null;
		}

		//坐庄的时候获取其他人的分数
		public getotherScoreById(uid:string):ZZOtherScore
		{
			for(let i:number=0;i<this.otherScores.length;i++){
				if(this.otherScores[i].uid==uid){
					return this.otherScores[i];
				}
			}
			return null;
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
				let c1:Array<PorkVO> = [];
				let c2:Array<PorkVO> = [];
				let c3:Array<PorkVO> = [];
				for(let i:number=0;i<item['cds'].length;i++){
					let vo:PorkVO = new PorkVO(PorkUtil.ChangeServerCardToClient(item['cds'][i]))
					if(i>=0 && i<3){
						c1.push(vo);
					}
					if(i>=3 && i<8){
						c2.push(vo);
					}
					if(i>=8 && i<13){
						c3.push(vo);
					}
				}
				
				c1 = PorkUtil.SortCard(c1);
				c2 = PorkUtil.SortCard(c2);
				c3 = PorkUtil.SortCard(c3);
				

				resultCard.cards = c1.concat(c2).concat(c3);

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
						let res:Array<PorkVO> = this.getResetSingleThree(ary);
						ary = ary.concat(res);
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
						let res:Array<PorkVO> = this.getResetSingleTwo(ary);
						ary = ary.concat(res);
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
					if(GameModel.ins.roomModel.rinfo.rp==6){//纯一色十三水
						if(this.typeClickCount8==this.tonghuashun.length){
							ary=[];
							this.typeClickCount8=0;
						}else{
							ary = this.tonghuashun[this.typeClickCount8%this.tonghuashun.length].concat();
							this.typeClickCount8++;
						}
					}else{
						if(this.typeClickCount7==this.tiezhi.length){
							ary=[];
							this.typeClickCount7=0;
						}else{
							ary = this.tiezhi[this.typeClickCount7%this.tiezhi.length].concat();
							this.typeClickCount7++;
							ary.push(this.getResetSingle(ary));
						}
					}
					
				break;
				case "btntype8":
					if(GameModel.ins.roomModel.rinfo.rp==6){//纯一色十三水
						if(this.typeClickCount7==this.tiezhi.length){
							ary=[];
							this.typeClickCount7=0;
						}else{
							ary = this.tiezhi[this.typeClickCount7%this.tiezhi.length].concat();
							this.typeClickCount7++;
							ary.push(this.getResetSingle(ary));
						}
					}else{
						if(this.typeClickCount8==this.tonghuashun.length){
							ary=[];
							this.typeClickCount8=0;
						}else{
							ary = this.tonghuashun[this.typeClickCount8%this.tonghuashun.length].concat();
							this.typeClickCount8++;
						}
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
		//拿到只有一对的剩下三张牌
		private getResetSingleThree(ary:Array<PorkVO>):Array<PorkVO>{
			let restAry:Array<PorkVO>=[];
			let resultAry:Array<PorkVO>=[];
			for(let i:number=0;i<this._listCard.length;i++){
				let p:PorkVO = this._listCard[i];
				if(ary.indexOf(p)<0){
					restAry.push(p);
				}
			}
			for(let i:number=restAry.length-1;i>0;i--){
				if(this.checkHasSameNum(restAry[i].point,restAry,1)==false&&this.checkHasSameNum(restAry[i].point,ary,0)==false){
					resultAry.push(restAry[i]);
				}
			}
			if(resultAry.length>2){
				return resultAry.slice(0,3);
			}else{
				return resultAry;
			}
		}
		//拿到只有一对的剩下两张牌
		private getResetSingleTwo(ary:Array<PorkVO>):Array<PorkVO>{
			let restAry:Array<PorkVO>=[];
			let resultAry:Array<PorkVO>=[];
			for(let i:number=0;i<this._listCard.length;i++){
				let p:PorkVO = this._listCard[i];
				if(ary.indexOf(p)<0){
					restAry.push(p);
				}
			}
			for(let i:number=restAry.length-1;i>0;i--){
				if(this.checkHasSameNum(restAry[i].point,restAry,1)==false&&this.checkHasSameNum(restAry[i].point,ary,0)==false){
					resultAry.push(restAry[i]);
				}
			}
			if(resultAry.length>1){
				return resultAry.slice(0,2);
			}else{
				return resultAry;
			}
		}
		public getResultBPByUid(uid:string):ResultBP
		{
			for(let i:number=0;i<this.result.bipai.length;i++){
				if(this.result.bipai[i].uid==uid){
					return this.result.bipai[i];
				}
			}
			return null;
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