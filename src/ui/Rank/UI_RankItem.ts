/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Rank {

	export class UI_RankItem extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_txt_score:fairygui.GTextField;
		public m_txt_name:fairygui.GTextField;
		public m_txt_rank:fairygui.GTextField;
		public m_img_rank:fairygui.GLoader;
		public m_head:fairygui.GComponent;

		public static URL:string = "ui://ljka2qsxdu50d";

		public static createInstance():UI_RankItem {
			return <UI_RankItem><any>(fairygui.UIPackage.createObject("Rank","RankItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_rank = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_img_rank = <fairygui.GLoader><any>(this.getChildAt(5));
			this.m_head = <fairygui.GComponent><any>(this.getChildAt(6));
		}
	}
}