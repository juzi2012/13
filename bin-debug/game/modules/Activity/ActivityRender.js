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
    var ActivityRender = (function (_super) {
        __extends(ActivityRender, _super);
        function ActivityRender() {
            return _super.call(this) || this;
        }
        ActivityRender.prototype.setData = function (data) {
            this.m_data = data;
            this.m_txt_name.text = data['title'];
        };
        return ActivityRender;
    }(UI.Activity.UI_ActivityTab));
    game.ActivityRender = ActivityRender;
    __reflect(ActivityRender.prototype, "game.ActivityRender");
})(game || (game = {}));
//# sourceMappingURL=ActivityRender.js.map