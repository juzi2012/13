/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_PutPork extends fairygui.GComponent {

		public m_ctrl:fairygui.Controller;
		public m_btn_close1:fairygui.GButton;
		public m_btn_close2:fairygui.GButton;
		public m_btn_close3:fairygui.GButton;
		public m_paixing_2:fairygui.GLoader;
		public m_paixing_0:fairygui.GLoader;
		public m_paixing_1:fairygui.GLoader;
		public m_porkList:fairygui.GList;
		public m_btn_cancel:fairygui.GButton;
		public m_btn_ok:fairygui.GButton;
		public m_btntype1:UI_ButtonType;
		public m_btntype2:UI_ButtonType;
		public m_btntype3:UI_ButtonType;
		public m_btntype4:UI_ButtonType;
		public m_btntype5:UI_ButtonType;
		public m_btntype6:UI_ButtonType;
		public m_btntype7:UI_ButtonType;
		public m_btntype8:UI_ButtonType;
		public m_btntype9:UI_ButtonTypeEnd;
		public m_btngroup:fairygui.GGroup;
		public m_btn_help:fairygui.GButton;
		public m_area_top:fairygui.GGraph;
		public m_area_mid:fairygui.GGraph;
		public m_area_down:fairygui.GGraph;
		public m_list_top:fairygui.GList;
		public m_list_mid:fairygui.GList;
		public m_list_down:fairygui.GList;

		public static URL:string = "ui://jow5n9bqmwp41g";

		public static createInstance():UI_PutPork {
			return <UI_PutPork><any>(fairygui.UIPackage.createObject("Game","PutPork"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctrl = this.getControllerAt(0);
			this.m_btn_close1 = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_close2 = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_btn_close3 = <fairygui.GButton><any>(this.getChildAt(6));
			this.m_paixing_2 = <fairygui.GLoader><any>(this.getChildAt(7));
			this.m_paixing_0 = <fairygui.GLoader><any>(this.getChildAt(9));
			this.m_paixing_1 = <fairygui.GLoader><any>(this.getChildAt(10));
			this.m_porkList = <fairygui.GList><any>(this.getChildAt(12));
			this.m_btn_cancel = <fairygui.GButton><any>(this.getChildAt(13));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChildAt(14));
			this.m_btntype1 = <UI_ButtonType><any>(this.getChildAt(15));
			this.m_btntype2 = <UI_ButtonType><any>(this.getChildAt(16));
			this.m_btntype3 = <UI_ButtonType><any>(this.getChildAt(17));
			this.m_btntype4 = <UI_ButtonType><any>(this.getChildAt(18));
			this.m_btntype5 = <UI_ButtonType><any>(this.getChildAt(19));
			this.m_btntype6 = <UI_ButtonType><any>(this.getChildAt(20));
			this.m_btntype7 = <UI_ButtonType><any>(this.getChildAt(21));
			this.m_btntype8 = <UI_ButtonType><any>(this.getChildAt(22));
			this.m_btntype9 = <UI_ButtonTypeEnd><any>(this.getChildAt(23));
			this.m_btngroup = <fairygui.GGroup><any>(this.getChildAt(24));
			this.m_btn_help = <fairygui.GButton><any>(this.getChildAt(25));
			this.m_area_top = <fairygui.GGraph><any>(this.getChildAt(26));
			this.m_area_mid = <fairygui.GGraph><any>(this.getChildAt(27));
			this.m_area_down = <fairygui.GGraph><any>(this.getChildAt(28));
			this.m_list_top = <fairygui.GList><any>(this.getChildAt(29));
			this.m_list_mid = <fairygui.GList><any>(this.getChildAt(30));
			this.m_list_down = <fairygui.GList><any>(this.getChildAt(31));
		}
	}
}