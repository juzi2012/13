/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_ZhanJi extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;
		public m_checkother:fairygui.GButton;

		public static URL:string = "ui://lxifvkdup0d61";

		public static createInstance():UI_ZhanJi {
			return <UI_ZhanJi><any>(fairygui.UIPackage.createObject("ZhanJi","ZhanJi"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(1));
			this.m_checkother = <fairygui.GButton><any>(this.getChildAt(3));
		}
	}
}