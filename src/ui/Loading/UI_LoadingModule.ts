/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Loading {

	export class UI_LoadingModule extends fairygui.GComponent {

		public m_bar:fairygui.GProgressBar;
		public m_txt_name:fairygui.GTextInput;
		public m_txt:fairygui.GGroup;
		public m_btn_start:fairygui.GButton;
		public m_img:fairygui.GImage;

		public static URL:string = "ui://icciepj5kyt83";

		public static createInstance():UI_LoadingModule {
			return <UI_LoadingModule><any>(fairygui.UIPackage.createObject("Loading","LoadingModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bar = <fairygui.GProgressBar><any>(this.getChildAt(1));
			this.m_txt_name = <fairygui.GTextInput><any>(this.getChildAt(3));
			this.m_txt = <fairygui.GGroup><any>(this.getChildAt(4));
			this.m_btn_start = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_img = <fairygui.GImage><any>(this.getChildAt(8));
		}
	}
}