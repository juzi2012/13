var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ws;
(function (ws) {
    /**
     *  通信描述文字
     * @author liujia
     *
     */
    var CommandDesc = (function () {
        function CommandDesc() {
            CommandDesc.setup();
        }
        CommandDesc.setup = function () {
            this._desc = {};
            this._desc[ws.CommandID.CHECK_VERSION] = "服务器返回错误ID [CHECK_VERSION]";
        };
        CommandDesc.getDescById = function (cmdID) {
            if (!this._desc) {
                CommandDesc.setup();
            }
            if (this._desc[cmdID]) {
                return (this._desc[cmdID]);
            }
            return ("未描述");
        };
        return CommandDesc;
    }());
    ws.CommandDesc = CommandDesc;
    __reflect(CommandDesc.prototype, "ws.CommandDesc");
})(ws || (ws = {}));
//# sourceMappingURL=CommandDesc.js.map