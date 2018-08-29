module game {
	export class ZhanJiDetailItem extends UI.ZhanJi.UI_ZhanJiDetailItem{
		public constructor() {
			super()
		}
		public setData(ju:JuModel):void
		{
			this.m_txt_0.text = ju.juNum.toString();
			for(let i:number=0;i<6;i++){
				if(ju.players[i]!=null){
					let p:JuPlayer = ju.players[i];
					if(p.sc>0){
						this["m_txt_"+(i+1)].text = "+"+p.sc.toString();
					}else{
						this["m_txt_"+(i+1)].text = p.sc.toString();
					}
				}else{
					this["m_txt_"+(i+1)].text = "";
				}
			}
		}
	}
}