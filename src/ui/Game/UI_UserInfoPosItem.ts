/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_UserInfoPosItem extends fairygui.GComponent {

		public m_txt_name:fairygui.GTextField;
		public m_txt_pos:fairygui.GTextField;

		public static URL:string = "ui://jow5n9bqf3x27j";

		public static createInstance():UI_UserInfoPosItem {
			return <UI_UserInfoPosItem><any>(fairygui.UIPackage.createObject("Game","UserInfoPosItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_txt_pos = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}