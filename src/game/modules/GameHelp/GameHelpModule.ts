module game {
	export class GameHelpModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.GameHelper.UI_GameHelper.createInstance();
		}
		public get mContent():UI.GameHelper.UI_GameHelper{
			return this.content as UI.GameHelper.UI_GameHelper;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_AlertBg1).m_title.url = "ui://i36kne80rezh18";
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
	}
}