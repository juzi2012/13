module game {
	export class ChatItem extends UI.Game.UI_ChatItem{
		public constructor() {
			super()
		}
		public setData(value:T2C_Chat):void{
			this.m_txt_time.text = value.time;
			this.m_txt_content.text = value.uname+":"+value.str;
		}
	}
}