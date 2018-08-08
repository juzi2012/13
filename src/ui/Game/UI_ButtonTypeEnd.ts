/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_ButtonTypeEnd extends fairygui.GButton {

		public m_txt:fairygui.GLoader;

		public static URL:string = "ui://jow5n9bqmwp41p";

		public static createInstance():UI_ButtonTypeEnd {
			return <UI_ButtonTypeEnd><any>(fairygui.UIPackage.createObject("Game","ButtonTypeEnd"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}