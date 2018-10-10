/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_ChatItem extends fairygui.GComponent {

		public m_txt_name:fairygui.GTextField;
		public m_txt_time:fairygui.GTextField;
		public m_txt_content:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bqx90y38";

		public static createInstance():UI_ChatItem {
			return <UI_ChatItem><any>(fairygui.UIPackage.createObject("Game","ChatItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_txt_time = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_content = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}