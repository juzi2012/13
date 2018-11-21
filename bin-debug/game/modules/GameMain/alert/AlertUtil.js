var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var AlertUtil = (function () {
        function AlertUtil() {
        }
        AlertUtil.alert = function (content, $handleYes, offsiteX, offsiteY) {
            if (offsiteX === void 0) { offsiteX = 0; }
            if (offsiteY === void 0) { offsiteY = 0; }
            ModuleMgr.ins.showModule(ModuleEnum.ALERT, new game.AlertMsgVO(content, $handleYes, null, offsiteX, offsiteY));
        };
        AlertUtil.floatMsg = function (content) {
            App.MessageCenter.dispatch(game.MsgEnum.FLOAT_MSG, content);
        };
        return AlertUtil;
    }());
    game.AlertUtil = AlertUtil;
    __reflect(AlertUtil.prototype, "game.AlertUtil");
})(game || (game = {}));
//# sourceMappingURL=AlertUtil.js.map