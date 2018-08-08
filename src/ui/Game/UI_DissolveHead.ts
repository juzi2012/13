/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_DissolveHead extends fairygui.GComponent {

		public m_txt_top:fairygui.GTextField;
		public m_txt_name:fairygui.GTextField;
		public m_txt_score:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bqgl8o4i";

		public static createInstance():UI_DissolveHead {
			return <UI_DissolveHead><any>(fairygui.UIPackage.createObject("Game","DissolveHead"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_top = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(5));
		}
	}
}