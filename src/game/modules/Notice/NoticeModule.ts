module game {
	export class NoticeModule extends PopModuleView {
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Notice.UI_Notice.createInstance();
		}
		public get mContent():UI.Notice.UI_Notice{
			return this.content as UI.Notice.UI_Notice;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5faq";
			this.mContent.m_c1.selectedIndex=1;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
	}
}