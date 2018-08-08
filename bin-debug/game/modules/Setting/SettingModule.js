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
    var SettingModule = (function (_super) {
        __extends(SettingModule, _super);
        function SettingModule() {
            return _super.call(this) || this;
        }
        SettingModule.prototype.initContent = function () {
            this.content = UI.Setting.UI_Setting.createInstance();
        };
        Object.defineProperty(SettingModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        SettingModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80h5w5w";
            this.mContent.m_btn_help.addClickListener(this.onHelp, this);
            this.mContent.m_btn_music.addClickListener(this.onMusic, this);
            this.mContent.m_btn_sound.addClickListener(this.onSound, this);
            this.mContent.m_btn_bg1.addClickListener(this.onChooseBg, this);
            this.mContent.m_btn_bg2.addClickListener(this.onChooseBg, this);
            this.mContent.m_btn_bg3.addClickListener(this.onChooseBg, this);
            this.mContent.m_DeskChooseCtrl.selectedIndex = game.SettingModel.ins.bg;
            this.mContent.m_btn_music.selected = !game.SettingModel.ins.music;
            this.mContent.m_btn_sound.selected = !game.SettingModel.ins.sound;
            _super.prototype.preShow.call(this, data);
        };
        SettingModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        SettingModule.prototype.onHelp = function () {
            game.AlertUtil.floatMsg('请联系客服解决！');
            // ModuleMgr.ins.showModule(ModuleEnum.GAME_HELP);
        };
        SettingModule.prototype.onMusic = function () {
            game.SettingModel.ins.setMusic();
        };
        SettingModule.prototype.onSound = function () {
            game.SettingModel.ins.setSound();
        };
        SettingModule.prototype.onChooseBg = function () {
            game.SettingModel.ins.setBg(this.mContent.m_DeskChooseCtrl.selectedIndex);
        };
        return SettingModule;
    }(PopModuleView));
    game.SettingModule = SettingModule;
    __reflect(SettingModule.prototype, "game.SettingModule");
})(game || (game = {}));
//# sourceMappingURL=SettingModule.js.map