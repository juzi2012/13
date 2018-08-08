/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Base {

	export class UI_AlertBg1 extends fairygui.GComponent {

		public m_btn_close:fairygui.GButton;
		public m_title:fairygui.GLoader;

		public static URL:string = "ui://i36kne80rezh17";

		public static createInstance():UI_AlertBg1 {
			return <UI_AlertBg1><any>(fairygui.UIPackage.createObject("Base","AlertBg1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_close = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_title = <fairygui.GLoader><any>(this.getChildAt(3));
		}
	}
}