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
    var TESTModule = (function (_super) {
        __extends(TESTModule, _super);
        function TESTModule() {
            return _super.call(this) || this;
        }
        TESTModule.prototype.initContent = function () {
            this.content = new fairygui.GComponent();
        };
        Object.defineProperty(TESTModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        TESTModule.prototype.preShow = function (data) {
            this.preShowCpl();
        };
        TESTModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
            this.testSocket();
        };
        TESTModule.prototype.testSocket = function () {
            App.Socket.send("abcd");
        };
        return TESTModule;
    }(Module));
    game.TESTModule = TESTModule;
    __reflect(TESTModule.prototype, "game.TESTModule");
})(game || (game = {}));
//# sourceMappingURL=TESTModule.js.map