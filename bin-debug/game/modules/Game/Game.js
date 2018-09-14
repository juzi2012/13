var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var game;
(function (game) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            _this.bgAry = ["ui://9s4fd8dyrezh0", "ui://9txxlsx2hmwn1", "ui://98nj6h4xhmwn1"];
            _this.wantToBreakHere = false;
            return _this;
        }
        Game.prototype.initContent = function () {
            this.content = UI.Game.UI_Game.createInstance();
        };
        Object.defineProperty(Game.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        Game.prototype.preShow = function (data) {
            App.SoundUtils.playSound("music_bg_game_mp3", 1, 0);
            this.readyArr = [];
            this.mContent.m_sharetips.visible = false;
            if (game.GameModel.ins.uid == game.GameModel.ins.roomModel.fuid) {
                this.mContent.m_btn_ready.visible = false;
                this.mContent.m_btn_start.visible = true;
            }
            else {
                this.mContent.m_btn_ready.visible = true;
                this.mContent.m_btn_start.visible = false;
            }
            this.mContent.m_btn_continue.visible = false;
            this.mContent.m_btn_ready.addClickListener(this.onReadyHandle, this);
            this.mContent.m_btn_start.addClickListener(this.onReadyHandle, this);
            this.mContent.m_btn_check.addClickListener(this.ShowPutPorkModule, this);
            this.mContent.m_btn_help.addClickListener(this.onHelp, this);
            this.mContent.m_btn_setting.addClickListener(this.onSetting, this);
            this.mContent.m_btn_quit.addClickListener(this.onQuit, this);
            this.mContent.m_btn_chat.addClickListener(this.onChat, this);
            this.mContent.m_btn_continue.addClickListener(this.onContinue, this);
            this.mContent.m_btn_invite.addClickListener(this.onInvite, this);
            this.mContent.m_btn_invite.visible = false;
            this.mContent.m_btn_check.visible = false;
            this.mContent.m_img_start.visible = false;
            this.mContent.m_qld.visible = false;
            this.mContent.m_bg.url = this.bgAry[game.SettingModel.ins.bg];
            this.preShowCpl();
            //根据当前牌局的人数显示头像的个数
            this.mContent.m_playerNumCtrl.selectedPage = game.GameModel.ins.roomModel.rinfo.pn.toString();
            this.setHead();
            //初始化当前人物头像
            for (var i = 0; i < game.GameModel.ins.roomModel.users.length; i++) {
                this.UserIn(game.GameModel.ins.roomModel.users[i]);
            }
            App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_IN, this.UserIn, this);
            App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_OUT, this.UserOut, this);
            App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_READY, this.UserReady, this);
            App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_READY_CANCEL, this.UserReadyCancel, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_FAPAI, this.FaPai, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_BAIPAI, this.BaiPaiCallBack, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_SINGLE_RESULT, this.showSingleResult, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_RESTART, this.gameRestart, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_BEGIN_RESTART, this.doRestart, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_CHECK_SINGLE, this.checkSingle, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_USER_DIAOXIAN, this.UserDiaoXian, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_USER_DIAOXIAN_BACK, this.UserDiaoXianBack, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_ASKFOR_DISMISS, this.UserAskForDismiss, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_ANSWER_FAILED, this.RoomDismissFailed, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_CHAT, this.onReceiveChat, this);
            App.MessageCenter.addListener(game.MsgEnum.STOP_PLAY_MUSIC, this.playMusic, this);
            App.MessageCenter.addListener(game.MsgEnum.CHANGE_BG, this.changeBg, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_FLOWER, this.flower, this);
            this.mContent.m_txt_room.text = "房间号:" + game.GameModel.ins.roomModel.rid.toString();
            switch (game.GameModel.ins.roomModel.rinfo.rp) {
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
            this.mContent.m_txt_jushu.text = "局数:" + game.GameModel.ins.roomModel.rinfo.nnum.toString() + "/" + game.GameModel.ins.roomModel.rinfo.snum.toString() + " " + game.GameModel.ins.roomModel.rinfo.pn.toString() + "人";
            //如果是断线重连进来的，则会判断是否是已经开局
            if (game.GameModel.ins.roomModel.isReConnectInRoom) {
                if (game.GameModel.ins.roomModel.reConnectState == 1) {
                    for (var i = 0; i < this.curHeadAry.length; i++) {
                        var head = this.curHeadAry[i];
                        if (head.user.bp == 0) {
                            head.onFaPai();
                            if (head.user.uid == game.GameModel.ins.uid) {
                                ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK);
                            }
                        }
                        else if (head.user.bp == 1) {
                            head.onBaiPaiEnd();
                        }
                    }
                }
                if (game.GameModel.ins.roomModel.js != "") {
                    var msg = new T2C_AskForDismiss();
                    msg.uid = game.GameModel.ins.roomModel.js;
                    msg.time = game.GameModel.ins.roomModel.jt;
                    ModuleMgr.ins.showModule(ModuleEnum.DISSOLVE_ROOM, msg);
                }
            }
            game.ChatModel.ins.init();
            //显示邀请
            if (game.GameModel.ins.roomModel.users.length < game.GameModel.ins.roomModel.rinfo.pn && game.GameModel.ins.uid == game.GameModel.ins.roomModel.fuid) {
                this.mContent.m_btn_invite.visible = true;
            }
        };
        Game.prototype.setHead = function () {
            this.head1 = this.mContent.m_head1;
            this.head2 = this.mContent.m_head2;
            this.head3 = this.mContent.m_head3;
            this.head4 = this.mContent.m_head4;
            this.head5 = this.mContent.m_head5;
            this.head6 = this.mContent.m_head6;
            this.head2.m_ctrlPos.selectedIndex = 1;
            this.head2.m_pokers.m_c2.selectedIndex = 1;
            this.head3.m_ctrlPos.selectedIndex = 1;
            this.head3.m_pokers.m_c2.selectedIndex = 1;
            this.head4.m_ctrlPos.selectedIndex = 1;
            this.head4.m_pokers.m_c2.selectedIndex = 1;
            for (var i = 0; i < 6; i++) {
                this["head" + (i + 1)].init();
            }
            this.headAry = [[this.head1, this.head4], [this.head1, this.head3, this.head5], [this.head1, this.head3, this.head4, this.head5], [this.head1, this.head2, this.head3, this.head5, this.head6], [this.head1, this.head2, this.head3, this.head4, this.head5, this.head6]];
            this.curHeadAry = this.headAry[this.mContent.m_playerNumCtrl.selectedIndex];
            this.wantToBreakHere = false;
        };
        Game.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        Game.prototype.UserIn = function (user) {
            if (game.GameModel.ins.roomModel.users.length < game.GameModel.ins.roomModel.rinfo.pn && game.GameModel.ins.uid == game.GameModel.ins.roomModel.fuid) {
                this.mContent.m_btn_invite.visible = true;
            }
            else {
                this.mContent.m_btn_invite.visible = false;
            }
            for (var i = 0; i < this.curHeadAry.length; i++) {
                if (this.curHeadAry[i].isInit == false) {
                    this.curHeadAry[i].setData(user);
                    if (user.uid == game.GameModel.ins.uid && user.status == 1) {
                        this.mContent.m_btn_ready.visible = false;
                        this.mContent.m_btn_start.visible = false;
                    }
                    break;
                }
            }
        };
        Game.prototype.UserOut = function (leaveMsg) {
            if (leaveMsg.uid == game.GameModel.ins.uid) {
                this.leaveRoomCallBack();
            }
            else {
                var playerHead = this.getPlayerById(leaveMsg.uid);
                if (playerHead != null) {
                    playerHead.init();
                }
            }
        };
        Game.prototype.onReadyHandle = function () {
            if (game.GameModel.ins.uid == game.GameModel.ins.roomModel.fuid) {
                for (var i = 0; i < this.curHeadAry.length; i++) {
                    if (this.curHeadAry[i].user == null) {
                        game.AlertUtil.floatMsg("玩家未到齐");
                        return;
                    }
                }
                for (var i = 0; i < this.curHeadAry.length; i++) {
                    if (this.curHeadAry[i].user.status == 0 && this.curHeadAry[i].user.uid != game.GameModel.ins.uid) {
                        game.AlertUtil.floatMsg("玩家未准备");
                        return;
                    }
                }
                game.ServerEngine.sendReady();
            }
            else {
                game.ServerEngine.sendReady();
            }
        };
        Game.prototype.UserReady = function (msg) {
            if (game.GameModel.ins.roomModel.isSingleOpen || this.mContent.m_btn_continue.visible == true) {
                this.readyArr.push(msg);
            }
            else {
                this.doReady(msg);
            }
        };
        Game.prototype.doReady = function (msg) {
            var playerHead = this.getPlayerById(msg.uid);
            if (playerHead != null) {
                playerHead.onReady();
                if (msg.uid == game.GameModel.ins.uid) {
                    this.mContent.m_btn_ready.visible = false;
                    this.mContent.m_btn_start.visible = false;
                }
            }
        };
        Game.prototype.UserReadyCancel = function () {
            this.mContent.m_btn_ready.visible = false;
        };
        Game.prototype.FaPai = function () {
            // 先播放开始特效,完了在开始发牌
            this.mContent.m_img_start.visible = true;
            this.mContent.m_t1.play(this.onStartEffectComplete, this);
            App.SoundUtils.playSound("start_mp3", 0, 1);
        };
        Game.prototype.onStartEffectComplete = function () {
            this.mContent.m_img_start.visible = false;
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.curHeadAry[i].onFaPai();
            }
            App.TimerManager.doTimer(1000, 1, this.DoFaPai, this);
        };
        Game.prototype.DoFaPai = function () {
            ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK);
        };
        Game.prototype.ShowPutPorkModule = function () {
            ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK);
        };
        Game.prototype.BaiPaiCallBack = function (msg) {
            this.getPlayerById(msg.uid).onBaiPaiEnd();
        };
        Game.prototype.doRestart = function () {
            this.mContent.m_txt_jushu.text = "局数:" + game.GameModel.ins.roomModel.rinfo.nnum.toString() + "/" + game.GameModel.ins.roomModel.rinfo.snum.toString() + " " + game.GameModel.ins.roomModel.rinfo.pn.toString() + "人";
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.curHeadAry[i].restart();
                if (game.GameModel.ins.uid == game.GameModel.ins.roomModel.fuid) {
                    this.mContent.m_btn_ready.visible = false;
                    this.mContent.m_btn_start.visible = true;
                }
                else {
                    this.mContent.m_btn_ready.visible = true;
                    this.mContent.m_btn_start.visible = false;
                }
            }
            for (var i = 0; i < this.readyArr.length; i++) {
                this.doReady(this.readyArr[i]);
            }
            this.readyArr = [];
        };
        Game.prototype.checkSingle = function () {
            this.mContent.m_btn_continue.visible = true;
        };
        Game.prototype.showSingleResult = function () {
            this.doShowSingleResult().then(function () {
                ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT); //打开单局结算面板，同时重置头像按钮为初始状态
            })
                .catch(function (e) { return console.log("Exception happened:", e); });
        };
        Game.prototype.doShowSingleResult = function () {
            return __awaiter(this, void 0, void 0, function () {
                var round, bipai, cards, special_uid, a, uid, playerHead, c, playerHead, j, i, uid, playerHead, i, j, from, to, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            round = game.GameModel.ins.roundModel;
                            bipai = round.result.bipai;
                            cards = round.result.cards;
                            special_uid = [];
                            //先得到特殊牌型，把特殊牌型展示出来
                            for (a = 0; a < bipai.length; a++) {
                                if (bipai[a].px > 0) {
                                    uid = round.result.bipai[a].uid;
                                    playerHead = this.getPlayerById(uid);
                                    playerHead.showSpecial();
                                    special_uid.push(uid);
                                }
                            }
                            // if(special_uid.length>0){
                            // 	await this.sleep(500);
                            // }
                            return [4 /*yield*/, this.sleep(500)];
                        case 1:
                            // if(special_uid.length>0){
                            // 	await this.sleep(500);
                            // }
                            _a.sent();
                            for (c = 0; c < special_uid.length; c++) {
                                playerHead = this.getPlayerById(special_uid[c]);
                                playerHead.showSpecialResult(cards[c]);
                            }
                            j = 0;
                            _a.label = 2;
                        case 2:
                            if (!(j < 3)) return [3 /*break*/, 7];
                            i = 0;
                            _a.label = 3;
                        case 3:
                            if (!(i < cards.length)) return [3 /*break*/, 6];
                            uid = cards[i].uid;
                            if (!(special_uid.indexOf(uid) < 0)) return [3 /*break*/, 5];
                            playerHead = this.getPlayerById(uid);
                            playerHead.showResult(j, cards[i]);
                            return [4 /*yield*/, this.sleep(1200)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            i++;
                            return [3 /*break*/, 3];
                        case 6:
                            j++;
                            return [3 /*break*/, 2];
                        case 7: return [4 /*yield*/, this.sleep(1000)];
                        case 8:
                            _a.sent();
                            i = 0;
                            _a.label = 9;
                        case 9:
                            if (!(i < bipai.length)) return [3 /*break*/, 14];
                            j = 0;
                            _a.label = 10;
                        case 10:
                            if (!(j < bipai[i].dq.tarIds.length)) return [3 /*break*/, 13];
                            from = this.getPlayerById(bipai[i].uid);
                            to = this.getPlayerById(bipai[i].dq.tarIds[j]);
                            this.daQiang(from, to);
                            return [4 /*yield*/, this.sleep(2500)];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12:
                            j++;
                            return [3 /*break*/, 10];
                        case 13:
                            i++;
                            return [3 /*break*/, 9];
                        case 14:
                            this.upDateScore();
                            i = 0;
                            _a.label = 15;
                        case 15:
                            if (!(i < bipai.length)) return [3 /*break*/, 18];
                            if (!(bipai[i].ql > 0)) return [3 /*break*/, 17];
                            this.mContent.m_qld.visible = true;
                            this.mContent.m_t3.play(this.qldComplete, this);
                            return [4 /*yield*/, this.sleep(3000)];
                        case 16:
                            _a.sent();
                            _a.label = 17;
                        case 17:
                            i++;
                            return [3 /*break*/, 15];
                        case 18: return [2 /*return*/];
                    }
                });
            });
        };
        Game.prototype.qldComplete = function () {
            this.mContent.m_qld.visible = false;
        };
        Game.prototype.daQiang = function (from, to) {
            this.qiang = UI.Game.UI_DaQiang.createInstance();
            this.mContent.addChild(this.qiang);
            this.qiang.x = from.x;
            this.qiang.y = from.y;
            this.changeRotation(from.x, from.y, to.x, to.y);
            this.qiang.m_t0.play(this.daQiangComplete, this);
            to.showQiangYan();
        };
        Game.prototype.upDateScore = function () {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.curHeadAry[i].updateScore();
            }
        };
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
        Game.prototype.changeRotation = function (fromx, fromy, tox, toy) {
            var angel = App.MathUtils.towPointGetAngle(fromx, fromy, tox, toy);
            this.qiang.rotation = angel + 180;
            if (angel < 90 && angel > -90) {
                this.qiang.scaleY = -1;
            }
            else {
                this.qiang.scaleY = 1;
            }
        };
        Game.prototype.daQiangComplete = function () {
            if (this.qiang != null) {
                App.DisplayUtils.removeFromParent(this.qiang.displayObject);
                this.qiang = null;
            }
        };
        // private restartState:boolean=false;
        Game.prototype.gameRestart = function () {
            // this.restartState=true;
        };
        Game.prototype.onHelp = function () {
            ModuleMgr.ins.showModule(ModuleEnum.SHUOMING);
        };
        Game.prototype.onSetting = function () {
            ModuleMgr.ins.showModule(ModuleEnum.SETTING);
        };
        Game.prototype.onContinue = function () {
            this.mContent.m_btn_continue.visible = false;
            this.doRestart();
            if (game.GameModel.ins.roomModel.isAllFinish) {
                ModuleMgr.ins.changeScene(ModuleEnum.GAME, ModuleEnum.GAME_ALL_RESULT);
            }
            else {
                game.ServerEngine.sendReady();
            }
        };
        Game.prototype.onQuit = function () {
            // if(GameModel.ins.uid==GameModel.ins.roomModel.fuid){
            // 	AlertUtil.alert("您确定解散房间吗？",core.Handler.create(this,this.doQuit))
            // }else{
            // 	AlertUtil.alert("您确定退出房间吗？",core.Handler.create(this,this.doQuit))
            // }
            game.ServerEngine.leaveRooom();
        };
        // private doQuit():void
        // {
        // 	ServerEngine.leaveRooom();
        // }
        Game.prototype.onChat = function () {
            ModuleMgr.ins.showModule(ModuleEnum.CHAT);
        };
        Game.prototype.leaveRoomCallBack = function () {
            game.GameModel.ins.disMissRoom();
            ModuleMgr.ins.changeScene(ModuleEnum.GAME, ModuleEnum.GAME_MAIN);
        };
        Game.prototype.UserDiaoXian = function (msg) {
            this.getPlayerById(msg.uid).setDiaoXian(true);
        };
        Game.prototype.UserDiaoXianBack = function (msg) {
            this.getPlayerById(msg.uid).setDiaoXian(false);
        };
        Game.prototype.UserAskForDismiss = function (msg) {
            ModuleMgr.ins.showModule(ModuleEnum.DISSOLVE_ROOM, msg);
        };
        Game.prototype.RoomDismissFailed = function (msg) {
            ModuleMgr.ins.closeModule(ModuleEnum.DISSOLVE_ROOM);
            // AlertUtil.floatMsg(msg['name']+"不同意"+"房间解散失败。")
        };
        Game.prototype.getPlayerById = function (uid) {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                if (this.curHeadAry[i].user.uid == uid) {
                    return this.curHeadAry[i];
                }
            }
            return null;
        };
        // 延迟
        Game.prototype.sleep = function (ms) {
            if (ms === void 0) { ms = 0; }
            if (this.wantToBreakHere == true) {
                // 抛出中断信号.
                return Promise.reject("quit");
            }
            return new Promise(function (r) { return setTimeout(r, ms); });
        };
        Game.prototype.playMusic = function (data) {
            if (data == true) {
                App.SoundUtils.playSound("music_bg_game_mp3", 1, 0);
            }
            else {
                App.SoundUtils.stopSoundByID("music_bg_game_mp3");
            }
        };
        Game.prototype.onInvite = function () {
            if (this.mContent.m_sharetips.visible == true) {
                return;
            }
            this.mContent.m_sharetips.visible = true;
            App.TimerManager.doTimer(3000, 1, this.hideInvite, this);
        };
        Game.prototype.onReceiveChat = function (msg) {
            this.getPlayerById(msg.uid).speek(msg.str);
        };
        Game.prototype.flower = function (msg) {
            var arr = msg.str.split("|");
            if (arr.length > 1) {
                var uid = arr[0];
                var str = arr[1];
                this.getPlayerById(uid).flower(str);
            }
        };
        Game.prototype.hideInvite = function () {
            this.mContent.m_sharetips.visible = false;
        };
        Game.prototype.changeBg = function () {
            this.mContent.m_bg.url = this.bgAry[game.SettingModel.ins.bg];
        };
        Game.prototype.preClose = function (data) {
            this.wantToBreakHere = true;
            App.SoundUtils.stopSoundByID("music_bg_game_mp3");
            App.TimerManager.remove(this.hideInvite, this);
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.curHeadAry[i].doDispose();
            }
            game.ChatModel.ins.dispose();
            App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_IN, this.UserIn, this);
            App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_OUT, this.UserOut, this);
            App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_READY, this.UserReady, this);
            App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_READY_CANCEL, this.UserReadyCancel, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_FAPAI, this.FaPai, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_BAIPAI, this.BaiPaiCallBack, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_SINGLE_RESULT, this.showSingleResult, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_RESTART, this.gameRestart, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_USER_DIAOXIAN, this.UserDiaoXian, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_USER_DIAOXIAN_BACK, this.UserDiaoXianBack, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_ASKFOR_DISMISS, this.UserAskForDismiss, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_ANSWER_FAILED, this.RoomDismissFailed, this);
            App.MessageCenter.removeListener(game.MsgEnum.STOP_PLAY_MUSIC, this.playMusic, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_BEGIN_RESTART, this.doRestart, this);
            App.MessageCenter.removeListener(game.MsgEnum.CHANGE_BG, this.changeBg, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_CHAT, this.onReceiveChat, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_FLOWER, this.flower, this);
            this.preCloseCpl();
        };
        return Game;
    }(Module));
    game.Game = Game;
    __reflect(Game.prototype, "game.Game");
})(game || (game = {}));
//# sourceMappingURL=Game.js.map