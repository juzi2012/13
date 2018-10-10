module game {
	export class JoinRoomModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.AddRoom.UI_AddRoom.createInstance();
		}
		public get mContent():UI.AddRoom.UI_AddRoom{
			return this.content as UI.AddRoom.UI_AddRoom;
		}
		private enterNumber:string="";
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5fal";
			for(let i:number=0;i<10;i++){
				this.mContent['m_btn'+i].addClickListener(this.onClickNum,this);
			}
			this.mContent.m_btndel.addClickListener(this.onDel,this);
			this.mContent.m_btnreset.addClickListener(this.onReset,this);
			this.updateCode();
			super.preShow(data);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private onClickNum(evt:egret.Event):void
		{
			let clickNum:string = evt.target.name.slice(3,4);
			if(this.enterNumber.length<6){
				this.enterNumber = this.enterNumber.concat(clickNum);
			}
			this.updateCode();
		}
		private onDel():void
		{
			this.enterNumber = this.enterNumber.slice(0,this.enterNumber.length-1);
			this.updateCode();
		}
		private onReset():void
		{
			this.enterNumber = "";
			this.updateCode();
		}
		private updateCode():void
		{
			let ary:Array<String> = this.enterNumber.split("");
			for(let i=0;i<6;i++){
				if(ary[i]!=null){
					this.mContent['m_txt'+(i+1)].text = ary[i];
				}else{
					this.mContent['m_txt'+(i+1)].text = "";
				}
			}
			if(this.enterNumber.length==6){
				ServerEngine.enterRoom(this.enterNumber)
				App.MessageCenter.addListener(MsgEnum.NEW_UESR_IN,this.enterRoomCallBack,this);
			}
		}
		private enterRoomCallBack(user:User):void
		{
			if(user.uid==GameModel.ins.uid){
				App.MessageCenter.removeListener(MsgEnum.NEW_UESR_IN,this.enterRoomCallBack,this);
				ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN,ModuleEnum.GAME);
			}
		}
	}
}