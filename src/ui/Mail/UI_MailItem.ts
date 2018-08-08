/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Mail {

	export class UI_MailItem extends fairygui.GComponent {

		public m_btn_read:fairygui.GButton;

		public static URL:string = "ui://tebyebzgnl0pz";

		public static createInstance():UI_MailItem {
			return <UI_MailItem><any>(fairygui.UIPackage.createObject("Mail","MailItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_read = <fairygui.GButton><any>(this.getChildAt(1));
		}
	}
}