/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_Pork extends fairygui.GComponent {

		public m_ctrlstate:fairygui.Controller;
		public m_txt1:fairygui.GTextField;
		public m_txt2:fairygui.GTextField;
		public m_txt_type1:fairygui.GTextField;
		public m_txt_type2:fairygui.GTextField;
		public m_img_joke:fairygui.GImage;

		public static URL:string = "ui://jow5n9bqmwp41d";

		public static createInstance():UI_Pork {
			return <UI_Pork><any>(fairygui.UIPackage.createObject("Game","Pork"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctrlstate = this.getControllerAt(0);
			this.m_txt1 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt2 = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_type1 = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_txt_type2 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_img_joke = <fairygui.GImage><any>(this.getChildAt(7));
		}
	}
}