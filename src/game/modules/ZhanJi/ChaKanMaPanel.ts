module game {
	export class ChaKanMaPanel extends PopModuleView{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.ZhanJi.UI_BoFangMa.createInstance();
		}
		public get mContent():UI.ZhanJi.UI_BoFangMa{
			return this.content as UI.ZhanJi.UI_BoFangMa;
		}
		private code:string="";
		private round:Round;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.mContent.m_btn_cancel.addClickListener(this.cancelHandle,this);
			this.mContent.m_btn_ok.addClickListener(this.okHandle,this);
			this.mContent.m_txt_input.addEventListener(egret.TextEvent.CHANGE,this.inputHandle,this);
			this.mContent.m_txt_input.alpha=0;

			this.preShowCpl();
		}
		private inputHandle(evt:egret.TextEvent):void
		{
			this.code = this.mContent.m_txt_input.text;//this.code+(evt.currentTarget as egret.TextField).text
			this.code = this.code.substr(0,6);
			// this.mContent.m_txt_input.text="";
			let strArr:Array<string> = this.code.split("");
			for(let i:number=0;i<6;i++){
				if(strArr[i]!=null&&strArr[i]!=""){
					this.mContent['m_txt_input'+(i+1)].text = strArr[i];
				}else{
					this.mContent['m_txt_input'+(i+1)].text="";
				}
			}
		}
		private cancelHandle():void
		{
			ModuleMgr.ins.closeModule(ModuleEnum.BOFANGMA);
		}
		private okHandle():void
		{
			if(this.code.length<6){
				AlertUtil.floatMsg("回放码不正确，请重新输入.");
			}else{
				HttpAPI.HttpGET("http://"+game.GameModel.ins.SocketServer+":8883/huifang",{'uid':GameModel.ins.uid,'id':this.code},this.onCallBack,this.onError,this);
			}
		}
		private onCallBack(evt:egret.Event):void
		{
			let callBackJson:any = JSON.parse(evt.target.response);
			if(callBackJson.data==null){
				AlertUtil.floatMsg(callBackJson.err);
			}else{
				let data:any = JSON.parse(callBackJson.data['msg']);
				this.round = new Round();
				this.round.init(data);
				ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN, ModuleEnum.REPLAY,this.round);
			}
		}
		private onError(evt:egret.Event):void
		{
			
		}
	}
}