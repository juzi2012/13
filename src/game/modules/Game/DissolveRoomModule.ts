module game {
	export class DissolveRoomModule extends PopModuleView{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.Game.UI_DissolveRoom.createInstance();
		}
		public get mContent():UI.Game.UI_DissolveRoom{
			return this.content as UI.Game.UI_DissolveRoom;
		}
		private msg:T2C_AskForDismiss;
		private curHeadAry:Array<DissolveHead>;
		public count:number=0;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_btn_close.visible=false;
			this.msg = data as T2C_AskForDismiss;
			this.curHeadAry = [];
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=GameModel.ins.roomModel.users.length;
			this.mContent.m_btn_accept.addClickListener(this.accetpDismiss,this);
			this.mContent.m_btn_refuse.addClickListener(this.refuseDismiss,this);
			
			App.TimerManager.doTimer(1000,this.msg.time,this.timeUp,this);
			if(this.msg.uid==GameModel.ins.uid){//是自己发起的，不显示按钮
				this.mContent.m_btn_accept.visible=false;
				this.mContent.m_btn_refuse.visible=false;
			}
			App.MessageCenter.addListener(MsgEnum.GAME_ANSWER_FOR_DISMISS,this.otherPlayerAnswer,this);
			super.preShow(data);
		}
		private timeUp():void
		{
			this.count++;
			if(this.count>180){
				this.count=180;
				App.TimerManager.remove(this.timeUp,this);
			}
			let m:number = parseInt(((this.msg.time-this.count)/60).toString());
			let s:number = (this.msg.time-this.count)%60;
			this.mContent.m_txt_count.text = "倒计时:"+m+":"+(s>10?s:("0"+s));
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onCloseHandle():void
		{

		}
		private accetpDismiss():void
		{
			ServerEngine.sendAcceptOrRefuseDismiss(1);
			this.mContent.m_btn_accept.visible=false;
			this.mContent.m_btn_refuse.visible=false;
			
		}
		private refuseDismiss():void
		{
			ServerEngine.sendAcceptOrRefuseDismiss(0);
			this.mContent.m_btn_accept.visible=false;
			this.mContent.m_btn_refuse.visible=false;
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:DissolveHead = _item as DissolveHead;
			item.setData(this.msg.uid,GameModel.ins.roomModel.users[index]);
			this.curHeadAry.push(item);
		}
		private otherPlayerAnswer(msg:T2C_AnswerForDismiss):void
		{
			let playerHead:DissolveHead = this.getPlayerById(msg.uid);
			if(playerHead!=null){
				playerHead.setState(msg.act);
			}
			if(msg.uid!=GameModel.ins.uid&&msg.act==0){
				AlertUtil.floatMsg(GameModel.ins.roomModel.getUserById(msg.uid).name+"不同意解散房间.")
			}
		}
		private getPlayerById(uid:string):DissolveHead{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				if(this.curHeadAry[i].user.uid==uid){
					return this.curHeadAry[i];
				}
			}
			return null;
		}
		public preClose(data?: any):void {
			App.MessageCenter.removeListener(MsgEnum.GAME_ANSWER_FOR_DISMISS,this.otherPlayerAnswer,this);
			App.TimerManager.remove(this.timeUp,this);
			this.preCloseCpl();
		}
	}
}