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
            this.m_ctrlState.selectedIndex = 4;
            this.visible = false;
            this.m_lixian.visible = false;
            this.m_img_special.visible = false;
            this.m_img_fz.visible = false;
        };
        PlayerHead.prototype.setData = function ($user) {
            this.visible = true;
            this.m_ctrlState.selectedIndex = 0;
            this.user = $user;
            this.isInit = true;
            // this.m_head.url = "http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
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
        };
        PlayerHead.prototype.setDiaoXian = function (value) {
            this.m_lixian.visible = value;
        };
        PlayerHead.prototype.restart = function () {
            this.m_img_finish.visible = false;
            this.m_ctrlState.selectedIndex = 0;
            this.m_score.text = "0";
        };
        PlayerHead.prototype.onReady = function () {
            this.m_img_finish.visible = false;
            this.m_img_special.visible = false;
            this.m_ctrlState.selectedIndex = 1;
            if (this.user) {
                this.user.status = 1;
            }
        };
        PlayerHead.prototype.onFaPai = function () {
            this.m_img_finish.visible = false;
            this.m_ctrlState.selectedIndex = 2;
            this.pokers.init();
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
        PlayerHead.prototype.showResult = function (pos, result) {
            this.m_img_finish.visible = false;
            this.pokers.showResult(pos, result);
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
            if (this.user != null && this.user.uid != game.GameModel.ins.uid) {
                ModuleMgr.ins.showModule(ModuleEnum.USERINFO, this.user);
            }
        };
        PlayerHead.prototype.updateScore = function () {
            this.m_score.text = this.user.sc.toString();
        };
        PlayerHead.prototype.updateScorePlay = function (result) {
            this.m_score.text = result.sc.toString();
        };
        return PlayerHead;
    }(UI.Game.UI_PlayerHead));
    game.PlayerHead = PlayerHead;
    __reflect(PlayerHead.prototype, "game.PlayerHead");
})(game || (game = {}));
//# sourceMappingURL=PlayerHead.js.map