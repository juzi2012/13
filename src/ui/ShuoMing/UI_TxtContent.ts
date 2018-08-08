/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ShuoMing {

	export class UI_TxtContent extends fairygui.GComponent {

		public m_txt_content:fairygui.GTextField;

		public static URL:string = "ui://ksvi7x7cdowqa";

		public static createInstance():UI_TxtContent {
			return <UI_TxtContent><any>(fairygui.UIPackage.createObject("ShuoMing","TxtContent"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_content = <fairygui.GTextField><any>(this.getChildAt(0));
		}
	}
}