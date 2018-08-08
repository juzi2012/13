/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_DissolveRoom extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;
		public m_txt_name:fairygui.GTextField;
		public m_btn_refuse:fairygui.GButton;
		public m_btn_accept:fairygui.GButton;
		public m_txt_count:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bqgl8o4h";

		public static createInstance():UI_DissolveRoom {
			return <UI_DissolveRoom><any>(fairygui.UIPackage.createObject("Game","DissolveRoom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(1));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_btn_refuse = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_accept = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_txt_count = <fairygui.GTextField><any>(this.getChildAt(5));
		}
	}
}