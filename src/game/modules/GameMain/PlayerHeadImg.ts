module game {
	export class PlayerHeadImg extends UI.MainUI.UI_HeadImage{
		public constructor() {
			super()
		}
		public setURL(url:string):void
		{
			if(App.GlobalData.IsDebug==false){
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