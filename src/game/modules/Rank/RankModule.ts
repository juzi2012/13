module game {
	export class RankModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Rank.UI_RankModule.createInstance();
		}
		public get mContent():UI.Rank.UI_RankModule{
			return this.content as UI.Rank.UI_RankModule;
		}
		private result:Array<any>;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80du5019";
			this.mContent.m_list.itemRenderer = this.RenderListItem;
			this.mContent.m_list.callbackThisObj=this;
			this.mContent.m_list.setVirtual();
			HttpAPI.HttpGET("http://"+App.GlobalData.SocketServer+":8883/rank",{'uid':GameModel.ins.uid},this.onCallBack,this.onError,this);
		}
		
		private onCallBack(evt:egret.Event):void
		{
			this.preShowCpl();
			let callBackJson:any = JSON.parse(evt.target.response);
			
			if(callBackJson.err==""){
				this.result = callBackJson.data;
				
				this.mContent.m_list.numItems=this.result.length;
				
			}else{
				console.log(callBackJson.err);
			}
			this.mContent.m_txt_name.text = GameModel.ins.uname;
			this.mContent.m_img_outrank.visible=true;
			for(let i:number =0;i<this.result.length;i++){
				if(this.result[i]['uid']==GameModel.ins.uid){
					this.mContent.m_img_outrank.visible=false;
					let rankTxt:string = (i+1).toString();
					this.mContent.m_txt_rank.text = "第"+rankTxt+"名";
					this.mContent.m_txt_name.text = this.result[i]['uname'];
					this.mContent.m_txt_score.text = this.result[i]['wnum']+"/"+this.result[i]['num'];
					break;
				}
			}
			(this.mContent.m_head as PlayerHeadImg1).setURL(GameModel.ins.avatar); 
		}
		private onError(evt:egret.Event):void
		{

		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private RenderListItem(index:number,_item:fairygui.GObject):void
		{
			let item:RankItem = _item as RankItem;
			item.setData(index,this.result[index]);
		}
	}
}