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
    var JoinRoomModule = (function (_super) {
        __extends(JoinRoomModule, _super);
        function JoinRoomModule() {
            var _this = _super.call(this) || this;
            _this.enterNumber = "";
            return _this;
        }
        JoinRoomModule.prototype.initContent = function () {
            this.content = UI.AddRoom.UI_AddRoom.createInstance();
        };
        Object.defineProperty(JoinRoomModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        JoinRoomModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5fal";
            for (var i = 0; i < 10; i++) {
                this.mContent['m_btn' + i].addClickListener(this.onClickNum, this);
            }
            this.mContent.m_btndel.addClickListener(this.onDel, this);
            this.mContent.m_btnreset.addClickListener(this.onReset, this);
            this.updateCode();
            _super.prototype.preShow.call(this, data);
        };
        JoinRoomModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        JoinRoomModule.prototype.onClickNum = function (evt) {
            var clickNum = evt.target.name.slice(3, 4);
            if (this.enterNumber.length < 6) {
                this.enterNumber = this.enterNumber.concat(clickNum);
            }
            this.updateCode();
        };
        JoinRoomModule.prototype.onDel = function () {
            this.enterNumber = this.enterNumber.slice(0, this.enterNumber.length - 1);
            this.updateCode();
        };
        JoinRoomModule.prototype.onReset = function () {
            this.enterNumber = "";
            this.updateCode();
        };
        JoinRoomModule.prototype.updateCode = function () {
            var ary = this.enterNumber.split("");
            for (var i = 0; i < 6; i++) {
                if (ary[i] != null) {
                    this.mContent['m_txt' + (i + 1)].text = ary[i];
                }
                else {
                    this.mContent['m_txt' + (i + 1)].text = "";
                }
            }
            if (this.enterNumber.length == 6) {
                game.ServerEngine.enterRoom(Number(this.enterNumber));
                App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_IN, this.enterRoomCallBack, this);
            }
        };
        JoinRoomModule.prototype.enterRoomCallBack = function (user) {
            if (user.uid == game.GameModel.ins.uid) {
                App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_IN, this.enterRoomCallBack, this);
                ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN, ModuleEnum.GAME);
            }
        };
        return JoinRoomModule;
    }(PopModuleView));
    game.JoinRoomModule = JoinRoomModule;
    __reflect(JoinRoomModule.prototype, "game.JoinRoomModule");
})(game || (game = {}));
//# sourceMappingURL=JoinRoomModule.js.map