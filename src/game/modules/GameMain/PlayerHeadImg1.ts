module game {
	export class PlayerHeadImg1 extends UI.MainUI.UI_HeadImage1{
		public constructor() {
			super()
		}
		public setURL(url:string):void
		{
			if(App.GlobalData.IsDebug!=0){
				RES.getResByUrl(url,this.loaded,this,RES.ResourceItem.TYPE_IMAGE);
			}
		}
		private loaded(evt:any):void
		{
			let texture:egret.Texture = evt;
			this.m_img.texture = texture;
		}
	}
}