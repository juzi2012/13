/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_ChatModule extends fairygui.GComponent {

		public m_ctrl:fairygui.Controller;
		public m_panelBg:fairygui.GComponent;
		public m_btn_liaotian:fairygui.GButton;
		public m_btn_record:fairygui.GButton;
		public m_btn_biaoq:fairygui.GButton;
		public m_list:fairygui.GList;
		public m_btn_send:fairygui.GButton;
		public m_btn_input:fairygui.GTextInput;
		public m_list_emoji:fairygui.GList;

		public static URL:string = "ui://jow5n9bqx90y31";

		public static createInstance():UI_ChatModule {
			return <UI_ChatModule><any>(fairygui.UIPackage.createObject("Game","ChatModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctrl = this.getControllerAt(0);
			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_btn_liaotian = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_btn_record = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_btn_biaoq = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_list = <fairygui.GList><any>(this.getChildAt(4));
			this.m_btn_send = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_btn_input = <fairygui.GTextInput><any>(this.getChildAt(7));
			this.m_list_emoji = <fairygui.GList><any>(this.getChildAt(8));
		}
	}
}