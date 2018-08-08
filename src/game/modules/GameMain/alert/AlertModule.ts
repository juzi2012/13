module game {
	export class AlertModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Base.UI_SimpleAlert.createInstance();
		}
		public get mContent():UI.Base.UI_SimpleAlert{
			return this.content as UI.Base.UI_SimpleAlert;
		}
		public vo:AlertMsgVO;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.vo = data as AlertMsgVO;
			this.mContent.m_content.text = this.vo.content;
			this.mContent.m_btn_ok.addClickListener(this.onOkClick,this);
			this.mContent.m_btn_cancel.addClickListener(this.onCancelClick,this);
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onOkClick():void
		{
			if(this.vo.handleYes!=null){
				this.vo.handleYes.run();
			}
			ModuleMgr.ins.closeModule(this.moduleId);
		}
		private onCancelClick():void
		{
			if(this.vo.handleNo!=null){
				this.vo.handleNo.run();
			}
			ModuleMgr.ins.closeModule(this.moduleId);
		}
	}
}