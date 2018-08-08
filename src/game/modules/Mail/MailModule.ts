module game {
	export class MailModule extends PopModuleView {
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.Mail.UI_MailModule.createInstance();
		}
		public get mContent():UI.Mail.UI_MailModule{
			return this.content as UI.Mail.UI_MailModule;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fao";
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=5;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let mailItem:MailListItem = _item as MailListItem;
			mailItem.setData();
		}
	}
}