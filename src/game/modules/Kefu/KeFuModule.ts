module game {
	export class KeFuModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Kefu.UI_KeFu.createInstance();
		}
		public get mContent():UI.Kefu.UI_KeFu{
			return this.content as UI.Kefu.UI_KeFu;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fam";
			this.mContent.m_btn_ok.addClickListener(this.onCloseClick,this);
			this.mContent.m_btn_copy.addClickListener(this.onCopy,this);
			super.preShow(data);
		}
		private onCopy():void
		{
			let cb:boolean = new Clipboard().setText("baise168168");
			if(cb){
				AlertUtil.floatMsg("复制成功");
			}else{
				AlertUtil.floatMsg("复制失败");
			}
		}
		public show(data?:any):void
		{
			super.show(data);
		}
	}
}