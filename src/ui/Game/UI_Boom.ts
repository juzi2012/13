/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_Boom extends fairygui.GComponent {

		public m_boom1:fairygui.GImage;
		public m_boom2:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://jow5n9bq56g77e";

		public static createInstance():UI_Boom {
			return <UI_Boom><any>(fairygui.UIPackage.createObject("Game","Boom"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_boom1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_boom2 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}