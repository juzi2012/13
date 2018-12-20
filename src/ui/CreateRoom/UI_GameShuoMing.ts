/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.CreateRoom {

	export class UI_GameShuoMing extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_txt_content:fairygui.GTextField;

		public static URL:string = "ui://83u5vz94mdwm19";

		public static createInstance():UI_GameShuoMing {
			return <UI_GameShuoMing><any>(fairygui.UIPackage.createObject("CreateRoom","GameShuoMing"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_txt_content = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}