var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var LocationModel = (function () {
        function LocationModel() {
            this.latitude = 0;
            this.longitude = 0;
            this._myLocation = "";
            this.myPosString = "";
            this.userLocationArr = new Dictionary();
        }
        Object.defineProperty(LocationModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new LocationModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LocationModel.prototype, "myLocation", {
            get: function () {
                return this._myLocation;
            },
            set: function (value) {
                this._myLocation = value;
            },
            enumerable: true,
            configurable: true
        });
        LocationModel.prototype.sendPosChat = function () {
            ///进入游戏发送我的地理位置
            if (LocationModel.ins.myLocation != "") {
                game.ServerEngine.sendLocation(LocationModel.ins.myLocation);
            }
        };
        LocationModel.prototype.setPos = function (msg) {
            var vo = new UserLocation();
            if (msg.str != "") {
                var arr = msg.str.split("|");
                vo.pos = arr[2];
                vo.lat = arr[0];
                vo.lng = arr[1];
                vo.uid = msg.uid;
                vo.uname = msg.uname;
                this.userLocationArr.add(vo.uid, vo);
            }
        };
        LocationModel.prototype.getPosByUid = function (uid) {
            return this.userLocationArr.get(uid);
        };
        LocationModel.prototype.clear = function () {
            this.userLocationArr.clear();
        };
        LocationModel.prototype.getJsLocation = function () {
            getLocation(this.getLocationCallBack);
            // getBaiduPos(32.175411,121.409706,this.onCallBack)
        };
        LocationModel.prototype.getLocationCallBack = function (res) {
            var jsonObj = JSON.parse(JSON.stringify(res));
            LocationModel.ins.latitude = Number(jsonObj['latitude']);
            LocationModel.ins.longitude = Number(jsonObj['longitude']);
            getBaiduPos(LocationModel.ins.latitude, LocationModel.ins.longitude, LocationModel.ins.onCallBack);
            // let url:string = "http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location="+jsonObj['latitude']+","+jsonObj['longitude']+"&output=json&pois=1&ak=59c25421fe5edf8f5837e7839c6efa37";
            // HttpAPI.HttpGET(url,null,this.onCallBack,this.onError,this);
        };
        LocationModel.prototype.onCallBack = function (data) {
            var callBackJson = data;
            if (callBackJson['address'] != "") {
                LocationModel.ins.myLocation = callBackJson['point']['lat'] + "|" + callBackJson['point']['lng'] + "|" + callBackJson['address'];
                LocationModel.ins.myPosString = callBackJson['address'];
                //拿到地理位置信息之后，如果是在游戏界面，则发送一次位置信息
                App.MessageCenter.dispatch(game.MsgEnum.GAME_LOCATION);
            }
        };
        LocationModel.prototype.onError = function (evt) {
        };
        return LocationModel;
    }());
    game.LocationModel = LocationModel;
    __reflect(LocationModel.prototype, "game.LocationModel");
    var UserLocation = (function () {
        function UserLocation() {
        }
        return UserLocation;
    }());
    game.UserLocation = UserLocation;
    __reflect(UserLocation.prototype, "game.UserLocation");
})(game || (game = {}));
//# sourceMappingURL=LocationModel.js.map