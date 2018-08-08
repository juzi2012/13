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
    var ChatItem = (function (_super) {
        __extends(ChatItem, _super);
        function ChatItem() {
            return _super.call(this) || this;
        }
        ChatItem.prototype.setData = function (value) {
            this.m_txt_time.text = value.time;
            this.m_txt_content.text = value.uname + ":" + value.str;
        };
        return ChatItem;
    }(UI.Game.UI_ChatItem));
    game.ChatItem = ChatItem;
    __reflect(ChatItem.prototype, "game.ChatItem");
})(game || (game = {}));
//# sourceMappingURL=ChatItem.js.map