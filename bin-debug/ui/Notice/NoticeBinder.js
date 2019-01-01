/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Notice;
    (function (Notice) {
        var NoticeBinder = (function () {
            function NoticeBinder() {
            }
            NoticeBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Notice.UI_Notice.URL, Notice.UI_Notice);
                fairygui.UIObjectFactory.setPackageItemExtension(Notice.UI_NoticeTab.URL, Notice.UI_NoticeTab);
            };
            return NoticeBinder;
        }());
        Notice.NoticeBinder = NoticeBinder;
        __reflect(NoticeBinder.prototype, "UI.Notice.NoticeBinder");
    })(Notice = UI.Notice || (UI.Notice = {}));
})(UI || (UI = {}));
//# sourceMappingURL=NoticeBinder.js.map