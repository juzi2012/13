module game {
	export class PlayerHead extends UI.Game.UI_PlayerHead{
		public constructor() {
			super();
			this.addClickListener(this.showInfo,this);
		}
		public isInit:boolean=false;
		public user:User;
		public juPlayer:JuPlayer;
		public clickCD:boolean=true;
		public get pokers():PlayerPokers
		{
			return this.m_pokers as PlayerPokers;
		}
		public init():void
		{
			this.isInit=false;
			this.user=null;
			this.clickCD=true;
			this.m_ctrlState.selectedIndex=4;
			this.visible=false;
			this.m_lixian.visible=false;
			this.m_img_special.visible=false;
			this.m_img_fz.visible=false;
			this.m_chat.visible=false;
			this.m_chat.alpha = 0;
			this.m_flower.visible=false;
			this.m_boom1.visible=false;
			this.m_boom2.visible=false;
		}
		public setData($user:User):void
		{
			this.visible = true;
			this.m_ctrlState.selectedIndex=0;
			this.user = $user;
			this.isInit=true;
			(this.m_head as PlayerHeadImg1).setURL($user.avatar); 
			this.m_name.text = this.user.name;
			if(GameModel.ins.roomModel.rinfo.zz){
				this.m_img_fz.url = "ui://jow5n9bqh9yl51";
				if(this.user.uid==GameModel.ins.roomModel.rinfo.zuid){
					this.m_img_fz.visible=true;
				}else{
					this.m_img_fz.visible=false;
				}
			}else{
				this.m_img_fz.url = "ui://jow5n9bqx90y45"
				if(this.user.uid==GameModel.ins.roomModel.fuid){
					this.m_img_fz.visible=true;
				}else{
					this.m_img_fz.visible=false;
				}
			}
			if(this.user.status==1){
				this.onReady();
			}
			this.m_score.text = this.user.sc.toString();
			this.setDiaoXian(GameModel.ins.roomModel.checkIsOffLine(this.user.uid));
		}
		public setDataPlay(user:JuPlayer):void
		{
			this.juPlayer = user;
			this.visible = true;
			this.isInit=true;
			this.m_ctrlState.selectedIndex=0;
			this.m_name.text = user.name;
			this.onReady();
			this.m_score.text = user.sc.toString();
			(this.m_head as PlayerHeadImg1).setURL(user.avatar); 
		}
		public setDiaoXian(value:boolean):void
		{
			this.m_lixian.visible = value;
		}
		public restart():void
		{
			this.m_img_finish.visible=false;
			this.m_img_special.visible=false;
			this.pokers.m_txt_score_result.text="";
			this.m_ctrlState.selectedIndex=0;
			// this.m_score.text="0";
			this.m_chat.visible=false;
			this.m_chat.alpha=0;
		}
		public onReady():void
		{
			this.m_img_finish.visible=false;
			this.m_img_special.visible=false;
			this.m_ctrlState.selectedIndex=1;
			if(this.m_ctrlPos.selectedIndex==2){
				this.m_ctrlPos.selectedIndex=0;
			}
			if(this.m_ctrlPos.selectedIndex==3){
				this.m_ctrlPos.selectedIndex=1;
			}
			if(this.user){
				this.user.status = 1;
			}
		}
		public onFaPai():void
		{
			this.m_img_finish.visible=false;
			this.m_ctrlState.selectedIndex=2;
			this.pokers.init();
		}
		public speek(str:string):void{
			if(str.slice(0,3)=="%%-"&&str.slice(str.length-3,str.length)=="-%%"){
				this.m_chat_txt.text = "";
				this.m_chat_txt_emoji.text = str.slice(3,str.length-3);
				this.m_chatbg1.visible=false;
				this.m_chatbg2.visible=false;
			}else{
				this.m_chat_txt.text = str;
				this.m_chat_txt_emoji.text = "";
				this.m_chatbg1.visible=true;
				this.m_chatbg2.visible=true;
				let index:number=0;
				switch(str){
					case "快点吧，等的我都快疯了！":
					index=1;
					break;
					case "你的牌那么好啊，兄弟！":
					index=2;
					break;
					case "不要吵了，专心玩游戏吧。":
					index=3;
					break;
					case "兄弟，不好意思啊，我先撤了。":
					index=4;
					break;
					case "不要走，决战到天亮。":
					index=5;
					break;
					case "唉，又被打枪了。":
					index=6;
					break;
				}
				App.SoundUtils.playSound("sg_Man_Chat_"+(index).toString()+"_mp3",0,1);
			}
			this.m_chat.visible=true;
			TweenMax.to(this.m_chat,0.5,{alpha:1,onComplete:this.onHide,onCompleteParams:[this.m_chat]});
		}
		public flower(str:string):void
		{
			if(str == "flower"){
				this.m_flower.visible=true;
				this.m_t0.play();
			}else if(str == "boom"){
				this.m_boom1.visible=true;
				this.m_boom2.visible=true;
				this.m_t1.play();
			}
		}
		private onHide(chat:fairygui.GGroup):void
		{
			TweenMax.delayedCall(2,()=>{
				chat.alpha=0;
				chat.visible=false;
			});
		}
		public onBaiPaiEnd():void
		{
			App.SoundUtils.playSound("showCard_mp3",0,1);
			this.m_ctrlState.selectedIndex=3;
			this.pokers.m_c1.selectedIndex=1;
			this.pokers.m_qiangyan.visible=false;
			this.pokers.m_porka.visible=false;
			this.m_img_finish.visible=true;
		}
		//pos 为上敦 中墩 下墩
		public showResult(pos:number,result:ResultCard,istesu:boolean=false):void
		{
			this.m_img_finish.visible=false;
			if(this.m_ctrlPos.selectedIndex==0){
				this.m_ctrlPos.selectedIndex=2;
			}
			if(this.m_ctrlPos.selectedIndex==1){
				this.m_ctrlPos.selectedIndex=3;
			}
			this.pokers.showResult(pos,result,istesu);
		}
		public showSpecialResult(result:ResultCard):void
		{
			this.m_img_finish.visible=false;
			this.pokers.showSpecialResult(result);
		}
		public showSpecialPlay(result:JuPlayer):void
		{
			this.m_img_finish.visible=false;
			this.pokers.showSpecialPlay(result);
		}
		//pos 为上敦 中墩 下墩
		public showResultPlay(pos:number,result:JuPlayer):void
		{
			this.m_img_finish.visible=false;
			this.pokers.showResultPlay(pos,result);
			
		}
		public showSpecial():void
		{
			this.m_img_finish.visible=false;
			this.m_img_special.visible=true;
		}
		public showQiangYan():void
		{
			this.pokers.showQiangYan();
		}
		public showInfo():void
		{
			if(this.clickCD==true){
				this.clickCD=false;
				TweenMax.delayedCall(1,this.resetCD,[this]);
				ModuleMgr.ins.showModule(ModuleEnum.USERINFO,this.user);
			}
		}
		private resetCD(main:PlayerHead):void
		{
			main.clickCD=true;
		}
		public updateScore():void
		{
			this.m_score.text = this.user.sc.toString();
		}
		public updateScorePlay(result:JuPlayer):void
		{
			this.m_score.text = result.sc.toString();
		}
		public doDispose():void
		{
			TweenMax.killAll();
		}
	}
}