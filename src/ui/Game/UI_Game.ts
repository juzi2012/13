/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_Game extends fairygui.GComponent {

		public m_playerNumCtrl:fairygui.Controller;
		public m_bg:fairygui.GLoader;
		public m_btn_quit:fairygui.GButton;
		public m_btn_setting:fairygui.GButton;
		public m_btn_help:fairygui.GButton;
		public m_btn_talk:fairygui.GButton;
		public m_btn_invite:fairygui.GButton;
		public m_btn_chat:fairygui.GButton;
		public m_sharetips:fairygui.GGroup;
		public m_txt_room:fairygui.GTextField;
		public m_txt_jushu:fairygui.GTextField;
		public m_txt_roomtype:fairygui.GTextField;
		public m_btn_start:fairygui.GButton;
		public m_head5:UI_PlayerHead;
		public m_head4:UI_PlayerHead;
		public m_head2:UI_PlayerHead;
		public m_head3:UI_PlayerHead;
		public m_head6:UI_PlayerHead;
		public m_head1:UI_PlayerHead;
		public m_btn_check:fairygui.GButton;
		public m_btn_ready:fairygui.GButton;
		public m_img_start:fairygui.GImage;
		public m_btn_continue:fairygui.GButton;
		public m_qld:fairygui.GImage;
		public m_t1:fairygui.Transition;
		public m_t3:fairygui.Transition;

		public static URL:string = "ui://jow5n9bqmwp40";

		public static createInstance():UI_Game {
			return <UI_Game><any>(fairygui.UIPackage.createObject("Game","Game"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_playerNumCtrl = this.getControllerAt(0);
			this.m_bg = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_btn_quit = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_btn_setting = <fairygui.GButton><any>(this.getChildAt(3));
			this.m_btn_help = <fairygui.GButton><any>(this.getChildAt(4));
			this.m_btn_talk = <fairygui.GButton><any>(this.getChildAt(6));
			this.m_btn_invite = <fairygui.GButton><any>(this.getChildAt(7));
			this.m_btn_chat = <fairygui.GButton><any>(this.getChildAt(8));
			this.m_sharetips = <fairygui.GGroup><any>(this.getChildAt(11));
			this.m_txt_room = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_txt_jushu = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_txt_roomtype = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_btn_start = <fairygui.GButton><any>(this.getChildAt(17));
			this.m_head5 = <UI_PlayerHead><any>(this.getChildAt(18));
			this.m_head4 = <UI_PlayerHead><any>(this.getChildAt(19));
			this.m_head2 = <UI_PlayerHead><any>(this.getChildAt(20));
			this.m_head3 = <UI_PlayerHead><any>(this.getChildAt(21));
			this.m_head6 = <UI_PlayerHead><any>(this.getChildAt(22));
			this.m_head1 = <UI_PlayerHead><any>(this.getChildAt(23));
			this.m_btn_check = <fairygui.GButton><any>(this.getChildAt(25));
			this.m_btn_ready = <fairygui.GButton><any>(this.getChildAt(26));
			this.m_img_start = <fairygui.GImage><any>(this.getChildAt(27));
			this.m_btn_continue = <fairygui.GButton><any>(this.getChildAt(28));
			this.m_qld = <fairygui.GImage><any>(this.getChildAt(29));
			this.m_t1 = this.getTransitionAt(0);
			this.m_t3 = this.getTransitionAt(1);
		}
	}
}