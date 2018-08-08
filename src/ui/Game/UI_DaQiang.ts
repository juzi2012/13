/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_DaQiang extends fairygui.GComponent {

		public m_qiang:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://jow5n9bqist44g";

		public static createInstance():UI_DaQiang {
			return <UI_DaQiang><any>(fairygui.UIPackage.createObject("Game","DaQiang"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_qiang = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}