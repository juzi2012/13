/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Setting {

	export class UI_Setting extends fairygui.GComponent {

		public m_DeskChooseCtrl:fairygui.Controller;
		public m_panelBg:fairygui.GComponent;
		public m_btn_bg1:fairygui.GButton;
		public m_btn_bg2:fairygui.GButton;
		public m_btn_bg3:fairygui.GButton;
		public m_btn_music:fairygui.GButton;
		public m_btn_sound:fairygui.GButton;
		public m_btn_help:fairygui.GButton;

		public static URL:string = "ui://1p6eu6xmj34rb";

		public static createInstance():UI_Setting {
			return <UI_Setting><any>(fairygui.UIPackage.createObject("Setting","Setting"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_DeskChooseCtrl = this.getControllerAt(0);
			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_btn_bg1 = <fairygui.GButton><any>(this.getChildAt(7));
			this.m_btn_bg2 = <fairygui.GButton><any>(this.getChildAt(8));
			this.m_btn_bg3 = <fairygui.GButton><any>(this.getChildAt(9));
			this.m_btn_music = <fairygui.GButton><any>(this.getChildAt(11));
			this.m_btn_sound = <fairygui.GButton><any>(this.getChildAt(12));
			this.m_btn_help = <fairygui.GButton><any>(this.getChildAt(13));
		}
	}
}