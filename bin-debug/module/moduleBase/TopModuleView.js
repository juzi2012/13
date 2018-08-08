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
    var TopModuleView = (function (_super) {
        __extends(TopModuleView, _super);
        function TopModuleView() {
            return _super.call(this) || this;
        }
        /**
         * 初始化模块自适应
         * @param layer 该模块添加的图层
         * @param isConfigVoAutoSize 模块配置是否自适应
         */
        TopModuleView.prototype.initAutoSize = function (layer, isConfigVoAutoSize) {
            if (this.content && isConfigVoAutoSize) {
                this.content.x = layer.width / 2 - this.content.width / 2;
                this.content.y = layer.height / 2 - this.content.height / 2;
                this.content.addRelation(layer, fairygui.RelationType.Center_Center);
            }
        };
        return TopModuleView;
    }(Module));
    game.TopModuleView = TopModuleView;
    __reflect(TopModuleView.prototype, "game.TopModuleView");
})(game || (game = {}));
//# sourceMappingURL=TopModuleView.js.map