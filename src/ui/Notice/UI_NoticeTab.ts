/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Notice {

	export class UI_NoticeTab extends fairygui.GButton {

		public m_txt_name:fairygui.GTextField;

		public static URL:string = "ui://ecxcc9h9nxr26";

		public static createInstance():UI_NoticeTab {
			return <UI_NoticeTab><any>(fairygui.UIPackage.createObject("Notice","NoticeTab"));
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