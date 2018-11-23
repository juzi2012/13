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
    var KeFuModule = (function (_super) {
        __extends(KeFuModule, _super);
        function KeFuModule() {
            return _super.call(this) || this;
        }
        KeFuModule.prototype.initContent = function () {
            this.content = UI.Kefu.UI_KeFu.createInstance();
        };
        Object.defineProperty(KeFuModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        KeFuModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5fam";
            this.mContent.m_btn_ok.addClickListener(this.onCloseClick, this);
            this.mContent.m_btn_copy.addClickListener(this.onCopy, this);
            _super.prototype.preShow.call(this, data);
        };
        KeFuModule.prototype.onCopy = function () {
            var cb = new game.Clipboard().setText("baise168168");
            if (cb) {
                game.AlertUtil.floatMsg("复制成功");
            }
            else {
                game.AlertUtil.floatMsg("复制失败");
            }
        };
        KeFuModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        return KeFuModule;
    }(PopModuleView));
    game.KeFuModule = KeFuModule;
    __reflect(KeFuModule.prototype, "game.KeFuModule");
})(game || (game = {}));
//# sourceMappingURL=KeFuModule.js.map