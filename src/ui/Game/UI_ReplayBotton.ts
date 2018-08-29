/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_ReplayBotton extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_btn_start:fairygui.GButton;
		public m_btn_pre:fairygui.GButton;
		public m_btn_next:fairygui.GButton;
		public m_btn_stop:fairygui.GButton;
		public m_btn_pause:fairygui.GButton;
		public m_txt_huifangma:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bqy9mu5t";

		public static createInstance():UI_ReplayBotton {
			return <UI_ReplayBotton><any>(fairygui.UIPackage.createObject("Game","ReplayBotton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_btn_start = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_btn_pre = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_next = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_stop = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_btn_pause = <fairygui.GButton><any>(this.getChildAt(6));
			this.m_txt_huifangma = <fairygui.GTextField><any>(this.getChildAt(7));
		}
	}
}