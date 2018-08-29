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
    var JieSanItem = (function (_super) {
        __extends(JieSanItem, _super);
        function JieSanItem() {
            return _super.call(this) || this;
        }
        JieSanItem.prototype.setData = function (value) {
            this.m_txt_name.text = value.name;
            if (value.order == 0) {
                this.m_txt_sort.text = "发起者";
            }
            else {
                this.m_txt_sort.text = "同意" + value.order;
            }
        };
        return JieSanItem;
    }(UI.ZhanJi.UI_JieSanItem));
    game.JieSanItem = JieSanItem;
    __reflect(JieSanItem.prototype, "game.JieSanItem");
})(game || (game = {}));
//# sourceMappingURL=JieSanItem.js.map