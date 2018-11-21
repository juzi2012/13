/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_GameReplay extends fairygui.GComponent {

		public m_playerNumCtrl:fairygui.Controller;
		public m_bg:fairygui.GLoader;
		public m_btn_quit:fairygui.GButton;
		public m_head5:UI_PlayerHead;
		public m_head4:UI_PlayerHead;
		public m_head3:UI_PlayerHead;
		public m_head2:UI_PlayerHead;
		public m_head6:UI_PlayerHead;
		public m_head1:UI_PlayerHead;
		public m_txt_fid:fairygui.GTextField;
		public m_playcontrol:UI_ReplayBotton;
		public m_txt_ju:fairygui.GTextField;
		public m_t1:fairygui.Transition;

		public static URL:string = "ui://jow5n9bqijgv4x";

		public static createInstance():UI_GameReplay {
			return <UI_GameReplay><any>(fairygui.UIPackage.createObject("Game","GameReplay"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_playerNumCtrl = this.getControllerAt(0);
			this.m_bg = <fairygui.GLoader><any>(this.getChildAt(0));
			this.m_btn_quit = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_head5 = <UI_PlayerHead><any>(this.getChildAt(3));
			this.m_head4 = <UI_PlayerHead><any>(this.getChildAt(4));
			this.m_head3 = <UI_PlayerHead><any>(this.getChildAt(5));
			this.m_head2 = <UI_PlayerHead><any>(this.getChildAt(6));
			this.m_head6 = <UI_PlayerHead><any>(this.getChildAt(7));
			this.m_head1 = <UI_PlayerHead><any>(this.getChildAt(8));
			this.m_txt_fid = <fairygui.GTextField><any>(this.getChildAt(10));
			this.m_playcontrol = <UI_ReplayBotton><any>(this.getChildAt(11));
			this.m_txt_ju = <fairygui.GTextField><any>(this.getChildAt(12));
			this.m_t1 = this.getTransitionAt(0);
		}
	}
}