module game {
	export class ChargeModule extends PopModuleView{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.Charge.UI_ChargeModule.createInstance();
		}
		public get mContent():UI.Charge.UI_ChargeModule{
			return this.content as UI.Charge.UI_ChargeModule;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://n4kjkscxkd576";
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=3;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:ChargeItem = _item as ChargeItem;
			item.setData(index);
		}
	}
}