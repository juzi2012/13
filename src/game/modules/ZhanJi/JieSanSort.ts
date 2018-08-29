module game {
	export class JieSanSort extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.ZhanJi.UI_JieSanSort.createInstance();
		}
		public get mContent():UI.ZhanJi.UI_JieSanSort{
			return this.content as UI.ZhanJi.UI_JieSanSort;
		}
		private round:Round;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.mContent.m_btn_close.addClickListener(this.doClose,this);

			this.round = data;
			
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.numItems=this.round.jus.length;

			super.preShow(data);

		}

		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let mailItem:JieSanItem = _item as JieSanItem;
			mailItem.setData(this.round.jesanArr[index]);
		}

		public show(data?:any):void
		{
			super.show(data);
		}
		private doClose():void
		{
			ModuleMgr.ins.closeModule(ModuleEnum.JIESANSORT);
		}
	}
}