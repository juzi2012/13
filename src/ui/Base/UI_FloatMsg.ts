/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Base {

	export class UI_FloatMsg extends fairygui.GComponent {

		public m_txt:fairygui.GTextField;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://i36kne809i991c";

		public static createInstance():UI_FloatMsg {
			return <UI_FloatMsg><any>(fairygui.UIPackage.createObject("Base","FloatMsg"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}