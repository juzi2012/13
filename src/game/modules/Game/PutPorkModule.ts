module game {
	export class PutPorkModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Game.UI_PutPork.createInstance();
		}
		public get mContent():UI.Game.UI_PutPork{
			return this.content as UI.Game.UI_PutPork;
		}
		private porkAry:Array<Pork>;
		private topSelectAry:Array<PorkVO>;
		private midSelectAry:Array<PorkVO>;
		private downSelectAry:Array<PorkVO>;

		private startSelect:boolean=true;
		private lastTouch:Pork;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.RenderList();
			this.mContent.m_btntype1.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype2.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype3.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype4.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype5.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype6.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype7.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype8.addClickListener(this.onChooseType,this);
			this.mContent.m_btntype9.addClickListener(this.onChooseType,this);
			this.mContent.m_area_top.addClickListener(this.onAreaClick,this);
			this.mContent.m_area_mid.addClickListener(this.onAreaClick,this);
			this.mContent.m_area_down.addClickListener(this.onAreaClick,this);

			this.mContent.m_porkList.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.doSelect,this)
			this.mContent.m_porkList.addEventListener(egret.TouchEvent.TOUCH_END,this.stopSelect,this)

			this.mContent.m_btntype1.m_txt.url = "ui://jow5n9bqrezh1w";
			this.mContent.m_btntype2.m_txt.url = "ui://jow5n9bqrezh1x";
			this.mContent.m_btntype3.m_txt.url = "ui://jow5n9bqrezh1y";
			this.mContent.m_btntype4.m_txt.url = "ui://jow5n9bqrezh1z";
			this.mContent.m_btntype5.m_txt.url = "ui://jow5n9bqrezh20";
			this.mContent.m_btntype6.m_txt.url = "ui://jow5n9bqrezh21";
			this.mContent.m_btntype7.m_txt.url = "ui://jow5n9bqrezh23";
			this.mContent.m_btntype8.m_txt.url = "ui://jow5n9bqrezh24";
			this.mContent.m_btntype9.m_txt.url = "ui://jow5n9bqrezh22";
			
			this.mContent.m_btn_close1.visible=false;
			this.mContent.m_btn_close2.visible=false;
			this.mContent.m_btn_close3.visible=false;
			this.mContent.m_btn_close1.addClickListener(this.onCloseSelect,this);
			this.mContent.m_btn_close2.addClickListener(this.onCloseSelect,this);
			this.mContent.m_btn_close3.addClickListener(this.onCloseSelect,this);
			this.mContent.m_btn_cancel.addClickListener(this.onReset,this);
			this.mContent.m_btn_ok.addClickListener(this.onOk,this);
			this.mContent.m_btn_help.addClickListener(this.onHelp,this);

			App.MessageCenter.addListener(MsgEnum.GAME_BAIPAI,this.BaiPaiCallBack,this);
			let teshuId:number = PorkUtilExtends.isTeShuPai(GameModel.ins.roundModel.myCard);
			if(teshuId>0){
				AlertUtil.alert("恭喜你获得特殊牌型\n[COLOR=#FF0000]"+PorkUtilExtends.getTeShuPai(teshuId)+"[/COLOR]\n是否选择免摆？",new core.Handler(this,this.mianBai))
			}
			this.topSelectAry = [];
			this.midSelectAry = [];
			this.downSelectAry = [];
			this.preShowCpl();
		}
		private mianBai():void
		{
			let msg:C2T_Message_BaiPai=new C2T_Message_BaiPai();
			msg.cards = GameModel.ins.roundModel.serverCard;
			msg.mb=1;
			ServerEngine.sendBaiPai(msg);
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private RenderList():void
		{
			if(GameModel.ins.roundModel.listCard.length<=0){
				this.mContent.m_ctrl.selectedIndex=1;
			}else{
				this.mContent.m_ctrl.selectedIndex=0;

				this.porkAry = new Array<Pork>();
				this.mContent.m_porkList.itemRenderer = this.RenderListItem;
				this.mContent.m_porkList.callbackThisObj=this;
				// GameModel.ins.roundModel.listCard.sort()
				this.mContent.m_porkList.numItems=GameModel.ins.roundModel.listCard.length;
				this.mContent.m_porkList.addEventListener(fairygui.ItemEvent.CLICK,this.onClickPork,this);
				for(let i:number=0;i<this.mContent.m_porkList.numItems;i++){
					this.mContent.m_porkList.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveChoose,this);
				}
				//根据牌型来确定按钮的状态
				this.setBtnTypeState();
			}
		}
		private RenderListItem(index:number,_pork:fairygui.GObject):void
		{
			let pork:Pork = _pork as Pork;
			let porkVo:PorkVO = GameModel.ins.roundModel.listCard[index];
			pork.setData(porkVo);
			this.porkAry.push(pork);
		}
		private RenderTopList(arr:Array<PorkVO>):void
		{
			this.topSelectAry = arr;
			PorkUtil.SortCard(this.topSelectAry);
			this.mContent.m_btn_close1.visible = this.topSelectAry.length>0?true:false;
			this.mContent.m_list_top.itemRenderer = this.RenderListItemTop;
			this.mContent.m_list_top.callbackThisObj=this;
			this.mContent.m_list_top.numItems=arr.length;
			this.findPaiXing(0,arr);
		}
		private RenderListItemTop(index:number,_pork:fairygui.GObject):void
		{
			let pork:Pork = _pork as Pork;
			let porkVo:PorkVO = this.topSelectAry[index];
			pork.setData(porkVo);
		}
		private RenderMidList(arr:Array<PorkVO>):void
		{
			this.midSelectAry = arr;
			PorkUtil.SortCard(this.midSelectAry);
			this.mContent.m_btn_close2.visible = this.midSelectAry.length>0?true:false;
			this.mContent.m_list_mid.itemRenderer = this.RenderListItemMid;
			this.mContent.m_list_mid.callbackThisObj=this;
			this.mContent.m_list_mid.numItems=arr.length;
			this.findPaiXing(1,arr);
		}
		private RenderListItemMid(index:number,_pork:fairygui.GObject):void
		{
			let pork:Pork = _pork as Pork;
			let porkVo:PorkVO = this.midSelectAry[index];
			pork.setData(porkVo);
		}
		private RenderDownList(arr:Array<PorkVO>):void
		{
			this.downSelectAry = arr;
			PorkUtil.SortCard(this.downSelectAry);
			this.mContent.m_btn_close3.visible = this.downSelectAry.length>0?true:false;
			this.mContent.m_list_down.itemRenderer = this.RenderListItemDown;
			this.mContent.m_list_down.callbackThisObj=this;
			this.mContent.m_list_down.numItems=arr.length;
			this.findPaiXing(2,arr);
		}
		private RenderListItemDown(index:number,_pork:fairygui.GObject):void
		{
			let pork:Pork = _pork as Pork;
			let porkVo:PorkVO = this.downSelectAry[index];
			pork.setData(porkVo);
		}
		//手动选择牌
		private onClickPork(evt:fairygui.ItemEvent):void
		{
			var selectedPork:Pork = <Pork>evt.itemObject;
			selectedPork.changeSelectState();
		}
		private setBtnTypeState():void
		{
			this.mContent.m_btntype1.enabled=(GameModel.ins.roundModel.duizi.length>0);
			this.mContent.m_btntype2.enabled=(GameModel.ins.roundModel.liadui.length>0);
			this.mContent.m_btntype3.enabled=(GameModel.ins.roundModel.santiao.length>0);
			this.mContent.m_btntype4.enabled=(GameModel.ins.roundModel.shunzi.length>0);
			this.mContent.m_btntype5.enabled=(GameModel.ins.roundModel.tonghua.length>0);
			this.mContent.m_btntype6.enabled=(GameModel.ins.roundModel.hulu.length>0);
			this.mContent.m_btntype7.enabled=(GameModel.ins.roundModel.tiezhi.length>0);
			this.mContent.m_btntype8.enabled=(GameModel.ins.roundModel.tonghuashun.length>0);
			this.mContent.m_btntype9.enabled=(GameModel.ins.roundModel.wutong.length>0);
		}
		//牌型按钮点击事件
		private onChooseType(evt:Event):void
		{
			App.SoundUtils.playSound("deal_mp3",0,1);
			var chooseType:string = (<fairygui.GObject><any>(evt.currentTarget)).name;
			this.findClickTypePork(chooseType);
		}
		private doSelect():void
		{
			this.startSelect = true;
		}
		private stopSelect():void
		{
			this.startSelect = false;
			this.lastTouch = null;
		}
		private moveChoose(evt:egret.TouchEvent):void
		{
			let pork:Pork = evt.currentTarget as Pork;
			if(this.lastTouch!=pork){
				this.lastTouch=pork;
				pork.changeSelectState();
			}
		}
		private findClickTypePork(chooseType:string):void
		{
			let arr = GameModel.ins.roundModel.getTypeByClick(chooseType);
			for(let i:number=0;i<this.porkAry.length;i++){
				this.porkAry[i].resetState();
				for(let j:number=0;j<arr.length;j++){
					if(this.porkAry[i].vo==arr[j]){
						this.porkAry[i].changeSelectState();
						break;
					}
				}
			}
		}
		private onAreaClick(evt:Event):void
		{
			let clickArea:string = (<fairygui.GObject><any>(evt.currentTarget)).name;
			let selectAry:Array<PorkVO> = this.getSelectPokerAry();
			this.doAreaClick(clickArea,selectAry);
			
		}
		private doAreaClick(clickArea:string,selectAry:Array<PorkVO>):void
		{
			switch(clickArea){
				case "area_top":
				if(this.mContent.m_list_top.numItems>0){
					return;
				}
				if(this.midSelectAry.length>0&&PorkUtil.checkCanPutDown(selectAry,this.midSelectAry)==true){
					AlertUtil.floatMsg("头墩不能比中墩大");
					return;
				}
				if(this.downSelectAry.length>0&&PorkUtil.checkCanPutDown(selectAry,this.downSelectAry)==true){
					AlertUtil.floatMsg("头墩不能比下墩大");
					return;
				}
				if(selectAry.length==3){
					GameModel.ins.roundModel.listCard = this.getRestPokerAry(selectAry);
					this.RenderList();	
					this.RenderTopList(selectAry);
					App.SoundUtils.playSound("deal_mp3",0,1);
				}
				this.checkRestOnly();
				break;
				case "area_mid":
				if(this.mContent.m_list_mid.numItems>0){
					return;
				}
				if(this.downSelectAry.length>0&&PorkUtil.checkCanPutDown(selectAry,this.downSelectAry)==true){
					AlertUtil.floatMsg("中墩不能比下墩大");
					return;
				}
				if(this.topSelectAry.length>0&&PorkUtil.checkCanPutDown(this.topSelectAry,selectAry)==true){
					AlertUtil.floatMsg("头墩不能比中墩大");
					return;
				}
				if(selectAry.length==5){
					GameModel.ins.roundModel.listCard = this.getRestPokerAry(selectAry);
					this.RenderList();	
					this.RenderMidList(selectAry);
					App.SoundUtils.playSound("deal_mp3",0,1);
				}
				this.checkRestOnly();
				break;
				case "area_down":
				if(this.mContent.m_list_down.numItems>0){
					return;
				}
				if(this.midSelectAry.length>0&&PorkUtil.checkCanPutDown(this.midSelectAry,selectAry)==true){
					AlertUtil.floatMsg("中墩不能比下墩大");
					return;
				}
				if(this.topSelectAry.length>0&&PorkUtil.checkCanPutDown(this.topSelectAry,selectAry)==true){
					AlertUtil.floatMsg("头墩不能比下墩大");
					return;
				}
				if(selectAry.length==5){
					GameModel.ins.roundModel.listCard = this.getRestPokerAry(selectAry);
					this.RenderList();	
					this.RenderDownList(selectAry);
					App.SoundUtils.playSound("deal_mp3",0,1);
				}
				this.checkRestOnly();
				break;
			}
		}
		private getSelectPokerAry():Array<PorkVO>
		{
			let arr:Array<PorkVO>=[];
			for(let i:number=0;i<this.porkAry.length;i++){
				let pork:Pork = this.porkAry[i];
				if(pork.selectState==true){
					arr.push(pork.vo);
				}
			}
			return arr;
		}
		private getRestPokerAry(selectAry:Array<PorkVO>):Array<PorkVO>{
			let arr:Array<PorkVO>=[];
			for(let i:number=0;i<this.porkAry.length;i++){
				let pork:Pork = this.porkAry[i];
				let state:boolean = true;
				for(let j:number = 0;j<selectAry.length;j++){
					if(pork.vo==selectAry[j]){
						state=false;
						break;
					}
				}
				if(state==true){
					arr.push(pork.vo);
				}
			}
			return arr;
		}
		//牌型按钮点击事件
		private onCloseSelect(evt:Event):void
		{
			var closeType:string = (<fairygui.GObject><any>(evt.currentTarget)).name;
			switch(closeType){
				case "btn_close1":
					GameModel.ins.roundModel.listCard = GameModel.ins.roundModel.listCard.concat(this.topSelectAry);
					this.RenderList();
					this.RenderTopList([]);
					break;
				case "btn_close2":
					GameModel.ins.roundModel.listCard = GameModel.ins.roundModel.listCard.concat(this.midSelectAry);
					this.RenderList();
					this.RenderMidList([]);
				break;
				case "btn_close3":
					GameModel.ins.roundModel.listCard = GameModel.ins.roundModel.listCard.concat(this.downSelectAry);
					this.RenderList();
					this.RenderDownList([]);
				break;
			}
		}
		private onReset():void
		{
			GameModel.ins.roundModel.listCard = GameModel.ins.roundModel.myCard;
			this.RenderList();
			this.RenderTopList([]);
			this.RenderMidList([]);
			this.RenderDownList([]);
			this.mContent.m_ctrl.selectedIndex = 0;
		}
		private onOk():void
		{
			let msg:C2T_Message_BaiPai=new C2T_Message_BaiPai();
			msg.cards = PorkUtil.ChangeClientArrToServer(this.topSelectAry).concat(PorkUtil.ChangeClientArrToServer(this.midSelectAry),PorkUtil.ChangeClientArrToServer(this.downSelectAry));
			msg.mb=0;
			ServerEngine.sendBaiPai(msg);
		}

		private BaiPaiCallBack(msg:T2C_BaiPai):void
		{
			if(msg.uid==GameModel.ins.uid){
				ModuleMgr.ins.closeModule(ModuleEnum.GAME_PUT_PORK);
			}
			// ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_SINGLE_RESULT);
		}
		// 检查剩下的牌是不是刚好塞满最后一墩
		private checkRestOnly():void
		{
			let len:number = GameModel.ins.roundModel.listCard.length;
			if(len==3){
				if(this.mContent.m_list_top.numItems==0){
					this.doAreaClick("area_top",GameModel.ins.roundModel.listCard);
				}
			}
			if(len==5){
				if(this.mContent.m_list_mid.numItems==0){
					this.doAreaClick("area_mid",GameModel.ins.roundModel.listCard);
				}else if(this.mContent.m_list_down.numItems==0){
					this.doAreaClick("area_down",GameModel.ins.roundModel.listCard);
				}
			}
		}
		private findPaiXing(index:number,arr:Array<PorkVO>):void
		{
			// 乌龙 ui://jow5n9bqfetr4k
			// 一对 ui://jow5n9bqrezh2d
			// 两对ui://jow5n9bqrezh2c
			// 三条ui://jow5n9bqrezh2b
			// 顺子ui://jow5n9bqrezh2a
			// 同花ui://jow5n9bqrezh29
			// 葫芦ui://jow5n9bqrezh28
			// 铁支ui://jow5n9bqrezh27
			// 同花顺 ui://jow5n9bqrezh25
			// 五同 ui://jow5n9bqrezh26
			if(arr==null||arr.length==0){
				this.mContent['m_paixing_'+index].url = "";
				return;
			}
			if(PorkUtil.findWuTong(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh26";
				return;
			}
			if(PorkUtil.findTongHuaShun(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh25";
				return;
			}
			if(PorkUtil.findTieZhi(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh27";
				return;
			}
			if(PorkUtil.findHuLu(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh28";
				return;
			}
			if(PorkUtil.findTongHua(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh29";
				return;
			}
			if(PorkUtil.findShunZi(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh2a";
				return;
			}
			if(PorkUtil.findSanTiao(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh2b";
				return;
			}
			if(PorkUtil.findLiaDui(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh2c";
				return;
			}
			if(PorkUtil.findDuiZi(arr).length>0){
				this.mContent['m_paixing_'+index].url = "ui://jow5n9bqrezh2d";
				return;
			}
			//乌龙
			this.mContent['m_paixing_'+index].url = "ui://jow5n9bqfetr4k";
		}
		private onHelp():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.GAME_HELP);
		}
		public preClose(data?: any):void {
			this.onReset();
			this.mContent.m_btntype1.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype2.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype3.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype4.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype5.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype6.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype7.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype8.removeClickListener(this.onChooseType,this);
			this.mContent.m_btntype9.removeClickListener(this.onChooseType,this);

			this.mContent.m_porkList.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.doSelect,this)
			this.mContent.m_porkList.removeEventListener(egret.TouchEvent.TOUCH_END,this.stopSelect,this)

			this.mContent.m_area_top.removeClickListener(this.onAreaClick,this);
			this.mContent.m_area_mid.removeClickListener(this.onAreaClick,this);
			this.mContent.m_area_down.removeClickListener(this.onAreaClick,this);
			this.mContent.m_btn_close1.removeClickListener(this.onCloseSelect,this);
			this.mContent.m_btn_close2.removeClickListener(this.onCloseSelect,this);
			this.mContent.m_btn_close3.removeClickListener(this.onCloseSelect,this);
			this.mContent.m_btn_cancel.removeClickListener(this.onReset,this);
			this.mContent.m_btn_ok.removeClickListener(this.onOk,this);
			this.mContent.m_btn_help.removeClickListener(this.onHelp,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_BAIPAI,this.BaiPaiCallBack,this);
			this.porkAry=null;
			
			this.RenderTopList([]);
			this.RenderMidList([]);
			this.RenderDownList([]);
			super.preClose(data);
		}
	}
}