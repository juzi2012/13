/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_JieSanSort extends fairygui.GComponent {

		public m_btn_close:fairygui.GButton;
		public m_list:fairygui.GList;

		public static URL:string = "ui://lxifvkduq3d5m";

		public static createInstance():UI_JieSanSort {
			return <UI_JieSanSort><any>(fairygui.UIPackage.createObject("ZhanJi","JieSanSort"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_close = <fairygui.GButton><any>(this.getChildAt(1));
			this.m_list = <fairygui.GList><any>(this.getChildAt(4));
		}
	}
}