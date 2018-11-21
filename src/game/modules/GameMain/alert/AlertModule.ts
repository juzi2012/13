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
		/**
		 * 初始化模块自适应
		 * @param layer 该模块添加的图层
		 * @param isConfigVoAutoSize 模块配置是否自适应
		 */
		public initAutoSize(layer:UILayer, isConfigVoAutoSize:boolean):void
		{
			if(this.content && isConfigVoAutoSize){
				this.content.x = layer.width / 2 - this.content.width / 2+this.vo.offsiteX;
				this.content.y = layer.height / 2 - this.content.height / 2+this.vo.offsiteY;
				this.content.addRelation(layer, fairygui.RelationType.Center_Center);
			}
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