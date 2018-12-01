var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DebugPlatform = (function () {
    function DebugPlatform() {
        this.info = "";
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("拿取结果");
                return [2 /*return*/, game.OptModel.ins];
            });
        });
    };
    DebugPlatform.prototype.getJSON = function () {
        var promise = new Promise(function (resolve, reject) {
            game.OptModel.ins.appId = egret.getOption("appId");
            game.OptModel.ins.channelId = egret.getOption("channelId");
            game.OptModel.ins.time = egret.getOption("time");
            game.OptModel.ins.token = egret.getOption("token");
            game.OptModel.ins.state = egret.getOption("state");
            game.OptModel.ins.setKeFu();
            game.GameModel.ins.init();
            game.OptModel.ins.sign = new md5().hex_md5("appId=" + game.OptModel.ins.appId + "channelId=" + game.OptModel.ins.channelId + "time=" + game.OptModel.ins.time + "token=" + game.OptModel.ins.token + game.GameModel.ins.key); //egret.getOption("sign");
            var parentUrl = getParentUrl();
            console.log("父级url----" + parentUrl);
            game.OptModel.ins.shareRoomId = core.LocationProperty.getPara("shareRoomId", parentUrl);
            game.OptModel.ins.shareUserId = core.LocationProperty.getPara("shareUserId", parentUrl);
            game.OptModel.ins.shareRePlayRoomId = core.LocationProperty.getPara("shareRePlayRoomId", parentUrl);
            console.log("roomid----" + game.OptModel.ins.shareRoomId);
            console.log(game.OptModel.ins.appId);
            console.log(game.OptModel.ins.channelId);
            console.log(game.OptModel.ins.sign);
            console.log(game.OptModel.ins.state);
            console.log(game.OptModel.ins.time);
            console.log(game.OptModel.ins.token);
            console.log(game.OptModel.ins.shareRoomId);
            var urls = game.GameModel.ins.HttpSerever;
            var urlreq = new egret.URLRequest();
            var urlvar = new egret.URLVariables();
            urlvar.variables = { 'appId': game.OptModel.ins.appId, 'channelId': game.OptModel.ins.channelId,
                'sign': game.OptModel.ins.sign, 'time': game.OptModel.ins.time, 'token': game.OptModel.ins.token };
            urlreq.data = urlvar;
            urlreq.url = urls;
            var loader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE, function reqeustCallBack(evt) {
                console.log("收到结果");
                var loader = evt.target;
                var data;
                var str = evt.currentTarget.data;
                data = JSON.parse(str);
                console.log(data['data']);
                if (data['data'] != null) {
                    game.OptModel.ins.name = data['data']['nickname'];
                    game.OptModel.ins.head = data['data']['avatar'];
                    game.GameModel.ins.card = Number(data['data']['fangka']);
                    resolve(data["data"]);
                }
                else {
                    reject(new Error(data['message']));
                }
            }, this);
            loader.load(urlreq);
        });
        return promise;
    };
    ;
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getJSON().then(this.onsuccess, this.onerror)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugPlatform.prototype.onsuccess = function (json) {
        console.log('Contents: ' + json);
        console.log(json['nickname']);
        console.log(JSON.stringify(json));
        this.info = json;
    };
    DebugPlatform.prototype.onerror = function (error) {
        console.error('出错了', error);
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//# sourceMappingURL=Platform.js.map