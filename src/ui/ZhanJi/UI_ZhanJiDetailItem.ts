/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_ZhanJiDetailItem extends fairygui.GComponent {

		public m_txt_0:fairygui.GTextField;
		public m_txt_1:fairygui.GTextField;
		public m_txt_2:fairygui.GTextField;
		public m_txt_3:fairygui.GTextField;
		public m_txt_4:fairygui.GTextField;
		public m_txt_5:fairygui.GTextField;
		public m_txt_6:fairygui.GTextField;

		public static URL:string = "ui://lxifvkdurezhe";

		public static createInstance():UI_ZhanJiDetailItem {
			return <UI_ZhanJiDetailItem><any>(fairygui.UIPackage.createObject("ZhanJi","ZhanJiDetailItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_0 = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_txt_1 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_2 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_3 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_txt_4 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_txt_5 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_txt_6 = <fairygui.GTextField><any>(this.getChildAt(7));
		}
	}
}