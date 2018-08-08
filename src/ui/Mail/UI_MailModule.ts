/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Mail {

	export class UI_MailModule extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;

		public static URL:string = "ui://tebyebzgnl0p10";

		public static createInstance():UI_MailModule {
			return <UI_MailModule><any>(fairygui.UIPackage.createObject("Mail","MailModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(1));
		}
	}
}