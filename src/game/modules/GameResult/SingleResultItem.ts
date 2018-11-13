module game {
	export class SingleResultItem extends UI.Result.UI_SingleResultItem{
		public constructor() {
			super()
		}
		private porkVOArr:Array<PorkVO>;

		private juplayer:JuPlayer;
		public setData(data:ResultCard):void
		{
			this.porkVOArr = data.cards;
			// this.m_head.url="http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
			this.m_txt_name.text = GameModel.ins.roomModel.getUserById(data.uid).name;
			this.m_txt_id.text = "ID:"+data.uid;
			(this.m_head as PlayerHeadImg1).setURL(GameModel.ins.roomModel.getUserById(data.uid).avatar); 
			let score:string = data.sc.toString();
			if(data.sc>0){
				score="+"+score;
			}
			this.m_txt_score.text = score;
			this.m_list_top.itemRenderer = this.RenderListItem1;
			this.m_list_top.callbackThisObj=this;
			this.m_list_top.numItems=3;//this.porkVOArr.length;
			this.m_list_mid.itemRenderer = this.RenderListItem2;
			this.m_list_mid.callbackThisObj=this;
			this.m_list_mid.numItems=5;//this.porkVOArr.length;
			this.m_list_down.itemRenderer = this.RenderListItem3;
			this.m_list_down.callbackThisObj=this;
			this.m_list_down.numItems=5;//this.porkVOArr.length;
		}
		public setDataPlay(data:JuPlayer):void
		{
			this.juplayer = data;
			// this.m_head.url="http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
			this.m_txt_name.text = this.juplayer.name;
			this.m_txt_id.text = "ID:"+this.juplayer.id;
			(this.m_head as PlayerHeadImg1).setURL(this.juplayer.avatar);
			let score:string = this.juplayer.sc.toString();
			if(data.sc>0){
				score="+"+score;
			}
			this.m_txt_score.text = score;
			this.m_list_top.itemRenderer = this.RenderListItem11;
			this.m_list_top.callbackThisObj=this;
			this.m_list_top.numItems=3;//this.porkVOArr.length;
			this.m_list_mid.itemRenderer = this.RenderListItem22;
			this.m_list_mid.callbackThisObj=this;
			this.m_list_mid.numItems=5;//this.porkVOArr.length;
			this.m_list_down.itemRenderer = this.RenderListItem33;
			this.m_list_down.callbackThisObj=this;
			this.m_list_down.numItems=5;//this.porkVOArr.length;
		}
		private RenderListItem1(index:number,_item:fairygui.GObject):void
		{
			let item:Pork = _item as Pork;
			item.setData(this.porkVOArr[index]);
		}
		private RenderListItem2(index:number,_item:fairygui.GObject):void
		{
			let item:Pork = _item as Pork;
			item.setData(this.porkVOArr[3+index]);
		}
		private RenderListItem3(index:number,_item:fairygui.GObject):void
		{
			let item:Pork = _item as Pork;
			item.setData(this.porkVOArr[8+index]);
		}
		private RenderListItem11(index:number,_item:fairygui.GObject):void
		{
			let item:Pork = _item as Pork;
			item.setData(this.juplayer.topCards[index]);
		}
		private RenderListItem22(index:number,_item:fairygui.GObject):void
		{
			let item:Pork = _item as Pork;
			item.setData(this.juplayer.midCards[index]);
		}
		private RenderListItem33(index:number,_item:fairygui.GObject):void
		{
			let item:Pork = _item as Pork;
			item.setData(this.juplayer.downCards[index]);
		}
	}
}