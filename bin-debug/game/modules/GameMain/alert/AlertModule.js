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
    var AlertModule = (function (_super) {
        __extends(AlertModule, _super);
        function AlertModule() {
            return _super.call(this) || this;
        }
        AlertModule.prototype.initContent = function () {
            this.content = UI.Base.UI_SimpleAlert.createInstance();
        };
        Object.defineProperty(AlertModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        AlertModule.prototype.preShow = function (data) {
            this.vo = data;
            this.mContent.m_content.text = this.vo.content;
            this.mContent.m_btn_ok.addClickListener(this.onOkClick, this);
            this.mContent.m_btn_cancel.addClickListener(this.onCancelClick, this);
            _super.prototype.preShow.call(this, data);
        };
        AlertModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        AlertModule.prototype.onOkClick = function () {
            if (this.vo.handleYes != null) {
                this.vo.handleYes.run();
            }
            ModuleMgr.ins.closeModule(this.moduleId);
        };
        AlertModule.prototype.onCancelClick = function () {
            if (this.vo.handleNo != null) {
                this.vo.handleNo.run();
            }
            ModuleMgr.ins.closeModule(this.moduleId);
        };
        return AlertModule;
    }(PopModuleView));
    game.AlertModule = AlertModule;
    __reflect(AlertModule.prototype, "game.AlertModule");
})(game || (game = {}));
//# sourceMappingURL=AlertModule.js.map