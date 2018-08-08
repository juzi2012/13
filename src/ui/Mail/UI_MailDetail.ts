/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Mail {

	export class UI_MailDetail extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;

		public static URL:string = "ui://tebyebzgnl0p11";

		public static createInstance():UI_MailDetail {
			return <UI_MailDetail><any>(fairygui.UIPackage.createObject("Mail","MailDetail"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
		}
	}
}