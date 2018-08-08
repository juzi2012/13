/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_ButtonType extends fairygui.GButton {

		public m_txt:fairygui.GLoader;

		public static URL:string = "ui://jow5n9bqmwp41o";

		public static createInstance():UI_ButtonType {
			return <UI_ButtonType><any>(fairygui.UIPackage.createObject("Game","ButtonType"));
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