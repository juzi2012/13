module game {
	export class GameMainModule extends Module {
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.MainUI.UI_MainModule.createInstance();
		}
		public get mContent():UI.MainUI.UI_MainModule{
			return this.content as UI.MainUI.UI_MainModule;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.mContent.m_btn_kefu.addClickListener(this.onKefuClick,this);
			this.mContent.m_btn_notice.addClickListener(this.onNoticeClick,this);
			this.mContent.m_btn_mail.addClickListener(this.onMailClick,this);
			this.mContent.m_btn_shuoming.addClickListener(this.onShuoMingClick,this);
			this.mContent.m_btn_setting.addClickListener(this.onSettingClick,this);
			this.mContent.m_btn_zhanji.addClickListener(this.onZhanjiClick,this);
			this.mContent.m_btn_rank.addClickListener(this.onRankClick,this);
			this.mContent.m_btn_activity.addClickListener(this.onActivityClick,this);
			this.mContent.m_sp_add.addClickListener(this.onJoinRoom,this);
			this.mContent.m_sp_create.addClickListener(this.onCreateRoom,this);
			// this.mContent.m_sp_create.addEventListener(touc.)
			this.mContent.m_sp_quan.addClickListener(this.onQuan,this);
			this.mContent.m_btn_buyCard.addClickListener(this.onBuyCard,this);
			this.mContent.m_btn_add.addClickListener(this.onBuyCard,this);
			App.MessageCenter.addListener(MsgEnum.UPDATE_MYINFO,this.updatePlayerInfo,this);
			App.MessageCenter.addListener(MsgEnum.STOP_PLAY_MUSIC,this.playMusic,this);
			this.updatePlayerInfo();

			this.preShowCpl();
			App.SoundUtils.playSound("music_bg_home_mp3",1,0);
			
		}
		
		public show(data?:any):void
		{
			this.onShare();
			super.show(data);
			if(data!=null && data.fromPlay==true){
				ModuleMgr.ins.showModule(ModuleEnum.ZHANJI);
			}else{
				if(GameModel.ins.showActivity==true){
					ModuleMgr.ins.showModule(ModuleEnum.ACTIVITY);
					GameModel.ins.showActivity=false;
				}
			}
			
		}
		private updatePlayerInfo():void
		{
			this.mContent.m_txt_name.text = GameModel.ins.uname;
			this.mContent.m_txt_id.text = "ID:"+GameModel.ins.uid;
			this.mContent.m_txt_card.text = GameModel.ins.card.toString();
			(this.mContent.m_head as PlayerHeadImg).setURL(GameModel.ins.avatar); 
		}
		private onMailClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.MAIL);
		}
		private onShuoMingClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.SHUOMING);
		}
		private onNoticeClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.NOTICE);
		}
		private onSettingClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.SETTING);
		}
		private onKefuClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.KEFU);
		}
		private onZhanjiClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.ZHANJI);
		}
		private onRankClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.RANK);
		}
		private onActivityClick():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.ACTIVITY);
		}
		private onJoinRoom():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.JOINROOM);
		}
		private onCreateRoom():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.CREATE_ROOM);
		}
		private onBuyCard():void
		{
			this.checkShowBind();
		}
		//检查是否需要弹出兑换框
		private checkShowBind():void
		{
			let url:string = GameModel.ins.CheckBindServer;//"http://alpha-pay.fpwan.net/Game/Shisanzhang/BindWindow";
			HttpAPI.HttpGET(url,{'userId':GameModel.ins.uid},this.onCallBack,this.onError,this);
		}
		private onCallBack(evt:egret.Event):void{
			console.log(evt.target.response);
			let callBackJson:any = JSON.parse(evt.target.response);
			if(callBackJson.data==true){
				ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
			}else{
				this.onShowBuyCard();
			}
		}
		private onShowBuyCard():void
		{
			let url:string = GameModel.ins.BuySerever+"&userId="+GameModel.ins.uid+"&appId=6000015&payId=103&taocanId=3&serverId=1&from=1&redirectUrl="+GameModel.ins.BuySereverRedirect;
			// window.open(url,"_blank");
			top.location.href=url;
		}
		private onError(evt:egret.Event):void{
			
		}
		private onQuan():void
		{
			AlertUtil.floatMsg("暂未开放，敬请期待");
		}
		private playMusic(data:boolean):void
		{
			if(data==true){
				App.SoundUtils.playSound("music_bg_home_mp3",1,0);
			}else{
				App.SoundUtils.stopSoundByID("music_bg_home_mp3");
			}
		}
		private onShare():void
		{
			let shareData:Object = new Object();
			shareData["shareUserId"]=GameModel.ins.uid;
			shareData["shareUserName"]=GameModel.ins.uname;
			shareData["avatar"]=GameModel.ins.avatar;
			WXUtil.ins.share(shareData);
		}
		public preClose(data?: any):void {
			App.SoundUtils.stopSoundByID("music_bg_home_mp3");
			App.MessageCenter.removeListener(MsgEnum.STOP_PLAY_MUSIC,this.playMusic,this);
			this.preCloseCpl();
		}
		
	}
}