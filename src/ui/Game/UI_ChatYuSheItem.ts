/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_ChatYuSheItem extends fairygui.GComponent {

		public m_txt_content:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bq56g77h";

		public static createInstance():UI_ChatYuSheItem {
			return <UI_ChatYuSheItem><any>(fairygui.UIPackage.createObject("Game","ChatYuSheItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_content = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}