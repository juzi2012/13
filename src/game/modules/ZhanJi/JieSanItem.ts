module game {
	export class JieSanItem extends UI.ZhanJi.UI_JieSanItem{
		public constructor() {
			super()
		}
		public setData(value:JieSanPlayer){
			this.m_txt_name.text = value.name;
			if(value.order==0){
				this.m_txt_sort.text = "发起者";
			}else{
				this.m_txt_sort.text = "同意"+value.order;
			}
		}
	}
}