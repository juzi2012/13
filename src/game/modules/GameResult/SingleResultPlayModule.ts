module game {
	export class SingleResultPlayModule extends Module{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.Result.UI_SingleResult.createInstance();
		}
		public get mContent():UI.Result.UI_SingleResult{
			return this.content as UI.Result.UI_SingleResult;
		}
		private round:Round;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.round = data as Round;
			this.mContent.m_btn_continue.addClickListener(this.onContinue,this);
			this.mContent.m_btn_check.addClickListener(this.onCheck,this);

			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=this.round.jus[this.round.cur].players.length;

			this.mContent.m_txt_roominfo.text = this.round.Fc+"人 "+(this.round.cur+1)+"/"+this.round.Jn+"局 ";
			this.mContent.m_txt_time.text = "";//Utils.timetrans(new Date().getTime());
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onContinue():void
		{
			if(this.round.cur==this.round.Jn-1){//全部结束了，就显示结果
				ModuleMgr.ins.changeScene(ModuleEnum.REPLAY,ModuleEnum.GAME_ALL_RESULT_PLAY,this.round);
			}else{
				this.round.cur++;
				App.MessageCenter.dispatch(MsgEnum.PLAY_NEXT)
				ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY);
			}
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:SingleResultItem = _item as SingleResultItem;
			item.setDataPlay(this.round.jus[this.round.cur].players[index]);
		}
		private onCheck():void
		{

		}
	}
}