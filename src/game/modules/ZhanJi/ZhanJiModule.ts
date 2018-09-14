module game {
	export class ZhanJiModule extends PopModuleView{
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
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fap";
			HttpAPI.HttpGET("http://"+App.GlobalData.SocketServer+":8883/zhanji",{'uid':GameModel.ins.uid,'page':1},this.onCallBack,this.onError,this);
			this.mContent.m_checkother.addClickListener(this.playerOther,this);
		}
		private playerOther():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.BOFANGMA);
		}
		private onCallBack(evt:egret.Event):void
		{
			this.preShowCpl();
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

		}
		private onError(evt:egret.Event):void
		{

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