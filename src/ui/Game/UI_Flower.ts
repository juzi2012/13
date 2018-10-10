/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_Flower extends fairygui.GComponent {

		public m_flower:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://jow5n9bq56g77d";

		public static createInstance():UI_Flower {
			return <UI_Flower><any>(fairygui.UIPackage.createObject("Game","Flower"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_flower = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}