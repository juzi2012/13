module game {
	export class ZhanJiModule extends PopModuleView{
		private curPage:number=1;
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.ZhanJi.UI_ZhanJi.createInstance();
		}
		public get mContent():UI.ZhanJi.UI_ZhanJi{
			return this.content as UI.ZhanJi.UI_ZhanJi;
		}
		private result:Array<any>;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.preShowCpl();
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fap";
			HttpAPI.HttpGET("http://"+game.GameModel.ins.SocketServer+":8883/zhanji",{'uid':GameModel.ins.uid,'page':this.curPage},this.onCallBack,this.onError,this);
			this.mContent.m_list.scrollPane.addEventListener(fairygui.ScrollPane.PULL_UP_RELEASE, this.onPullDownToRefresh, this);
			this.mContent.m_list.setVirtual();
			this.mContent.m_checkother.addClickListener(this.playerOther,this);
		}
		private onPullDownToRefresh(evt:egret.Event):void
		{
			var footer: fairygui.GComponent = this.mContent.m_list.scrollPane.footer.asCom;

			// footer.getController("c1").selectedIndex = 1;
			this.mContent.m_list.scrollPane.lockFooter(footer.sourceHeight);
			
			HttpAPI.HttpGET("http://"+game.GameModel.ins.SocketServer+":8883/zhanji",{'uid':GameModel.ins.uid,'page':this.curPage},this.onCallBackAdd,this.onError,this);
			
		}
		private playerOther():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.BOFANGMA);
		}
		private onCallBack(evt:egret.Event):void
		{
			
			let callBackJson:any = JSON.parse(evt.target.response);
			if(callBackJson.err==""){
				this.result = callBackJson.data;
			}else{
				AlertUtil.floatMsg(callBackJson.err);
				this.result = [];
			}
			ZhanJiModel.ins.init(this.result);

			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=ZhanJiModel.ins.rounds.length;
			this.curPage=2;
		}
		private onCallBackAdd(evt:egret.Event):void
		{
			let callBackJson:any = JSON.parse(evt.target.response);
			if(callBackJson.err==""){
				this.curPage+=1;
				this.result = this.result.concat(callBackJson.data);
				ZhanJiModel.ins.addData(callBackJson.data);
				this.mContent.m_list.numItems+=callBackJson.data.length;
			}
			this.mContent.m_list.scrollPane.lockFooter(0);
		}
		private onError(evt:egret.Event):void
		{
			this.mContent.m_list.scrollPane.lockFooter(0);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:ZhanJiItem = _item as ZhanJiItem;
			item.setData(ZhanJiModel.ins.rounds[index]);
		}
	}
}