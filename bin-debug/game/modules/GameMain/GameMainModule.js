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
            this.onShare();
            _super.prototype.show.call(this, data);
            if (data != null && data.fromPlay == true) {
                ModuleMgr.ins.showModule(ModuleEnum.ZHANJI);
            }
            else {
                if (game.GameModel.ins.showActivity == true) {
                    ModuleMgr.ins.showModule(ModuleEnum.ACTIVITY);
                    game.GameModel.ins.showActivity = false;
                }
            }
        };
        GameMainModule.prototype.updatePlayerInfo = function () {
            this.mContent.m_txt_name.text = game.GameModel.ins.uname;
            this.mContent.m_txt_id.text = "ID:" + game.GameModel.ins.uid;
            this.mContent.m_txt_card.text = game.GameModel.ins.card.toString();
            this.mContent.m_head.setURL(game.GameModel.ins.avatar);
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
            this.checkShowBind();
        };
        //检查是否需要弹出兑换框
        GameMainModule.prototype.checkShowBind = function () {
            var url = game.GameModel.ins.CheckBindServer; //"http://alpha-pay.fpwan.net/Game/Shisanzhang/BindWindow";
            HttpAPI.HttpGET(url, { 'userId': game.GameModel.ins.uid }, this.onCallBack, this.onError, this);
        };
        GameMainModule.prototype.onCallBack = function (evt) {
            console.log(evt.target.response);
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.data == true) {
                ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
            }
            else {
                this.onShowBuyCard();
            }
        };
        GameMainModule.prototype.onShowBuyCard = function () {
            var url = game.GameModel.ins.BuySerever + "&userId=" + game.GameModel.ins.uid + "&appId=6000015&payId=103&taocanId=3&serverId=1&from=1&redirectUrl=" + game.GameModel.ins.BuySereverRedirect;
            // window.open(url,"_blank");
            top.location.href = url;
        };
        GameMainModule.prototype.onError = function (evt) {
        };
        GameMainModule.prototype.onQuan = function () {
            game.AlertUtil.floatMsg("暂未开放，敬请期待");
        };
        GameMainModule.prototype.playMusic = function (data) {
            if (data == true) {
                App.SoundUtils.playSound("music_bg_home_mp3", 1, 0);
            }
            else {
                App.SoundUtils.stopSoundByID("music_bg_home_mp3");
            }
        };
        GameMainModule.prototype.onShare = function () {
            var shareData = new Object();
            shareData["shareUserId"] = game.GameModel.ins.uid;
            shareData["shareUserName"] = game.GameModel.ins.uname;
            shareData["avatar"] = game.GameModel.ins.avatar;
            game.WXUtil.ins.share(shareData);
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