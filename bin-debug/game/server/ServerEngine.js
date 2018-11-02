var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var ServerEngine = (function () {
        function ServerEngine() {
        }
        /**
         * 发送登录协议
         */
        // public static sendLogin(handle:core.Handler):void
        // {
        // 	App.Socket.addCmdListener(MsgType.Login,handle)
        // 	let loginMsg:C2T_Login = new C2T_Login();
        // 	loginMsg.Msg.name = "test";
        // 	loginMsg.Msg.wid = "12345";
        // 	loginMsg.Msg.mid = "123456";
        // 	loginMsg.Msg.head = "test";
        // 	loginMsg.Msg.chid = "";
        // 	App.Socket.send(loginMsg);
        // }
        ServerEngine.addSocketListener = function () {
            App.Socket.addCmdListener(MsgType.UpdateMyInfo, core.Handler.create(this, this.updateMyInfo, [], false)); //new core.Handler(this,this.enterRoomCallBack,[handle])
            App.Socket.addCmdListener(MsgType.EnterRooom, core.Handler.create(this, this.enterRoomCallBack, [], false)); //new core.Handler(this,this.enterRoomCallBack,[handle])
            App.Socket.addCmdListener(MsgType.LeaveRoom, core.Handler.create(this, this.leaveRoomCallBack, [], false));
            App.Socket.addCmdListener(MsgType.Ready, core.Handler.create(this, this.readyCallBack, [], false));
            App.Socket.addCmdListener(MsgType.JieSuan_Single, core.Handler.create(this, this.JieSuanSingleCallBack, [], false));
            App.Socket.addCmdListener(MsgType.GameStart, core.Handler.create(this, this.gameStartCallBack, [], false));
            App.Socket.addCmdListener(MsgType.GameReStart, core.Handler.create(this, this.gameReStart, [], false));
            App.Socket.addCmdListener(MsgType.RoomDismiss, core.Handler.create(this, this.roomDismiss, [], false));
            App.Socket.addCmdListener(MsgType.JieSuan_All, core.Handler.create(this, this.JieSuanAllCallBack, [], false));
            App.Socket.addCmdListener(MsgType.AnswerForDismiss, core.Handler.create(this, this.answerForDismissCallBack, [], false));
            App.Socket.addCmdListener(MsgType.BaiPai, core.Handler.create(this, this.baipaiCallBack, [], false));
            App.Socket.addCmdListener(MsgType.AskForDismiss, core.Handler.create(this, this.askForDismissCallBack, [], false));
            App.Socket.addCmdListener(MsgType.PlayerDisConnect, core.Handler.create(this, this.playerDiaoXian, [], false));
            App.Socket.addCmdListener(MsgType.PlayerInAfterDisConnect, core.Handler.create(this, this.playerDiaoXianBack, [], false));
            App.Socket.addCmdListener(MsgType.Chat, core.Handler.create(this, this.chatCallBack, [], false));
        };
        ServerEngine.updateMyInfo = function (msg) {
            game.GameModel.ins.card = msg.card;
            game.GameModel.ins.gold = msg.gold;
            App.MessageCenter.dispatch(game.MsgEnum.UPDATE_MYINFO, msg);
        };
        ServerEngine.createRoom = function (ty, pn, jn, zz, jm, fc, jp, handle) {
            App.Socket.addCmdListener(MsgType.CreateRoom, handle);
            var createRoomMsg = new C2T_Msg();
            createRoomMsg.Aid = MsgType.CreateRoom;
            var msg = new C2T_Message_CreateRoom();
            msg.ty = ty;
            msg.pn = pn;
            msg.jn = jn;
            msg.zz = zz;
            msg.jm = jm;
            msg.fc = fc;
            msg.jp = jp;
            createRoomMsg.Msg = msg;
            App.Socket.send(createRoomMsg);
        };
        ServerEngine.enterRoom = function (rid) {
            var enterRoomMsg = new C2T_Msg();
            enterRoomMsg.Aid = MsgType.EnterRooom;
            var msg = new C2T_Message_EnterRoom();
            msg.rid = rid;
            enterRoomMsg.Msg = msg;
            App.Socket.send(enterRoomMsg);
        };
        ServerEngine.enterRoomCallBack = function (msg) {
            game.GameModel.ins.setRoomInfo(msg);
        };
        ServerEngine.leaveRoomCallBack = function (msg) {
            game.GameModel.ins.roomModel.removeUser(msg.uid);
            App.MessageCenter.dispatch(game.MsgEnum.NEW_UESR_OUT, msg);
            // if(msg.uid==GameModel.ins.uid){
            // 	App.Socket.removeCmdListener(MsgType.LeaveRoom,this.leaveRoomCallBack);
            // 	App.Socket.removeCmdListener(MsgType.Ready,this.readyCallBack);
            // 	App.Socket.removeCmdListener(MsgType.GameStart,this.gameStartCallBack);
            // 	App.Socket.removeCmdListener(MsgType.JieSuan_Single,this.JieSuanSingleCallBack);
            // }
        };
        ServerEngine.leaveRooom = function () {
            var leaveRoomMsg = new C2T_Msg();
            leaveRoomMsg.Aid = MsgType.LeaveRoom;
            App.Socket.send(leaveRoomMsg);
        };
        ServerEngine.sendReady = function () {
            var readyMsg = new C2T_Msg();
            readyMsg.Aid = MsgType.Ready;
            App.Socket.send(readyMsg);
        };
        ServerEngine.readyCallBack = function (msg) {
            App.MessageCenter.dispatch(game.MsgEnum.NEW_UESR_READY, msg);
        };
        ServerEngine.gameStartCallBack = function (msg) {
            game.GameModel.ins.createRound(msg);
            App.MessageCenter.dispatch(game.MsgEnum.GAME_FAPAI);
        };
        ServerEngine.gameReStart = function () {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_RESTART);
        };
        ServerEngine.JieSuanSingleCallBack = function (msg) {
            game.GameModel.ins.roomModel.rinfo.nnum += 1;
            game.GameModel.ins.roundModel.jieSuanSingle(msg);
        };
        ServerEngine.JieSuanAllCallBack = function (msg) {
            game.GameModel.ins.roomModel.setJieSuanAll(msg);
        };
        ServerEngine.sendBaiPai = function ($msg) {
            var msg = new C2T_Msg();
            msg.Aid = MsgType.BaiPai;
            msg.Msg = $msg;
            App.Socket.send(msg);
        };
        ServerEngine.askForDismiss = function () {
            var msg = new C2T_Msg();
            msg.Aid = MsgType.AskForDismiss;
            var subMsg = new C2T_Message_AskForDismiss();
            subMsg.rid = game.GameModel.ins.roomModel.rid;
            msg.Msg = subMsg;
            App.Socket.send(msg);
        };
        ServerEngine.askForDismissCallBack = function (msg) {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_ASKFOR_DISMISS, msg);
        };
        ServerEngine.baipaiCallBack = function ($msg) {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_BAIPAI, $msg);
        };
        ServerEngine.sendAcceptOrRefuseDismiss = function (value) {
            var msg = new C2T_Msg();
            msg.Aid = MsgType.AnswerForDismiss;
            var subMsg = new C2T_Message_AnswerForDismiss();
            subMsg.act = value;
            msg.Msg = subMsg;
            App.Socket.send(msg);
        };
        ServerEngine.answerForDismissCallBack = function (msg) {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_ANSWER_FOR_DISMISS, msg);
        };
        ServerEngine.roomDismiss = function ($msg) {
            if ($msg['ok'] > 0) {
                if (game.GameModel.ins.roomModel.isAllFinish == false) {
                    game.AlertUtil.floatMsg("房间已经解散");
                    game.GameModel.ins.disMissRoom();
                    ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT);
                    ModuleMgr.ins.changeScene(ModuleEnum.GAME, ModuleEnum.GAME_MAIN);
                }
                else {
                    if (game.GameModel.ins.roomModel.hasPlayedJu < game.GameModel.ins.roomModel.rinfo.snum) {
                        ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT);
                        ModuleMgr.ins.changeScene(ModuleEnum.GAME, ModuleEnum.GAME_ALL_RESULT);
                    }
                }
            }
            else {
                App.MessageCenter.dispatch(game.MsgEnum.GAME_ANSWER_FAILED, $msg);
            }
        };
        ServerEngine.playerDiaoXian = function (msg) {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_USER_DIAOXIAN, msg);
        };
        ServerEngine.playerDiaoXianBack = function (msg) {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_USER_DIAOXIAN_BACK, msg);
        };
        ServerEngine.sendChat = function (str) {
            var msg = new C2T_Msg();
            msg.Aid = MsgType.Chat;
            var subMsg = new C2T_Chat();
            subMsg.type = 0;
            subMsg.str = str;
            subMsg.uid = game.GameModel.ins.uid;
            subMsg.uname = game.GameModel.ins.uname;
            var date = new Date();
            subMsg.times = date.getTime().toString();
            subMsg.time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
            msg.Msg = subMsg;
            App.Socket.send(msg);
        };
        ServerEngine.sendFlower = function (str) {
            var msg = new C2T_Msg();
            msg.Aid = MsgType.Chat;
            var subMsg = new C2T_Chat();
            subMsg.type = 1;
            subMsg.str = str;
            subMsg.uid = game.GameModel.ins.uid;
            subMsg.uname = game.GameModel.ins.uname;
            var date = new Date();
            subMsg.times = date.getTime().toString();
            subMsg.time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
            msg.Msg = subMsg;
            App.Socket.send(msg);
        };
        //发送地理位置
        ServerEngine.sendLocation = function (str) {
            var msg = new C2T_Msg();
            msg.Aid = MsgType.Chat;
            var subMsg = new C2T_Chat();
            subMsg.type = 2;
            subMsg.str = str;
            subMsg.uid = game.GameModel.ins.uid;
            subMsg.uname = game.GameModel.ins.uname;
            var date = new Date();
            subMsg.times = date.getTime().toString();
            subMsg.time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
            msg.Msg = subMsg;
            App.Socket.send(msg);
        };
        ServerEngine.chatCallBack = function (msg) {
            switch (msg.type) {
                case 0:
                    game.ChatModel.ins.onReceive(msg);
                    App.MessageCenter.dispatch(game.MsgEnum.GAME_CHAT, msg);
                    break;
                case 1:
                    App.MessageCenter.dispatch(game.MsgEnum.GAME_FLOWER, msg);
                    break;
                case 2:
                    game.LocationModel.ins.setPos(msg);
                    break;
            }
        };
        ServerEngine.sendBeart = function () {
            App.TimerManager.doTimer(8000, 0, this.doHeartBeat, this);
            this.doHeartBeat();
        };
        ServerEngine.doHeartBeat = function () {
            var heart = new C2T_Heart();
            heart.Aid = 1;
            App.Socket.send(heart);
            console.log("heart");
        };
        return ServerEngine;
    }());
    game.ServerEngine = ServerEngine;
    __reflect(ServerEngine.prototype, "game.ServerEngine");
})(game || (game = {}));
//# sourceMappingURL=ServerEngine.js.map