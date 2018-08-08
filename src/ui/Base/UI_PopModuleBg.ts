/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Base {

	export class UI_PopModuleBg extends fairygui.GComponent {

		public m_btn_close:fairygui.GButton;
		public m_title:fairygui.GLoader;

		public static URL:string = "ui://i36kne80nl0p9";

		public static createInstance():UI_PopModuleBg {
			return <UI_PopModuleBg><any>(fairygui.UIPackage.createObject("Base","PopModuleBg"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_close = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_title = <fairygui.GLoader><any>(this.getChildAt(4));
		}
	}
}