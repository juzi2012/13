module game {
	export class RankItem extends UI.Rank.UI_RankItem{
		public constructor() {
			super()
		}
		public setData(id:number,data:any):void
		{
			this.m_txt_name.text =data['uname'];
			this.m_txt_score.text=data['wnum']+"/"+data['num'];
			if(id==0){
				this.m_c1.selectedIndex=0;
				this.m_img_rank.url = "ui://ljka2qsxdu504";
			}else if(id==1){
				this.m_c1.selectedIndex=0;
				this.m_img_rank.url = "ui://ljka2qsxdu503";
			}else if(id==2){
				this.m_c1.selectedIndex=0;
				this.m_img_rank.url = "ui://ljka2qsxdu502";
			}else{
				this.m_c1.selectedIndex=1;
				this.m_txt_rank.text = (id+1).toString();
			}
			(this.m_head as PlayerHeadImg1).setURL(data["header"]); 
			// this.m_head.url="http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";//data['header'];
		}
	}
}