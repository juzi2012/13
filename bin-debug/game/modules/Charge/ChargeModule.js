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
    var ChargeModule = (function (_super) {
        __extends(ChargeModule, _super);
        function ChargeModule() {
            return _super.call(this) || this;
        }
        ChargeModule.prototype.initContent = function () {
            this.content = UI.Charge.UI_ChargeModule.createInstance();
        };
        Object.defineProperty(ChargeModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ChargeModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://n4kjkscxkd576";
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = 3;
            _super.prototype.preShow.call(this, data);
        };
        ChargeModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        ChargeModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(index);
        };
        return ChargeModule;
    }(PopModuleView));
    game.ChargeModule = ChargeModule;
    __reflect(ChargeModule.prototype, "game.ChargeModule");
})(game || (game = {}));
//# sourceMappingURL=ChargeModule.js.map