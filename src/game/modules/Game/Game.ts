module game {
	export class Game extends Module{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Game.UI_Game.createInstance();
		}
		public get mContent():UI.Game.UI_Game{
			return this.content as UI.Game.UI_Game;
		}
		private bgAry:Array<string>=["ui://9s4fd8dyrezh0","ui://9txxlsx2hmwn1","ui://98nj6h4xhmwn1"]
		private head1:PlayerHead;
		private head2:PlayerHead;
		private head3:PlayerHead;
		private head4:PlayerHead;
		private head5:PlayerHead;
		private head6:PlayerHead;
		private headAry:Array<any>;
		private curHeadAry:Array<PlayerHead>;
		private qiang:UI.Game.UI_DaQiang;
		private wantToBreakHere:boolean=false;

		private readyArr:Array<T2C_Ready>;
		private cur:any;
		private qiangContent:fairygui.GComponent;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			App.SoundUtils.playSound("music_bg_game_mp3",1,0);
			this.readyArr=[];
			this.cur = this;
			this.mContent.m_sharetips.visible=false;
			if(GameModel.ins.uid == GameModel.ins.roomModel.fuid){
				this.mContent.m_btn_ready.visible=false;
				this.mContent.m_btn_start.visible=true;
			}else{
				this.mContent.m_btn_ready.visible=true;
				this.mContent.m_btn_start.visible=false;
			}
			this.mContent.m_btn_continue.visible=false;
			this.mContent.m_btn_ready.addClickListener(this.onReadyHandle,this);
			this.mContent.m_btn_start.addClickListener(this.onReadyHandle,this);
			this.mContent.m_btn_check.addClickListener(this.ShowPutPorkModule,this);
			this.mContent.m_btn_help.addClickListener(this.onHelp,this);
			this.mContent.m_btn_setting.addClickListener(this.onSetting,this);
			this.mContent.m_btn_quit.addClickListener(this.onQuit,this);
			this.mContent.m_btn_chat.addClickListener(this.onChat,this);
			this.mContent.m_btn_continue.addClickListener(this.onContinue,this);
			this.mContent.m_btn_invite.addClickListener(this.onInvite,this);
			this.mContent.m_btn_invite.visible=false;
			this.mContent.m_btn_check.visible=false;
			this.mContent.m_img_start.visible=false;
			this.mContent.m_qld.visible=false;
			this.mContent.m_bg.url = this.bgAry[SettingModel.ins.bg];
			this.preShowCpl();
			//根据当前牌局的人数显示头像的个数
			this.mContent.m_playerNumCtrl.selectedPage = GameModel.ins.roomModel.rinfo.pn.toString()
			this.setHead();
			//初始化当前人物头像
			for(let i:number=0;i<GameModel.ins.roomModel.users.length;i++){
				this.UserIn(GameModel.ins.roomModel.users[i]);
			}
			
			App.MessageCenter.addListener(MsgEnum.NEW_UESR_IN,this.UserIn,this);
			App.MessageCenter.addListener(MsgEnum.NEW_UESR_OUT,this.UserOut,this);
			App.MessageCenter.addListener(MsgEnum.NEW_UESR_READY,this.UserReady,this);
			App.MessageCenter.addListener(MsgEnum.NEW_UESR_READY_CANCEL,this.UserReadyCancel,this);
			App.MessageCenter.addListener(MsgEnum.GAME_FAPAI,this.FaPai,this);
			App.MessageCenter.addListener(MsgEnum.GAME_BAIPAI,this.BaiPaiCallBack,this);
			App.MessageCenter.addListener(MsgEnum.GAME_SINGLE_RESULT,this.showSingleResult,this);
			App.MessageCenter.addListener(MsgEnum.GAME_RESTART,this.gameRestart,this);
			App.MessageCenter.addListener(MsgEnum.GAME_BEGIN_RESTART,this.doRestart,this);
			App.MessageCenter.addListener(MsgEnum.GAME_CHECK_SINGLE,this.checkSingle,this);
			App.MessageCenter.addListener(MsgEnum.GAME_USER_DIAOXIAN,this.UserDiaoXian,this);
			App.MessageCenter.addListener(MsgEnum.GAME_USER_DIAOXIAN_BACK,this.UserDiaoXianBack,this);
			App.MessageCenter.addListener(MsgEnum.GAME_ASKFOR_DISMISS,this.UserAskForDismiss,this);
			App.MessageCenter.addListener(MsgEnum.GAME_ANSWER_FAILED,this.RoomDismissFailed,this);
			App.MessageCenter.addListener(MsgEnum.GAME_CHAT,this.onReceiveChat,this);
			App.MessageCenter.addListener(MsgEnum.STOP_PLAY_MUSIC,this.playMusic,this);

			App.MessageCenter.addListener(MsgEnum.CHANGE_BG,this.changeBg,this);
			App.MessageCenter.addListener(MsgEnum.GAME_FLOWER,this.flower,this);
			App.MessageCenter.addListener(game.MsgEnum.GAME_LOCATION,this.upDateLocation,this);

			this.mContent.m_txt_room.text = "房间号:"+GameModel.ins.roomModel.rid.toString();
			switch(GameModel.ins.roomModel.rinfo.rp){
				case 2:
				this.mContent.m_txt_roomtype.text = "方片十三水";
				break;
				case 3:
				this.mContent.m_txt_roomtype.text = "加一色十三水";
				break;
				case 4:
				this.mContent.m_txt_roomtype.text = "大小王十三水";
				break;
				case 5:
				this.mContent.m_txt_roomtype.text = "六人十三水";
				break;
				case 6:
				this.mContent.m_txt_roomtype.text = "纯一色十三水";
				break;
			}
			this.mContent.m_txt_jushu.text = "局数:"+GameModel.ins.roomModel.rinfo.nnum.toString()+"/"+GameModel.ins.roomModel.rinfo.snum.toString()+" "+GameModel.ins.roomModel.rinfo.pn.toString()+"人";

			//如果是断线重连进来的，则会判断是否是已经开局
			if(GameModel.ins.roomModel.isReConnectInRoom){
				if(GameModel.ins.roomModel.reConnectState==1){//已经发牌但还有人没摆完牌
					for(let i:number=0;i<this.curHeadAry.length;i++){
						let head:PlayerHead = this.curHeadAry[i];
						if(head.user.bp==0){
							head.onFaPai();
							if(head.user.uid==GameModel.ins.uid){
								ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK);
							}
						}else if(head.user.bp==1){
							head.onBaiPaiEnd();
						}
					}
				}
				if(GameModel.ins.roomModel.js!=""){
					let msg:T2C_AskForDismiss = new T2C_AskForDismiss();
					msg.uid = GameModel.ins.roomModel.js;
					msg.time = GameModel.ins.roomModel.jt;
					ModuleMgr.ins.showModule(ModuleEnum.DISSOLVE_ROOM,msg)
				}
			}
			ChatModel.ins.init();
			//显示邀请
			if(GameModel.ins.roomModel.users.length<GameModel.ins.roomModel.rinfo.pn&&GameModel.ins.uid==GameModel.ins.roomModel.fuid){
				this.mContent.m_btn_invite.visible=true;
			}
			if(this.qiangContent==null){
				this.qiangContent = new fairygui.GComponent();
			}
			this.mContent.addChild(this.qiangContent);
		}
		private setHead():void
		{
			this.head1 = (this.mContent.m_head1 as PlayerHead);
			this.head2 = (this.mContent.m_head2 as PlayerHead);
			this.head3 = (this.mContent.m_head3 as PlayerHead);
			this.head4 = (this.mContent.m_head4 as PlayerHead);
			this.head5 = (this.mContent.m_head5 as PlayerHead);
			this.head6 = (this.mContent.m_head6 as PlayerHead);

			this.head2.m_ctrlPos.selectedIndex=1;
			this.head2.m_pokers.m_c2.selectedIndex=1;
			this.head3.m_ctrlPos.selectedIndex=1;
			this.head3.m_pokers.m_c2.selectedIndex=1;
			this.head4.m_ctrlPos.selectedIndex=1;
			this.head4.m_pokers.m_c2.selectedIndex=1;

			for(let i:number=0;i<6;i++){
				this["head"+(i+1)].init();
			}
			this.headAry = [[this.head1,this.head4],[this.head1,this.head3,this.head5],[this.head1,this.head3,this.head4,this.head5],[this.head1,this.head2,this.head3,this.head5,this.head6],[this.head1,this.head2,this.head3,this.head4,this.head5,this.head6]];
			this.curHeadAry = this.headAry[this.mContent.m_playerNumCtrl.selectedIndex];

			this.wantToBreakHere=false;		
		}
		public show(data?:any):void
		{
			this.doInviteJs();
			super.show(data);
		}
		
		private UserIn(user:User):void
		{
			if(this.getPlayerById(user.uid)!=null)return;
			//有人进来就发送一次消息，来更新我在其他玩家中的位置信息
			LocationModel.ins.sendPosChat();
			if(GameModel.ins.roomModel.users.length<GameModel.ins.roomModel.rinfo.pn&&GameModel.ins.uid==GameModel.ins.roomModel.fuid){
				this.mContent.m_btn_invite.visible=true;
			}else{
				this.mContent.m_btn_invite.visible=false;
			}
			for(let i:number=0;i<this.curHeadAry.length;i++){
				if(this.curHeadAry[i].isInit==false){
					this.curHeadAry[i].setData(user);
					if(user.uid == GameModel.ins.uid && user.status==1){
						this.mContent.m_btn_ready.visible=false;
						this.mContent.m_btn_start.visible=false;
					}
					break;
				}
			}
		}

		private UserOut(leaveMsg:T2C_Leave_Room):void
		{
			if(leaveMsg.uid==GameModel.ins.uid){//如果是我自己，直接退出场景
				this.leaveRoomCallBack();
			}else{
				let playerHead:PlayerHead = this.getPlayerById(leaveMsg.uid);
				if(playerHead!=null){
					playerHead.init();
				}
			}
		}
		private onReadyHandle():void
		{
			if(GameModel.ins.uid==GameModel.ins.roomModel.fuid){
				for(let i:number=0;i<this.curHeadAry.length;i++){
					if(this.curHeadAry[i].user==null){
						AlertUtil.floatMsg("玩家未到齐");
						return;
					}
				}
				for(let i:number=0;i<this.curHeadAry.length;i++){
					if(this.curHeadAry[i].user.status==0&&this.curHeadAry[i].user.uid!=GameModel.ins.uid){
						AlertUtil.floatMsg("玩家未准备");
						return;
					}
				}
				ServerEngine.sendReady();
			}else{
				ServerEngine.sendReady();
			}
		}
		private UserReady(msg:T2C_Ready):void
		{
			if(GameModel.ins.roomModel.isSingleOpen||this.mContent.m_btn_continue.visible==true){
				this.readyArr.push(msg);
			}else{
				this.doReady(msg);
			}
			
		}
		private doReady(msg:T2C_Ready):void
		{
			let playerHead:PlayerHead = this.getPlayerById(msg.uid);
			if(playerHead!=null){
				playerHead.onReady();
				if(msg.uid == GameModel.ins.uid){
					this.mContent.m_btn_ready.visible=false;
					this.mContent.m_btn_start.visible=false;
				}
			}
		}
		private UserReadyCancel():void
		{
			this.mContent.m_btn_ready.visible=false;
		}
		private FaPai():void
		{
			this.mContent.m_txt_jushu.text = "局数:"+GameModel.ins.roomModel.rinfo.nnum.toString()+"/"+GameModel.ins.roomModel.rinfo.snum.toString()+" "+GameModel.ins.roomModel.rinfo.pn.toString()+"人";
			// 先播放开始特效,完了在开始发牌
			this.mContent.m_img_start.visible=true;
			this.mContent.m_t1.play(this.onStartEffectComplete,this);
			App.SoundUtils.playSound("start_mp3",0,1);
		}
		private onStartEffectComplete():void
		{
			this.mContent.m_img_start.visible=false;
			for(let i:number=0;i<this.curHeadAry.length;i++){
				this.curHeadAry[i].onFaPai();
			}
			App.TimerManager.doTimer(1000,1,this.DoFaPai,this);
		}
		private DoFaPai():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK);
		}
		private ShowPutPorkModule():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK);
		}
		private BaiPaiCallBack(msg:T2C_BaiPai):void
		{
			let playerHead:PlayerHead = this.getPlayerById(msg.uid)
			if(playerHead){
				playerHead.onBaiPaiEnd();
			}
		}
		private doRestart():void
		{
			this.mContent.m_txt_jushu.text = "局数:"+GameModel.ins.roomModel.rinfo.nnum.toString()+"/"+GameModel.ins.roomModel.rinfo.snum.toString()+" "+GameModel.ins.roomModel.rinfo.pn.toString()+"人";
			for(let i:number=0;i<this.curHeadAry.length;i++){
				this.curHeadAry[i].restart();
				if(GameModel.ins.uid == GameModel.ins.roomModel.fuid){
					this.mContent.m_btn_ready.visible=false;
					this.mContent.m_btn_start.visible=true;
				}else{
					this.mContent.m_btn_ready.visible=true;
					this.mContent.m_btn_start.visible=false;
				}
			}
			for(let i:number=0;i<this.readyArr.length;i++){
				this.doReady(this.readyArr[i]);
			}
			this.readyArr=[];
			if(this.qiangContent){
				this.qiangContent.removeChildren();
			}
		}
		private checkSingle():void
		{
			this.mContent.m_btn_continue.visible=true;
		}
		private showSingleResult():void
		{
			this.doShowSingleResult().then(() => {
				ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT);//打开单局结算面板，同时重置头像按钮为初始状态
			})
        		.catch((e) => console.log("Exception happened:", e));	
		}
		async doShowSingleResult(){
			let round:RoundModel = GameModel.ins.roundModel;
			let bipai:Array<ResultBP> = round.result.bipai;
			let cards:Array<ResultCard> = round.result.cards;
			let special_uid:Array<string>=[];
			//先得到特殊牌型，把特殊牌型展示出来
			for(let a:number=0;a<bipai.length;a++){
				if(bipai[a].px>0){
				// if(a==0){
					let uid:string = round.result.bipai[a].uid;
					let playerHead:PlayerHead = this.getPlayerById(uid);
					playerHead.showSpecial();
					special_uid.push(uid);
				}
			}
			// if(special_uid.length>0){
			// 	await this.sleep(500);
			// }
			await this.sleep(500);
			
			for(let j:number = 0;j<3;j++){
				for(let i:number=0;i<cards.length;i++){
					let uid:string = cards[i].uid;
					if(special_uid.indexOf(uid)<0){
						let playerHead:PlayerHead = this.getPlayerById(uid);
						if(special_uid.indexOf(GameModel.ins.uid)==-1){
							playerHead.showResult(j,cards[i],false);
						}else{
							playerHead.showResult(j,cards[i],true);
						}
						await this.sleep(1200);
					}
				}
			}
			await this.sleep(1000);
			
			if(special_uid.length>0){
				for(let c:number=0;c<special_uid.length;c++){
					let playerHead:PlayerHead = this.getPlayerById(special_uid[c]);
					for(let i:number=0;i<cards.length;i++){
						if(cards[i].uid==special_uid[c]){
							playerHead.showSpecialResult(cards[i]);

							let bipai:ResultBP = GameModel.ins.roundModel.getResultBPByUid(cards[i].uid);
							if(bipai.tesuPaiTarArr){
								for(let j:number=0;j<bipai.tesuPaiTarArr.length;j++){
									let playerHeadTar:PlayerHead = this.getPlayerById(bipai.tesuPaiTarArr[j].uid);
									playerHeadTar.pokers.updateTeSuScore(bipai.tesuPaiTarArr[j]);
								}
							}
						}
					}
				}
				await this.sleep(500);
			}

			//打枪
			for(let i:number=0;i<bipai.length;i++){
				for(let a:number=0;a<bipai[i].dq.length;a++){
					if(GameModel.ins.roomModel.rinfo.zz==1){
						for(let j:number =0;j<bipai[i].dq[a].tarIds.length;j++){
							let from:PlayerHead = this.getPlayerById(bipai[i].dq[a].uid);
							let to:PlayerHead = this.getPlayerById(bipai[i].dq[a].tarIds[j]);
							from.pokers.showFanBei(from.user.uid,to.user.uid);
							to.pokers.showFanBei(to.user.uid,from.user.uid);
							this.daQiang(from,to);
							await this.sleep(2500);
						}
					}else{
						if(bipai[i].dq[a].uid==GameModel.ins.uid){//只显示跟自己相关的打枪的对象
							for(let j:number =0;j<bipai[i].dq[a].tarIds.length;j++){
								let from:PlayerHead = this.getPlayerById(bipai[i].dq[a].uid);
								let to:PlayerHead = this.getPlayerById(bipai[i].dq[a].tarIds[j]);
								from.pokers.showFanBei(from.user.uid,to.user.uid);
								to.pokers.showFanBei(to.user.uid,from.user.uid);
								this.daQiang(from,to);
								await this.sleep(2500);
							}
						}else{
							for(let j:number =0;j<bipai[i].dq[a].tarIds.length;j++){
								if(bipai[i].dq[a].tarIds[j]==GameModel.ins.uid){
									let from:PlayerHead = this.getPlayerById(bipai[i].dq[a].uid);
									let to:PlayerHead = this.getPlayerById(bipai[i].dq[a].tarIds[j]);
									from.pokers.showFanBei(from.user.uid,to.user.uid);
									to.pokers.showFanBei(to.user.uid,from.user.uid);
									this.daQiang(from,to);
									await this.sleep(2500);
								}
							}
						}
					}
				}
			}
			
			//全垒打
			for(let i:number=0;i<bipai.length;i++){
				if(bipai[i].ql>0){
					this.mContent.m_qld.visible=true;
					this.mContent.m_t3.play(this.qldComplete,this);
					if(GameModel.ins.roomModel.rinfo.zz==1){
						this.getPlayerById(bipai[i].qlTar.uid).pokers.UpDateULD(bipai[i]);
						for(let j:number=0;j<bipai[i].qlTar.tarUidArr.length;j++){
							this.getPlayerById(bipai[i].qlTar.tarUidArr[j]).pokers.UpDateULD(bipai[i]);
						}
					}else{
						if(bipai[i].qlTar.uid==GameModel.ins.uid){
							this.getPlayerById(bipai[i].qlTar.uid).pokers.UpDateULD(bipai[i]);
							for(let j:number=0;j<bipai[i].qlTar.tarUidArr.length;j++){
								this.getPlayerById(bipai[i].qlTar.tarUidArr[j]).pokers.UpDateULD(bipai[i]);
							}
						}else{
							this.getPlayerById(bipai[i].qlTar.uid).pokers.UpDateULD(bipai[i]);
							for(let j:number=0;j<bipai[i].qlTar.tarUidArr.length;j++){
								if(bipai[i].qlTar.tarUidArr[j]==GameModel.ins.uid){
									this.getPlayerById(bipai[i].qlTar.tarUidArr[j]).pokers.UpDateULD(bipai[i]);
								}
							}
						}
					}

					await this.sleep(3000);
				}
			}

			//上面的大枪、全垒打结束后最后更新一次是否翻倍的数据
			for(let i:number=0;i<GameModel.ins.roomModel.users.length;i++){
				if(special_uid.indexOf(GameModel.ins.roomModel.users[i].uid)<0){
					let head:PlayerHead = this.getPlayerById(GameModel.ins.roomModel.users[i].uid);
					head.pokers.showResultScore(false,true);
				}
			}

			//更新马牌的分数
			if(GameModel.ins.roomModel.rinfo.zz==0){
				let bipai:ResultBP = GameModel.ins.roundModel.getResultBPByUid(GameModel.ins.uid);
				if(bipai!=null&&bipai.mapaiTarArr.length>0){
					let head:PlayerHead = this.getPlayerById(GameModel.ins.uid);
					for(let i:number=0;i<bipai.mapaiTarArr.length;i++){
						let head1:PlayerHead = this.getPlayerById(bipai.mapaiTarArr[i]);
						head.pokers.updateMP(true,head1.pokers.scoretop,head1.pokers.scoremid,head1.pokers.scoredown);
						head1.pokers.updateMP(false);
					}
				}
			}else{
				let bipai:ResultBP = GameModel.ins.roundModel.getResultBPByUid(GameModel.ins.roomModel.rinfo.zuid);
				if(bipai!=null&&bipai.mapaiTarArr.length>0){
					let head:PlayerHead = this.getPlayerById(GameModel.ins.roomModel.rinfo.zuid);
					for(let i:number=0;i<bipai.mapaiTarArr.length;i++){
						let head1:PlayerHead = this.getPlayerById(bipai.mapaiTarArr[i]);
						head.pokers.updateMP(true,head1.pokers.scoretop,head1.pokers.scoremid,head1.pokers.scoredown);
						head1.pokers.updateMP(false);
					}
				}
			}

			//更新总分数
			this.upDateScore();
			await this.sleep(1500);
		}
		private qldComplete():void
		{
			this.mContent.m_qld.visible=false;
		}
		private daQiang(from:PlayerHead,to:PlayerHead):void
		{
			this.qiang = UI.Game.UI_DaQiang.createInstance() ;
			this.qiangContent.addChild(this.qiang)
			this.qiang.x = from.x;
			this.qiang.y = from.y;
			this.changeRotation(from.x,from.y,to.x,to.y);
			this.qiang.m_t0.play(this.daQiangComplete,this);
			to.showQiangYan();
		}
		private upDateScore():void
		{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				this.curHeadAry[i].updateScore();
			}
		}
		/*
		private daQiang1():void
		{
			this.qiang = UI.Game.UI_DaQiang.createInstance() ;
			this.mContent.addChild(this.qiang)
			this.qiang.x = this.head3.x;
			this.qiang.y = this.head3.y;
			this.changeRotation(this.qiang.x,this.qiang.y,this.head2.x,this.head2.y)
			this.qiang.m_t0.play(this.daQiangComplete,this);
		}
		*/
		private changeRotation(fromx:number,fromy:number,tox:number,toy:number):void
		{
			let angel:number = App.MathUtils.towPointGetAngle(fromx,fromy,tox,toy);
			this.qiang.rotation = angel+180;
			if(angel<90&&angel>-90){
				this.qiang.scaleY=-1;
			}else{
				this.qiang.scaleY=1;
			}
		}
		private daQiangComplete():void
		{
			if(this.qiang!=null&&this.qiangContent!=null){
				this.qiangContent.removeChildren();
				// App.DisplayUtils.removeFromParent(this.qiang.displayObject);
				// this.qiang=null;
			}
		}
		// private restartState:boolean=false;
		private gameRestart():void
		{
			// this.restartState=true;
		}
		
		private onHelp():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.SHUOMING);
		}
		private onSetting():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.SETTING);

		}
		private onContinue():void
		{
			this.mContent.m_btn_continue.visible=false;
			this.doRestart();
			if(GameModel.ins.roomModel.isAllFinish){//全部结束了，就显示结果
				ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_ALL_RESULT);
			}else{
				ServerEngine.sendReady();
			}
		}
		private onQuit():void
		{
			// if(GameModel.ins.uid==GameModel.ins.roomModel.fuid){
			// 	AlertUtil.alert("您确定解散房间吗？",core.Handler.create(this,this.doQuit))
			// }else{
			// 	AlertUtil.alert("您确定退出房间吗？",core.Handler.create(this,this.doQuit))
			// }
			ServerEngine.leaveRooom();
		}
		// private doQuit():void
		// {
		// 	ServerEngine.leaveRooom();
		// }
		private onChat():void
		{
			ModuleMgr.ins.showModule(ModuleEnum.CHAT);
		}
		private leaveRoomCallBack():void
		{
			GameModel.ins.disMissRoom();
			ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_MAIN);
		}
		private UserDiaoXian(msg:T2C_DiaoXian):void
		{
			this.getPlayerById(msg.uid).setDiaoXian(true)
		}
		private UserDiaoXianBack(msg:T2C_DiaoXian_Back):void
		{
			this.getPlayerById(msg.uid).setDiaoXian(false);
			this.upDateLocation();
		}
		private UserAskForDismiss(msg:T2C_AskForDismiss):void
		{
			ModuleMgr.ins.showModule(ModuleEnum.DISSOLVE_ROOM,msg)
		}
		private RoomDismissFailed(msg:T2C_Message_Base):void
		{
			ModuleMgr.ins.closeModule(ModuleEnum.DISSOLVE_ROOM)
			// AlertUtil.floatMsg(msg['name']+"不同意"+"房间解散失败。")
		}
		private getPlayerById(uid:string):PlayerHead{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				if(this.curHeadAry[i].user!=null&&this.curHeadAry[i].user.uid==uid){
					return this.curHeadAry[i];
				}
			}
			return null;
		}
		// 延迟
		private sleep(ms = 0) {
			if (this.wantToBreakHere==true) {
				// 抛出中断信号.
				return Promise.reject("quit");
			}
			return new Promise(r => setTimeout(r, ms));
		}
		private playMusic(data:boolean):void
		{
			if(data==true){
				App.SoundUtils.playSound("music_bg_game_mp3",1,0);
			}else{
				App.SoundUtils.stopSoundByID("music_bg_game_mp3");
			}
		}
		private onInvite():void
		{
			if(this.mContent.m_sharetips.visible==true){
				return;
			}
			this.mContent.m_sharetips.visible=true;
			App.TimerManager.doTimer(3000,1,this.hideInvite,this)

		}
		private doInviteJs():void
		{
			let shareData:Object = new Object();
			shareData["shareUserId"]=GameModel.ins.uid;
			shareData["shareUserName"]=GameModel.ins.uname;
			shareData["shareRoomId"]=GameModel.ins.roomModel.rid;
			shareData["totalNum"]=GameModel.ins.roomModel.rinfo.pn;
			shareData["nowNum"]=GameModel.ins.roomModel.users.length;
			shareData["payModel"]=GameModel.ins.roomModel.rinfo.fc==1?"房主付费":"AA局";
			shareData["model"]=GameModel.ins.roomModel.rinfo.zz==1?"坐庄模式":"算分模式";
			shareData["juNum"]=GameModel.ins.roomModel.rinfo.snum;
			shareData["avatar"]=GameModel.ins.avatar;
			WXUtil.ins.invit(shareData);
		}
		private onReceiveChat(msg:T2C_Chat):void
		{
			this.getPlayerById(msg.uid).speek(msg.str);
		}
		private flower(msg:T2C_Chat):void
		{
			let arr:Array<string> = msg.str.split("|");
			if(arr.length>1){
				let uid:string = arr[0];
				let str:string = arr[1];
				if(str == "flower"){
					this.showFlower(msg.uid,uid);
				}else if(str == "boom"){
					this.showBoom(msg.uid,uid);
				}
				// this.getPlayerById(uid).flower(str);
			}
		}
		private showFlower(fromUid:string,toUid:string):void
		{
			let flower:UI.Game.UI_Flower = UI.Game.UI_Flower.createInstance();
			let fromHead:PlayerHead = this.getPlayerById(fromUid);
			let toHead:PlayerHead = this.getPlayerById(toUid);
			flower.x = fromHead.x;
			flower.y = fromHead.y;
			this.mContent.addChild(flower);
			TweenMax.to(flower,0.4,{x:toHead.x+60,y:toHead.y+70,onComplete:this.flowerMoveComplete,onCompleteParams:[flower,this]})
		}
		private flowerMoveComplete(flower:UI.Game.UI_Flower,cur:any):void
		{
			flower.m_t0.play(cur.onFlowerEffectComplete,cur,flower);
		}
		private showBoom(fromUid:string,toUid:string):void
		{
			let boom:UI.Game.UI_Boom = UI.Game.UI_Boom.createInstance();
			let fromHead:PlayerHead = this.getPlayerById(fromUid);
			let toHead:PlayerHead = this.getPlayerById(toUid);
			boom.x = fromHead.x;
			boom.y = fromHead.y;
			boom.m_boom2.visible=false;
			this.mContent.addChild(boom);
			TweenMax.to(boom,0.4,{x:toHead.x,y:toHead.y,onComplete:this.boomMoveComplete,onCompleteParams:[boom,this]})
		}
		private boomMoveComplete(boom:UI.Game.UI_Boom,cur:any):void
		{
			boom.m_boom2.visible=true;
			boom.m_t0.play(cur.onBoomEffectComplete,cur,boom);
		}
		private onFlowerEffectComplete(flower:UI.Game.UI_Flower):void
		{
			// App.DisplayUtils.removeFromParent(flower.displayObject);
			flower.dispose();
			if(flower.parent){
				flower.parent.removeChild(flower);
			}
			flower=null;
		}
		private onBoomEffectComplete(boom:UI.Game.UI_Boom):void
		{
			// App.DisplayUtils.removeFromParent(boom.displayObject);
			boom.dispose();
			if(boom.parent){
				boom.parent.removeChild(boom);
			}
			boom=null;
		}
		private hideInvite():void
		{
			this.mContent.m_sharetips.visible=false;
		}
		private changeBg():void
		{
			this.mContent.m_bg.url = this.bgAry[SettingModel.ins.bg];
		}
		private upDateLocation():void
		{
			LocationModel.ins.sendPosChat();
		}
		public preClose(data?: any): void {
			this.wantToBreakHere=true;
			App.SoundUtils.stopSoundByID("music_bg_game_mp3");
			App.TimerManager.remove(this.hideInvite,this);

			for(let i:number=0;i<this.curHeadAry.length;i++){
				this.curHeadAry[i].doDispose();
			}

			ChatModel.ins.dispose();
			App.MessageCenter.removeListener(MsgEnum.NEW_UESR_IN,this.UserIn,this);
			App.MessageCenter.removeListener(MsgEnum.NEW_UESR_OUT,this.UserOut,this);
			App.MessageCenter.removeListener(MsgEnum.NEW_UESR_READY,this.UserReady,this);
			App.MessageCenter.removeListener(MsgEnum.NEW_UESR_READY_CANCEL,this.UserReadyCancel,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_FAPAI,this.FaPai,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_BAIPAI,this.BaiPaiCallBack,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_SINGLE_RESULT,this.showSingleResult,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_RESTART,this.gameRestart,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_USER_DIAOXIAN,this.UserDiaoXian,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_USER_DIAOXIAN_BACK,this.UserDiaoXianBack,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_ASKFOR_DISMISS,this.UserAskForDismiss,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_ANSWER_FAILED,this.RoomDismissFailed,this);
			App.MessageCenter.removeListener(MsgEnum.STOP_PLAY_MUSIC,this.playMusic,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_BEGIN_RESTART,this.doRestart,this);
			App.MessageCenter.removeListener(MsgEnum.CHANGE_BG,this.changeBg,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_CHAT,this.onReceiveChat,this);
			App.MessageCenter.removeListener(MsgEnum.GAME_FLOWER,this.flower,this);
			App.MessageCenter.removeListener(game.MsgEnum.GAME_LOCATION,this.upDateLocation,this);
			this.preCloseCpl();
		}
	}
}