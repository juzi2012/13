/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Result {

	export class UI_SingleResultItem extends fairygui.GComponent {

		public m_txt_score:fairygui.GTextField;
		public m_txt_name:fairygui.GTextField;
		public m_txt_id:fairygui.GTextField;
		public m_list_top:fairygui.GList;
		public m_head:fairygui.GLoader;
		public m_list_mid:fairygui.GList;
		public m_list_down:fairygui.GList;

		public static URL:string = "ui://25mni52osl2k8";

		public static createInstance():UI_SingleResultItem {
			return <UI_SingleResultItem><any>(fairygui.UIPackage.createObject("Result","SingleResultItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_txt_name = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_txt_id = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_list_top = <fairygui.GList><any>(this.getChildAt(5));
			this.m_head = <fairygui.GLoader><any>(this.getChildAt(6));
			this.m_list_mid = <fairygui.GList><any>(this.getChildAt(7));
			this.m_list_down = <fairygui.GList><any>(this.getChildAt(8));
		}
	}
}