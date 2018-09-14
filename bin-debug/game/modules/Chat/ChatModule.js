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
    var ChatModule = (function (_super) {
        __extends(ChatModule, _super);
        function ChatModule() {
            var _this = _super.call(this) || this;
            _this.emstr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];
            return _this;
        }
        ChatModule.prototype.initContent = function () {
            this.content = UI.Game.UI_ChatModule.createInstance();
        };
        Object.defineProperty(ChatModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ChatModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80g2wj1e";
            _super.prototype.preShow.call(this, data);
            App.MessageCenter.addListener(game.MsgEnum.GAME_CHAT, this.onReceive, this);
            this.mContent.m_ctrl.selectedIndex = 1;
            this.mContent.m_btn_record.addClickListener(this.changeTab, this);
            this.mContent.m_btn_liaotian.addClickListener(this.changeTab, this);
            this.mContent.m_btn_biaoq.addClickListener(this.changeTab, this);
            this.mContent.m_btn_send.addClickListener(this.onSend, this);
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = game.ChatModel.ins.arr.length;
            this.mContent.m_list_emoji.itemRenderer = this.EmojiRenderListItem;
            this.mContent.m_list_emoji.callbackThisObj = this;
            this.mContent.m_list_emoji.numItems = 21;
            this.mContent.m_list_emoji.addEventListener(fairygui.ItemEvent.CLICK, this.onClickItem, this);
            if (game.ChatModel.ins.arr.length > 0) {
                this.mContent.m_list.scrollToView(game.ChatModel.ins.arr.length - 1);
            }
            _super.prototype.preShow.call(this, data);
        };
        ChatModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        ChatModule.prototype.onClickItem = function (evt) {
            var item = evt.itemObject;
            game.ServerEngine.sendChat("%%-" + item.vv + "-%%");
            this.mContent.m_ctrl.selectedIndex = 1;
        };
        ChatModule.prototype.changeTab = function () {
            switch (this.mContent.m_ctrl.selectedIndex) {
                case 0:
                    this.mContent.m_list.numItems = game.ChatModel.ins.arr_his.length;
                    break;
                case 1:
                    this.mContent.m_list.numItems = game.ChatModel.ins.arr.length;
                    break;
                case 2:
                    break;
            }
        };
        ChatModule.prototype.onSend = function () {
            if (this.mContent.m_btn_input.text != "") {
                game.ServerEngine.sendChat(this.mContent.m_btn_input.text);
                this.mContent.m_btn_input.text = "";
            }
        };
        ChatModule.prototype.onReceive = function (msg) {
            var item = this.mContent.m_list.addItemFromPool(game.ChatItem.URL);
            item.setData(msg);
            this.mContent.m_list.scrollToView(game.ChatModel.ins.arr.length - 1 < 0 ? 0 : game.ChatModel.ins.arr.length - 1);
        };
        ChatModule.prototype.RenderListItem = function (index, _item) {
            var mailItem = _item;
            switch (this.mContent.m_ctrl.selectedIndex) {
                case 0:
                    mailItem.setData(game.ChatModel.ins.arr_his[index]);
                    break;
                case 1:
                    mailItem.setData(game.ChatModel.ins.arr[index]);
                    break;
            }
        };
        ChatModule.prototype.EmojiRenderListItem = function (index, _item) {
            var str = this.emstr[index];
            var emojiItem = _item;
            emojiItem.setData(str);
        };
        ChatModule.prototype.preClose = function (data) {
            App.MessageCenter.removeListener(game.MsgEnum.GAME_CHAT, this.onReceive, this);
            this.preCloseCpl();
        };
        return ChatModule;
    }(PopModuleView));
    game.ChatModule = ChatModule;
    __reflect(ChatModule.prototype, "game.ChatModule");
})(game || (game = {}));
//# sourceMappingURL=ChatModule.js.map