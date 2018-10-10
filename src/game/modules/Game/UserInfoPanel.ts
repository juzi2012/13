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
			(this.mContent.m_head as PlayerHeadImg1).setURL(this.user.avatar); 
			this.mContent.m_txt_name.text = '昵称:'+this.user.name;
			this.mContent.m_txt_id.text = 'ID:'+this.user.uid;
			this.mContent.m_txt_score.text ='积分:'+ this.user.sc.toString();
			this.mContent.m_txt_pos.text = '';
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onZaDan():void
		{
			if(this.user.uid==GameModel.ins.uid){
				for(let i:number=0;i<GameModel.ins.roomModel.users.length;i++){
					if(GameModel.ins.roomModel.users[i].uid!=GameModel.ins.uid){
						ServerEngine.sendFlower(GameModel.ins.roomModel.users[i].uid+"|boom");
					}
				}
			}else{
				ServerEngine.sendFlower(this.user.uid+"|boom");
			}
			this.onClose();
		}
		private onFlower():void
		{
			if(this.user.uid==GameModel.ins.uid){
				for(let i:number=0;i<GameModel.ins.roomModel.users.length;i++){
					if(GameModel.ins.roomModel.users[i].uid!=GameModel.ins.uid){
						ServerEngine.sendFlower(GameModel.ins.roomModel.users[i].uid+"|flower");
					}

				}
			}else{
				ServerEngine.sendFlower(this.user.uid+"|flower");
			}
			this.onClose();
		}
		private onClose():void
		{
			ModuleMgr.ins.closeModule(ModuleEnum.USERINFO);
		}
	}
}