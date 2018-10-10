module game {
	export class ChatYuSheItem extends UI.Game.UI_ChatYuSheItem{
		public constructor() {
			super();
		}
		public str:string;
		public setData(value:string):void{
			this.str = value;
			this.m_txt_content.text = this.str;
		}
	}
}