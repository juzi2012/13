/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Kefu {

	export class UI_KeFu extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_btn_copy:fairygui.GButton;
		public m_btn_ok:fairygui.GButton;

		public static URL:string = "ui://j0afz4iznl0p1";

		public static createInstance():UI_KeFu {
			return <UI_KeFu><any>(fairygui.UIPackage.createObject("Kefu","KeFu"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_btn_copy = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChildAt(4));
		}
	}
}