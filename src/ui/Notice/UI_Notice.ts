/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Notice {

	export class UI_Notice extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_panelBg:fairygui.GComponent;
		public m_txt_title:fairygui.GTextField;
		public m_txt_time:fairygui.GTextField;
		public m_txt_content:fairygui.GTextField;
		public m_list:fairygui.GList;
		public m_mcontent:fairygui.GGroup;

		public static URL:string = "ui://ecxcc9h9nxr24";

		public static createInstance():UI_Notice {
			return <UI_Notice><any>(fairygui.UIPackage.createObject("Notice","Notice"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_txt_title = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_txt_content = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_list = <fairygui.GList><any>(this.getChildAt(7));
			this.m_mcontent = <fairygui.GGroup><any>(this.getChildAt(8));
		}
	}
}