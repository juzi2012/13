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
    var ChatEmojiItem = (function (_super) {
        __extends(ChatEmojiItem, _super);
        function ChatEmojiItem() {
            var _this = _super.call(this) || this;
            _this.vv = "";
            return _this;
        }
        ChatEmojiItem.prototype.setData = function (value) {
            this.vv = value;
            this.m_img.text = value;
        };
        return ChatEmojiItem;
    }(UI.Game.UI_EmojiItem));
    game.ChatEmojiItem = ChatEmojiItem;
    __reflect(ChatEmojiItem.prototype, "game.ChatEmojiItem");
})(game || (game = {}));
//# sourceMappingURL=ChatEmojiItem.js.map