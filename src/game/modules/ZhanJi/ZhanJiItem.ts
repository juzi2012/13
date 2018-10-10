module game {
	export class ZhanJiItem extends UI.ZhanJi.UI_ZhanJiItem{
		public constructor() {
			super();
			this.addClickListener(this.onClick,this);
		}
		public data:Round;
		public users:Array<ZhanJiUser>;
		public maxScore:number=0;
		public setData(value:Round):void
		{
			this.data = value;
			this.users = [];
			this.m_txt_rid.text = "房号:"+this.data.Rd;
			this.m_txt_jushu.text = "局数:"+this.data.Jn;
			this.m_txt_time.text = Utils.timetrans(this.data.Tm*1000);
			for(let item in this.data.playerFinalData){
				let user:ZhanJiUser = new ZhanJiUser();
				user.uid = this.data.playerFinalData[item].uid;
				user.uname = this.data.playerFinalData[item]['name'];
				user.sc = this.data.playerFinalData[item]['sc'];
				if(user.uid ==GameModel.ins.uid){
					if(user.sc>0){
						this.m_img_result.url = "ui://lxifvkdup0d65";
					}else if(user.sc==0){
						this.m_img_result.url = "ui://lxifvkdup0d63";
					}else{
						this.m_img_result.url = "ui://lxifvkdup0d64";
					}
				}
				if(user.sc>this.maxScore){
					this.maxScore = user.sc;
				}
				this.users.push(user);
			}
			// this.users.sort((a,b)=>{
			// 	return b.sc-a.sc;
			// })
			this.m_list.itemRenderer = this.RenderListItem;
			this.m_list.callbackThisObj=this;
			this.m_list.numItems=this.users.length;
			this.m_btn_check.addClickListener(this.replay,this);
		}
		private replay(evt:any):void
		{
			evt.stopImmediatePropagation();
			if(this.data.jus.length>0){
				ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN, ModuleEnum.REPLAY,this.data);
			}else{
				AlertUtil.floatMsg("牌局数据有问题！")
			}
			
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:ZhanJiItemUserItem = _item as ZhanJiItemUserItem;
			item.setData(this.users[index],this.maxScore);
		}
		private onClick(evt:any):void
		{
			if(this.data.jus.length>0){
				ModuleMgr.ins.showModule(ModuleEnum.ZHANJIDETAIL,this.data);
			}else{
				AlertUtil.floatMsg("牌局数据有问题！")
			}
		}
	}
	export class ZhanJiUser{
		public constructor() {
			
		}
		public uid:string;
		public uname:string;
		public sc:number;

	}
}