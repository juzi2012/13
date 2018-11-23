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
    var PlayerHead = (function (_super) {
        __extends(PlayerHead, _super);
        function PlayerHead() {
            var _this = _super.call(this) || this;
            _this.isInit = false;
            _this.clickCD = true;
            _this.tid = 0;
            _this.addClickListener(_this.showInfo, _this);
            return _this;
        }
        Object.defineProperty(PlayerHead.prototype, "pokers", {
            get: function () {
                return this.m_pokers;
            },
            enumerable: true,
            configurable: true
        });
        PlayerHead.prototype.init = function () {
            this.isInit = false;
            this.user = null;
            this.clickCD = true;
            this.m_ctrlState.selectedIndex = 4;
            this.visible = false;
            this.m_lixian.visible = false;
            this.m_img_special.visible = false;
            this.m_img_fz.visible = false;
            this.m_chat.visible = false;
            this.m_chat.alpha = 0;
            this.m_flower.visible = false;
            this.m_boom1.visible = false;
            this.m_boom2.visible = false;
        };
        PlayerHead.prototype.setData = function ($user) {
            this.visible = true;
            this.m_ctrlState.selectedIndex = 0;
            this.user = $user;
            this.isInit = true;
            this.m_head.setURL($user.avatar);
            this.m_name.text = this.user.name;
            if (game.GameModel.ins.roomModel.rinfo.zz) {
                this.m_img_fz.url = "ui://jow5n9bqh9yl51";
                if (this.user.uid == game.GameModel.ins.roomModel.rinfo.zuid) {
                    this.m_img_fz.visible = true;
                }
                else {
                    this.m_img_fz.visible = false;
                }
            }
            else {
                this.m_img_fz.url = "ui://jow5n9bqx90y45";
                if (this.user.uid == game.GameModel.ins.roomModel.fuid) {
                    this.m_img_fz.visible = true;
                }
                else {
                    this.m_img_fz.visible = false;
                }
            }
            if (this.user.status == 1) {
                this.onReady();
            }
            this.m_score.text = this.user.sc.toString();
            this.setDiaoXian(game.GameModel.ins.roomModel.checkIsOffLine(this.user.uid));
        };
        PlayerHead.prototype.setDataPlay = function (user) {
            this.juPlayer = user;
            this.visible = true;
            this.isInit = true;
            this.m_ctrlState.selectedIndex = 0;
            this.m_name.text = user.name;
            this.onReady();
            this.m_score.text = user.sc.toString();
            this.m_head.setURL(user.avatar);
        };
        PlayerHead.prototype.setDiaoXian = function (value) {
            this.m_lixian.visible = value;
        };
        PlayerHead.prototype.restart = function () {
            this.m_img_finish.visible = false;
            this.m_img_special.visible = false;
            this.pokers.m_txt_score_result.text = "";
            this.m_ctrlState.selectedIndex = 0;
            // this.m_score.text="0";
            this.m_chat.visible = false;
            this.m_chat.alpha = 0;
        };
        PlayerHead.prototype.onReady = function () {
            this.m_img_finish.visible = false;
            this.m_img_special.visible = false;
            this.m_ctrlState.selectedIndex = 1;
            if (this.m_ctrlPos.selectedIndex == 2) {
                this.m_ctrlPos.selectedIndex = 0;
            }
            if (this.m_ctrlPos.selectedIndex == 3) {
                this.m_ctrlPos.selectedIndex = 1;
            }
            if (this.user) {
                this.user.status = 1;
            }
        };
        PlayerHead.prototype.onFaPai = function () {
            this.m_img_finish.visible = false;
            this.m_ctrlState.selectedIndex = 2;
            this.pokers.init();
        };
        PlayerHead.prototype.speek = function (str) {
            if (str.slice(0, 3) == "%%-" && str.slice(str.length - 3, str.length) == "-%%") {
                this.m_chat_txt.text = "";
                this.m_chat_txt_emoji.text = str.slice(3, str.length - 3);
                this.m_chatbg1.visible = false;
                this.m_chatbg2.visible = false;
            }
            else {
                this.m_chat_txt.text = str;
                this.m_chat_txt_emoji.text = "";
                this.m_chatbg1.visible = true;
                this.m_chatbg2.visible = true;
                var index = 0;
                switch (str) {
                    case "快点吧，等的我都快疯了！":
                        index = 1;
                        break;
                    case "你的牌那么好啊，兄弟！":
                        index = 2;
                        break;
                    case "不要吵了，专心玩游戏吧。":
                        index = 3;
                        break;
                    case "兄弟，不好意思啊，我先撤了。":
                        index = 4;
                        break;
                    case "不要走，决战到天亮。":
                        index = 5;
                        break;
                    case "唉，又被打枪了。":
                        index = 6;
                        break;
                }
                App.SoundUtils.playSound("sg_Man_Chat_" + (index).toString() + "_mp3", 0, 1);
            }
            this.m_chat.visible = true;
            TweenMax.to(this.m_chat, 0.5, { alpha: 1, onComplete: this.onHide, onCompleteParams: [this.m_chat] });
        };
        PlayerHead.prototype.flower = function (str) {
            if (str == "flower") {
                this.m_flower.visible = true;
                this.m_t0.play();
            }
            else if (str == "boom") {
                this.m_boom1.visible = true;
                this.m_boom2.visible = true;
                this.m_t1.play();
            }
        };
        PlayerHead.prototype.onHide = function (chat) {
            TweenMax.delayedCall(2, function () {
                chat.alpha = 0;
                chat.visible = false;
            });
        };
        PlayerHead.prototype.onBaiPaiEnd = function () {
            App.SoundUtils.playSound("showCard_mp3", 0, 1);
            this.m_ctrlState.selectedIndex = 3;
            this.pokers.m_c1.selectedIndex = 1;
            this.pokers.m_qiangyan.visible = false;
            this.pokers.m_porka.visible = false;
            this.m_img_finish.visible = true;
        };
        //pos 为上敦 中墩 下墩
        PlayerHead.prototype.showResult = function (pos, result, istesu) {
            if (istesu === void 0) { istesu = false; }
            this.m_img_finish.visible = false;
            if (this.m_ctrlPos.selectedIndex == 0) {
                this.m_ctrlPos.selectedIndex = 2;
            }
            if (this.m_ctrlPos.selectedIndex == 1) {
                this.m_ctrlPos.selectedIndex = 3;
            }
            this.pokers.showResult(pos, result, istesu);
        };
        PlayerHead.prototype.showSpecialResult = function (result) {
            this.m_img_finish.visible = false;
            this.pokers.showSpecialResult(result);
        };
        PlayerHead.prototype.showSpecialPlay = function (result) {
            this.m_img_finish.visible = false;
            this.pokers.showSpecialPlay(result);
        };
        //pos 为上敦 中墩 下墩
        PlayerHead.prototype.showResultPlay = function (pos, result) {
            this.m_img_finish.visible = false;
            this.pokers.showResultPlay(pos, result);
        };
        PlayerHead.prototype.showSpecial = function () {
            this.m_img_finish.visible = false;
            this.m_img_special.visible = true;
        };
        PlayerHead.prototype.showQiangYan = function () {
            this.pokers.showQiangYan();
        };
        PlayerHead.prototype.showInfo = function () {
            if (this.clickCD == true) {
                this.clickCD = false;
                TweenMax.delayedCall(1, this.resetCD, [this]);
                ModuleMgr.ins.showModule(ModuleEnum.USERINFO, this.user);
            }
        };
        PlayerHead.prototype.resetCD = function (main) {
            main.clickCD = true;
        };
        PlayerHead.prototype.updateScore = function () {
            this.m_score.text = this.user.sc.toString();
        };
        PlayerHead.prototype.updateScorePlay = function (result) {
            this.m_score.text = result.sc.toString();
        };
        PlayerHead.prototype.doDispose = function () {
            TweenMax.killAll();
        };
        return PlayerHead;
    }(UI.Game.UI_PlayerHead));
    game.PlayerHead = PlayerHead;
    __reflect(PlayerHead.prototype, "game.PlayerHead");
})(game || (game = {}));
//# sourceMappingURL=PlayerHead.js.map