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
    var ZhanJiItemUserItem = (function (_super) {
        __extends(ZhanJiItemUserItem, _super);
        function ZhanJiItemUserItem() {
            return _super.call(this) || this;
        }
        ZhanJiItemUserItem.prototype.setData = function (data, maxScore) {
            if (data.sc == maxScore) {
                this.m_img_win.visible = true;
            }
            else {
                this.m_img_win.visible = false;
            }
            this.m_txt_name.text = data.uname;
            this.m_txt_score.text = data.sc.toString();
            if (data.sc < 0) {
                this.m_txt_score.color = 0x4b8b39;
            }
            else {
                this.m_txt_score.color = 0xd32a27;
            }
        };
        return ZhanJiItemUserItem;
    }(UI.ZhanJi.UI_ZhanJiItemUserItem));
    game.ZhanJiItemUserItem = ZhanJiItemUserItem;
    __reflect(ZhanJiItemUserItem.prototype, "game.ZhanJiItemUserItem");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiItemUserItem.js.map