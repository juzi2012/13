class TopModuleLayer extends UILayer {
	public constructor() {
		super();

		this.cover = new fairygui.GGraph();
		this.cover.touchable = true;
		this.drawCover();
		App.EventCenter.addListener(egret.Event.RESIZE,this.onStageResize,this);
	}

	protected onStageResize(e:core.EventData):void
	{
		this.drawCover();
	}

	private cover:fairygui.GGraph;

	private drawCover():void
	{
		this.cover.graphics.clear();
		this.cover.graphics.beginFill(0x000000, 0.2);
		this.cover.graphics.drawRect(0, 0, LayerCenter.stageWidth, LayerCenter.stageHeight);
		this.cover.graphics.endFill();
	}

	protected onModuleAddToStage(e?:egret.Event):void
	{
		this.updateConver();
		super.onModuleAddToStage();
	}

	protected onCloseCpl(e:egret.Event):void
	{
		super.onCloseCpl(e);
		this.updateConver();
	}

	private updateConver():void
	{
		for(var i:number = this.p_moduleList.length - 1; i >= 1; i--){
			if(this.p_moduleList[i].configVo.showCover){
				core.DisplayUtil.getInstance().addChildBelow(this.cover, this.p_moduleList[i].module.content);
				return;
			}
		}
		if(this.cover.parent){
			this.cover.parent.removeChild(this.cover);
		}
	}
}