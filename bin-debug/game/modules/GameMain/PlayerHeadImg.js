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
    var PlayerHeadImg = (function (_super) {
        __extends(PlayerHeadImg, _super);
        function PlayerHeadImg() {
            return _super.call(this) || this;
        }
        PlayerHeadImg.prototype.setURL = function (url) {
            if (App.GlobalData.IsDebug != 0) {
                RES.getResByUrl(url, this.loaded, this, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        PlayerHeadImg.prototype.loaded = function (evt) {
            var texture = evt;
            this.m_img.texture = texture;
        };
        return PlayerHeadImg;
    }(UI.MainUI.UI_HeadImage));
    game.PlayerHeadImg = PlayerHeadImg;
    __reflect(PlayerHeadImg.prototype, "game.PlayerHeadImg");
})(game || (game = {}));
//# sourceMappingURL=PlayerHeadImg.js.map