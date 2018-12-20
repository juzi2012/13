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
            this.cur = this;
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
            //根据当前牌局的人数显示头像的个数
            this.mContent.m_playerNumCtrl.selectedPage = game.GameModel.ins.roomModel.rinfo.pn.toString();
            this.setHead();
            this.setHeadTid();
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
            App.MessageCenter.addListener(game.MsgEnum.GAME_LOCATION, this.upDateLocation, this);
            this.mContent.m_txt_room.text = "房间号:" + game.GameModel.ins.roomModel.rid.toString();
            switch (game.GameModel.ins.roomModel.rinfo.rp) {
                case 2:
                    this.mContent.m_txt_roomtype.text = "十三水";
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
                case 7:
                    this.mContent.m_txt_roomtype.text = "摆十三张";
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
            if (this.qiangContent == null) {
                this.qiangContent = new fairygui.GComponent();
            }
            this.mContent.addChild(this.qiangContent);
            this.preShowCpl();
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
        //根据我进来的座位号，设置头像的座位号
        Game.prototype.setHeadTid = function () {
            var myTid = game.GameModel.ins.roomModel.getTidByUid(game.GameModel.ins.uid);
            var len = this.curHeadAry.length;
            for (var i = 0; i < len; i++) {
                this.curHeadAry[i].tid = (myTid + i) > len ? (myTid - (len - i)) : (myTid + i);
            }
            console.log(111);
        };
        Game.prototype.show = function (data) {
            this.doInviteJs();
            _super.prototype.show.call(this, data);
        };
        Game.prototype.UserIn = function (user) {
            if (this.getPlayerById(user.uid) != null)
                return;
            //有人进来就发送一次消息，来更新我在其他玩家中的位置信息
            game.LocationModel.ins.sendPosChat();
            if (game.GameModel.ins.roomModel.users.length < game.GameModel.ins.roomModel.rinfo.pn) {
                this.mContent.m_btn_invite.visible = true;
            }
            else {
                this.mContent.m_btn_invite.visible = false;
            }
            for (var i = 0; i < this.curHeadAry.length; i++) {
                if (this.curHeadAry[i].tid == user.tid) {
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
                    if (game.GameModel.ins.roomModel.users.length < game.GameModel.ins.roomModel.rinfo.pn) {
                        this.mContent.m_btn_invite.visible = true;
                    }
                    else {
                        this.mContent.m_btn_invite.visible = false;
                    }
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
            if (game.GameModel.ins.roomModel.isNewStartOpen == false || this.mContent.m_btn_continue.visible == true) {
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
            game.GameModel.ins.roomModel.rinfo.nnum += 1;
            this.mContent.m_txt_jushu.text = "局数:" + game.GameModel.ins.roomModel.rinfo.nnum.toString() + "/" + game.GameModel.ins.roomModel.rinfo.snum.toString() + " " + game.GameModel.ins.roomModel.rinfo.pn.toString() + "人";
            // 先播放开始特效,完了在开始发牌
            this.mContent.m_img_start.visible = true;
            this.mContent.m_t1.play(this.onStartEffectComplete, this);
            App.SoundUtils.playSound("start_mp3", 0, 1);
            game.GameModel.ins.roomModel.isNewStartOpen = false;
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
            var playerHead = this.getPlayerById(msg.uid);
            if (playerHead) {
                playerHead.onBaiPaiEnd();
            }
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
            if (this.qiangContent) {
                this.qiangContent.removeChildren();
            }
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
                var round, bipai, cards, special_uid, a, uid, playerHead, j, i, uid, playerHead, c, playerHead, i, bipai_1, j, playerHeadTar, i, a, j, from, to, j, from, to, j, from, to, i, j, j, j, i, head, bipai_2, head, i, head1, bipai_3, head, i, head1;
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
                            j = 0;
                            _a.label = 2;
                        case 2:
                            if (!(j < 3)) return [3 /*break*/, 5];
                            for (i = 0; i < cards.length; i++) {
                                uid = cards[i].uid;
                                if (special_uid.indexOf(uid) < 0) {
                                    playerHead = this.getPlayerById(uid);
                                    if (special_uid.indexOf(game.GameModel.ins.uid) == -1 && (cards.length - special_uid.length != 1)) {
                                        playerHead.showResult(j, cards[i], false);
                                    }
                                    else {
                                        playerHead.showResult(j, cards[i], true);
                                    }
                                }
                            }
                            return [4 /*yield*/, this.sleep(2000)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            j++;
                            return [3 /*break*/, 2];
                        case 5: return [4 /*yield*/, this.sleep(1000)];
                        case 6:
                            _a.sent();
                            if (!(special_uid.length > 0)) return [3 /*break*/, 8];
                            for (c = 0; c < special_uid.length; c++) {
                                playerHead = this.getPlayerById(special_uid[c]);
                                for (i = 0; i < cards.length; i++) {
                                    if (cards[i].uid == special_uid[c]) {
                                        playerHead.showSpecialResult(cards[i]);
                                        bipai_1 = game.GameModel.ins.roundModel.getResultBPByUid(cards[i].uid);
                                        if (bipai_1.tesuPaiTarArr) {
                                            for (j = 0; j < bipai_1.tesuPaiTarArr.length; j++) {
                                                playerHeadTar = this.getPlayerById(bipai_1.tesuPaiTarArr[j].uid);
                                                playerHeadTar.pokers.updateTeSuScore(bipai_1.tesuPaiTarArr[j]);
                                            }
                                        }
                                    }
                                }
                            }
                            return [4 /*yield*/, this.sleep(500)];
                        case 7:
                            _a.sent();
                            _a.label = 8;
                        case 8:
                            i = 0;
                            _a.label = 9;
                        case 9:
                            if (!(i < bipai.length)) return [3 /*break*/, 26];
                            a = 0;
                            _a.label = 10;
                        case 10:
                            if (!(a < bipai[i].dq.length)) return [3 /*break*/, 25];
                            if (!(game.GameModel.ins.roomModel.rinfo.zz == 1)) return [3 /*break*/, 15];
                            j = 0;
                            _a.label = 11;
                        case 11:
                            if (!(j < bipai[i].dq[a].tarIds.length)) return [3 /*break*/, 14];
                            from = this.getPlayerById(bipai[i].dq[a].uid);
                            to = this.getPlayerById(bipai[i].dq[a].tarIds[j]);
                            from.pokers.showFanBei(from.user.uid, to.user.uid);
                            to.pokers.showFanBei(to.user.uid, from.user.uid);
                            this.daQiang(from, to);
                            return [4 /*yield*/, this.sleep(2500)];
                        case 12:
                            _a.sent();
                            _a.label = 13;
                        case 13:
                            j++;
                            return [3 /*break*/, 11];
                        case 14: return [3 /*break*/, 24];
                        case 15:
                            if (!(bipai[i].dq[a].uid == game.GameModel.ins.uid)) return [3 /*break*/, 20];
                            j = 0;
                            _a.label = 16;
                        case 16:
                            if (!(j < bipai[i].dq[a].tarIds.length)) return [3 /*break*/, 19];
                            from = this.getPlayerById(bipai[i].dq[a].uid);
                            to = this.getPlayerById(bipai[i].dq[a].tarIds[j]);
                            from.pokers.showFanBei(from.user.uid, to.user.uid);
                            to.pokers.showFanBei(to.user.uid, from.user.uid);
                            this.daQiang(from, to);
                            return [4 /*yield*/, this.sleep(2500)];
                        case 17:
                            _a.sent();
                            _a.label = 18;
                        case 18:
                            j++;
                            return [3 /*break*/, 16];
                        case 19: return [3 /*break*/, 24];
                        case 20:
                            j = 0;
                            _a.label = 21;
                        case 21:
                            if (!(j < bipai[i].dq[a].tarIds.length)) return [3 /*break*/, 24];
                            if (!(bipai[i].dq[a].tarIds[j] == game.GameModel.ins.uid)) return [3 /*break*/, 23];
                            from = this.getPlayerById(bipai[i].dq[a].uid);
                            to = this.getPlayerById(bipai[i].dq[a].tarIds[j]);
                            from.pokers.showFanBei(from.user.uid, to.user.uid);
                            to.pokers.showFanBei(to.user.uid, from.user.uid);
                            this.daQiang(from, to);
                            return [4 /*yield*/, this.sleep(2500)];
                        case 22:
                            _a.sent();
                            _a.label = 23;
                        case 23:
                            j++;
                            return [3 /*break*/, 21];
                        case 24:
                            a++;
                            return [3 /*break*/, 10];
                        case 25:
                            i++;
                            return [3 /*break*/, 9];
                        case 26:
                            i = 0;
                            _a.label = 27;
                        case 27:
                            if (!(i < bipai.length)) return [3 /*break*/, 30];
                            if (!(bipai[i].ql > 0)) return [3 /*break*/, 29];
                            this.mContent.m_qld.visible = true;
                            App.SoundUtils.playSound("dalei_mp3", 0, 1);
                            this.mContent.m_t3.play(this.qldComplete, this);
                            if (game.GameModel.ins.roomModel.rinfo.zz == 1) {
                                this.getPlayerById(bipai[i].qlTar.uid).pokers.UpDateULD(bipai[i]);
                                for (j = 0; j < bipai[i].qlTar.tarUidArr.length; j++) {
                                    this.getPlayerById(bipai[i].qlTar.tarUidArr[j]).pokers.UpDateULD(bipai[i]);
                                }
                            }
                            else {
                                if (bipai[i].qlTar.uid == game.GameModel.ins.uid) {
                                    this.getPlayerById(bipai[i].qlTar.uid).pokers.UpDateULD(bipai[i]);
                                    for (j = 0; j < bipai[i].qlTar.tarUidArr.length; j++) {
                                        this.getPlayerById(bipai[i].qlTar.tarUidArr[j]).pokers.UpDateULD(bipai[i]);
                                    }
                                }
                                else {
                                    this.getPlayerById(bipai[i].qlTar.uid).pokers.UpDateULD(bipai[i]);
                                    for (j = 0; j < bipai[i].qlTar.tarUidArr.length; j++) {
                                        if (bipai[i].qlTar.tarUidArr[j] == game.GameModel.ins.uid) {
                                            this.getPlayerById(bipai[i].qlTar.tarUidArr[j]).pokers.UpDateULD(bipai[i]);
                                        }
                                    }
                                }
                            }
                            return [4 /*yield*/, this.sleep(3000)];
                        case 28:
                            _a.sent();
                            _a.label = 29;
                        case 29:
                            i++;
                            return [3 /*break*/, 27];
                        case 30:
                            //上面的大枪、全垒打结束后最后更新一次是否翻倍的数据
                            for (i = 0; i < game.GameModel.ins.roomModel.users.length; i++) {
                                if (special_uid.indexOf(game.GameModel.ins.roomModel.users[i].uid) < 0) {
                                    head = this.getPlayerById(game.GameModel.ins.roomModel.users[i].uid);
                                    head.pokers.showResultScore(false, true);
                                }
                            }
                            //更新马牌的分数
                            if (game.GameModel.ins.roomModel.rinfo.zz == 0) {
                                bipai_2 = game.GameModel.ins.roundModel.getResultBPByUid(game.GameModel.ins.uid);
                                if (bipai_2 != null && bipai_2.mapaiTarArr.length > 0) {
                                    head = this.getPlayerById(game.GameModel.ins.uid);
                                    for (i = 0; i < bipai_2.mapaiTarArr.length; i++) {
                                        head1 = this.getPlayerById(bipai_2.mapaiTarArr[i]);
                                        head.pokers.updateMP(true, head1.pokers.scoretop, head1.pokers.scoremid, head1.pokers.scoredown);
                                        head1.pokers.updateMP(false);
                                    }
                                }
                            }
                            else {
                                bipai_3 = game.GameModel.ins.roundModel.getResultBPByUid(game.GameModel.ins.roomModel.rinfo.zuid);
                                if (bipai_3 != null && bipai_3.mapaiTarArr.length > 0) {
                                    head = this.getPlayerById(game.GameModel.ins.roomModel.rinfo.zuid);
                                    for (i = 0; i < bipai_3.mapaiTarArr.length; i++) {
                                        head1 = this.getPlayerById(bipai_3.mapaiTarArr[i]);
                                        head.pokers.updateMP(true, head1.pokers.scoretop, head1.pokers.scoremid, head1.pokers.scoredown);
                                        head1.pokers.updateMP(false);
                                    }
                                }
                            }
                            //更新总分数
                            this.upDateScore();
                            return [4 /*yield*/, this.sleep(1500)];
                        case 31:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Game.prototype.qldComplete = function () {
            this.mContent.m_qld.visible = false;
        };
        Game.prototype.daQiang = function (from, to) {
            App.SoundUtils.playSound("ddq_mp3", 0, 1);
            this.qiang = UI.Game.UI_DaQiang.createInstance();
            this.qiangContent.addChild(this.qiang);
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
            if (this.qiang != null && this.qiangContent != null) {
                this.qiangContent.removeChildren();
                // App.DisplayUtils.removeFromParent(this.qiang.displayObject);
                // this.qiang=null;
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
            this.upDateLocation();
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
                if (this.curHeadAry[i].user != null && this.curHeadAry[i].user.uid == uid) {
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
            this.doInviteJs();
        };
        Game.prototype.doInviteJs = function () {
            var shareData = new Object();
            shareData["shareUserId"] = game.GameModel.ins.uid;
            shareData["shareUserName"] = game.GameModel.ins.uname;
            shareData["shareRoomId"] = game.GameModel.ins.roomModel.rid;
            shareData["totalNum"] = game.GameModel.ins.roomModel.rinfo.pn;
            shareData["nowNum"] = game.GameModel.ins.roomModel.users.length;
            shareData["type"] = this.mContent.m_txt_roomtype.text;
            var mapai_addcolor = '';
            if (game.GameModel.ins.roomModel.rinfo.jm != 0) {
                mapai_addcolor = ",加马牌";
            }
            if (game.GameModel.ins.roomModel.rinfo.jp != null && game.GameModel.ins.roomModel.rinfo.jp.length > 0) {
                mapai_addcolor += ",加一色";
            }
            var playType = this.mContent.m_txt_roomtype.text;
            shareData["payModel"] = game.GameModel.ins.roomModel.rinfo.fc == 2 ? "房主付费" + mapai_addcolor : "AA局" + mapai_addcolor;
            shareData["model"] = game.GameModel.ins.roomModel.rinfo.zz == 1 ? (playType + " 坐庄模式") : (playType + " 算分模式");
            shareData["juNum"] = game.GameModel.ins.roomModel.rinfo.snum;
            shareData["avatar"] = game.GameModel.ins.avatar;
            game.WXUtil.ins.invit(shareData);
        };
        Game.prototype.onReceiveChat = function (msg) {
            this.getPlayerById(msg.uid).speek(msg.str);
        };
        Game.prototype.flower = function (msg) {
            var arr = msg.str.split("|");
            if (arr.length > 1) {
                var uid = arr[0];
                var str = arr[1];
                if (str == "flower") {
                    this.showFlower(msg.uid, uid);
                }
                else if (str == "boom") {
                    this.showBoom(msg.uid, uid);
                }
                // this.getPlayerById(uid).flower(str);
            }
        };
        Game.prototype.showFlower = function (fromUid, toUid) {
            var flower = UI.Game.UI_Flower.createInstance();
            var fromHead = this.getPlayerById(fromUid);
            var toHead = this.getPlayerById(toUid);
            flower.x = fromHead.x;
            flower.y = fromHead.y;
            this.mContent.addChild(flower);
            TweenMax.to(flower, 0.4, { x: toHead.x + 60, y: toHead.y + 70, onComplete: this.flowerMoveComplete, onCompleteParams: [flower, this] });
        };
        Game.prototype.flowerMoveComplete = function (flower, cur) {
            flower.m_t0.play(cur.onFlowerEffectComplete, cur, flower);
        };
        Game.prototype.showBoom = function (fromUid, toUid) {
            var boom = UI.Game.UI_Boom.createInstance();
            var fromHead = this.getPlayerById(fromUid);
            var toHead = this.getPlayerById(toUid);
            boom.x = fromHead.x;
            boom.y = fromHead.y;
            boom.m_boom2.visible = false;
            this.mContent.addChild(boom);
            TweenMax.to(boom, 0.4, { x: toHead.x, y: toHead.y, onComplete: this.boomMoveComplete, onCompleteParams: [boom, this] });
        };
        Game.prototype.boomMoveComplete = function (boom, cur) {
            boom.m_boom2.visible = true;
            boom.m_t0.play(cur.onBoomEffectComplete, cur, boom);
        };
        Game.prototype.onFlowerEffectComplete = function (flower) {
            // App.DisplayUtils.removeFromParent(flower.displayObject);
            flower.dispose();
            if (flower.parent) {
                flower.parent.removeChild(flower);
            }
            flower = null;
        };
        Game.prototype.onBoomEffectComplete = function (boom) {
            // App.DisplayUtils.removeFromParent(boom.displayObject);
            boom.dispose();
            if (boom.parent) {
                boom.parent.removeChild(boom);
            }
            boom = null;
        };
        Game.prototype.hideInvite = function () {
            this.mContent.m_sharetips.visible = false;
        };
        Game.prototype.changeBg = function () {
            this.mContent.m_bg.url = this.bgAry[game.SettingModel.ins.bg];
        };
        Game.prototype.upDateLocation = function () {
            game.LocationModel.ins.sendPosChat();
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
            App.MessageCenter.removeListener(game.MsgEnum.GAME_LOCATION, this.upDateLocation, this);
            this.preCloseCpl();
        };
        return Game;
    }(Module));
    game.Game = Game;
    __reflect(Game.prototype, "game.Game");
})(game || (game = {}));
//# sourceMappingURL=Game.js.map