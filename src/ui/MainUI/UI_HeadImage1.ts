/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.MainUI {

	export class UI_HeadImage1 extends fairygui.GComponent {

		public m_img:fairygui.GImage;

		public static URL:string = "ui://s4bbeogyvhx331";

		public static createInstance():UI_HeadImage1 {
			return <UI_HeadImage1><any>(fairygui.UIPackage.createObject("MainUI","HeadImage1"));
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