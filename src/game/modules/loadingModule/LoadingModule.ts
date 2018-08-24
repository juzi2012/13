module game {
	export class LoadingModule extends Module implements RES.PromiseTaskReporter {
		public constructor() {
			super();
		}
		// private loadingBar:UI.Loading.UI_LoadingModule;
		public initContent():void
		{
			this.content = UI.Loading.UI_LoadingModule.createInstance();
		}
		public get mContent():UI.Loading.UI_LoadingModule{
			return this.content as UI.Loading.UI_LoadingModule;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.preShowCpl();
		}
		public show(data?:any):void
		{
			// this.loadingBar = UI.Loading.UI_LoadingModule.createInstance() as UI.Loading.UI_LoadingModule;
			// this.loadingBar.x = App.StageUtils.getWidth()/2-this.loadingBar.width/2;
			// this.loadingBar.y = App.StageUtils.getHeight()-200;
			// this.mContent.addChild(this.loadingBar);
			this.mContent.m_bar.value=0;
			this.mContent.m_bar.visible=false;

			this.mContent.m_txt_name.requestFocus();
			App.Socket.connect(core.Handler.create(this,this.onServerConnected));
			// this.onServerConnected();
			super.show(data);
		}
		private uid:string;
		private onServerConnected():void
		{
			// RES.getResByUrl("https://cdn-ns-studio.gtarcade.com/product-160/cdn1/st/assets/common/modules/foundations/mainToolbar/icons/icons_small/96040.png", (data) =>
			// {
			// 	var bmp = new egret.Bitmap(data);
			// 	this.mContent.displayListContainer.addChild(bmp);

			// }, this, RES.ResourceItem.TYPE_IMAGE);
			this.mContent.m_btn_start.addClickListener(this.doStart,this);
			// this.mContent.m_txt_name.text="t1";
			// this.doStart()
			//  let imageLoader: egret.ImageLoader = new egret.ImageLoader();
			// imageLoader.crossOrigin = "anonymous";
			// imageLoader.addEventListener(egret.Event.COMPLETE, function (event: egret.Event) {
			// 	let  imageLoader = <egret.ImageLoader>event.currentTarget;
			// }, this);
			// imageLoader.load('http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg');
			// egret.ImageLoader.crossOrigin = "anonymous"; 
			// RES.getResByUrl('http://bbs.egret.com/static/image/smiley/qita/17.jpg',this.loaded,this,RES.ResourceItem.TYPE_IMAGE)
		}
		private loaded():void
		{
			console.log(111);
		}
		private doStart():void
		{
			if(this.mContent.m_txt_name.text!=""){
				this.mContent.m_bar.visible=true;
				this.uid = this.mContent.m_txt_name.text;
				App.Socket.addCmdListener(MsgType.Login,core.Handler.create(this,this.loginCallBack));
				let loginMsg:C2T_Login = new C2T_Login();
				loginMsg.Msg.name = "Jack"+this.uid;//App.MathUtils.random(1,1000);
				loginMsg.Msg.wid = this.uid;//"12345"+App.MathUtils.random(1,1000);
				loginMsg.Msg.mid = "123456"+App.MathUtils.random(1,1000);
				loginMsg.Msg.head = "http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
				loginMsg.Msg.chid = "";
				App.Socket.send(loginMsg);
			}
			
		}

		private loginCallBack(msg:T2C_Login_Message):void
		{
			App.Socket.removeCmdListener(MsgType.Login,this.loginCallBack);
			ServerEngine.addSocketListener();
			RES.loadGroup("game", 0, this);
			//监听是不是退出的会重新回到游戏
			App.Socket.addCmdListener(MsgType.ReConnect,core.Handler.create(this,this.reConnectCallBack));
			ServerEngine.sendBeart();
		}

		private reConnectCallBack(msg:T2C_ReConnect):void
		{
			GameModel.ins.setReConnectInfo(msg);
		}
		public onProgress(current: number, total: number): void {
			this.mContent.m_bar.max=total;
			this.mContent.m_bar.value=current;
			if(current==total){
				this.startGame();
			}
		}
		private startGame():void
		{
			SettingModel.ins.init();
			fairygui.UIPackage.addPackage("Base");
			fairygui.UIPackage.addPackage("MainUI");
			fairygui.UIPackage.addPackage("Mail");
			fairygui.UIPackage.addPackage("Kefu");
			fairygui.UIPackage.addPackage("Notice");
			fairygui.UIPackage.addPackage("ZhanJi");
			fairygui.UIPackage.addPackage("Activity");
			fairygui.UIPackage.addPackage("AddRoom");
			fairygui.UIPackage.addPackage("CreateRoom");
			fairygui.UIPackage.addPackage("BuyCard");
			fairygui.UIPackage.addPackage("Setting");
			fairygui.UIPackage.addPackage("ShuoMing");
			fairygui.UIPackage.addPackage("Game");
			fairygui.UIPackage.addPackage("Bg1");
			fairygui.UIPackage.addPackage("Bg2");
			fairygui.UIPackage.addPackage("Bg3");
			fairygui.UIPackage.addPackage("Bg4");
			fairygui.UIPackage.addPackage("MainBg");
			fairygui.UIPackage.addPackage("PutPorkBg");
			fairygui.UIPackage.addPackage("GameHelper");
			fairygui.UIPackage.addPackage("Rank");
			fairygui.UIPackage.addPackage("Result");
			fairygui.UIPackage.addPackage("TestPork");
			ModuleMgr.ins.closeModule(ModuleEnum.LOADING);
			ModuleMgr.ins.showModule(ModuleEnum.FLOAT);

			
			// ModuleMgr.ins.showModule(ModuleEnum.TESTPORK);

			if(GameModel.ins.roomModel!=null&&GameModel.ins.roomModel.isReConnectInRoom){
				ModuleMgr.ins.showModule(ModuleEnum.GAME);
			}else{
				ModuleMgr.ins.showModule(ModuleEnum.GAME_MAIN,[]);
			}
			
			// GameModel.ins.createRoundTest();
			// ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK,[]);
		}
	}
}