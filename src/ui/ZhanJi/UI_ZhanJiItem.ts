/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_ZhanJiItem extends fairygui.GComponent {

		public m_txt_rid:fairygui.GTextField;
		public m_txt_jushu:fairygui.GTextField;
		public m_txt_time:fairygui.GTextField;
		public m_list:fairygui.GList;
		public m_btn_check:fairygui.GButton;
		public m_img_result:fairygui.GLoader;

		public static URL:string = "ui://lxifvkdup0d62";

		public static createInstance():UI_ZhanJiItem {
			return <UI_ZhanJiItem><any>(fairygui.UIPackage.createObject("ZhanJi","ZhanJiItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_rid = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_txt_jushu = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_list = <fairygui.GList><any>(this.getChildAt(4));
			this.m_btn_check = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_img_result = <fairygui.GLoader><any>(this.getChildAt(6));
		}
	}
}