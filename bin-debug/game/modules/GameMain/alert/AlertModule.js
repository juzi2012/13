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
        /**
         * 初始化模块自适应
         * @param layer 该模块添加的图层
         * @param isConfigVoAutoSize 模块配置是否自适应
         */
        AlertModule.prototype.initAutoSize = function (layer, isConfigVoAutoSize) {
            if (this.content && isConfigVoAutoSize) {
                this.content.x = layer.width / 2 - this.content.width / 2 + this.vo.offsiteX;
                this.content.y = layer.height / 2 - this.content.height / 2 + this.vo.offsiteY;
                this.content.addRelation(layer, fairygui.RelationType.Center_Center);
            }
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