module game {
	export class PreLoadingModule extends Module{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.PreLoading.UI_PreLoading.createInstance();
		}
		public get mContent():UI.PreLoading.UI_PreLoading{
			return this.content as UI.PreLoading.UI_PreLoading;
		}
		private nowPer:number=0;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {

			this.preShowCpl();
		}
		public show(data?:any):void
		{
			super.show(data);
			App.TimerManager.doFrame(1,0,this.updateBar,this);
			
		}
		private updateBar():void
		{
			this.nowPer+=2;
			if(this.nowPer>=50){
				this.nowPer=50;
			}
			this.mContent.m_img.x = this.mContent.m_bar.x-5+(this.nowPer/50)*(this.mContent.m_bar.width-80);
			this.mContent.m_bar.max=50;
			this.mContent.m_bar.value=this.nowPer;
		}
		public preClose(data?: any): void {
			App.TimerManager.remove(this.updateBar,this);
			this.preCloseCpl();
		}		
	}
}