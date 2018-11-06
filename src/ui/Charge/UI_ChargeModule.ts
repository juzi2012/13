/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Charge {

	export class UI_ChargeModule extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;

		public static URL:string = "ui://n4kjkscxkd570";

		public static createInstance():UI_ChargeModule {
			return <UI_ChargeModule><any>(fairygui.UIPackage.createObject("Charge","ChargeModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(1));
		}
	}
}