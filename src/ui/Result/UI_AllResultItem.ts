/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Result {

	export class UI_AllResultItem extends fairygui.GComponent {

		public m_bg:fairygui.GLoader;
		public m_txt_name:fairygui.GTextField;
		public m_txt_id:fairygui.GTextField;
		public m_txt_ju0:fairygui.GTextField;
		public m_txt_ju1:fairygui.GTextField;
		public m_txt_ju2:fairygui.GTextField;
		public m_txt_ju3:fairygui.GTextField;
		public m_txt_ju4:fairygui.GTextField;
		public m_head:fairygui.GComponent;
		public m_txt_ju5:fairygui.GTextField;
		public m_winner:fairygui.GGroup;
		public m_txt_score:fairygui.GTextField;

		public static URL:string = "ui://25mni52osl2kw";

		public static createInstance():UI_AllResultItem {
			return <UI_AllResultItem><any>(fairygui.UIPackage.createObject("Result","AllResultItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GLoader><any>(this.getChildAt(1));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_id = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_txt_ju0 = <fairygui.GTextField><any>(this.getChildAt(5));
			this.m_txt_ju1 = <fairygui.GTextField><any>(this.getChildAt(6));
			this.m_txt_ju2 = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_txt_ju3 = <fairygui.GTextField><any>(this.getChildAt(8));
			this.m_txt_ju4 = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_head = <fairygui.GComponent><any>(this.getChildAt(10));
			this.m_txt_ju5 = <fairygui.GTextField><any>(this.getChildAt(11));
			this.m_winner = <fairygui.GGroup><any>(this.getChildAt(14));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(15));
		}
	}
}