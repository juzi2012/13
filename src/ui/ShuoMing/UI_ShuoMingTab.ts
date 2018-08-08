/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ShuoMing {

	export class UI_ShuoMingTab extends fairygui.GButton {

		public m_name:fairygui.GTextField;

		public static URL:string = "ui://ksvi7x7crv2q4";

		public static createInstance():UI_ShuoMingTab {
			return <UI_ShuoMingTab><any>(fairygui.UIPackage.createObject("ShuoMing","ShuoMingTab"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_name = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}