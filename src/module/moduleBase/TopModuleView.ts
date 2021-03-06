module game {
	export class TopModuleView extends Module{
		public constructor() {
			super();
		}

		public showOffSiteX:number=0;
		public showOffSiteY:number=0;
		/**
		 * 初始化模块自适应
		 * @param layer 该模块添加的图层
		 * @param isConfigVoAutoSize 模块配置是否自适应
		 */
		public initAutoSize(layer:UILayer, isConfigVoAutoSize:boolean):void
		{
			if(this.content && isConfigVoAutoSize){
				this.content.x = layer.width / 2 - this.content.width / 2+this.showOffSiteX;
				this.content.y = layer.height / 2 - this.content.height / 2+this.showOffSiteY;
				this.content.addRelation(layer, fairygui.RelationType.Center_Center);
			}
		}
	}
}