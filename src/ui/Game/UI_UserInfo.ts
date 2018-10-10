/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_UserInfo extends fairygui.GComponent {

		public m_btn_zadan:fairygui.GButton;
		public m_btn_flower:fairygui.GButton;
		public m_txt_name:fairygui.GTextField;
		public m_txt_score:fairygui.GTextField;
		public m_txt_id:fairygui.GTextField;
		public m_txt_pos:fairygui.GTextField;
		public m_txt_pos0:fairygui.GTextField;
		public m_txt_pos0_2:fairygui.GTextField;
		public m_txt_pos0_3:fairygui.GTextField;
		public m_txt_pos0_4:fairygui.GTextField;
		public m_txt_pos0_5:fairygui.GTextField;
		public m_btn_close:fairygui.GButton;
		public m_head:fairygui.GComponent;

		public static URL:string = "ui://jow5n9bqwigp4o";

		public static createInstance():UI_UserInfo {
			return <UI_UserInfo><any>(fairygui.UIPackage.createObject("Game","UserInfo"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_zadan = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_flower = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(8));
			this.m_txt_id = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_txt_pos = <fairygui.GTextField><any>(this.getChildAt(10));
			this.m_txt_pos0 = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_txt_pos0_2 = <fairygui.GTextField><any>(this.getChildAt(12));
			this.m_txt_pos0_3 = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_txt_pos0_4 = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_txt_pos0_5 = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_btn_close = <fairygui.GButton><any>(this.getChildAt(16));
			this.m_head = <fairygui.GComponent><any>(this.getChildAt(17));
		}
	}
}