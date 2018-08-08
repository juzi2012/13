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
    var DissolveRoomModule = (function (_super) {
        __extends(DissolveRoomModule, _super);
        function DissolveRoomModule() {
            var _this = _super.call(this) || this;
            _this.count = 0;
            return _this;
        }
        DissolveRoomModule.prototype.initContent = function () {
            this.content = UI.Game.UI_DissolveRoom.createInstance();
        };
        Object.defineProperty(DissolveRoomModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        DissolveRoomModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_btn_close.visible = false;
            this.msg = data;
            this.curHeadAry = [];
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = game.GameModel.ins.roomModel.users.length;
            this.mContent.m_btn_accept.addClickListener(this.accetpDismiss, this);
            this.mContent.m_btn_refuse.addClickListener(this.refuseDismiss, this);
            App.TimerManager.doTimer(1000, this.msg.time, this.timeUp, this);
            if (this.msg.uid == game.GameModel.ins.uid) {
                this.mContent.m_btn_accept.visible = false;
                this.mContent.m_btn_refuse.visible = false;
            }
            App.MessageCenter.addListener(game.MsgEnum.GAME_ANSWER_FOR_DISMISS, this.otherPlayerAnswer, this);
            _super.prototype.preShow.call(this, data);
        };
        DissolveRoomModule.prototype.timeUp = function () {
            this.count++;
            if (this.count > 180) {
                this.count = 180;
                App.TimerManager.remove(this.timeUp, this);
            }
            var m = parseInt(((this.msg.time - this.count) / 60).toString());
            var s = (this.msg.time - this.count) % 60;
            this.mContent.m_txt_count.text = "倒计时:" + m + ":" + (s > 10 ? s : ("0" + s));
        };
        DissolveRoomModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        DissolveRoomModule.prototype.onCloseHandle = function () {
        };
        DissolveRoomModule.prototype.accetpDismiss = function () {
            game.ServerEngine.sendAcceptOrRefuseDismiss(1);
        };
        DissolveRoomModule.prototype.refuseDismiss = function () {
            game.ServerEngine.sendAcceptOrRefuseDismiss(0);
        };
        DissolveRoomModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(this.msg.uid, game.GameModel.ins.roomModel.users[index]);
            this.curHeadAry.push(item);
        };
        DissolveRoomModule.prototype.otherPlayerAnswer = function (msg) {
            var playerHead = this.getPlayerById(msg.uid);
            if (playerHead != null) {
                playerHead.setState(msg.act);
            }
            if (msg.uid != game.GameModel.ins.uid && msg.act == 0) {
                game.AlertUtil.floatMsg(game.GameModel.ins.roomModel.getUserById(msg.uid).name + "不同意解散房间.");
            }
        };
        DissolveRoomModule.prototype.getPlayerById = function (uid) {
            for (var i = 0; i < this.curHeadAry.length; i++) {
                if (this.curHeadAry[i].user.uid == uid) {
                    return this.curHeadAry[i];
                }
            }
            return null;
        };
        DissolveRoomModule.prototype.preClose = function (data) {
            App.MessageCenter.removeListener(game.MsgEnum.GAME_ANSWER_FOR_DISMISS, this.otherPlayerAnswer, this);
            App.TimerManager.remove(this.timeUp, this);
            this.preCloseCpl();
        };
        return DissolveRoomModule;
    }(PopModuleView));
    game.DissolveRoomModule = DissolveRoomModule;
    __reflect(DissolveRoomModule.prototype, "game.DissolveRoomModule");
})(game || (game = {}));
//# sourceMappingURL=DissolveRoomModule.js.map