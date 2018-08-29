/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.PreLoading {

	export class UI_PreLoading extends fairygui.GComponent {

		public m_bar:fairygui.GProgressBar;
		public m_img:fairygui.GImage;

		public static URL:string = "ui://0rnt8u4yrqsr4";

		public static createInstance():UI_PreLoading {
			return <UI_PreLoading><any>(fairygui.UIPackage.createObject("PreLoading","PreLoading"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bar = <fairygui.GProgressBar><any>(this.getChildAt(0));
			this.m_img = <fairygui.GImage><any>(this.getChildAt(2));
		}
	}
}