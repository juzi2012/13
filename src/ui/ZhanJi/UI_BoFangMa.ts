/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_BoFangMa extends fairygui.GComponent {

		public m_btn_cancel:fairygui.GButton;
		public m_btn_ok:fairygui.GButton;
		public m_txt_input:fairygui.GTextInput;
		public m_txt_input1:fairygui.GTextField;
		public m_txt_input2:fairygui.GTextField;
		public m_txt_input3:fairygui.GTextField;
		public m_txt_input4:fairygui.GTextField;
		public m_txt_input5:fairygui.GTextField;
		public m_txt_input6:fairygui.GTextField;

		public static URL:string = "ui://lxifvkdunf8ql";

		public static createInstance():UI_BoFangMa {
			return <UI_BoFangMa><any>(fairygui.UIPackage.createObject("ZhanJi","BoFangMa"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_cancel = <fairygui.GButton><any>(this.getChildAt(7));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChildAt(8));
			this.m_txt_input = <fairygui.GTextInput><any>(this.getChildAt(10));
			this.m_txt_input1 = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_txt_input2 = <fairygui.GTextField><any>(this.getChildAt(12));
			this.m_txt_input3 = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_txt_input4 = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_txt_input5 = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_txt_input6 = <fairygui.GTextField><any>(this.getChildAt(16));
		}
	}
}