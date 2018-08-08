/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.AddRoom {

	export class UI_AddRoom extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_btn1:fairygui.GButton;
		public m_btn2:fairygui.GButton;
		public m_btn3:fairygui.GButton;
		public m_btn4:fairygui.GButton;
		public m_btn5:fairygui.GButton;
		public m_btn6:fairygui.GButton;
		public m_btn7:fairygui.GButton;
		public m_btn8:fairygui.GButton;
		public m_btn9:fairygui.GButton;
		public m_btn0:fairygui.GButton;
		public m_btndel:fairygui.GButton;
		public m_btnreset:fairygui.GButton;
		public m_txt1:fairygui.GTextField;
		public m_txt2:fairygui.GTextField;
		public m_txt3:fairygui.GTextField;
		public m_txt4:fairygui.GTextField;
		public m_txt5:fairygui.GTextField;
		public m_txt6:fairygui.GTextField;

		public static URL:string = "ui://8vvi1zrysej4h";

		public static createInstance():UI_AddRoom {
			return <UI_AddRoom><any>(fairygui.UIPackage.createObject("AddRoom","AddRoom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_btn1 = <fairygui.GButton><any>(this.getChildAt(8));
			this.m_btn2 = <fairygui.GButton><any>(this.getChildAt(9));
			this.m_btn3 = <fairygui.GButton><any>(this.getChildAt(10));
			this.m_btn4 = <fairygui.GButton><any>(this.getChildAt(11));
			this.m_btn5 = <fairygui.GButton><any>(this.getChildAt(12));
			this.m_btn6 = <fairygui.GButton><any>(this.getChildAt(13));
			this.m_btn7 = <fairygui.GButton><any>(this.getChildAt(14));
			this.m_btn8 = <fairygui.GButton><any>(this.getChildAt(15));
			this.m_btn9 = <fairygui.GButton><any>(this.getChildAt(16));
			this.m_btn0 = <fairygui.GButton><any>(this.getChildAt(17));
			this.m_btndel = <fairygui.GButton><any>(this.getChildAt(18));
			this.m_btnreset = <fairygui.GButton><any>(this.getChildAt(19));
			this.m_txt1 = <fairygui.GTextField><any>(this.getChildAt(20));
			this.m_txt2 = <fairygui.GTextField><any>(this.getChildAt(21));
			this.m_txt3 = <fairygui.GTextField><any>(this.getChildAt(22));
			this.m_txt4 = <fairygui.GTextField><any>(this.getChildAt(23));
			this.m_txt5 = <fairygui.GTextField><any>(this.getChildAt(24));
			this.m_txt6 = <fairygui.GTextField><any>(this.getChildAt(25));
		}
	}
}