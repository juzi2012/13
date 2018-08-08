module game {
	export class MailDetailModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Mail.UI_MailDetail.createInstance();
		}
		public get mContent():UI.Mail.UI_MailDetail{
			return this.content as UI.Mail.UI_MailDetail;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fao";
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
	}
}