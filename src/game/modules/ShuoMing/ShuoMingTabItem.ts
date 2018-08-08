module game {
	export class ShuoMingTabItem extends UI.ShuoMing.UI_ShuoMingTab{
		public constructor() {
			super()
		}
		public setData(index:number):void
		{
			switch(index){
				case 0:
				this.m_name.text = "十三水";
				break;
				case 1:
				this.m_name.text = "加一色十三水";
				break;
				case 2:
				this.m_name.text = "大小王十三水";
				break;
				case 3:
				this.m_name.text = "六人十三水";
				break;
				case 4:
				this.m_name.text = "纯一色十三水";
				break;
			}
		}
	}
}