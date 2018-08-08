module game {
	export class ZhanJiItemUserItem extends UI.ZhanJi.UI_ZhanJiItemUserItem{
		public constructor() {
			super()
		}
		public setData(data:ZhanJiUser,maxScore:number):void
		{
			if(data.sc==maxScore){
				this.m_img_win.visible=true;
			}else{
				this.m_img_win.visible=false;
			}
			this.m_txt_name.text = data.uname;
			this.m_txt_score.text = data.sc.toString();
			if(data.sc<0){
				this.m_txt_score.color = 0x4b8b39;
			}else{
				this.m_txt_score.color = 0xd32a27;
			}
		}
	}
}