/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.CreateRoom {

	export class UI_CreateRoom extends fairygui.GComponent {

		public m_typeCtrl:fairygui.Controller;
		public m_payCtrl:fairygui.Controller;
		public m_JuShuCtrl:fairygui.Controller;
		public m_NumCtrl:fairygui.Controller;
		public m_NumCtrl1:fairygui.Controller;
		public m_panelBg:fairygui.GComponent;
		public m_btn_type0:fairygui.GButton;
		public m_btn_type1:fairygui.GButton;
		public m_btn_type2:fairygui.GButton;
		public m_btn_type3:fairygui.GButton;
		public m_btn_type4:fairygui.GButton;
		public m_btn_paytype0:fairygui.GButton;
		public m_btn_paytype1:fairygui.GButton;
		public m_btn_junum0:fairygui.GButton;
		public m_btn_junum1:fairygui.GButton;
		public m_btn_junum2:fairygui.GButton;
		public m_check_2:fairygui.GButton;
		public m_check_3:fairygui.GButton;
		public m_check_4:fairygui.GButton;
		public m_checkbox_zhuang:fairygui.GButton;
		public m_num1:fairygui.GTextField;
		public m_num2:fairygui.GTextField;
		public m_num3:fairygui.GTextField;
		public m_btn_create:UI_ButtonCreate;
		public m_btn_buy:fairygui.GButton;
		public m_check_5:fairygui.GButton;
		public m_num4:fairygui.GTextField;
		public m_radio_huase1:fairygui.GButton;
		public m_radio_huase2:fairygui.GButton;
		public m_radio_huase3:fairygui.GButton;
		public m_radio_huase4:fairygui.GButton;
		public m_huase:fairygui.GGroup;
		public m_checkbox_mapai:fairygui.GButton;
		public m_jiama:fairygui.GGroup;
		public m_checkbox_jiayise:fairygui.GButton;
		public m_jiayise:fairygui.GGroup;

		public static URL:string = "ui://83u5vz94sej48";

		public static createInstance():UI_CreateRoom {
			return <UI_CreateRoom><any>(fairygui.UIPackage.createObject("CreateRoom","CreateRoom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_typeCtrl = this.getControllerAt(0);
			this.m_payCtrl = this.getControllerAt(1);
			this.m_JuShuCtrl = this.getControllerAt(2);
			this.m_NumCtrl = this.getControllerAt(3);
			this.m_NumCtrl1 = this.getControllerAt(4);
			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_btn_type0 = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_type1 = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_btn_type2 = <fairygui.GButton><any>(this.getChildAt(6));
			this.m_btn_type3 = <fairygui.GButton><any>(this.getChildAt(7));
			this.m_btn_type4 = <fairygui.GButton><any>(this.getChildAt(8));
			this.m_btn_paytype0 = <fairygui.GButton><any>(this.getChildAt(10));
			this.m_btn_paytype1 = <fairygui.GButton><any>(this.getChildAt(11));
			this.m_btn_junum0 = <fairygui.GButton><any>(this.getChildAt(12));
			this.m_btn_junum1 = <fairygui.GButton><any>(this.getChildAt(13));
			this.m_btn_junum2 = <fairygui.GButton><any>(this.getChildAt(14));
			this.m_check_2 = <fairygui.GButton><any>(this.getChildAt(15));
			this.m_check_3 = <fairygui.GButton><any>(this.getChildAt(16));
			this.m_check_4 = <fairygui.GButton><any>(this.getChildAt(17));
			this.m_checkbox_zhuang = <fairygui.GButton><any>(this.getChildAt(18));
			this.m_num1 = <fairygui.GTextField><any>(this.getChildAt(28));
			this.m_num2 = <fairygui.GTextField><any>(this.getChildAt(29));
			this.m_num3 = <fairygui.GTextField><any>(this.getChildAt(30));
			this.m_btn_create = <UI_ButtonCreate><any>(this.getChildAt(32));
			this.m_btn_buy = <fairygui.GButton><any>(this.getChildAt(33));
			this.m_check_5 = <fairygui.GButton><any>(this.getChildAt(35));
			this.m_num4 = <fairygui.GTextField><any>(this.getChildAt(36));
			this.m_radio_huase1 = <fairygui.GButton><any>(this.getChildAt(37));
			this.m_radio_huase2 = <fairygui.GButton><any>(this.getChildAt(38));
			this.m_radio_huase3 = <fairygui.GButton><any>(this.getChildAt(39));
			this.m_radio_huase4 = <fairygui.GButton><any>(this.getChildAt(40));
			this.m_huase = <fairygui.GGroup><any>(this.getChildAt(46));
			this.m_checkbox_mapai = <fairygui.GButton><any>(this.getChildAt(47));
			this.m_jiama = <fairygui.GGroup><any>(this.getChildAt(49));
			this.m_checkbox_jiayise = <fairygui.GButton><any>(this.getChildAt(50));
			this.m_jiayise = <fairygui.GGroup><any>(this.getChildAt(52));
		}
	}
}