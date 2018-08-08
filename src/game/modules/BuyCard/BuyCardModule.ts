module game {
	export class BuyCardModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.BuyCard.UI_BuyCard.createInstance();
		}
		public get mContent():UI.BuyCard.UI_BuyCard{
			return this.content as UI.BuyCard.UI_BuyCard;
		}
		private code:string="";
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.mContent.m_btn_close.addClickListener(this.onCloseClick,this);
			this.mContent.m_txt_input.addEventListener(egret.TextEvent.CHANGE,this.inputHandle,this);
			this.mContent.m_txt_input.alpha=0;
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private inputHandle(evt:egret.TextEvent):void
		{
			this.code = this.mContent.m_txt_input.text;//this.code+(evt.currentTarget as egret.TextField).text
			this.code = this.code.substr(0,6);
			// this.mContent.m_txt_input.text="";
			let strArr:Array<string> = this.code.split("");
			for(let i:number=0;i<6;i++){
				if(strArr[i]!=null&&strArr[i]!=""){
					this.mContent['m_txt_input'+(i+1)].text = strArr[i];
				}else{
					this.mContent['m_txt_input'+(i+1)].text="";
				}
			}
		}
	}
}