module game {
	export class ZhanJiDetailModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.ZhanJi.UI_ZhanJiDetail.createInstance();
		}
		public get mContent():UI.ZhanJi.UI_ZhanJiDetail{
			return this.content as UI.ZhanJi.UI_ZhanJiDetail;
		}
		private round:Round;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80rezhz";
			if(data!=null){
				this.round = data;
			}
			this.mContent.m_btn_close.addClickListener(this.doClose,this);
			this.mContent.m_btn_sort.addClickListener(this.checkSort,this);

			this.mContent.m_txt_rid.text = "房号:"+this.round.Rd;
			this.mContent.m_txt_jid.text = "局数:"+this.round.Jn+"局";
			this.mContent.m_txt_time.text = Utils.timetrans(this.round.Tm*1000);
			
			for(let i:number=0;i<6;i++){
				if(this.round.jus[0].players[i]!=null){
					this.mContent["m_txt_name"+(i+1)].text = this.round.jus[0].players[i].name;
					this.mContent["m_txt_score"+(i+1)].text = "ID:"+this.round.jus[0].players[i].id.toString();
				}else{
					this.mContent["m_txt_name"+(i+1)].text = "";
					this.mContent["m_txt_score"+(i+1)].text = "";
				}
			}
			for(let item in this.round.playerFinalData){
				if(this.round.playerFinalData[item].uid ==GameModel.ins.uid){
					if(this.round.playerFinalData[item].sc>0){
						this.mContent.m_img_win.url = "ui://lxifvkdup0d65";
					}else if(this.round.playerFinalData[item].sc==0){
						this.mContent.m_img_win.url = "ui://lxifvkdup0d63";
					}else{
						this.mContent.m_img_win.url = "ui://lxifvkdup0d64";
					}
					break;
				}
			}

			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=this.round.jus.length;

			super.preShow(data);

		}
		public show(data?:any):void
		{
			
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let mailItem:ZhanJiDetailItem = _item as ZhanJiDetailItem;
			mailItem.setData(this.round.jus[index]);
		}
		private checkSort():void
		{
			if(this.round.jiesanId!=""){
				ModuleMgr.ins.showModule(ModuleEnum.JIESANSORT,this.round);
			}else{
				AlertUtil.floatMsg("房间没有解散");
			}
		}
		public onCloseClick():void{
			ModuleMgr.ins.closeModule(ModuleEnum.ZHANJI);
			super.onCloseClick();
		}
		private doClose():void
		{
			ModuleMgr.ins.closeModule(ModuleEnum.ZHANJIDETAIL);
		}
	}
}