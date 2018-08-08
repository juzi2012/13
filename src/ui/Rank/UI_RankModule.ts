/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Rank {

	export class UI_RankModule extends fairygui.GComponent {

		public m_panelBg:fairygui.GComponent;
		public m_list:fairygui.GList;
		public m_img_outrank:fairygui.GImage;
		public m_txt_score:fairygui.GTextField;
		public m_txt_name:fairygui.GTextField;
		public m_txt_rank:fairygui.GTextField;

		public static URL:string = "ui://ljka2qsxdu50b";

		public static createInstance():UI_RankModule {
			return <UI_RankModule><any>(fairygui.UIPackage.createObject("Rank","RankModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_panelBg = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(8));
			this.m_img_outrank = <fairygui.GImage><any>(this.getChildAt(10));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(12));
			this.m_txt_rank = <fairygui.GTextField><any>(this.getChildAt(13));
		}
	}
}