/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_PlayerPokers extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_c2:fairygui.Controller;
		public m_pork0:UI_Pork;
		public m_pork1:UI_Pork;
		public m_pork2:UI_Pork;
		public m_pork3:UI_Pork;
		public m_pork4:UI_Pork;
		public m_pork5:UI_Pork;
		public m_pork6:UI_Pork;
		public m_pork7:UI_Pork;
		public m_pork8:UI_Pork;
		public m_pork9:UI_Pork;
		public m_pork10:UI_Pork;
		public m_pork11:UI_Pork;
		public m_pork12:UI_Pork;
		public m_qiangyan:fairygui.GGroup;
		public m_porka1:UI_Pork;
		public m_porka2:UI_Pork;
		public m_porka3:UI_Pork;
		public m_porka4:UI_Pork;
		public m_porka5:UI_Pork;
		public m_img_type:fairygui.GLoader;
		public m_porka:fairygui.GGroup;
		public m_txt_scoretop:fairygui.GTextField;
		public m_txt_score_mid:fairygui.GTextField;
		public m_txt_score_down:fairygui.GTextField;
		public m_imt_teshu:fairygui.GImage;
		public m_img_fanbei:fairygui.GImage;
		public m_t0:fairygui.Transition;
		public m_t1:fairygui.Transition;

		public static URL:string = "ui://jow5n9bqdu502u";

		public static createInstance():UI_PlayerPokers {
			return <UI_PlayerPokers><any>(fairygui.UIPackage.createObject("Game","PlayerPokers"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_c2 = this.getControllerAt(1);
			this.m_pork0 = <UI_Pork><any>(this.getChildAt(0));
			this.m_pork1 = <UI_Pork><any>(this.getChildAt(1));
			this.m_pork2 = <UI_Pork><any>(this.getChildAt(2));
			this.m_pork3 = <UI_Pork><any>(this.getChildAt(3));
			this.m_pork4 = <UI_Pork><any>(this.getChildAt(4));
			this.m_pork5 = <UI_Pork><any>(this.getChildAt(5));
			this.m_pork6 = <UI_Pork><any>(this.getChildAt(6));
			this.m_pork7 = <UI_Pork><any>(this.getChildAt(7));
			this.m_pork8 = <UI_Pork><any>(this.getChildAt(8));
			this.m_pork9 = <UI_Pork><any>(this.getChildAt(9));
			this.m_pork10 = <UI_Pork><any>(this.getChildAt(10));
			this.m_pork11 = <UI_Pork><any>(this.getChildAt(11));
			this.m_pork12 = <UI_Pork><any>(this.getChildAt(12));
			this.m_qiangyan = <fairygui.GGroup><any>(this.getChildAt(16));
			this.m_porka1 = <UI_Pork><any>(this.getChildAt(17));
			this.m_porka2 = <UI_Pork><any>(this.getChildAt(18));
			this.m_porka3 = <UI_Pork><any>(this.getChildAt(19));
			this.m_porka4 = <UI_Pork><any>(this.getChildAt(20));
			this.m_porka5 = <UI_Pork><any>(this.getChildAt(21));
			this.m_img_type = <fairygui.GLoader><any>(this.getChildAt(22));
			this.m_porka = <fairygui.GGroup><any>(this.getChildAt(23));
			this.m_txt_scoretop = <fairygui.GTextField><any>(this.getChildAt(24));
			this.m_txt_score_mid = <fairygui.GTextField><any>(this.getChildAt(25));
			this.m_txt_score_down = <fairygui.GTextField><any>(this.getChildAt(26));
			this.m_imt_teshu = <fairygui.GImage><any>(this.getChildAt(27));
			this.m_img_fanbei = <fairygui.GImage><any>(this.getChildAt(28));
			this.m_t0 = this.getTransitionAt(0);
			this.m_t1 = this.getTransitionAt(1);
		}
	}
}