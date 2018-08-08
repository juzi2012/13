module game {
	export class ChatModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Game.UI_ChatModule.createInstance();
		}
		public get mContent():UI.Game.UI_ChatModule{
			return this.content as UI.Game.UI_ChatModule;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80g2wj1e";
			super.preShow(data);
			App.MessageCenter.addListener(MsgEnum.GAME_CHAT,this.onReceive,this)
			this.mContent.m_ctrl.selectedIndex=1;
			this.mContent.m_btn_send.addClickListener(this.onSend,this);
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=ChatModel.ins.arr.length;
			if(ChatModel.ins.arr.length>0){
				this.mContent.m_list.scrollToView(ChatModel.ins.arr.length-1);
			}
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		public onSend():void
		{
			if(this.mContent.m_btn_input.text!=""){
				ServerEngine.sendChat(this.mContent.m_btn_input.text);
				this.mContent.m_btn_input.text=""
			}
		}
		private onReceive(msg:T2C_Chat):void
		{
			let item:ChatItem = this.mContent.m_list.addItemFromPool(ChatItem.URL) as ChatItem;
			item.setData(msg);
			this.mContent.m_list.scrollToView(ChatModel.ins.arr.length-1<0?0:ChatModel.ins.arr.length-1);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let mailItem:ChatItem = _item as ChatItem;
			mailItem.setData(ChatModel.ins.arr[index]);
		}
		public preClose(data?: any):void {
			App.MessageCenter.removeListener(MsgEnum.GAME_CHAT,this.onReceive,this);
			this.preCloseCpl();
		}
	}
}