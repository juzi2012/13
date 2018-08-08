/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Result;
    (function (Result) {
        var ResultBinder = (function () {
            function ResultBinder() {
            }
            ResultBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Result.UI_SingleResult.URL, Result.UI_SingleResult);
                fairygui.UIObjectFactory.setPackageItemExtension(Result.UI_SingleResultItem.URL, Result.UI_SingleResultItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Result.UI_AllResult.URL, Result.UI_AllResult);
                fairygui.UIObjectFactory.setPackageItemExtension(Result.UI_AllResultItem.URL, Result.UI_AllResultItem);
            };
            return ResultBinder;
        }());
        Result.ResultBinder = ResultBinder;
        __reflect(ResultBinder.prototype, "UI.Result.ResultBinder");
    })(Result = UI.Result || (UI.Result = {}));
})(UI || (UI = {}));
//# sourceMappingURL=ResultBinder.js.map