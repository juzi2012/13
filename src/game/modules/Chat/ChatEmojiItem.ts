module game {
	export class ChatEmojiItem  extends UI.Game.UI_EmojiItem{
		public constructor() {
			super()
		}
		public vv:string = ""
		public setData(value:string):void
		{
			this.vv = value;
			this.m_img.text = value;
		}
	}
}