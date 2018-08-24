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
var game;
(function (game) {
    var GameReplay = (function (_super) {
        __extends(GameReplay, _super);
        function GameReplay() {
            var _this = _super.call(this) || this;
            _this.wantToBreakHere = false;
            _this.startState = false;
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
            this.preShowCpl();
            //根据当前牌局的人数显示头像的个数
            this.mContent.m_playerNumCtrl.selectedPage = this.round.Fc.toString();
            this.setHead();
            this.mContent.m_txt_fid.text = "房间ID " + this.round.Rd.toString();
            this.ju = this.round.jus[this.round.cur];
            //初始化当前人物头像
            for (var i = 0; i < this.ju.players.length; i++) {
                this.UserIn(this.ju.players[i]);
            }
            this.mContent.m_playcontrol.m_btn_start.addClickListener(this.play, this);
            this.mContent.m_playcontrol.m_btn_pre.addClickListener(this.pre, this);
            this.mContent.m_playcontrol.m_btn_next.addClickListener(this.next, this);
            this.mContent.m_playcontrol.m_btn_pause.addClickListener(this.pause, this);
            this.mContent.m_playcontrol.m_btn_stop.addClickListener(this.stop, this);
            App.MessageCenter.addListener(game.MsgEnum.PLAY_NEXT, this.playNext, this);
            this.wantToBreakHere = false;
            this.mContent.m_playcontrol.m_btn_pre.enabled = false;
            this.mContent.m_txt_ju.text = "第" + (this.round.cur + 1) + "/" + this.round.jus.length + "局";
        };
        GameReplay.prototype.play = function () {
            this.mContent.m_txt_ju.text = "第" + (this.round.cur + 1) + "/" + this.round.jus.length + "局";
            if (this.round.cur == this.round.jus.length - 1) {
                this.mContent.m_playcontrol.m_btn_next.enabled = false;
            }
            else {
                this.mContent.m_playcontrol.m_btn_next.enabled = true;
            }
            if (this.round.cur == 0) {
                this.mContent.m_playcontrol.m_btn_pre.enabled = false;
            }
            else {
                this.mContent.m_playcontrol.m_btn_pre.enabled = true;
            }
            if (this.startState == false) {
                this.startState = true;
                this.FaPai();
                this.mContent.m_playcontrol.m_c1.selectedIndex = 1;
            }
            else {
                egret.ticker.resume();
                TweenMax.resumeAll();
                this.mContent.m_playcontrol.m_c1.selectedIndex = 1;
            }
        };
        GameReplay.prototype.pre = function () {
            TweenMax.killAll();
            this.round.cur--;
            if (this.round.cur < 0) {
                this.round.cur = 0;
            }
            this.playNext();
        };
        GameReplay.prototype.next = function () {
            TweenMax.killAll();
            this.round.cur++;
            if (this.round.cur >= this.round.jus.length) {
                this.round.cur = this.round.jus.length - 1;
            }
            this.playNext();
        };
        GameReplay.prototype.pause = function () {
            TweenMax.pauseAll();
            this.mContent.m_playcontrol.m_c1.selectedIndex = 0;
            App.TimerManager.doTimer(200, 1, function () { egret.ticker.pause(); }, this);
        };
        GameReplay.prototype.stop = function (tar) {
            if (tar === void 0) { tar = true; }
            this.startState = false;
            this.mContent.m_playcontrol.m_c1.selectedIndex = 0;
            if (tar) {
                this.round.cur = 0;
                if (this.round.cur == this.round.jus.length - 1) {
                    this.mContent.m_playcontrol.m_btn_next.enabled = false;
                }
                else {
                    this.mContent.m_playcontrol.m_btn_next.enabled = true;
                }
                if (this.round.cur == 0) {
                    this.mContent.m_playcontrol.m_btn_pre.enabled = false;
                }
                else {
                    this.mContent.m_playcontrol.m_btn_pre.enabled = true;
                }
                TweenMax.killAll();
            }
            this.reset();
            this.wantToBreakHere = true;
        };
        GameReplay.prototype.playNext = function () {
            this.stop(false);
            this.play();
        };
        GameReplay.prototype.reset = function () {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.ju = this.round.jus[this.round.cur];
                this.curHeadAry[i].restart();
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
        GameReplay.prototype.FaPai = function () {
            // 先播放开始特效,完了在开始发牌
            // this.mContent.m_img_start.visible=true;
            // this.mContent.m_t1.play(this.onStartEffectComplete,this);
            this.onStartEffectComplete();
        };
        GameReplay.prototype.onStartEffectComplete = function () {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                this.curHeadAry[i].onFaPai();
            }
            App.TimerManager.doTimer(2000, 1, this.showSingleResult, this);
        };
        GameReplay.prototype.showSingleResult = function () {
            this.doShowSingleResult();
            /*this.doShowSingleResult().then(() => {
                ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY,this.round);
                this.startState=false;
            })*/
            // .catch((e) => console.log("Exception happened:", e));	
        };
        GameReplay.prototype.doShowSingleResult = function () {
            var _this = this;
            var players = this.ju.players;
            var special_uid = [];
            //先得到特殊牌型，把特殊牌型展示出来
            for (var a = 0; a < players.length; a++) {
                if (players[a].px > 0) {
                    var uid = players[a].id;
                    var playerHead = this.getPlayerById(uid);
                    playerHead.showSpecial();
                    special_uid.push(uid);
                }
            }
            for (var i = 0; i < players.length; i++) {
                var uid = players[i].id;
                var playerHead = this.getPlayerById(uid);
                playerHead.onBaiPaiEnd();
                playerHead.updateScorePlay(players[i]);
            }
            // await this.sleep(1000);
            var t = 0;
            var _loop_1 = function (j) {
                var _loop_2 = function (i) {
                    var uid = players[i].id;
                    if (special_uid.indexOf(uid) < 0) {
                        // App.TimerManager.doTimer(t*1000,1,()=>{
                        // 	let playerHead:PlayerHead = this.getPlayerById(uid);
                        // playerHead.showResultPlay(j,players[i]);
                        // },this);
                        // egret.setTimeout(()=>{
                        // 	let playerHead:PlayerHead = this.getPlayerById(uid);
                        // playerHead.showResultPlay(j,players[i]);
                        // },this,1000);
                        var tw = TweenMax.delayedCall(t, function () {
                            var playerHead = _this.getPlayerById(uid);
                            playerHead.showResultPlay(j, players[i]);
                        });
                        t = t + 1;
                    }
                };
                for (var i = 0; i < players.length; i++) {
                    _loop_2(i);
                }
            };
            for (var j = 0; j < 3; j++) {
                _loop_1(j);
            }
            TweenMax.delayedCall(t + 2, function () {
                ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY, _this.round);
                _this.startState = false;
            });
            /*
            for(let j:number = 0;j<3;j++){
                for(let i:number=0;i<players.length;i++){
                    let uid:string = players[i].id;
                    
                    if(special_uid.indexOf(uid)<0){
                        let playerHead:PlayerHead = this.getPlayerById(uid);
                        playerHead.showResultPlay(j,players[i]);
                        await this.sleep(1000);
                    }
                }
            }
            await this.sleep(1000);
            */
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