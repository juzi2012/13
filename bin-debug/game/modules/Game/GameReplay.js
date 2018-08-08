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
    var GameReplay = (function (_super) {
        __extends(GameReplay, _super);
        function GameReplay() {
            var _this = _super.call(this) || this;
            _this.wantToBreakHere = false;
            return _this;
        }
        GameReplay.prototype.initContent = function () {
            this.content = UI.Game.UI_GameReplay.createInstance();
        };
        Object.defineProperty(GameReplay.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        GameReplay.prototype.preShow = function (data) {
            this.round = data;
            this.mContent.m_btn_quit.addClickListener(this.onQuit, this);
            this.mContent.m_img_start.visible = false;
            this.preShowCpl();
            //根据当前牌局的人数显示头像的个数
            this.mContent.m_playerNumCtrl.selectedPage = this.round.Fc.toString();
            this.setHead();
            this.mContent.m_btn_start.visible = true;
            this.mContent.m_txt_fid.text = "房间ID " + this.round.Rd.toString();
            this.ju = this.round.jus[this.round.cur];
            //初始化当前人物头像
            for (var i = 0; i < this.ju.players.length; i++) {
                this.UserIn(this.ju.players[i]);
            }
            this.mContent.m_btn_start.addClickListener(this.play, this);
            App.MessageCenter.addListener(game.MsgEnum.PLAY_NEXT, this.playNext, this);
            this.wantToBreakHere = false;
        };
        GameReplay.prototype.playNext = function () {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.ju = this.round.jus[this.round.cur];
                this.curHeadAry[i].restart();
                this.mContent.m_btn_start.visible = true;
            }
        };
        GameReplay.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        GameReplay.prototype.setHead = function () {
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
        };
        GameReplay.prototype.UserIn = function (user) {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                if (this.curHeadAry[i].isInit == false) {
                    this.curHeadAry[i].setDataPlay(user);
                    break;
                }
            }
        };
        GameReplay.prototype.play = function () {
            this.mContent.m_btn_start.visible = false;
            this.FaPai();
        };
        GameReplay.prototype.FaPai = function () {
            // 先播放开始特效,完了在开始发牌
            this.mContent.m_img_start.visible = true;
            this.mContent.m_t1.play(this.onStartEffectComplete, this);
        };
        GameReplay.prototype.onStartEffectComplete = function () {
            this.mContent.m_img_start.visible = false;
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.curHeadAry[i].onFaPai();
            }
            App.TimerManager.doTimer(2000, 1, this.showSingleResult, this);
        };
        GameReplay.prototype.showSingleResult = function () {
            var _this = this;
            this.doShowSingleResult().then(function () { return ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY, _this.round); });
            // .catch((e) => console.log("Exception happened:", e));	
        };
        GameReplay.prototype.doShowSingleResult = function () {
            return __awaiter(this, void 0, void 0, function () {
                var players, special_uid, a, uid, playerHead, i, uid, playerHead, j, i, uid, playerHead;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            players = this.ju.players;
                            special_uid = [];
                            //先得到特殊牌型，把特殊牌型展示出来
                            for (a = 0; a < players.length; a++) {
                                if (players[a].px > 0) {
                                    uid = players[a].id;
                                    playerHead = this.getPlayerById(uid);
                                    playerHead.showSpecial();
                                    special_uid.push(uid);
                                }
                            }
                            for (i = 0; i < players.length; i++) {
                                uid = players[i].id;
                                playerHead = this.getPlayerById(uid);
                                playerHead.onBaiPaiEnd();
                                playerHead.updateScorePlay(players[i]);
                            }
                            return [4 /*yield*/, this.sleep(1000)];
                        case 1:
                            _a.sent();
                            j = 0;
                            _a.label = 2;
                        case 2:
                            if (!(j < 3)) return [3 /*break*/, 7];
                            i = 0;
                            _a.label = 3;
                        case 3:
                            if (!(i < players.length)) return [3 /*break*/, 6];
                            uid = players[i].id;
                            if (!(special_uid.indexOf(uid) < 0)) return [3 /*break*/, 5];
                            playerHead = this.getPlayerById(uid);
                            playerHead.showResultPlay(j, players[i]);
                            return [4 /*yield*/, this.sleep(1000)];
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
                            return [2 /*return*/];
                    }
                });
            });
        };
        GameReplay.prototype.onQuit = function () {
            ModuleMgr.ins.changeScene(ModuleEnum.REPLAY, ModuleEnum.GAME_MAIN);
        };
        GameReplay.prototype.getPlayerById = function (uid) {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                if (this.curHeadAry[i].juPlayer.id == uid) {
                    return this.curHeadAry[i];
                }
            }
            return null;
        };
        // 延迟
        GameReplay.prototype.sleep = function (ms) {
            if (ms === void 0) { ms = 0; }
            if (this.wantToBreakHere == true) {
                // 抛出中断信号.
                return Promise.reject("quit");
            }
            return new Promise(function (r) { return setTimeout(r, ms); });
        };
        GameReplay.prototype.preClose = function (data) {
            this.wantToBreakHere = true;
            this.preCloseCpl();
            this.mContent.m_btn_quit.removeClickListener(this.onQuit, this);
        };
        return GameReplay;
    }(Module));
    game.GameReplay = GameReplay;
    __reflect(GameReplay.prototype, "game.GameReplay");
})(game || (game = {}));
//# sourceMappingURL=GameReplay.js.map