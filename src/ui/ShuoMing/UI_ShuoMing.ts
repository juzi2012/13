/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ShuoMing {

	export class UI_ShuoMing extends fairygui.GComponent {

		public m_tabCtl:fairygui.Controller;
		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;
		public m_txt_num:fairygui.GTextField;
		public m_txtcontent:UI_TxtContent;

		public static URL:string = "ui://ksvi7x7crv2q0";

		public static createInstance():UI_ShuoMing {
			return <UI_ShuoMing><any>(fairygui.UIPackage.createObject("ShuoMing","ShuoMing"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_tabCtl = this.getControllerAt(0);
			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(4));
			this.m_txt_num = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_txtcontent = <UI_TxtContent><any>(this.getChildAt(10));
		}
	}
}