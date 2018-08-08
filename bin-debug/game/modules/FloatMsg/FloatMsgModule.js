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
    var FloatMsgModule = (function (_super) {
        __extends(FloatMsgModule, _super);
        function FloatMsgModule() {
            return _super.call(this) || this;
        }
        FloatMsgModule.prototype.initContent = function () {
            this.content = new fairygui.GComponent();
            this.content.width = LayerCenter.stageWidth;
            this.content.height = LayerCenter.stageHeight;
        };
        Object.defineProperty(FloatMsgModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        FloatMsgModule.prototype.preShow = function (data) {
            this.preShowCpl();
            this.mContent.touchable = false;
            App.MessageCenter.addListener(game.MsgEnum.FLOAT_MSG, this.floatMsg, this);
        };
        FloatMsgModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        FloatMsgModule.prototype.floatMsg = function (msg, id) {
            if (id == MsgType.LeaveRoom) {
                game.AlertUtil.alert("您确定解散房间吗？", core.Handler.create(this, this.doQuit));
            }
            else {
                var msgUI = UI.Base.UI_FloatMsg.createInstance();
                msgUI.m_txt.text = msg;
                msgUI.x = LayerCenter.stageWidth / 2;
                msgUI.y = LayerCenter.stageHeight / 2;
                this.mContent.addChild(msgUI);
                msgUI.m_t0.play(this.playComplete, this, msgUI);
                // egret.Tween.get(msgUI).to({y:LayerCenter.stageHeight/2-150},800).call(()=>{App.DisplayUtils.removeFromParent(msgUI.displayObject); msgUI.dispose();msgUI=null},this);
            }
        };
        FloatMsgModule.prototype.playComplete = function (msgUI) {
            App.DisplayUtils.removeFromParent(msgUI.displayObject);
            msgUI.dispose();
            msgUI = null;
        };
        FloatMsgModule.prototype.doQuit = function () {
            game.ServerEngine.askForDismiss();
        };
        return FloatMsgModule;
    }(Module));
    game.FloatMsgModule = FloatMsgModule;
    __reflect(FloatMsgModule.prototype, "game.FloatMsgModule");
})(game || (game = {}));
//# sourceMappingURL=FloatMsgModule.js.map