/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Activity {

	export class UI_ActivityTab extends fairygui.GButton {

		public m_txt_name:fairygui.GTextField;

		public static URL:string = "ui://eqi03f83nxr23";

		public static createInstance():UI_ActivityTab {
			return <UI_ActivityTab><any>(fairygui.UIPackage.createObject("Activity","ActivityTab"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}