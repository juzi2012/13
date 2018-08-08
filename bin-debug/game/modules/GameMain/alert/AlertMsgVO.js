var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var AlertMsgVO = (function () {
        function AlertMsgVO(content, handleYes, handleNo) {
            this.content = content;
            this.handleYes = handleYes;
            this.handleNo = handleNo;
        }
        return AlertMsgVO;
    }());
    game.AlertMsgVO = AlertMsgVO;
    __reflect(AlertMsgVO.prototype, "game.AlertMsgVO");
})(game || (game = {}));
//# sourceMappingURL=AlertMsgVO.js.map