/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_SecurityCheck extends fairygui.GComponent {

		public m_t0:fairygui.Transition;

		public static URL:string = "ui://jow5n9bqdu502t";

		public static createInstance():UI_SecurityCheck {
			return <UI_SecurityCheck><any>(fairygui.UIPackage.createObject("Game","SecurityCheck"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_t0 = this.getTransitionAt(0);
		}
	}
}