module game {
	export class ChatYuSheItem extends UI.Game.UI_ChatYuSheItem{
		public constructor() {
			super();
		}
		public str:string;
		public index:number;
		public setData(value:string,index:number):void{
			this.index = index;
			this.str = value;
			this.m_txt_content.text = this.str;
		}
	}
}