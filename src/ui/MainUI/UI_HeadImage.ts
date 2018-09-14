/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.MainUI {

	export class UI_HeadImage extends fairygui.GComponent {

		public m_img:fairygui.GImage;

		public static URL:string = "ui://s4bbeogyvhx330";

		public static createInstance():UI_HeadImage {
			return <UI_HeadImage><any>(fairygui.UIPackage.createObject("MainUI","HeadImage"));
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