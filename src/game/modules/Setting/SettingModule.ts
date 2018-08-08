module game {
	export class SettingModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Setting.UI_Setting.createInstance();
		}
		public get mContent():UI.Setting.UI_Setting{
			return this.content as UI.Setting.UI_Setting;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80h5w5w";
			this.mContent.m_btn_help.addClickListener(this.onHelp,this);
			this.mContent.m_btn_music.addClickListener(this.onMusic,this);
			this.mContent.m_btn_sound.addClickListener(this.onSound,this);
			this.mContent.m_btn_bg1.addClickListener(this.onChooseBg,this);
			this.mContent.m_btn_bg2.addClickListener(this.onChooseBg,this);
			this.mContent.m_btn_bg3.addClickListener(this.onChooseBg,this);

			this.mContent.m_DeskChooseCtrl.selectedIndex = SettingModel.ins.bg;
			this.mContent.m_btn_music.selected = !SettingModel.ins.music;
			this.mContent.m_btn_sound.selected = !SettingModel.ins.sound;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onHelp():void
		{
			AlertUtil.floatMsg('请联系客服解决！')
			// ModuleMgr.ins.showModule(ModuleEnum.GAME_HELP);
		}
		private onMusic():void
		{
			SettingModel.ins.setMusic();
		}
		private onSound():void
		{
			SettingModel.ins.setSound();
		}
		private onChooseBg():void
		{
			SettingModel.ins.setBg(this.mContent.m_DeskChooseCtrl.selectedIndex);
		}
	}
}