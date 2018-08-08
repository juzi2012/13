/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.MainUI {

	export class UI_ButtonCreateRoom extends fairygui.GButton {

		public m_img:fairygui.GImage;

		public static URL:string = "ui://s4bbeogyrv2q2x";

		public static createInstance():UI_ButtonCreateRoom {
			return <UI_ButtonCreateRoom><any>(fairygui.UIPackage.createObject("MainUI","ButtonCreateRoom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_img = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}