/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Game {

	export class UI_PlayerHead extends fairygui.GComponent {

		public m_ctrlPos:fairygui.Controller;
		public m_ctrlState:fairygui.Controller;
		public m_name:fairygui.GTextField;
		public m_score:fairygui.GTextField;
		public m_pokers:UI_PlayerPokers;
		public m_head:fairygui.GComponent;
		public m_img_ready:fairygui.GImage;
		public m_img_finish:fairygui.GImage;
		public m_lixian:fairygui.GTextField;
		public m_img_special:fairygui.GImage;
		public m_img_fz:fairygui.GLoader;
		public m_chatbg1:fairygui.GImage;
		public m_chatbg2:fairygui.GImage;
		public m_chat_txt:fairygui.GTextField;
		public m_chat_txt_emoji:fairygui.GTextField;
		public m_chat:fairygui.GGroup;
		public m_flower:fairygui.GImage;
		public m_boom1:fairygui.GImage;
		public m_boom2:fairygui.GImage;
		public m_t0:fairygui.Transition;
		public m_t1:fairygui.Transition;

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
			this.m_score = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_pokers = <UI_PlayerPokers><any>(this.getChildAt(4));
			this.m_head = <fairygui.GComponent><any>(this.getChildAt(5));
			this.m_img_ready = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_img_finish = <fairygui.GImage><any>(this.getChildAt(8));
			this.m_lixian = <fairygui.GTextField><any>(this.getChildAt(9));
			this.m_img_special = <fairygui.GImage><any>(this.getChildAt(10));
			this.m_img_fz = <fairygui.GLoader><any>(this.getChildAt(11));
			this.m_chatbg1 = <fairygui.GImage><any>(this.getChildAt(12));
			this.m_chatbg2 = <fairygui.GImage><any>(this.getChildAt(13));
			this.m_chat_txt = <fairygui.GTextField><any>(this.getChildAt(14));
			this.m_chat_txt_emoji = <fairygui.GTextField><any>(this.getChildAt(15));
			this.m_chat = <fairygui.GGroup><any>(this.getChildAt(16));
			this.m_flower = <fairygui.GImage><any>(this.getChildAt(17));
			this.m_boom1 = <fairygui.GImage><any>(this.getChildAt(18));
			this.m_boom2 = <fairygui.GImage><any>(this.getChildAt(19));
			this.m_t0 = this.getTransitionAt(0);
			this.m_t1 = this.getTransitionAt(1);
		}
	}
}