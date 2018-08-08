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
    var GameMainModule = (function (_super) {
        __extends(GameMainModule, _super);
        function GameMainModule() {
            return _super.call(this) || this;
        }
        GameMainModule.prototype.initContent = function () {
            this.content = UI.MainUI.UI_MainModule.createInstance();
        };
        Object.defineProperty(GameMainModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        GameMainModule.prototype.preShow = function (data) {
            this.mContent.m_btn_kefu.addClickListener(this.onKefuClick, this);
            this.mContent.m_btn_notice.addClickListener(this.onNoticeClick, this);
            this.mContent.m_btn_mail.addClickListener(this.onMailClick, this);
            this.mContent.m_btn_shuoming.addClickListener(this.onShuoMingClick, this);
            this.mContent.m_btn_setting.addClickListener(this.onSettingClick, this);
            this.mContent.m_btn_zhanji.addClickListener(this.onZhanjiClick, this);
            this.mContent.m_btn_rank.addClickListener(this.onRankClick, this);
            this.mContent.m_btn_activity.addClickListener(this.onActivityClick, this);
            this.mContent.m_sp_add.addClickListener(this.onJoinRoom, this);
            this.mContent.m_sp_create.addClickListener(this.onCreateRoom, this);
            // this.mContent.m_sp_create.addEventListener(touc.)
            this.mContent.m_sp_quan.addClickListener(this.onQuan, this);
            this.mContent.m_btn_buyCard.addClickListener(this.onBuyCard, this);
            this.mContent.m_btn_add.addClickListener(this.onBuyCard, this);
            App.MessageCenter.addListener(game.MsgEnum.UPDATE_MYINFO, this.updatePlayerInfo, this);
            App.MessageCenter.addListener(game.MsgEnum.STOP_PLAY_MUSIC, this.playMusic, this);
            this.updatePlayerInfo();
            this.preShowCpl();
            App.SoundUtils.playSound("music_bg_home_mp3", 1, 0);
        };
        GameMainModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        GameMainModule.prototype.updatePlayerInfo = function () {
            this.mContent.m_txt_name.text = game.GameModel.ins.uname;
            this.mContent.m_txt_id.text = "ID:" + game.GameModel.ins.uid;
            this.mContent.m_txt_card.text = game.GameModel.ins.card.toString();
        };
        GameMainModule.prototype.onMailClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.MAIL);
        };
        GameMainModule.prototype.onShuoMingClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.SHUOMING);
        };
        GameMainModule.prototype.onNoticeClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.NOTICE);
        };
        GameMainModule.prototype.onSettingClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.SETTING);
        };
        GameMainModule.prototype.onKefuClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.KEFU);
        };
        GameMainModule.prototype.onZhanjiClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.ZHANJI);
        };
        GameMainModule.prototype.onRankClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.RANK);
        };
        GameMainModule.prototype.onActivityClick = function () {
            ModuleMgr.ins.showModule(ModuleEnum.ACTIVITY);
        };
        GameMainModule.prototype.onJoinRoom = function () {
            ModuleMgr.ins.showModule(ModuleEnum.JOINROOM);
        };
        GameMainModule.prototype.onCreateRoom = function () {
            ModuleMgr.ins.showModule(ModuleEnum.CREATE_ROOM);
        };
        GameMainModule.prototype.onBuyCard = function () {
            ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
        };
        GameMainModule.prototype.onQuan = function () {
            // AlertUtil.alert("牌友圈未开放，尽情期待");
            game.AlertUtil.floatMsg("牌友圈未开放，尽情期待");
        };
        GameMainModule.prototype.playMusic = function (data) {
            if (data == true) {
                App.SoundUtils.playSound("music_bg_home_mp3", 1, 0);
            }
            else {
                App.SoundUtils.stopSoundByID("music_bg_home_mp3");
            }
        };
        GameMainModule.prototype.preClose = function (data) {
            App.SoundUtils.stopSoundByID("music_bg_home_mp3");
            App.MessageCenter.removeListener(game.MsgEnum.STOP_PLAY_MUSIC, this.playMusic, this);
            this.preCloseCpl();
        };
        return GameMainModule;
    }(Module));
    game.GameMainModule = GameMainModule;
    __reflect(GameMainModule.prototype, "game.GameMainModule");
})(game || (game = {}));
//# sourceMappingURL=GameMainModule.js.map