/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_EmojiItem extends fairygui.GComponent {

		public m_img:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bqt3zq77";

		public static createInstance():UI_EmojiItem {
			return <UI_EmojiItem><any>(fairygui.UIPackage.createObject("Game","EmojiItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_img = <fairygui.GTextField><any>(this.getChildAt(0));
		}
	}
}