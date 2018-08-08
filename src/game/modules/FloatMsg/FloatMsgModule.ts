module game {
	export class FloatMsgModule extends Module{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = new fairygui.GComponent();
			this.content.width = LayerCenter.stageWidth;
			this.content.height = LayerCenter.stageHeight;
		}
		public get mContent():fairygui.GComponent{
			return this.content as fairygui.GComponent;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.preShowCpl();
			this.mContent.touchable=false;
			App.MessageCenter.addListener(MsgEnum.FLOAT_MSG,this.floatMsg,this);

		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private floatMsg(msg:string,id:number):void
		{
			if(id == MsgType.LeaveRoom){
				AlertUtil.alert("您确定解散房间吗？",core.Handler.create(this,this.doQuit))
			}else{
				let msgUI:UI.Base.UI_FloatMsg = UI.Base.UI_FloatMsg.createInstance();
				msgUI.m_txt.text = msg;
				msgUI.x = LayerCenter.stageWidth/2;
				msgUI.y = LayerCenter.stageHeight/2;
				this.mContent.addChild(msgUI);
				msgUI.m_t0.play(this.playComplete,this,msgUI);
				// egret.Tween.get(msgUI).to({y:LayerCenter.stageHeight/2-150},800).call(()=>{App.DisplayUtils.removeFromParent(msgUI.displayObject); msgUI.dispose();msgUI=null},this);
			}
		}
		private playComplete(msgUI:UI.Base.UI_FloatMsg):void
		{
			App.DisplayUtils.removeFromParent(msgUI.displayObject); 
			msgUI.dispose();
			msgUI=null;
		}
		private doQuit():void
		{
			ServerEngine.askForDismiss();
		}
	}
}