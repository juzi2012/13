module game {
	export class CreateRoomModule extends PopModuleView{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.CreateRoom.UI_CreateRoom.createInstance();
		}
		public get mContent():UI.CreateRoom.UI_CreateRoom{
			return this.content as UI.CreateRoom.UI_CreateRoom;
		}
		private maxHuaSe:number=0;
		private selectHuaSe:number=0;
		public type:number=1;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			(this.mContent.m_panelBg as UI.Base.UI_PopModuleBg).m_title.url = "ui://i36kne80j5faj";
			// this.mContent.m_typeCtrl.addEventListener(egret.Event.CHANGE,this.tabChange,this);
			this.mContent.m_btn_type0.addClickListener(this.tabChange,this);
			this.mContent.m_btn_type1.addClickListener(this.tabChange,this);
			this.mContent.m_btn_type2.addClickListener(this.tabChange,this);
			this.mContent.m_btn_type3.addClickListener(this.tabChange,this);
			this.mContent.m_btn_type4.addClickListener(this.tabChange,this);
			// this.mContent.m_btn_type5.addClickListener(this.tabChange,this);

			this.mContent.m_check_5.addClickListener(this.checkJiayiSe,this);
			this.mContent.m_check_4.addClickListener(this.checkJiayiSe,this);
			this.mContent.m_check_3.addClickListener(this.checkJiayiSe,this);
			this.mContent.m_check_2.addClickListener(this.checkJiayiSe,this);
			
			this.mContent.m_radio_huase1.addClickListener(this.huaseAdd,this);
			this.mContent.m_radio_huase2.addClickListener(this.huaseAdd,this);
			this.mContent.m_radio_huase3.addClickListener(this.huaseAdd,this);
			this.mContent.m_radio_huase4.addClickListener(this.huaseAdd,this);
			
			this.mContent.m_checkbox_jiayise.addClickListener(this.jiayise,this);
			this.mContent.m_typeCtrl.selectedIndex=0;
			this.tabChange(null);
			this.mContent.m_btn_buy.addClickListener(this.onBuyHandle,this);
			this.mContent.m_btn_create.addClickListener(this.onCreateHandle,this);

			this.mContent.m_btn_paytype0.addClickListener(this.countCard,this);
			this.mContent.m_btn_paytype1.addClickListener(this.countCard,this);
			this.mContent.m_btn_junum0.addClickListener(this.countCard,this);
			this.mContent.m_btn_junum1.addClickListener(this.countCard,this);
			this.mContent.m_btn_junum2.addClickListener(this.countCard,this);
			
			this.countCard();
			super.preShow(data);
		}
		private countCard():void
		{
			let jn:number=6;
			let pn:number=2;
			switch(this.mContent.m_JuShuCtrl.selectedIndex){
				case 0:
					jn = 6;
					break;
				case 1:
					jn = 12;
					break;
				case 2:
					jn = 18;
					break;
			}
			switch(this.mContent.m_NumCtrl.selectedIndex){
				case 0:
					pn = 2;
					if(this.mContent.m_typeCtrl.selectedIndex==3){
						pn=6;
					}
					break;
				case 1:
					pn = 3;
					if(this.mContent.m_typeCtrl.selectedIndex==4){
						pn=5;
					}
					break;
				case 2:
					pn = 4;
					if(this.mContent.m_typeCtrl.selectedIndex==4){
						pn=6;
					}
					break;
				case 3:
					pn = 5;
					break;
			}
			if(this.mContent.m_payCtrl.selectedIndex==0){
				this.mContent.m_btn_create.m_txt_cardnum.text = "X"+((jn/6)*pn).toString();//总房卡数=（局数/6）*玩家人数。局数=6/12/18。
			}else{
				this.mContent.m_btn_create.m_txt_cardnum.text = "X"+(jn/6).toString();// AA支付每人房卡数=（局数/6）。
			}
		}
		public show(data?:any):void
		{
			
			super.show(data);
		}
		private checkJiayiSe():void
		{
			if(this.mContent.m_typeCtrl.selectedIndex==2){
				if(this.mContent.m_check_5.selected==true){
					this.mContent.m_checkbox_jiayise.selected=true;
					this.mContent.m_checkbox_jiayise.enabled=false;
					this.mContent.m_huase.visible=true;
				}else{
					this.mContent.m_checkbox_jiayise.selected=true;
					this.mContent.m_checkbox_jiayise.enabled=true;
					this.mContent.m_huase.visible=true;
				}
			}
			this.countCard();
			
		}
		private tabChange(evt:Event):void
		{
			this.mContent.m_huase.visible=true;
			this.mContent.m_checkbox_jiayise.selected=false;
			switch(this.mContent.m_typeCtrl.selectedIndex){
				case 0:
				this.type = 2;
				this.mContent.m_payCtrl.selectedIndex=1;
				this.mContent.m_JuShuCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl.selectedIndex=2;
				this.mContent.m_NumCtrl1.selectedIndex=0;
				this.mContent.m_checkbox_zhuang.selected=false;
				this.mContent.m_checkbox_mapai.selected=false;
				this.maxHuaSe=0;
				this.mContent.m_jiama.visible=true;
				this.mContent.m_jiayise.visible=false;
				break;
				case 1:
				this.type = 3;
				this.mContent.m_payCtrl.selectedIndex=1;
				this.mContent.m_JuShuCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl.selectedIndex=3;
				this.mContent.m_NumCtrl1.selectedIndex=1;
				this.mContent.m_checkbox_zhuang.selected=false;
				this.mContent.m_checkbox_mapai.selected=false;
				this.maxHuaSe=1;
				this.mContent.m_jiama.visible=true;
				this.mContent.m_jiayise.visible=false;
				break;
				case 2:
				this.type = 4;
				this.mContent.m_payCtrl.selectedIndex=1;
				this.mContent.m_JuShuCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl.selectedIndex=2;
				this.mContent.m_NumCtrl1.selectedIndex=1;
				this.mContent.m_checkbox_zhuang.selected=false;
				this.mContent.m_checkbox_mapai.selected=false;
				this.maxHuaSe=1;
				this.mContent.m_jiama.visible=true;
				this.mContent.m_jiayise.visible=true;
				this.mContent.m_huase.visible=false;
				break;
				case 3:
				this.type = 5;
				this.mContent.m_payCtrl.selectedIndex=1;
				this.mContent.m_JuShuCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl1.selectedIndex=2;
				this.mContent.m_checkbox_zhuang.selected=false;
				this.mContent.m_checkbox_mapai.selected=false;
				this.maxHuaSe=2;
				this.mContent.m_jiama.visible=true;
				this.mContent.m_jiayise.visible=false;
				break;
				case 4:
				this.type = 6;
				this.mContent.m_payCtrl.selectedIndex=1;
				this.mContent.m_JuShuCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl.selectedIndex=2;
				this.mContent.m_NumCtrl1.selectedIndex=0;
				this.mContent.m_checkbox_zhuang.selected=false;
				this.mContent.m_checkbox_mapai.selected=false;
				this.maxHuaSe=1;
				this.mContent.m_jiama.visible=false;
				this.mContent.m_jiayise.visible=false;
				break;
				case 5:
				this.type = 1;
				this.mContent.m_payCtrl.selectedIndex=1;
				this.mContent.m_JuShuCtrl.selectedIndex=0;
				this.mContent.m_NumCtrl.selectedIndex=2;
				this.mContent.m_NumCtrl1.selectedIndex=0;
				this.mContent.m_checkbox_zhuang.selected=false;
				this.mContent.m_jiama.visible=false;
				this.maxHuaSe=0;
				this.mContent.m_jiayise.visible=false;
				break;
			}
			for(let i:number=1;i<5;i++){
				this.mContent["m_radio_huase"+i].selected=false;
			}
			this.mContent.m_radio_huase1.selected=true;
			if(this.mContent.m_typeCtrl.selectedIndex==3){
				this.mContent.m_num1.text="6人";
			}else if(this.mContent.m_typeCtrl.selectedIndex==4){
				this.mContent.m_num1.text="2人";
				this.mContent.m_num2.text="5人";
				this.mContent.m_num3.text="6人";
			}else{
				this.mContent.m_num1.text="2人";
				this.mContent.m_num2.text="3人";
				this.mContent.m_num3.text="4人";
			}
			this.selectHuaSe=1;
			
			this.countCard();
		}
		private huaseAdd(evt:Event):void
		{
			if(this.maxHuaSe==1){
				for(let i:number=1;i<5;i++){
					this.mContent["m_radio_huase"+i].selected=false;
				}
				(<fairygui.GObject><any>(evt.currentTarget)).asButton.selected=true;
				this.selectHuaSe=1;
			}else{
				if((<fairygui.GObject><any>(evt.currentTarget)).asButton.selected==true){
					this.selectHuaSe+=1;
				}else{
					this.selectHuaSe-=1;
				}
				if(this.selectHuaSe==0){
					(<fairygui.GObject><any>(evt.currentTarget)).asButton.selected=true;
					this.selectHuaSe=1;
				}
				if(this.maxHuaSe<this.selectHuaSe){
					(<fairygui.GObject><any>(evt.currentTarget)).asButton.selected=(<fairygui.GObject><any>(evt.currentTarget)).asButton.selected==true?false:true;
					this.selectHuaSe=this.maxHuaSe;
					AlertUtil.floatMsg('最多只能选择2个花色')
				}
			}
		}
		private jiayise():void
		{
			if(this.mContent.m_checkbox_jiayise.selected==true){
				this.mContent.m_huase.visible=true;
			}else{
				this.mContent.m_huase.visible=false;
			}
		}
		private onBuyHandle():void
		{
			// ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
			this.checkShowBind();
			ServerEngine.leaveRooom();
		}
		//检查是否需要弹出兑换框
		private checkShowBind():void
		{
			let url:string = GameModel.ins.CheckBindServer;//"http://alpha-pay.fpwan.net/Game/Shisanzhang/BindWindow";
			HttpAPI.HttpGET(url,{'userId':GameModel.ins.uid},this.onCallBack,this.onError,this);
		}
		private onCallBack(evt:egret.Event):void{
			console.log(evt.target.response);
			let callBackJson:any = JSON.parse(evt.target.response);
			if(callBackJson.data==true){
				ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
			}else{
				this.onShowBuyCard();
			}
		}
		private onError():void
		{

		}
		private onShowBuyCard():void
		{
			let url:string = GameModel.ins.BuySerever+"userId="+GameModel.ins.uid+"&appId=6000015&payId=103&taocanId=3&serverId=1&from=1&redirectUrl="+GameModel.ins.BuySereverRedirect;
			// window.open(url,"_blank");
			top.location.href=url;
		}
		private onCreateHandle():void
		{
			let arr:Array<any> = this.getRoomInfo();
			// ServerEngine.createRoom(ty,pn,jn,zz,jm,fc,core.Handler.create(this,this.createRoomCallBack));
			ServerEngine.createRoom(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],core.Handler.create(this,this.createRoomCallBack));
		}
		private getRoomInfo():Array<any>
		{
			// ty:2(玩法id),
			let ty:number=this.type;
			// pn:人数,
			let pn:number=2;
			// jn:局数,
			let jn:number=6;
			// zz:是否坐庄(1:是，0:否),
			let zz:number=1;
			// jm:是否加马(1:是，0:否),
			let jm:number=0;
			// fc:(1:房主付,2:均摊)
			let fc:number=1;
			// jp:加花色 int数组，不加花色留空) }花色对应值:0:方块 1:梅花2：红桃 3:黑桃
			let jp:Array<number>=[];
			fc = this.mContent.m_payCtrl.selectedIndex==0?2:1;
			zz = this.mContent.m_checkbox_zhuang.selected?1:0;
			jm = this.mContent.m_checkbox_mapai.selected?1:0;
			switch(this.mContent.m_JuShuCtrl.selectedIndex){
				case 0:
				jn = 6;
				break;
				case 1:
				jn = 12;
				break;
				case 2:
				jn = 18;
				break;
			}
			switch(this.mContent.m_NumCtrl.selectedIndex){
				case 0:
				pn = 2;
				if(this.mContent.m_typeCtrl.selectedIndex==3){
					pn=6;
				}
				break;
				case 1:
				pn = 3;
				if(this.mContent.m_typeCtrl.selectedIndex==4){
					pn=5;
				}
				break;
				case 2:
				pn = 4;
				if(this.mContent.m_typeCtrl.selectedIndex==4){
					pn=6;
				}
				break;
				case 3:
				pn = 5;
				break;
			}
			if(this.mContent.m_radio_huase1.selected){
				jp.push(0);
			}
			if(this.mContent.m_radio_huase2.selected){
				jp.push(1);
			}
			if(this.mContent.m_radio_huase3.selected){
				jp.push(2);
			}
			if(this.mContent.m_radio_huase4.selected){
				jp.push(3);
			}
			if(this.mContent.m_typeCtrl.selectedIndex==0||this.mContent.m_typeCtrl.selectedIndex==5||(this.mContent.m_checkbox_jiayise.selected==false&&this.mContent.m_typeCtrl.selectedIndex==2)){
				jp = [];
			}
			if(this.mContent.m_typeCtrl.selectedIndex==3&&jp.length==1){
				jp.push(jp[0]);
			}
			return [ty,pn,jn,zz,jm,fc,jp];
		}
		private createRoomCallBack(msg:T2C_Create_Room):void
		{
			App.Socket.removeCmdListener(MsgType.CreateRoom,this.createRoomCallBack);
			App.MessageCenter.addListener(MsgEnum.NEW_UESR_IN,this.enterRoomCallBack,this);
			ServerEngine.enterRoom(msg.rid);
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