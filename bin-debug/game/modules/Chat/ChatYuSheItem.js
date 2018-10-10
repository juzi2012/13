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
    var ChatYuSheItem = (function (_super) {
        __extends(ChatYuSheItem, _super);
        function ChatYuSheItem() {
            return _super.call(this) || this;
        }
        ChatYuSheItem.prototype.setData = function (value) {
            this.str = value;
            this.m_txt_content.text = this.str;
        };
        return ChatYuSheItem;
    }(UI.Game.UI_ChatYuSheItem));
    game.ChatYuSheItem = ChatYuSheItem;
    __reflect(ChatYuSheItem.prototype, "game.ChatYuSheItem");
})(game || (game = {}));
//# sourceMappingURL=ChatYuSheItem.js.map