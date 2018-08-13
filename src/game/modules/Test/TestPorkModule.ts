module game {
	export class TestPorkModule extends PopModuleView{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = UI.TestPork.UI_TestPork.createInstance();
		}
		public get mContent():UI.TestPork.UI_TestPork{
			return this.content as UI.TestPork.UI_TestPork;
		}
		public arr:Array<number> = [2,3,4,5,6,7,8,9,10,11,12,13,14,
									18,19,20,21,22,23,24,25,26,27,28,29,30,
									34,35,36,37,38,39,40,41,42,43,44,45,46,
									50,51,52,53,54,55,56,57,58,59,60,61,62,
									65,66];
		public selectArr:Array<PorkVO>;
		public preShow(data?: any): void {
			this.mContent.m_list1.itemRenderer = this.RenderListItem;
			this.mContent.m_list1.callbackThisObj=this;
			this.mContent.m_list1.addEventListener(fairygui.ItemEvent.CLICK,this.onClickPork,this);
			this.mContent.m_list1.numItems = 54;

			this.mContent.m_list2.itemRenderer = this.RenderListItem1;
			this.mContent.m_list2.callbackThisObj=this;
			this.mContent.m_list2.addEventListener(fairygui.ItemEvent.CLICK,this.onClickPork1,this);

			this.selectArr = [];

			this.mContent.m_btn_ok.addClickListener(this.showPut,this);
			this.preShowCpl();
		}
		private showPut():void
		{
			GameModel.ins.createRoundTest1(this.selectArr);
			ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK,[]);
		}
		private RenderListItem(index:number,_pork:fairygui.GObject):void
		{
			let pork:Pork = _pork as Pork;
			let porkVo:PorkVO = new PorkVO(PorkUtil.ChangeServerCardToClient(this.arr[index]))
			pork.setData(porkVo);
			
		}
		//手动选择牌
		private onClickPork(evt:fairygui.ItemEvent):void
		{
			if(this.selectArr.length<13){
				var selectedPork:Pork = <Pork>evt.itemObject;
				this.selectArr.push(selectedPork.vo);
				this.selectArr.sort((a,b)=>{
					return  b.point-a.point;
				});
				this.rendSelect();
			}
		}
		private rendSelect():void
		{
			this.mContent.m_btn_ok.visible=false;
			if(this.selectArr.length==13){
				this.mContent.m_btn_ok.visible=true;
				let pt:Array<number> = [];
				for(let i:number=0;i<this.selectArr.length;i++){
					pt.push(this.selectArr[i].data);
				}
				
				// console.log(pt);
				// return;
			}
			this.mContent.m_list2.numItems = this.selectArr.length;
		}
		private RenderListItem1(index:number,_pork:fairygui.GObject):void
		{
			let pork:Pork = _pork as Pork;
			let porkVo:PorkVO = this.selectArr[index]
			pork.setData(porkVo);
			
		}
		//手动选择牌
		private onClickPork1(evt:fairygui.ItemEvent):void
		{
			var selectedPork:Pork = <Pork>evt.itemObject;
			for(let i:number=0;i<this.selectArr.length;i++){
				if(selectedPork.vo == this.selectArr[i]){
					this.selectArr.splice(i,1);
					break;
				}
			}
			this.selectArr.sort((a,b)=>{
					return  b.point-a.point;
				});
			this.rendSelect();
		}
	}
}