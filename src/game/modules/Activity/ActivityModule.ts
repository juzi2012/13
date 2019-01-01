module game {
	export class ActivityModule extends PopModuleView{
		public constructor() {
			super();
		}
		private activityData:Array<any>;
		public initContent():void
		{
			this.content = UI.Activity.UI_Activity.createInstance();
		}
		public get mContent():UI.Activity.UI_Activity{
			return this.content as UI.Activity.UI_Activity;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fak";
			this.activityData = RES.getRes("activity_json");
			if(this.activityData!=null&&this.activityData.length>0){
				this.mContent.m_c1.selectedIndex=0;
				this.mContent.m_list.itemRenderer = this.RenderListItem;
				this.mContent.m_list.callbackThisObj=this;
				this.mContent.m_list.addEventListener(fairygui.ItemEvent.CLICK,this.onItemClick,this);
				this.mContent.m_list.numItems = this.activityData.length;
				this.setContent(this.activityData[0]);
				this.mContent.m_list.selectedIndex=0;
			}else{
				this.mContent.m_c1.selectedIndex=1;
			}
			
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:ActivityRender = _item as ActivityRender;
			item.setData(this.activityData[index]);
		}
		private onItemClick(evt:fairygui.ItemEvent):void
		{
			let data:any = (evt.itemObject as ActivityRender).m_data;
			this.setContent(data);
		}
		private setContent(data:any):void
		{
			this.mContent.m_txt_name.text = data.title;
			this.mContent.m_txt_content.text = data.content;
			this.mContent.m_txt_time.text = data.time;
		}
	}
}