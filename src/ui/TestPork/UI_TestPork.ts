/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.TestPork {

	export class UI_TestPork extends fairygui.GComponent {

		public m_list1:fairygui.GList;
		public m_list2:fairygui.GList;
		public m_btn_ok:fairygui.GButton;

		public static URL:string = "ui://bmcgtqfdk8tg0";

		public static createInstance():UI_TestPork {
			return <UI_TestPork><any>(fairygui.UIPackage.createObject("TestPork","TestPork"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_list1 = <fairygui.GList><any>(this.getChildAt(0));
			this.m_list2 = <fairygui.GList><any>(this.getChildAt(1));
			this.m_btn_ok = <fairygui.GButton><any>(this.getChildAt(2));
		}
	}
}