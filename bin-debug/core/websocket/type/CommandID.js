var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ws;
(function (ws) {
    var CommandID = (function () {
        function CommandID() {
        }
        CommandID.CHECK_VERSION = 1000;
        return CommandID;
    }());
    ws.CommandID = CommandID;
    __reflect(CommandID.prototype, "ws.CommandID");
})(ws || (ws = {}));
//# sourceMappingURL=CommandID.js.map