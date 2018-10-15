/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.CreateRoom {

	export class UI_ButtonCreate extends fairygui.GButton {

		public m_txt_cardnum:fairygui.GTextField;

		public static URL:string = "ui://83u5vz94h5w5v";

		public static createInstance():UI_ButtonCreate {
			return <UI_ButtonCreate><any>(fairygui.UIPackage.createObject("CreateRoom","ButtonCreate"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_cardnum = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}