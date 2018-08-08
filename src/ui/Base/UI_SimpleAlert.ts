/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Base {

	export class UI_SimpleAlert extends fairygui.GComponent {

		public m_type:fairygui.Controller;
		public m_panelBg:UI_AlertBg;
		public m_btn_ok:fairygui.GButton;
		public m_btn_cancel:fairygui.GButton;
		public m_content:fairygui.GTextField;

		public static URL:string = "ui://i36kne80r2oa1b";

		public static createInstance():UI_SimpleAlert {
			return <UI_SimpleAlert><any>(fairygui.UIPackage.createObject("Base","SimpleAlert"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_type = this.getControllerAt(0);
			this.m_panelBg = <UI_AlertBg><any>(this.getChildAt(0));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_btn_cancel = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_content = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}