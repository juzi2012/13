module game {
	export class AllResultModule extends Module{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.Result.UI_AllResult.createInstance();
		}
		public get mContent():UI.Result.UI_AllResult{
			return this.content as UI.Result.UI_AllResult;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.mContent.m_btn_back.addClickListener(this.onBack,this);
			this.mContent.m_btn_share.addClickListener(this.onShare,this);
			this.mContent.m_txt_roomid.text="房间:"+GameModel.ins.roomModel.rid;
			this.mContent.m_txt_info.text = GameModel.ins.roomModel.rinfo.fc==1?"房主付费":"房费AA "+GameModel.ins.roomModel.rinfo.pn+"人 "+GameModel.ins.roomModel.rinfo.snum+"局 ";

			this.mContent.m_txt_time.text = Utils.timetrans(new Date().getTime());

			super.preShow(data);
		}
		public show(data?:any):void
		{
			App.SoundUtils.playSound("over_mp3",0,1);
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=GameModel.ins.roomModel.jieSuanAll.length;
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:AllResultItem = _item as AllResultItem;
			item.setData(index,GameModel.ins.roomModel.jieSuanAll[index]);
		}
		private onBack():void
		{
			GameModel.ins.disMissRoom();
			ModuleMgr.ins.changeScene(ModuleEnum.GAME_SINGLE_RESULT,ModuleEnum.GAME_MAIN);
		}
		private onShare():void
		{

		}
	}
}