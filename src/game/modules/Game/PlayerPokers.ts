module game {
	export class PlayerPokers extends UI.Game.UI_PlayerPokers{
		public constructor() {
			super()
		}
		private offsite:number=45;
		public score_fanbei_top:string;
		public score_fanbei_mid:string;
		public score_fanbei_down:string;
		public scoretop:number;
		public scoremid:number;
		public scoredown:number;
		public zongfen:number;
		public zongfenbase:number;
		public beishu:number=1;
		public mp:boolean=false;
		public result:ResultCard;
		public bipai:ResultBP;
		public init(){
			this.m_qiangyan.visible=false;
			this.m_c1.selectedIndex=0;
			this.m_porka.visible=false;
			this.m_imt_teshu.visible=false;
			this.m_txt_scoretop.visible=false;
			this.m_txt_score_mid.visible=false;
			this.m_txt_score_down.visible=false;
			this.beishu=1;
			this.zongfen=0;
			this.zongfenbase=0;
			this.mp = false;
			for(let i:number =0;i<13;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.x = -26;
				poker.m_ctrlstate.selectedIndex=0;
				egret.Tween.get(poker,{loop:false}).to({x:-26+(i*20)},300);
			}
		}
		public showSpecialResult(result:ResultCard):void
		{
			this.result = result;
			this.bipai = GameModel.ins.roundModel.getResultBPByUid(result.uid);
			for(let i:number=0;i<13;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.showResult(result.cards[i]);
			}
			/*
			if(GameModel.ins.roomModel.rinfo.zz==0){
				if(GameModel.ins.uid!=result.uid){
					if(this.bipai.px>0){
						this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
						this.m_txt_score_result.text="翻倍";
					}else{
						this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
						this.m_txt_score_result.text="不翻倍";
					}
				}else{
					if(result.sc>=0){
						this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
					}else{
						this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
					}
					let f:string="";
					if(result.sc>0){
						f = "+";
					}
					this.m_txt_score_result.text="总得分："+f+result.sc;
				}
			}else{
				if(result.sc>=0){
					this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
				}
				let f:string="";
				if(result.sc>0){
					f = "+";
				}
				this.m_txt_score_result.text=f+result.sc;
			}*/
			if(result.sc>=0){
				this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
			}
			let f:string="";
			if(result.sc>0){
				f = "+";
			}
			this.m_txt_score_result.text=f+result.sc;
		}
		public showSpecialPlay(result:JuPlayer):void
		{
			let resultCards:Array<PorkVO> = result.topCards.concat(result.midCards).concat(result.downCards);
			for(let i:number=0;i<13;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.showResult(resultCards[i]);
			}
			if(result.sc>=0){
				this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
			}
			let f:string="";
			if(result.sc>0){
				f = "+";
			}
			this.m_txt_score_result.text=f+result.sc;
		}
		//更新被特俗牌的玩家的分数
		public updateTeSuScore(tesuPaiTar:TeSuPaiTarget):void
		{
			this.zongfen+=tesuPaiTar.tc;
			this.showResultScore(false,false);
		}
		public istesu:boolean;
		public showResult(pos:number,result:ResultCard,istesu:boolean=false):void
		{
			this.istesu = istesu;
			this.result = result;
			this.bipai = GameModel.ins.roundModel.getResultBPByUid(result.uid);
			if(GameModel.ins.roomModel.rinfo.zz==1){
				this.bipai = GameModel.ins.roundModel.result.bipai[0];
			}
			if(result.ty>0){
				// this.m_imt_teshu.visible=true;
				return;
			}
			this.m_porka.visible=true;
			let start:number=0;
			let end:number=0;
			this.m_txt_score_result.text="";
			
			if(pos==0){
				start=0;
				end=3;

				this.m_porka.y=-73+this.offsite;
				this.m_porka1.visible=false;
				this.m_porka5.visible=false;
				for(let i:number=2;i<5;i++){
					(this.m_porka2 as Pork).showResult(result.cards[0]);
					(this.m_porka3 as Pork).showResult(result.cards[1]);
					(this.m_porka4 as Pork).showResult(result.cards[2]);
				}
				this.findPaiXing(result.ty1);
				this.m_txt_scoretop.visible=true;
				if(this.bipai.scoretop>=0){
					this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
				}
				this.scoretop = this.bipai.scoretop;
				if(GameModel.ins.roomModel.rinfo.zz==0){//算分模式
					if(result.uid==GameModel.ins.uid){//自己的时候，显示比分
						this.m_txt_scoretop.text = istesu?"":this.bipai.scoretopstr.toString();
						this.score_fanbei_top = "@param0";
						
					}else{
						let win:Win = this.bipai.getWinById(GameModel.ins.uid);
						if(win.w1==result.uid){
							this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
							this.m_txt_scoretop.text = istesu?"":"赢"+this.bipai.scoretopstr;
							this.score_fanbei_top = "赢"+"@param0";
						}else if(win.w1==""){
							this.m_txt_scoretop.text = istesu?"":""+this.bipai.scoretopstr;
							this.score_fanbei_top = "@param0";
						}else{
							this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
							this.m_txt_scoretop.text = istesu?"":"输"+this.bipai.scoretopstr;
							this.score_fanbei_top = "输"+"@param0";
						}
					}
				}else{//庄家模式
					if(GameModel.ins.roomModel.rinfo.zuid!=result.uid){
						this.scoretop = this.bipai.getotherScoreById(result.uid).topscore;
						if(this.bipai.getWinById(result.uid).w1==result.uid){
							this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
							this.m_txt_scoretop.text = istesu?"":"赢";
							this.score_fanbei_top = "赢";
						}else if(this.bipai.getWinById(result.uid).w1==""){
							this.m_txt_scoretop.text = "";
							this.score_fanbei_top = "";
						}else{
							this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
							this.m_txt_scoretop.text = istesu?"":"输";
							this.score_fanbei_top = "输";
						}
					}else{
						this.m_txt_scoretop.text = "";
						this.score_fanbei_top = "";
					}
				}
			}else if(pos==1){
				this.m_porka1.visible=true;
				this.m_porka5.visible=true;
				start=3;
				end=8;

				this.m_porka.y=-22+this.offsite;
				(this.m_porka1 as Pork).showResult(result.cards[3]);
				(this.m_porka2 as Pork).showResult(result.cards[4]);
				(this.m_porka3 as Pork).showResult(result.cards[5]);
				(this.m_porka4 as Pork).showResult(result.cards[6]);
				(this.m_porka5 as Pork).showResult(result.cards[7]);
				this.findPaiXing(result.ty2);
				this.m_txt_score_mid.visible=true;
				if(this.bipai.scoremid>=0){
					this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
				}
				this.scoremid = this.bipai.scoremid;
				if(GameModel.ins.roomModel.rinfo.zz==0){
					if(result.uid==GameModel.ins.uid){
						this.m_txt_score_mid.text = istesu?"":this.bipai.scoremidstr.toString();
						this.score_fanbei_mid = "@param0";
					}else{
						let win:Win = this.bipai.getWinById(GameModel.ins.uid);
						if( win.w2==result.uid){
							this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_mid.text = istesu?"":"赢"+this.bipai.scoremidstr;
							this.score_fanbei_mid = "赢"+"@param0";
						}else if(win.w2==''){
							this.m_txt_score_mid.text = istesu?"":""+this.bipai.scoremidstr;
							this.score_fanbei_mid = ""+"@param0";
						}else{
							this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_mid.text = istesu?"":"输"+this.bipai.scoremidstr;
							this.score_fanbei_mid = "输"+"@param0";
						}
					}
				}else{
					if(GameModel.ins.roomModel.rinfo.zuid!=result.uid){
						this.scoremid = this.bipai.getotherScoreById(result.uid).midscore;
						if(this.bipai.getWinById(result.uid).w2==result.uid){
							this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_mid.text = istesu?"":"赢";
							this.score_fanbei_mid = "赢";
						}else if(this.bipai.getWinById(result.uid).w2==''){
							this.m_txt_score_mid.text = "";
							this.score_fanbei_mid = "";
						}else{
							this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_mid.text = istesu?"":"输";
							this.score_fanbei_mid = "输";
						}
					}else{
						this.m_txt_score_mid.text="";
						this.score_fanbei_mid = "";
					}
				}
				
			}else if(pos==2){
				this.m_porka1.visible=true;
				this.m_porka5.visible=true;
				start=8;
				end=13;

				this.m_porka.y=36+this.offsite;
				(this.m_porka1 as Pork).showResult(result.cards[8]);
				(this.m_porka2 as Pork).showResult(result.cards[9]);
				(this.m_porka3 as Pork).showResult(result.cards[10]);
				(this.m_porka4 as Pork).showResult(result.cards[11]);
				(this.m_porka5 as Pork).showResult(result.cards[12]);
				this.findPaiXing(result.ty3);
				this.m_txt_score_down.visible=true;
				if(this.bipai.scoredown>=0){
					this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
				}
				this.scoredown = this.bipai.scoredown;
				if(GameModel.ins.roomModel.rinfo.zz==0){
					if(result.uid==GameModel.ins.uid){
						this.m_txt_score_down.text = istesu?"":this.bipai.scoredownstr.toString();
						this.score_fanbei_down = "@param0";
					}else{
						let win:Win = this.bipai.getWinById(GameModel.ins.uid);
						if(win.w3==result.uid){
							this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_down.text = istesu?"":"赢"+this.bipai.scoredownstr;
							this.score_fanbei_down = "赢"+"@param0";
						}else if(win.w3==""){
							this.m_txt_score_down.text = istesu?"":""+this.bipai.scoredownstr;
							this.score_fanbei_down = ""+"@param0";
						}else{
							this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_down.text = istesu?"":"输"+this.bipai.scoredownstr;
							this.score_fanbei_down = "输"+"@param0";
						}
					}
					/*
					if(GameModel.ins.uid!=result.uid){
						if(bipai.px>0){
							this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_result.text="翻倍";
						}else{
							this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_result.text="不翻倍";
						}
					}else{
						if(result.sc>=0){
							this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
						}else{
							this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
						}
						let f:string="";
						if(result.sc>0){
							f = "+";
						}
						this.m_txt_score_result.text="总得分："+f+result.sc;
					}*/
				}else{
					if(GameModel.ins.roomModel.rinfo.zuid!=result.uid){
						this.scoredown = this.bipai.getotherScoreById(result.uid).downscore;
						if(this.bipai.getWinById(result.uid).w3==result.uid){
							this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_down.text = istesu?"":"赢";
							this.score_fanbei_down = "赢";
						}else if(this.bipai.getWinById(result.uid).w3==""){
							this.m_txt_score_down.text = "";
							this.score_fanbei_down = "";
						}else{
							this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_down.text = istesu?"":"输";
							this.score_fanbei_down = "输";
						}
						
					}else{
						this.m_txt_score_down.text = "";
						this.score_fanbei_down = "";
					}
					/*
					if(result.sc>=0){
						this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
					}else{
						this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
					}
					let f:string="";
					if(result.sc>0){
						f = "+";
					}
					this.m_txt_score_result.text=f+result.sc;
					*/
				}
				this.zongfen = this.scoretop+this.scoremid+this.scoredown;
				this.zongfenbase = this.scoretop+this.scoremid+this.scoredown;

				
				if(GameModel.ins.roomModel.rinfo.zz==1){
					if(this.result.uid!=GameModel.ins.roomModel.rinfo.zuid){//不是庄家
						let otherScore:ZZOtherScore = this.bipai.getotherScoreById(this.result.uid);
						if(otherScore){
							this.zongfenbase=otherScore.topscore+otherScore.midscore+otherScore.downscore;
							this.zongfen=this.zongfenbase;
						}
					}
				}
				this.showResultScore(false,false);
	
			}
			this.m_t1.play(this.effectEnd,this);

			for(let i:number=start;i<end;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.showResult(result.cards[i])
			}
		}
		public UpDateULD(resultBP:ResultBP):void
		{
			if(GameModel.ins.roomModel.rinfo.zz==1){
				if(resultBP.qlTar.uid==this.result.uid){
					for(let i:number=0;i<resultBP.qlTar.tarUidArr.length;i++){
						let bp:any = resultBP.getDQFanBeiScore(resultBP.qlTar.tarUidArr[i]);
						if(bp){
							this.scoretop-=(bp['sc1']*2);
							this.scoremid-=(bp['sc2']*2);
							this.scoredown-=(bp['sc3']*2);
							// this.zongfen+=((bp['sc1']*2+bp['sc2']*2+bp['sc3']*2));
							this.zongfen = this.scoretop+this.scoremid+this.scoredown;
						}
					}
				}else{
					let bp:any = resultBP.getDQFanBeiScore(this.result.uid);
					if(bp){
						this.scoretop+=(bp['sc1']*2);
						this.scoremid+=(bp['sc2']*2);
						this.scoredown+=(bp['sc3']*2);
						// this.zongfen+=((bp['sc1']*2+bp['sc2']*2+bp['sc3']*2));
						this.zongfen = this.scoretop+this.scoremid+this.scoredown;
					}
				}
			}else{
				if(resultBP.qlTar.uid==GameModel.ins.uid){//如果是本人全垒打，就需要把要打的对象的分数一个一个加上
					for(let i:number=0;i<resultBP.qlTar.tarUidArr.length;i++){
						let bp:any = resultBP.getDQFanBeiScore(resultBP.qlTar.tarUidArr[i]);
						if(bp){
							if(resultBP.qlTar.uid==this.result.uid){
								this.scoretop-=(bp['sc1']*2);
								this.scoremid-=(bp['sc2']*2);
								this.scoredown-=(bp['sc3']*2);
							}else if(resultBP.qlTar.tarUidArr[i]==this.result.uid){
								this.scoretop+=(bp['sc1']*2);
								this.scoremid+=(bp['sc2']*2);
								this.scoredown+=(bp['sc3']*2);
							}
							// this.zongfen+=((bp['sc1']*2+bp['sc2']*2+bp['sc3']*2));
							this.zongfen = this.scoretop+this.scoremid+this.scoredown;
						}
					}
				}else{
					let bp:any = resultBP.getDQFanBeiScore(GameModel.ins.uid);
					if(bp){
						if(resultBP.qlTar.uid==this.result.uid){
							this.scoretop-=(bp['sc1']*2);
							this.scoremid-=(bp['sc2']*2);
							this.scoredown-=(bp['sc3']*2);
						}else{
							this.scoretop+=(bp['sc1']*2);
							this.scoremid+=(bp['sc2']*2);
							this.scoredown+=(bp['sc3']*2);
						}
						this.zongfen = this.scoretop+this.scoremid+this.scoredown;
					}
				}
			}
			let tstr:string=(this.scoretop).toString();
			if(this.scoretop>=0){
				tstr="+"+tstr;
				this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
			}
			let mstr:string=(this.scoremid).toString();
			if(this.scoremid>=0){
				mstr="+"+mstr;
				this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
			}
			let dstr:string=(this.scoredown).toString();
			if(this.scoredown>=0){
				dstr="+"+dstr;
				this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
			}
			this.m_txt_scoretop.text = App.StringUtils.strParams(this.score_fanbei_top,[tstr]);
			this.m_txt_score_mid.text = App.StringUtils.strParams(this.score_fanbei_mid,[mstr]);
			this.m_txt_score_down.text = App.StringUtils.strParams(this.score_fanbei_down,[dstr]);
		
			this.zongfen = this.scoretop+this.scoremid+this.scoredown;
			this.showResultScore(false,false);
		}
		public showFanBei(from:string,to:string,isqld:boolean=false):void
		{
			this.beishu+=1;
			if(GameModel.ins.roomModel.rinfo.zz==1){
				if(from==GameModel.ins.roomModel.rinfo.zuid){
					let bp:any = GameModel.ins.roundModel.getResultBPByUid(from).getDQFanBeiScore(to);
					if(bp){
						this.scoretop-=(bp['sc1']);
						this.scoremid-=(bp['sc2']);
						this.scoredown-=(bp['sc3']);
						this.zongfen-=((bp['sc1']+bp['sc2']+bp['sc3']));
					}
				}else{
					let bp:any = GameModel.ins.roundModel.getResultBPByUid(to).getDQFanBeiScore(from);
					if(bp){
						this.scoretop+=(bp['sc1']);
						this.scoremid+=(bp['sc2']);
						this.scoredown+=(bp['sc3']);
						this.zongfen+=((bp['sc1']+bp['sc2']+bp['sc3']));
					}
				}
			}else{
				let bp:any = GameModel.ins.roundModel.getResultBPByUid(from).getDQFanBeiScore(to);
				if(bp){
					this.scoretop-=(bp['sc1']);
					this.scoremid-=(bp['sc2']);
					this.scoredown-=(bp['sc3']);
					this.zongfen-=((bp['sc1']+bp['sc2']+bp['sc3']));
				}
			}
			let tstr:string=(this.scoretop).toString();
			if(this.scoretop>0){
				tstr="+"+tstr;
				this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
			}

			let mstr:string=(this.scoremid).toString();
			if(this.scoremid>0){
				mstr="+"+mstr;
				this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
			}

			let dstr:string=(this.scoredown).toString();
			if(this.scoredown>0){
				dstr="+"+dstr;
				this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
			}
			this.m_txt_scoretop.text = App.StringUtils.strParams(this.score_fanbei_top,[tstr]);
			this.m_txt_score_mid.text = App.StringUtils.strParams(this.score_fanbei_mid,[mstr]);;
			this.m_txt_score_down.text = App.StringUtils.strParams(this.score_fanbei_down,[dstr]);;
			// this.zongfen = this.zongfenbase*this.beishu;
			this.showResultScore(true);
			
		}
		//更新马牌的分数
		public updateMP(isme:boolean=false,scoretop:number=0,scoremid:number=0,scoredown:number=0):void
		{
			this.mp = true;
			if(isme){
				if(GameModel.ins.roomModel.rinfo.zz==0){
					this.scoretop-=scoretop;
					this.scoremid-=scoremid;
					this.scoredown-=scoredown;
					
					this.zongfen-=(scoretop+scoremid+scoredown);
				}else{
					this.zongfen = this.scoretop+this.scoremid+this.scoredown;
					this.scoretop-=scoretop;
					this.scoremid-=scoremid;
					this.scoredown-=scoredown;
					
					this.zongfen-=(scoretop+scoremid+scoredown);
				}
				
			}else{
				if(GameModel.ins.roomModel.rinfo.zz==0){
					this.scoretop*=2;
					this.scoremid*=2;
					this.scoredown*=2;
					this.zongfen*=2;
				}else{
					this.zongfen = this.scoretop+this.scoremid+this.scoredown;
					this.scoretop*=2;
					this.scoremid*=2;
					this.scoredown*=2;
					this.zongfen*=2;
				}
			}

			let tstr:string=(this.scoretop).toString();
			if(this.scoretop>0){
				tstr="+"+tstr;
				this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
			}

			let mstr:string=(this.scoremid).toString();
			if(this.scoremid>0){
				mstr="+"+mstr;
				this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
			}

			let dstr:string=(this.scoredown).toString();
			if(this.scoredown>0){
				dstr="+"+dstr;
				this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
			}else{
				this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
			}
			this.m_txt_scoretop.text = App.StringUtils.strParams(this.score_fanbei_top,[tstr]);
			this.m_txt_score_mid.text = App.StringUtils.strParams(this.score_fanbei_mid,[mstr]);;
			this.m_txt_score_down.text = App.StringUtils.strParams(this.score_fanbei_down,[dstr]);

			this.showResultScore(false);
		}
		/**
		 * 显示最下面的分数或者输赢状态
		 * fanbei 是否翻倍
		 * showfirst 第一次显示的时候，如果后面有翻倍的，传ture，如果后面没有翻倍，传false，显示不翻倍
		 */
		public showResultScore(fanbei:boolean,showfirst:boolean=false):void
		{
			if(GameModel.ins.roomModel.rinfo.zz==0){
				
				if(GameModel.ins.uid!=this.result.uid){
					// if(this.bipai.px>0||this.bipai.dq){
					if(fanbei){
						if(this.zongfen>0){
							this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_result.text=this.istesu?"":"翻倍";
						}else{
							this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_result.text=this.istesu?"":"翻倍";
						}
					}else{
						if(showfirst==true){//&&(this.scoretop+this.scoremid+this.scoredown)>0
							if(this.beishu==1){
								this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
								this.m_txt_score_result.text=this.istesu?"":"不翻倍";
							}
						}
					}
				}else{
					if(this.result.sc>=0){
						this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
					}else{
						this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
					}
					let f:string="";
					if(this.result.sc>0){
						f = "+";
					}
					this.m_txt_score_result.text="总得分："+f+this.zongfen;
				}
			}else{
				
				let f:string="";
				if(showfirst==true){
					this.zongfen = this.result.sc;
				}
				// if(this.result.sc>=0){
				if(this.zongfen>0){
					this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
					f = "+";
				}else{
					this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
				}
				this.m_txt_score_result.text=f+this.zongfen;
				
			}
		}
		/*private fanbei(score:number):string{
			if(score>0){
				return "+"+(score*2).toString();
			}else{
				return (score*2).toString();
			}
		}*/
		public showResultPlay(pos:number,result:JuPlayer):void
		{
			if(result.px>0){
				// this.m_imt_teshu.visible=true;
				return;
			}
			let cards:Array<PorkVO> = result.topCards.concat(result.midCards.concat(result.downCards));
			this.m_porka.visible=true;
			let start:number=0;
			let end:number=0;
			
			if(pos==0){
				start=0;
				end=3;

				this.m_porka.y=-73+this.offsite;
				this.m_porka1.visible=false;
				this.m_porka5.visible=false;
				for(let i:number=2;i<5;i++){
					(this.m_porka2 as Pork).showResult(result.topCards[0]);
					(this.m_porka3 as Pork).showResult(result.topCards[1]);
					(this.m_porka4 as Pork).showResult(result.topCards[2]);
				}
				this.findPaiXing(result.topType);
				this.m_txt_scoretop.visible=true;
				this.m_txt_scoretop.text = "";
			}else if(pos==1){
				this.m_porka1.visible=true;
				this.m_porka5.visible=true;
				start=3;
				end=8;

				this.m_porka.y=-22+this.offsite;
				(this.m_porka1 as Pork).showResult(result.midCards[0]);
				(this.m_porka2 as Pork).showResult(result.midCards[1]);
				(this.m_porka3 as Pork).showResult(result.midCards[2]);
				(this.m_porka4 as Pork).showResult(result.midCards[3]);
				(this.m_porka5 as Pork).showResult(result.midCards[4]);
				this.findPaiXing(result.midType);
				this.m_txt_score_mid.visible=true;
				this.m_txt_score_mid.text = "";
			}else if(pos==2){
				this.m_porka1.visible=true;
				this.m_porka5.visible=true;
				start=8;
				end=13;

				this.m_porka.y=36+this.offsite;
				(this.m_porka1 as Pork).showResult(result.downCards[0]);
				(this.m_porka2 as Pork).showResult(result.downCards[1]);
				(this.m_porka3 as Pork).showResult(result.downCards[2]);
				(this.m_porka4 as Pork).showResult(result.downCards[3]);
				(this.m_porka5 as Pork).showResult(result.downCards[4]);
				this.findPaiXing(result.downType);
				this.m_txt_score_down.visible=true;
				this.m_txt_score_down.text = "";

				if(result.sc>=0){
					this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
				}
				let f:string="";
				if(result.sc>0){
					f = "+";
				}
				this.m_txt_score_result.text="总得分："+f+result.sc;
			}
			this.m_t1.play(this.effectEnd,this);

			for(let i:number=start;i<end;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.showResult(cards[i]);
			}
		}
		private effectEnd():void
		{
			this.m_porka.visible=false;
		}
		public showQiangYan():void
		{
			this.m_qiangyan.visible=true;
			this.m_t0.play(this.daQiangComplete,this);
		}
		private daQiangComplete():void
		{
			this.m_qiangyan.visible=false;
		}
		private findPaiXing(paixing:number):void
		{
			// 乌龙 ui://jow5n9bqfetr4k
			// 一对 ui://jow5n9bqrezh2d
			// 两对ui://jow5n9bqrezh2c
			// 三条ui://jow5n9bqrezh2b
			// 顺子ui://jow5n9bqrezh2a
			// 同花ui://jow5n9bqrezh29
			// 葫芦ui://jow5n9bqrezh28
			// 铁支ui://jow5n9bqrezh27
			// 同花顺 ui://jow5n9bqrezh25
			// 五同 ui://jow5n9bqrezh26
			let imgurl:Array<string> = ['ui://jow5n9bqfetr4k','ui://jow5n9bqrezh2d','ui://jow5n9bqrezh2c','ui://jow5n9bqrezh2b','ui://jow5n9bqrezh2a'
										,'ui://jow5n9bqrezh29','ui://jow5n9bqrezh28','ui://jow5n9bqrezh27','ui://jow5n9bqrezh25','ui://jow5n9bqrezh26']
			this.m_img_type.url = imgurl[paixing-1];
			App.SoundUtils.playSound("sg_common"+(paixing-1).toString()+"_mp3",0,1);
		}
		// public tesuAndHideScore():boolean
		// {

		// }
	}
}