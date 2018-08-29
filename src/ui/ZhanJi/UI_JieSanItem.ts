/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_JieSanItem extends fairygui.GComponent {

		public m_txt_name:fairygui.GTextField;
		public m_txt_sort:fairygui.GTextField;

		public static URL:string = "ui://lxifvkduq3d5n";

		public static createInstance():UI_JieSanItem {
			return <UI_JieSanItem><any>(fairygui.UIPackage.createObject("ZhanJi","JieSanItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_txt_sort = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}