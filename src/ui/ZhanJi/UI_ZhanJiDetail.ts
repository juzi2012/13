/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_ZhanJiDetail extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;

		public static URL:string = "ui://lxifvkdurezhd";

		public static createInstance():UI_ZhanJiDetail {
			return <UI_ZhanJiDetail><any>(fairygui.UIPackage.createObject("ZhanJi","ZhanJiDetail"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
		}
	}
}