/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Activity {

	export class UI_Activity extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;
		public m_txt_name:fairygui.GTextField;
		public m_txt_time:fairygui.GTextField;
		public m_txt_content:fairygui.GTextField;
		public m_mcontent:fairygui.GGroup;

		public static URL:string = "ui://eqi03f83nxr20";

		public static createInstance():UI_Activity {
			return <UI_Activity><any>(fairygui.UIPackage.createObject("Activity","Activity"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(4));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_txt_content = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_mcontent = <fairygui.GGroup><any>(this.getChildAt(8));
		}
	}
}