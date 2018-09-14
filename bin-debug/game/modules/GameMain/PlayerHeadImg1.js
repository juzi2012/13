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
    var PlayerHeadImg1 = (function (_super) {
        __extends(PlayerHeadImg1, _super);
        function PlayerHeadImg1() {
            return _super.call(this) || this;
        }
        PlayerHeadImg1.prototype.setURL = function (url) {
            if (App.GlobalData.IsDebug == false) {
                RES.getResByUrl(url, this.loaded, this, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        PlayerHeadImg1.prototype.loaded = function (evt) {
            var texture = evt;
            this.m_img.texture = texture;
        };
        return PlayerHeadImg1;
    }(UI.MainUI.UI_HeadImage1));
    game.PlayerHeadImg1 = PlayerHeadImg1;
    __reflect(PlayerHeadImg1.prototype, "game.PlayerHeadImg1");
})(game || (game = {}));
//# sourceMappingURL=PlayerHeadImg1.js.map