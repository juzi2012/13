module game {
	export class ZhanJiDetailModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.ZhanJi.UI_ZhanJiDetail.createInstance();
		}
		public get mContent():UI.ZhanJi.UI_ZhanJiDetail{
			return this.content as UI.ZhanJi.UI_ZhanJiDetail;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80rezhz";
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
	}
}