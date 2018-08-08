module game {
	export class ServerEngine {
		public constructor() {
		}
		private enterRoomHandle:core.Handler;
		/**
		 * 发送登录协议
		 */
		public static sendLogin(handle:core.Handler):void
		{
			App.Socket.addCmdListener(MsgType.Login,handle)
			let loginMsg:C2T_Login = new C2T_Login();
			loginMsg.Msg.name = "test";
			loginMsg.Msg.wid = "12345";
			loginMsg.Msg.mid = "123456";
			loginMsg.Msg.head = "test";
			loginMsg.Msg.chid = "";
			App.Socket.send(loginMsg);
		}
		public static addSocketListener():void
		{
			App.Socket.addCmdListener(MsgType.UpdateMyInfo,core.Handler.create(this,this.updateMyInfo,[],false));//new core.Handler(this,this.enterRoomCallBack,[handle])
			App.Socket.addCmdListener(MsgType.EnterRooom,core.Handler.create(this,this.enterRoomCallBack,[],false));//new core.Handler(this,this.enterRoomCallBack,[handle])
			App.Socket.addCmdListener(MsgType.LeaveRoom,core.Handler.create(this,this.leaveRoomCallBack,[],false));
			App.Socket.addCmdListener(MsgType.Ready,core.Handler.create(this,this.readyCallBack,[],false));
			App.Socket.addCmdListener(MsgType.JieSuan_Single,core.Handler.create(this,this.JieSuanSingleCallBack,[],false));
			App.Socket.addCmdListener(MsgType.GameStart,core.Handler.create(this,this.gameStartCallBack,[],false));
			App.Socket.addCmdListener(MsgType.GameReStart,core.Handler.create(this,this.gameReStart,[],false));
			App.Socket.addCmdListener(MsgType.RoomDismiss,core.Handler.create(this,this.roomDismiss,[],false));
			App.Socket.addCmdListener(MsgType.JieSuan_All,core.Handler.create(this,this.JieSuanAllCallBack,[],false));
			App.Socket.addCmdListener(MsgType.AnswerForDismiss,core.Handler.create(this,this.answerForDismissCallBack,[],false));
			App.Socket.addCmdListener(MsgType.BaiPai,core.Handler.create(this,this.baipaiCallBack,[],false));
			App.Socket.addCmdListener(MsgType.AskForDismiss,core.Handler.create(this,this.askForDismissCallBack,[],false));
			App.Socket.addCmdListener(MsgType.PlayerDisConnect,core.Handler.create(this,this.playerDiaoXian,[],false));
			App.Socket.addCmdListener(MsgType.PlayerInAfterDisConnect,core.Handler.create(this,this.playerDiaoXianBack,[],false));
			App.Socket.addCmdListener(MsgType.Chat,core.Handler.create(this,this.chatCallBack,[],false));
		}
		private static updateMyInfo(msg:T2C_UpdateMyInfo):void
		{
			GameModel.ins.card = msg.card;
			GameModel.ins.gold = msg.gold;
			
			App.MessageCenter.dispatch(MsgEnum.UPDATE_MYINFO,msg);
		}
		public static createRoom(ty:number,pn:number,jn:number,zz:number,jm:number,fc:number,jp:Array<number>,handle:core.Handler):void
		{
			App.Socket.addCmdListener(MsgType.CreateRoom,handle)
			let createRoomMsg:C2T_Msg = new C2T_Msg();
			createRoomMsg.Aid = MsgType.CreateRoom;
			let msg:C2T_Message_CreateRoom = new C2T_Message_CreateRoom();
			msg.ty = ty;
			msg.pn = pn;
			msg.jn = jn;
			msg.zz = zz;
			msg.jm = jm;
			msg.fc = fc;
			msg.jp = jp;
			createRoomMsg.Msg = msg;
			App.Socket.send(createRoomMsg);
		}
		public static enterRoom(rid:number):void
		{
			let enterRoomMsg:C2T_Msg = new C2T_Msg();
			enterRoomMsg.Aid = MsgType.EnterRooom;
			let msg:C2T_Message_EnterRoom = new C2T_Message_EnterRoom();
			msg.rid = rid;
			enterRoomMsg.Msg=msg;
			App.Socket.send(enterRoomMsg);
		}
		private static enterRoomCallBack(msg:T2C_Enter_Room):void
		{
			GameModel.ins.setRoomInfo(msg);
		}
		private static leaveRoomCallBack(msg:T2C_Leave_Room):void
		{
			GameModel.ins.roomModel.removeUser(msg.uid);
			App.MessageCenter.dispatch(MsgEnum.NEW_UESR_OUT,msg);
			// if(msg.uid==GameModel.ins.uid){
			// 	App.Socket.removeCmdListener(MsgType.LeaveRoom,this.leaveRoomCallBack);
			// 	App.Socket.removeCmdListener(MsgType.Ready,this.readyCallBack);
			// 	App.Socket.removeCmdListener(MsgType.GameStart,this.gameStartCallBack);
			// 	App.Socket.removeCmdListener(MsgType.JieSuan_Single,this.JieSuanSingleCallBack);
			// }
		}
		public static leaveRooom():void
		{
			let leaveRoomMsg:C2T_Msg = new C2T_Msg();
			leaveRoomMsg.Aid = MsgType.LeaveRoom;
			App.Socket.send(leaveRoomMsg);
		}

		public static sendReady():void
		{
			let readyMsg:C2T_Msg = new C2T_Msg();
			readyMsg.Aid = MsgType.Ready;
			App.Socket.send(readyMsg);
		}
		private static readyCallBack(msg:T2C_Ready):void
		{
			App.MessageCenter.dispatch(MsgEnum.NEW_UESR_READY,msg);
		}
		private static gameStartCallBack(msg:T2C_GameStart):void
		{
			GameModel.ins.createRound(msg);
			App.MessageCenter.dispatch(MsgEnum.GAME_FAPAI);	
		}
		private static gameReStart():void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_RESTART);
		}
		private static JieSuanSingleCallBack(msg:T2C_JieSuanSingle):void
		{
			GameModel.ins.roomModel.rinfo.nnum+=1;
			GameModel.ins.roundModel.jieSuanSingle(msg);
		}
		private static JieSuanAllCallBack(msg:T2C_JieSuanAll):void
		{
			GameModel.ins.roomModel.setJieSuanAll(msg);
		}
		public static sendBaiPai($msg:C2T_Message_BaiPai):void{
			
			let msg:C2T_Msg=new C2T_Msg();
			msg.Aid = MsgType.BaiPai;
			msg.Msg = $msg;
			App.Socket.send(msg);
		}
		public static askForDismiss():void
		{
			let msg:C2T_Msg=new C2T_Msg();
			msg.Aid = MsgType.AskForDismiss;
			let subMsg:C2T_Message_AskForDismiss = new C2T_Message_AskForDismiss();
			subMsg.rid = GameModel.ins.roomModel.rid;
			msg.Msg = subMsg;
			App.Socket.send(msg);
		}
		private static askForDismissCallBack(msg:T2C_AskForDismiss):void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_ASKFOR_DISMISS,msg);
		}
		private static baipaiCallBack($msg:T2C_BaiPai):void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_BAIPAI,$msg);
		}
		public static sendAcceptOrRefuseDismiss(value:number):void
		{
			let msg:C2T_Msg=new C2T_Msg();
			msg.Aid = MsgType.AnswerForDismiss;
			let subMsg:C2T_Message_AnswerForDismiss = new C2T_Message_AnswerForDismiss();
			subMsg.act = value;
			msg.Msg = subMsg;
			App.Socket.send(msg);
		}
		private static answerForDismissCallBack(msg:T2C_AnswerForDismiss):void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_ANSWER_FOR_DISMISS,msg);
		}
		private static roomDismiss($msg:T2C_Message_Base):void
		{
			if($msg['ok']>0){
				if(GameModel.ins.roomModel.isAllFinish==false){
					GameModel.ins.disMissRoom();
					ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_MAIN);
				}else{
					if(GameModel.ins.roomModel.hasPlayedJu<GameModel.ins.roomModel.rinfo.snum){//结算的局数小余房间总局数，说明是解散的
						ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_ALL_RESULT);
					}
				}
			}else{
				App.MessageCenter.dispatch(MsgEnum.GAME_ANSWER_FAILED,$msg);
			}
		}
		private static playerDiaoXian(msg:T2C_DiaoXian):void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_USER_DIAOXIAN,msg);
		}
		private static playerDiaoXianBack(msg:T2C_DiaoXian_Back):void
		{
			App.MessageCenter.dispatch(MsgEnum.GAME_USER_DIAOXIAN_BACK,msg);
		}
		public static sendChat(str:string):void
		{
			let msg:C2T_Msg=new C2T_Msg();
			msg.Aid = MsgType.Chat;
			let subMsg:C2T_Chat = new C2T_Chat();
			subMsg.str = str;
			subMsg.uid = GameModel.ins.uid;
			subMsg.uname = GameModel.ins.uname;
			let date:Date = new Date();
			
			subMsg.time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
			
			msg.Msg = subMsg;
			App.Socket.send(msg);
		}
		private static chatCallBack(msg:T2C_Chat):void
		{
			ChatModel.ins.onReceive(msg);
			App.MessageCenter.dispatch(MsgEnum.GAME_CHAT,msg);
		}
		public static sendBeart():void
		{
			App.TimerManager.doTimer(8000,0,this.doHeartBeat,this)
			this.doHeartBeat();
		}
		private static doHeartBeat():void
		{
			let heart:C2T_Heart = new C2T_Heart();
			heart.Aid = 1;
			App.Socket.send(heart);
			console.log("heart");
		}
	}
}