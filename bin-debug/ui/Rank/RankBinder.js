/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Rank;
    (function (Rank) {
        var RankBinder = (function () {
            function RankBinder() {
            }
            RankBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.UI_RankModule.URL, Rank.UI_RankModule);
                fairygui.UIObjectFactory.setPackageItemExtension(Rank.UI_RankItem.URL, Rank.UI_RankItem);
            };
            return RankBinder;
        }());
        Rank.RankBinder = RankBinder;
        __reflect(RankBinder.prototype, "UI.Rank.RankBinder");
    })(Rank = UI.Rank || (UI.Rank = {}));
})(UI || (UI = {}));
//# sourceMappingURL=RankBinder.js.map