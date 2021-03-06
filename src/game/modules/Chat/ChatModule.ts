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
		private emstr:Array<string> = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"];
		private yushestr:Array<string> = ["快点吧，等的我都快疯了！",
											"你的牌那么好啊，兄弟！",
											"不要吵了，专心玩游戏吧。",
											"兄弟，不好意思啊，我先撤了。",
											"不要走，决战到天亮。",
											"唉，又被打枪了。"];
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80g2wj1e";
			super.preShow(data);
			App.MessageCenter.addListener(MsgEnum.GAME_CHAT,this.onReceive,this)
			this.mContent.m_btn_record.addClickListener(this.changeTab,this);
			this.mContent.m_btn_liaotian.addClickListener(this.changeTab,this);
			this.mContent.m_btn_biaoq.addClickListener(this.changeTab,this);

			this.mContent.m_btn_send.addClickListener(this.onSend,this);
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=ChatModel.ins.arr_his.length;
			
			this.mContent.m_listyushe.itemRenderer = this.YuSheRenderListItem;
			this.mContent.m_listyushe.callbackThisObj = this;
			this.mContent.m_listyushe.numItems = this.yushestr.length;
			this.mContent.m_listyushe.addEventListener(fairygui.ItemEvent.CLICK, this.onClickYuSheItem, this);

			this.mContent.m_list_emoji.itemRenderer = this.EmojiRenderListItem;
			this.mContent.m_list_emoji.callbackThisObj = this;
			this.mContent.m_list_emoji.numItems = 21;
			this.mContent.m_list_emoji.addEventListener(fairygui.ItemEvent.CLICK, this.onClickItem, this);
			
			this.mContent.m_ctrl.selectedIndex=1;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			if(ChatModel.ins.arr_his.length>0){
				this.mContent.m_list.scrollToView(ChatModel.ins.arr_his.length-1)
			}
			super.show(data);
		}
		private onClickYuSheItem(evt:fairygui.ItemEvent):void
		{
			let item:ChatYuSheItem = evt.itemObject as ChatYuSheItem;
			ServerEngine.sendChat(item.str);
			
			ModuleMgr.ins.closeModule(this.moduleId);
		}
		private onClickItem(evt:fairygui.ItemEvent):void
		{
			let item:ChatEmojiItem = evt.itemObject as ChatEmojiItem;
			ServerEngine.sendChat("%%-"+item.vv+"-%%");
			ModuleMgr.ins.closeModule(this.moduleId);
		}
		private changeTab():void{
			// switch(this.mContent.m_ctrl.selectedIndex){
			// 	case 0:
			// 		this.mContent.m_list.numItems=ChatModel.ins.arr_his.length;
			// 	break;
			// 	case 1:
			// 		this.mContent.m_list.numItems=ChatModel.ins.arr.length;
			// 	break;
			// 	case 2:
			// 	break;
			// }
		}
		public onSend():void
		{
			if(this.mContent.m_btn_input.text!=""){
				ServerEngine.sendChat(this.mContent.m_btn_input.text);
				this.mContent.m_btn_input.text=""
			}
			ModuleMgr.ins.closeModule(this.moduleId);
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
			switch(this.mContent.m_ctrl.selectedIndex){
				case 0:
					mailItem.setData(ChatModel.ins.arr_his[index]);
				break;
				case 1:
					mailItem.setData(ChatModel.ins.arr[index]);
				break;
			}
			
		}
		private YuSheRenderListItem(index:number,_item:fairygui.GObject):void
		{
			let str:string = this.yushestr[index];
			let yusheItem:ChatYuSheItem = _item as ChatYuSheItem;
			yusheItem.setData(str,index+1);
		}
		private EmojiRenderListItem(index:number,_item:fairygui.GObject):void
		{
			let str:string = this.emstr[index];
			let emojiItem:ChatEmojiItem = _item as ChatEmojiItem;
			emojiItem.setData(str);
		}
		public preClose(data?: any):void {
			App.MessageCenter.removeListener(MsgEnum.GAME_CHAT,this.onReceive,this);
			this.preCloseCpl();
		}
	}
}