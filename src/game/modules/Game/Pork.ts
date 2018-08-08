module game {
	export class Pork extends UI.Game.UI_Pork{
		public constructor() {
			super()
			this.touchable=true;
		}
		public vo:PorkVO;
		public selectState:boolean=false;
		public setData(vo:PorkVO):void
		{
			this.vo = vo;
			this.m_txt1.font=this.vo.font;
			this.m_txt2.font=this.vo.font;
			this.m_txt_type1.text = String(this.vo.type);
			this.m_txt_type2.text = String(this.vo.type);
			this.m_txt1.text = this.vo.showStr;
			this.m_txt2.text = this.vo.showStr;
			this.m_ctrlstate.selectedIndex=1;
			if(this.vo.type==5){
				this.m_txt1.text='';
				this.m_txt2.text='';
				this.m_img_joke.visible=true;
			}else{
				this.m_img_joke.visible=false;
			}
			this.resetState();
		}
		public changeSelectState():void{
			this.selectState = !this.selectState;
			if(this.selectState==true){
				this.y = -30;
			}else{
				this.y = 0;
			}
		}
		public resetState():void{
			this.selectState=false;
			this.y=0;
		}
		public showResult(vo:PorkVO):void
		{
			this.vo = vo;
			this.m_txt1.font=this.vo.font;
			this.m_txt2.font=this.vo.font;
			this.m_txt_type1.text = String(this.vo.type);
			this.m_txt_type2.text = String(this.vo.type);
			this.m_txt1.text = this.vo.showStr;
			this.m_txt2.text = this.vo.showStr;
			this.m_ctrlstate.selectedIndex=1;
			if(this.vo.type==5){
				this.m_txt1.text='';
				this.m_txt2.text='';
				this.m_img_joke.visible=true;
			}else{
				this.m_img_joke.visible=false;
			}
		}
	}
}