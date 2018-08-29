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
    var SettingModel = (function (_super) {
        __extends(SettingModel, _super);
        function SettingModel() {
            var _this = _super.call(this) || this;
            _this.music = true;
            _this.sound = true;
            _this.bg = 0;
            return _this;
        }
        Object.defineProperty(SettingModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new SettingModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        SettingModel.prototype.init = function () {
            if (egret.localStorage.getItem("Thirting_Music")) {
                if (egret.localStorage.getItem("Thirting_Music") == "true") {
                    this.music = true;
                }
                else {
                    this.music = false;
                }
            }
            if (egret.localStorage.getItem("Thirting_Sound")) {
                if (egret.localStorage.getItem("Thirting_Sound") == "true") {
                    this.sound = true;
                }
                else {
                    this.sound = false;
                }
            }
            if (egret.localStorage.getItem("Thirting_Bg")) {
                this.bg = Number(egret.localStorage.getItem("Thirting_Bg"));
            }
        };
        SettingModel.prototype.setMusic = function () {
            if (this.music == true) {
                egret.localStorage.setItem("Thirting_Music", "false");
                this.music = false;
                App.MessageCenter.dispatch(game.MsgEnum.STOP_PLAY_MUSIC, false);
            }
            else {
                egret.localStorage.setItem("Thirting_Music", "true");
                this.music = true;
                App.MessageCenter.dispatch(game.MsgEnum.STOP_PLAY_MUSIC, true);
            }
        };
        SettingModel.prototype.setSound = function () {
            if (this.sound == true) {
                egret.localStorage.setItem("Thirting_Sound", "false");
                this.sound = false;
                App.MessageCenter.dispatch(game.MsgEnum.STOP_PLAY_SOUND, false);
            }
            else {
                egret.localStorage.setItem("Thirting_Sound", "true");
                this.sound = true;
                App.MessageCenter.dispatch(game.MsgEnum.STOP_PLAY_SOUND, true);
            }
        };
        SettingModel.prototype.setBg = function (id) {
            egret.localStorage.setItem("Thirting_Bg", id.toString());
            this.bg = id;
            App.MessageCenter.dispatch(game.MsgEnum.CHANGE_BG);
        };
        return SettingModel;
    }(core.BaseClass));
    game.SettingModel = SettingModel;
    __reflect(SettingModel.prototype, "game.SettingModel");
})(game || (game = {}));
//# sourceMappingURL=SettingModel.js.map