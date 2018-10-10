module game {
	export class AllResultPlayModule extends Module{
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
		private round:Round;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.round = data as Round;
			this.mContent.m_btn_back.addClickListener(this.onBack,this);
			this.mContent.m_btn_share.addClickListener(this.onShare,this);
			this.mContent.m_txt_roomid.text="房间:"+this.round.Rd;
			this.mContent.m_txt_info.text = this.round.Fc+"人 ";
			// this.mContent.m_c1.selectedIndex=1;
			// this.mContent.m_txt_time.text = Utils.timetrans(new Date().getTime());

			super.preShow(data);
		}
		public show(data?:any):void
		{
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=this.round.playerFinalData.length;
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:AllResultItem = _item as AllResultItem;
			item.setDataPlay(index,this.round);
		}
		private onBack():void
		{
			ModuleMgr.ins.changeScene(ModuleEnum.GAME_SINGLE_RESULT,ModuleEnum.GAME_MAIN);
		}
		/**
		 * 点击分享截屏按钮
		 * Click the button
		 */
		private onShare() {
			var renderTexture = new egret.RenderTexture();
			renderTexture.drawToTexture(this.mContent.displayObject);//渲染到临时画布
			var divImage = document.getElementById("divImage");//获取DIV
			var shareImage: HTMLImageElement = document.getElementById("shareImage") as HTMLImageElement;//获取Image标签		
			shareImage.src = renderTexture.toDataURL('image/jpeg');//把数据赋值给Image
			divImage.style.display = "block";//显示DIV
		}
	}
}