/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Result {

	export class UI_SingleResult extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_list:fairygui.GList;
		public m_btn_check:fairygui.GButton;
		public m_btn_continue:fairygui.GButton;
		public m_txt_time:fairygui.GTextField;
		public m_txt_roominfo:fairygui.GTextField;

		public static URL:string = "ui://25mni52osl2k0";

		public static createInstance():UI_SingleResult {
			return <UI_SingleResult><any>(fairygui.UIPackage.createObject("Result","SingleResult"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_list = <fairygui.GList><any>(this.getChildAt(3));
			this.m_btn_check = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_continue = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_txt_roominfo = <fairygui.GTextField><any>(this.getChildAt(12));
		}
	}
}