module game {
	export class MailListItem extends UI.Mail.UI_MailItem{
		public constructor() {
			super()
		}
		public setData():void
		{
			this.m_btn_read.addClickListener(this.OpenDetail,this);
		}
		public OpenDetail():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.MAIL_DETAIL)
		}
	}
}