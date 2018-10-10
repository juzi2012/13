module game {
	export class ChatItem extends UI.Game.UI_ChatItem{
		public constructor() {
			super()
		}
		public setData(value:T2C_Chat):void{
			this.m_txt_time.text = value.time;
			if(value.str.slice(0,3)=="%%-"&&value.str.slice(value.str.length-3,value.str.length)=="-%%"){
				this.m_txt_content.font = "ui://jow5n9bqd8n86l";
				this.m_txt_content.text = value.str.slice(3,value.str.length-3);
			}else{
				this.m_txt_content.font = "";
				this.m_txt_content.text = value.str;
			}
			this.m_txt_name.text = value.uname+":";
		}
	}
}