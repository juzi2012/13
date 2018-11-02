module game {
	export class ActivityModule extends PopModuleView{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.Activity.UI_Activity.createInstance();
		}
		public get mContent():UI.Activity.UI_Activity{
			return this.content as UI.Activity.UI_Activity;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fak";
			this.mContent.m_c1.selectedIndex=1;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
	}
}