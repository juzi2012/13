module game {
	export class SingleResultModule extends Module{
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
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.mContent.m_btn_continue.addClickListener(this.onContinue,this);
			this.mContent.m_btn_check.addClickListener(this.onCheck,this);

			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=GameModel.ins.roundModel.result.cards.length;

			this.mContent.m_txt_roominfo.text = GameModel.ins.roomModel.rinfo.fc==1?"房主付费":"房费AA "+GameModel.ins.roomModel.rinfo.pn+"人 "+GameModel.ins.roomModel.rinfo.nnum+"/"+GameModel.ins.roomModel.rinfo.snum+"局 ";
			this.mContent.m_txt_time.text = Utils.timetrans(new Date().getTime());
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
			GameModel.ins.roomModel.isSingleOpen=true;
		}
		private onContinue():void
		{
			if(GameModel.ins.roomModel.isAllFinish){//全部结束了，就显示结果
				ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_ALL_RESULT);
			}else{
				App.MessageCenter.dispatch(MsgEnum.GAME_BEGIN_RESTART);
				ServerEngine.sendReady();
				ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT);
			}
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:SingleResultItem = _item as SingleResultItem;
			item.setData(GameModel.ins.roundModel.result.cards[index]);
		}
		private onCheck():void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_CHECK_SINGLE);
			ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT);
		}
		public preClose(data?: any): void {
			GameModel.ins.roomModel.isSingleOpen=false;
			this.preCloseCpl();
		}
	}
}