var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var NoticeVO = (function () {
        function NoticeVO() {
        }
        return NoticeVO;
    }());
    game.NoticeVO = NoticeVO;
    __reflect(NoticeVO.prototype, "game.NoticeVO");
})(game || (game = {}));
//# sourceMappingURL=NoticeVO.js.map