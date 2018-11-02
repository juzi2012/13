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
    var UserInfoLocationItem = (function (_super) {
        __extends(UserInfoLocationItem, _super);
        function UserInfoLocationItem() {
            return _super.call(this) || this;
        }
        UserInfoLocationItem.prototype.setData = function (user, data, clickUser) {
            this.m_txt_name.text = clickUser.name.substr(0, 5) + "与" + user.name.substr(0, 5);
            var userLocation = game.LocationModel.ins.getPosByUid(clickUser.uid);
            if (data == null || userLocation == null) {
                this.m_txt_pos.text = "距离 无法确定";
            }
            else {
                var arr = [userLocation.lat, userLocation.lng];
                var dis = this.GetDistance(arr[0], arr[1], data['lat'], data['lng']);
                if (dis < 1) {
                    this.m_txt_pos.text = "距离 " + dis * 1000 + "米";
                }
                else {
                    this.m_txt_pos.text = "距离 " + dis + "公里";
                }
            }
        };
        UserInfoLocationItem.prototype.Rad = function (d) {
            return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
        };
        UserInfoLocationItem.prototype.GetDistance = function (lat1, lng1, lat2, lng2) {
            var radLat1 = this.Rad(lat1);
            var radLat2 = this.Rad(lat2);
            var a = radLat1 - radLat2;
            var b = this.Rad(lng1) - this.Rad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
                Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378.137; // EARTH_RADIUS;
            s = Math.round(s * 10000) / 10000; //输出为公里
            // s = s.toFixed(4);
            return s;
        };
        return UserInfoLocationItem;
    }(UI.Game.UI_UserInfoPosItem));
    game.UserInfoLocationItem = UserInfoLocationItem;
    __reflect(UserInfoLocationItem.prototype, "game.UserInfoLocationItem");
})(game || (game = {}));
//# sourceMappingURL=UserInfoLocationItem.js.map