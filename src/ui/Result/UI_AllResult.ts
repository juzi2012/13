/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Result {

	export class UI_AllResult extends fairygui.GComponent {

		public m_btn_check:fairygui.GButton;
		public m_btn_back:fairygui.GButton;
		public m_txt_time:fairygui.GTextField;
		public m_txt_info:fairygui.GTextField;
		public m_list:fairygui.GList;
		public m_txt_roomid:fairygui.GTextField;

		public static URL:string = "ui://25mni52osl2ku";

		public static createInstance():UI_AllResult {
			return <UI_AllResult><any>(fairygui.UIPackage.createObject("Result","AllResult"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_check = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_back = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_txt_info = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_list = <fairygui.GList><any>(this.getChildAt(7));
			this.m_txt_roomid = <fairygui.GTextField><any>(this.getChildAt(8));
		}
	}
}