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
    var JieSanSort = (function (_super) {
        __extends(JieSanSort, _super);
        function JieSanSort() {
            return _super.call(this) || this;
        }
        JieSanSort.prototype.initContent = function () {
            this.content = UI.ZhanJi.UI_JieSanSort.createInstance();
        };
        Object.defineProperty(JieSanSort.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        JieSanSort.prototype.preShow = function (data) {
            this.mContent.m_btn_close.addClickListener(this.doClose, this);
            this.round = data;
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = this.round.jus.length;
            _super.prototype.preShow.call(this, data);
        };
        JieSanSort.prototype.RenderListItem = function (index, _item) {
            var mailItem = _item;
            mailItem.setData(this.round.jesanArr[index]);
        };
        JieSanSort.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        JieSanSort.prototype.doClose = function () {
            ModuleMgr.ins.closeModule(ModuleEnum.JIESANSORT);
        };
        return JieSanSort;
    }(PopModuleView));
    game.JieSanSort = JieSanSort;
    __reflect(JieSanSort.prototype, "game.JieSanSort");
})(game || (game = {}));
//# sourceMappingURL=JieSanSort.js.map