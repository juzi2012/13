/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_PlayerHead extends fairygui.GComponent {

		public m_ctrlPos:fairygui.Controller;
		public m_ctrlState:fairygui.Controller;
		public m_name:fairygui.GTextField;
		public m_head:fairygui.GLoader;
		public m_score:fairygui.GTextField;
		public m_pokers:UI_PlayerPokers;
		public m_img_ready:fairygui.GImage;
		public m_img_finish:fairygui.GImage;
		public m_lixian:fairygui.GTextField;
		public m_img_special:fairygui.GImage;
		public m_img_fz:fairygui.GLoader;

		public static URL:string = "ui://jow5n9bqmwp42";

		public static createInstance():UI_PlayerHead {
			return <UI_PlayerHead><any>(fairygui.UIPackage.createObject("Game","PlayerHead"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_ctrlPos = this.getControllerAt(0);
			this.m_ctrlState = this.getControllerAt(1);
			this.m_name = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_head = <fairygui.GLoader><any>(this.getChildAt(3));
			this.m_score = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_pokers = <UI_PlayerPokers><any>(this.getChildAt(5));
			this.m_img_ready = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_img_finish = <fairygui.GImage><any>(this.getChildAt(8));
			this.m_lixian = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_img_special = <fairygui.GImage><any>(this.getChildAt(10));
			this.m_img_fz = <fairygui.GLoader><any>(this.getChildAt(11));
		}
	}
}