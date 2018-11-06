/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Charge {

	export class UI_ButtonCharge extends fairygui.GButton {

		public m_num:fairygui.GLoader;

		public static URL:string = "ui://n4kjkscxkd575";

		public static createInstance():UI_ButtonCharge {
			return <UI_ButtonCharge><any>(fairygui.UIPackage.createObject("Charge","ButtonCharge"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_num = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}