module game {
	export class UserInfoPanel extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Game.UI_UserInfo.createInstance();
		}
		public get mContent():UI.Game.UI_UserInfo{
			return this.content as UI.Game.UI_UserInfo;
		}
		private user:User;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.user = data as User;
			this.mContent.m_btn_close.addClickListener(this.onClose,this);
			this.mContent.m_btn_zadan.addClickListener(this.onZaDan,this);
			this.mContent.m_btn_flower.addClickListener(this.onFlower,this);
			this.mContent.m_txt_name.text = '昵称:'+this.user.name;
			this.mContent.m_txt_id.text = 'ID'+this.user.uid;
			this.mContent.m_txt_score.text ='积分:'+ this.user.sc.toString();
			this.mContent.m_txt_pos.text = '上海市徐汇区888号';
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onZaDan():void
		{

		}
		private onFlower():void
		{

		}
		private onClose():void
		{
			ModuleMgr.ins.closeModule(ModuleEnum.USERINFO);
		}
	}
}