var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    "use strict";
    var Clipboard = (function () {
        function Clipboard() {
        }
        Clipboard.prototype.getText = function () {
            var active = document.activeElement;
            if (active != null) {
                var hidden = document.createElement("textarea");
                document.body.appendChild(hidden);
                hidden.focus();
                document.execCommand('paste', null, '');
                active.focus();
                hidden.remove();
                return hidden.value;
            }
            return "";
        };
        Clipboard.prototype.setText = function (s) {
            var active = document.activeElement;
            if (active != null) {
                var hidden = document.createElement("textarea");
                hidden.value = s;
                document.body.appendChild(hidden);
                hidden.select();
                document.execCommand('copy', null, '');
                active.focus();
                hidden.remove();
                return true;
            }
            return false;
        };
        return Clipboard;
    }());
    game.Clipboard = Clipboard;
    __reflect(Clipboard.prototype, "game.Clipboard");
})(game || (game = {}));
//# sourceMappingURL=clipboard.js.map