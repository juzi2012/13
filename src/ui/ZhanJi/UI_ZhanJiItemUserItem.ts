/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.ZhanJi {

	export class UI_ZhanJiItemUserItem extends fairygui.GComponent {

		public m_txt_name:fairygui.GTextField;
		public m_txt_score:fairygui.GTextField;
		public m_img_win:fairygui.GImage;

		public static URL:string = "ui://lxifvkdumqtaj";

		public static createInstance():UI_ZhanJiItemUserItem {
			return <UI_ZhanJiItemUserItem><any>(fairygui.UIPackage.createObject("ZhanJi","ZhanJiItemUserItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_img_win = <fairygui.GImage><any>(this.getChildAt(2));
		}
	}
}