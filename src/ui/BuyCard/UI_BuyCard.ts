/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.BuyCard {

	export class UI_BuyCard extends fairygui.GComponent {

		public m_btn_buy:fairygui.GButton;
		public m_btn_get:fairygui.GButton;
		public m_btn_close:fairygui.GButton;
		public m_txt_input:fairygui.GTextInput;
		public m_txt_input1:fairygui.GTextField;
		public m_txt_input2:fairygui.GTextField;
		public m_txt_input3:fairygui.GTextField;
		public m_txt_input4:fairygui.GTextField;
		public m_txt_input5:fairygui.GTextField;
		public m_txt_input6:fairygui.GTextField;

		public static URL:string = "ui://ebiec26up0d66";

		public static createInstance():UI_BuyCard {
			return <UI_BuyCard><any>(fairygui.UIPackage.createObject("BuyCard","BuyCard"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_buy = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_btn_get = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_close = <fairygui.GButton><any>(this.getChildAt(8));
			this.m_txt_input = <fairygui.GTextInput><any>(this.getChildAt(10));
			this.m_txt_input1 = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_txt_input2 = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_txt_input3 = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_txt_input4 = <fairygui.GTextField><any>(this.getChildAt(16));
			this.m_txt_input5 = <fairygui.GTextField><any>(this.getChildAt(17));
			this.m_txt_input6 = <fairygui.GTextField><any>(this.getChildAt(18));
		}
	}
}