/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.MainUI {

	export class UI_MainModule extends fairygui.GComponent {

		public m_btn_notice:fairygui.GButton;
		public m_btn_kefu:fairygui.GButton;
		public m_btn_mail:fairygui.GButton;
		public m_btn_shuoming:fairygui.GButton;
		public m_btn_setting:fairygui.GButton;
		public m_btn_add:fairygui.GButton;
		public m_txt_card:fairygui.GTextField;
		public m_head:UI_HeadImage;
		public m_txt_name:fairygui.GTextField;
		public m_txt_id:fairygui.GTextField;
		public m_btn_activity:fairygui.GButton;
		public m_btn_join:fairygui.GButton;
		public m_btn_quan:fairygui.GButton;
		public m_btn_rank:fairygui.GButton;
		public m_btn_zhanji:fairygui.GButton;
		public m_btn_buyCard:fairygui.GButton;
		public m_btn_createRoom:UI_ButtonCreateRoom;
		public m_sp_create:fairygui.GGraph;
		public m_sp_add:fairygui.GGraph;
		public m_sp_quan:fairygui.GGraph;
		public m_sp_jj:fairygui.GGraph;

		public static URL:string = "ui://s4bbeogyvzrt1j";

		public static createInstance():UI_MainModule {
			return <UI_MainModule><any>(fairygui.UIPackage.createObject("MainUI","MainModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_notice = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_kefu = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_mail = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_btn_shuoming = <fairygui.GButton><any>(this.getChildAt(6));
			this.m_btn_setting = <fairygui.GButton><any>(this.getChildAt(7));
			this.m_btn_add = <fairygui.GButton><any>(this.getChildAt(12));
			this.m_txt_card = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_head = <UI_HeadImage><any>(this.getChildAt(15));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(16));
			this.m_txt_id = <fairygui.GTextField><any>(this.getChildAt(17));
			this.m_btn_activity = <fairygui.GButton><any>(this.getChildAt(19));
			this.m_btn_join = <fairygui.GButton><any>(this.getChildAt(20));
			this.m_btn_quan = <fairygui.GButton><any>(this.getChildAt(21));
			this.m_btn_rank = <fairygui.GButton><any>(this.getChildAt(23));
			this.m_btn_zhanji = <fairygui.GButton><any>(this.getChildAt(26));
			this.m_btn_buyCard = <fairygui.GButton><any>(this.getChildAt(27));
			this.m_btn_createRoom = <UI_ButtonCreateRoom><any>(this.getChildAt(29));
			this.m_sp_create = <fairygui.GGraph><any>(this.getChildAt(30));
			this.m_sp_add = <fairygui.GGraph><any>(this.getChildAt(31));
			this.m_sp_quan = <fairygui.GGraph><any>(this.getChildAt(32));
			this.m_sp_jj = <fairygui.GGraph><any>(this.getChildAt(33));
		}
	}
}