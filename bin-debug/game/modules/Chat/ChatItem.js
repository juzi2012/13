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
            if (value.str.slice(0, 3) == "%%-" && value.str.slice(value.str.length - 3, value.str.length) == "-%%") {
                this.m_txt_content.font = "ui://jow5n9bqd8n86l";
                this.m_txt_content.text = value.str.slice(3, value.str.length - 3);
            }
            else {
                this.m_txt_content.font = "";
                this.m_txt_content.text = value.str;
            }
            this.m_txt_name.text = value.uname + ":";
        };
        return ChatItem;
    }(UI.Game.UI_ChatItem));
    game.ChatItem = ChatItem;
    __reflect(ChatItem.prototype, "game.ChatItem");
})(game || (game = {}));
//# sourceMappingURL=ChatItem.js.map