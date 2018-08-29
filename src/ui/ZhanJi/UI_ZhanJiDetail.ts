/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_ZhanJiDetail extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_txt_rid:fairygui.GTextField;
		public m_txt_jid:fairygui.GTextField;
		public m_txt_time:fairygui.GTextField;
		public m_txt_name1:fairygui.GTextField;
		public m_txt_score1:fairygui.GTextField;
		public m_txt_name2:fairygui.GTextField;
		public m_txt_score2:fairygui.GTextField;
		public m_txt_name3:fairygui.GTextField;
		public m_txt_score3:fairygui.GTextField;
		public m_txt_name4:fairygui.GTextField;
		public m_txt_score4:fairygui.GTextField;
		public m_txt_name5:fairygui.GTextField;
		public m_txt_score5:fairygui.GTextField;
		public m_txt_name6:fairygui.GTextField;
		public m_txt_score6:fairygui.GTextField;
		public m_img_win:fairygui.GLoader;
		public m_list:fairygui.GList;
		public m_btn_close:fairygui.GButton;
		public m_btn_sort:fairygui.GButton;

		public static URL:string = "ui://lxifvkdurezhd";

		public static createInstance():UI_ZhanJiDetail {
			return <UI_ZhanJiDetail><any>(fairygui.UIPackage.createObject("ZhanJi","ZhanJiDetail"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_txt_rid = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_jid = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_txt_name1 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_txt_score1 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_txt_name2 = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_txt_score2 = <fairygui.GTextField><any>(this.getChildAt(8));
			this.m_txt_name3 = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_txt_score3 = <fairygui.GTextField><any>(this.getChildAt(10));
			this.m_txt_name4 = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_txt_score4 = <fairygui.GTextField><any>(this.getChildAt(12));
			this.m_txt_name5 = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_txt_score5 = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_txt_name6 = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_txt_score6 = <fairygui.GTextField><any>(this.getChildAt(16));
			this.m_img_win = <fairygui.GLoader><any>(this.getChildAt(18));
			this.m_list = <fairygui.GList><any>(this.getChildAt(21));
			this.m_btn_close = <fairygui.GButton><any>(this.getChildAt(22));
			this.m_btn_sort = <fairygui.GButton><any>(this.getChildAt(23));
		}
	}
}