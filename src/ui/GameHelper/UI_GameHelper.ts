/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.GameHelper {

	export class UI_GameHelper extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_shuoming:fairygui.GTextField;

		public static URL:string = "ui://gxctr1midu500";

		public static createInstance():UI_GameHelper {
			return <UI_GameHelper><any>(fairygui.UIPackage.createObject("GameHelper","GameHelper"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_shuoming = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}