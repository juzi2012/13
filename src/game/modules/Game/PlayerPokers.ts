module game {
	export class PlayerPokers extends UI.Game.UI_PlayerPokers{
		public constructor() {
			super()
		}
		
		public init(){
			this.m_qiangyan.visible=false;
			this.m_c1.selectedIndex=0;
			this.m_porka.visible=false;
			this.m_imt_teshu.visible=false;
			this.m_txt_scoretop.visible=false;
			this.m_txt_score_mid.visible=false;
			this.m_txt_score_down.visible=false;
			for(let i:number =0;i<13;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.x = -26;
				poker.m_ctrlstate.selectedIndex=0;
				egret.Tween.get(poker,{loop:false}).to({x:-26+(i*20)},300);
			}
		}
		public showResult(pos:number,result:ResultCard):void
		{
			let bipai:ResultBP = GameModel.ins.roundModel.getResultBPByUid(result.uid);
			if(GameModel.ins.roomModel.rinfo.zz==1){
				bipai = GameModel.ins.roundModel.result.bipai[0];
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

				this.m_porka.y=-73;
				this.m_porka1.visible=false;
				this.m_porka5.visible=false;
				for(let i:number=2;i<5;i++){
					(this.m_porka2 as Pork).showResult(result.cards[0]);
					(this.m_porka3 as Pork).showResult(result.cards[1]);
					(this.m_porka4 as Pork).showResult(result.cards[2]);
				}
				this.findPaiXing(result.ty1);
				this.m_txt_scoretop.visible=true;
				if(bipai.scoretop>=0){
					this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
				}
				if(GameModel.ins.roomModel.rinfo.zz==0){
					this.m_txt_scoretop.text = bipai.scoretopstr.toString();
				}else{
					if(GameModel.ins.roomModel.rinfo.zuid!=result.uid){
						if(bipai.getWinById(result.uid).w1==result.uid){
							this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
							this.m_txt_scoretop.text = "赢";
						}else if(bipai.getWinById(result.uid).w1==""){
							this.m_txt_scoretop.text = "";
						}else{
							this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
							this.m_txt_scoretop.text = "输";
						}
					}else{
						this.m_txt_scoretop.text = "";
					}
				}
			}else if(pos==1){
				this.m_porka1.visible=true;
				this.m_porka5.visible=true;
				start=3;
				end=8;

				this.m_porka.y=-22;
				(this.m_porka1 as Pork).showResult(result.cards[3]);
				(this.m_porka2 as Pork).showResult(result.cards[4]);
				(this.m_porka3 as Pork).showResult(result.cards[5]);
				(this.m_porka4 as Pork).showResult(result.cards[6]);
				(this.m_porka5 as Pork).showResult(result.cards[7]);
				this.findPaiXing(result.ty2);
				this.m_txt_score_mid.visible=true;
				if(bipai.scoremid>=0){
					this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
				}
				if(GameModel.ins.roomModel.rinfo.zz==0){
					this.m_txt_score_mid.text = bipai.scoremidstr.toString();
				}else{
					if(GameModel.ins.roomModel.rinfo.zuid!=result.uid){
						if(bipai.getWinById(result.uid).w2==result.uid){
							this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_mid.text = "赢";
						}else if(bipai.getWinById(result.uid).w2==''){
							this.m_txt_score_mid.text = "";
						}else{
							this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_mid.text = "输";
						}
					}else{
						this.m_txt_score_mid.text="";
					}
				}
				
			}else if(pos==2){
				this.m_porka1.visible=true;
				this.m_porka5.visible=true;
				start=8;
				end=13;

				this.m_porka.y=31;
				(this.m_porka1 as Pork).showResult(result.cards[8]);
				(this.m_porka2 as Pork).showResult(result.cards[9]);
				(this.m_porka3 as Pork).showResult(result.cards[10]);
				(this.m_porka4 as Pork).showResult(result.cards[11]);
				(this.m_porka5 as Pork).showResult(result.cards[12]);
				this.findPaiXing(result.ty3);
				this.m_txt_score_down.visible=true;
				if(bipai.scoredown>=0){
					this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
				}else{
					this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
				}
				if(GameModel.ins.roomModel.rinfo.zz==0){
					this.m_txt_score_down.text = bipai.scoredownstr.toString();
					if(GameModel.ins.roomModel.fuid!=result.uid){
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
					}
				}else{
					if(GameModel.ins.roomModel.rinfo.zuid!=result.uid){
						if(bipai.getWinById(result.uid).w3==result.uid){
							this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
							this.m_txt_score_down.text = "赢";
						}else if(bipai.getWinById(result.uid).w3==""){
							this.m_txt_score_down.text = "";
						}else{
							this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
							this.m_txt_score_down.text = "输";
						}
						
					}else{
						this.m_txt_score_down.text = "";
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
				
			}
			this.m_t1.play(this.effectEnd,this);

			for(let i:number=start;i<end;i++){
				let poker = this['m_pork'+i] as Pork;
				poker.showResult(result.cards[i])
			}
		}
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

				this.m_porka.y=-73;
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

				this.m_porka.y=-22;
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

				this.m_porka.y=31;
				(this.m_porka1 as Pork).showResult(result.downCards[0]);
				(this.m_porka2 as Pork).showResult(result.downCards[1]);
				(this.m_porka3 as Pork).showResult(result.downCards[2]);
				(this.m_porka4 as Pork).showResult(result.downCards[3]);
				(this.m_porka5 as Pork).showResult(result.downCards[4]);
				this.findPaiXing(result.downType);
				this.m_txt_score_down.visible=true;
				this.m_txt_score_down.text = "";
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
	}
}