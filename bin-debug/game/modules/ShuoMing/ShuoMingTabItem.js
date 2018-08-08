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
    var ShuoMingTabItem = (function (_super) {
        __extends(ShuoMingTabItem, _super);
        function ShuoMingTabItem() {
            return _super.call(this) || this;
        }
        ShuoMingTabItem.prototype.setData = function (index) {
            switch (index) {
                case 0:
                    this.m_name.text = "十三水";
                    break;
                case 1:
                    this.m_name.text = "加一色十三水";
                    break;
                case 2:
                    this.m_name.text = "大小王十三水";
                    break;
                case 3:
                    this.m_name.text = "六人十三水";
                    break;
                case 4:
                    this.m_name.text = "纯一色十三水";
                    break;
            }
        };
        return ShuoMingTabItem;
    }(UI.ShuoMing.UI_ShuoMingTab));
    game.ShuoMingTabItem = ShuoMingTabItem;
    __reflect(ShuoMingTabItem.prototype, "game.ShuoMingTabItem");
})(game || (game = {}));
//# sourceMappingURL=ShuoMingTabItem.js.map