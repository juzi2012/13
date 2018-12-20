var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var RoomInfo = (function () {
        function RoomInfo() {
            this.zuid = ""; //庄家uid
            this.zz = 0; //坐庄模式
            this.jp = []; //是否是加一色number
            this.th = 1; //1是先比大小，2时先比花色
        }
        return RoomInfo;
    }());
    game.RoomInfo = RoomInfo;
    __reflect(RoomInfo.prototype, "game.RoomInfo");
    var User = (function () {
        function User() {
            this._sc = 0; //得分
        }
        Object.defineProperty(User.prototype, "sc", {
            get: function () {
                return this._sc;
            },
            set: function (value) {
                this._sc = value;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    game.User = User;
    __reflect(User.prototype, "game.User");
    var JieSuanAllItem = (function () {
        function JieSuanAllItem() {
            this.resultScore = 0;
        }
        return JieSuanAllItem;
    }());
    game.JieSuanAllItem = JieSuanAllItem;
    __reflect(JieSuanAllItem.prototype, "game.JieSuanAllItem");
    var RoomModel = (function () {
        function RoomModel() {
            this.reConnectState = 0; //重连进来的游戏状态 0未开始，1已开始，2结算
            this.isDismiss = false; //是否已经解散房间了
            this.isAllFinish = false; //是否所有的牌局都结束，为了方便弹出单局结算后弹出所有结算
            this.hasPlayedJu = 0;
            this.isReConnectInRoom = false; //是否是重新回到游戏界面
            //从牌局开始，到点击继续之前，这个纸都是flase
            this.isNewStartOpen = true;
        }
        RoomModel.prototype.setRoomInfo = function (msg) {
            this.roundArr = [];
            this.fname = msg.fname;
            this.fuid = msg.fuid;
            this.zuid = msg.zuid;
            this.gps = msg.gps;
            this.rid = msg.rid;
            this.rinfo = new RoomInfo();
            this.rinfo.fc = msg.rinfo.fc;
            this.rinfo.rp = msg.rinfo.rp;
            this.rinfo.friend = msg.rinfo.friend;
            this.rinfo.jm = msg.rinfo.jm;
            this.rinfo.nnum = msg.rinfo.nnum;
            this.rinfo.pn = msg.rinfo.pn;
            this.rinfo.safe = msg.rinfo.safe;
            this.rinfo.snum = msg.rinfo.snum;
            this.rinfo.zz = msg.rinfo.zz;
            this.rinfo.jp = msg.rinfo.jp;
            this.rinfo.th = msg.rinfo.th;
            if (this.rinfo.zz == 1) {
                this.rinfo.zuid = this.zuid;
            }
            if (this.users == null) {
                this.users = new Array();
            }
            for (var i = 0; i < msg.users.length; i++) {
                if (msg.users[i].uid != "") {
                    var user = new User();
                    user.avatar = msg.users[i].avatar;
                    user.card = msg.users[i].card;
                    user.gold = msg.users[i].gold;
                    user.gps = msg.users[i].gps;
                    user.name = msg.users[i].name;
                    user.status = msg.users[i].status;
                    user.tid = msg.users[i].tid;
                    user.uid = msg.users[i].uid;
                    this.checkisNew(user);
                }
            }
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].uid == game.GameModel.ins.uid) {
                    var u = this.users.splice(i, 1)[0];
                    this.users.unshift(u);
                }
            }
        };
        RoomModel.prototype.reConnectSetRoomInfo = function (msg) {
            this.roundArr = [];
            this.fname = msg.fname;
            this.fuid = msg.fuid;
            this.rid = msg.rid;
            this.ju = msg.ju;
            this.js = msg.js;
            this.jt = msg.jt;
            this.of = msg.of;
            this.rinfo = new RoomInfo();
            this.rinfo.fc = msg.rinfo.fc;
            this.rinfo.friend = msg.rinfo.friend;
            this.rinfo.jm = msg.rinfo.jm;
            this.rinfo.nnum = msg.rinfo.nnum;
            this.rinfo.pn = msg.rinfo.pn;
            this.rinfo.rp = msg.rinfo.rp;
            this.rinfo.safe = msg.rinfo.safe;
            this.rinfo.snum = msg.rinfo.snum;
            this.rinfo.zuid = msg.dealer;
            this.rinfo.zz = msg.rinfo.zz;
            this.rinfo.jp = msg.rinfo.jp;
            this.rinfo.th = msg.rinfo.th;
            this.reConnectState = msg.status;
            if (this.users == null) {
                this.users = new Array();
            }
            for (var i = 0; i < msg.users.length; i++) {
                if (msg.users[i].uid != "") {
                    var user = new User();
                    user.avatar = msg.users[i].avatar;
                    user.card = msg.users[i].hc;
                    user.gold = msg.users[i].gold;
                    user.gps = msg.users[i].gps;
                    user.name = msg.users[i].name;
                    user.status = msg.users[i].rd;
                    if (this.reConnectState == 2 && user.status == 1) {
                        user.status = 0;
                    }
                    user.tid = msg.users[i].pos; //座位号
                    user.uid = msg.users[i].uid;
                    user.bp = msg.users[i].bp; //摆牌
                    user.sc = msg.users[i].sc;
                    this.checkisNew(user);
                }
            }
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].uid == game.GameModel.ins.uid) {
                    if (this.users[i].card != null) {
                        this.addRound(this.users[i].card);
                    }
                    var u = this.users.splice(i, 1)[0];
                    this.users.unshift(u);
                }
            }
        };
        RoomModel.prototype.removeUser = function (uid) {
            for (var i = 0; i < this.users.length; i++) {
                if (uid == this.users[i].uid) {
                    this.users.splice(i, 1);
                    break;
                }
            }
        };
        RoomModel.prototype.getUserById = function (uid) {
            for (var i = 0; i < this.users.length; i++) {
                if (uid == this.users[i].uid) {
                    return this.users[i];
                }
            }
        };
        RoomModel.prototype.checkisNew = function (user) {
            var isnew = true;
            for (var i = 0; i < this.users.length; i++) {
                if (user.uid == this.users[i].uid) {
                    isnew = false;
                    break;
                }
            }
            if (isnew) {
                this.users.push(user);
                if (user.uid == this.fuid) {
                    this.fzInfo = user;
                }
                if (user.uid == game.GameModel.ins.uid) {
                    this.meInfo = user;
                }
                App.MessageCenter.dispatch(game.MsgEnum.NEW_UESR_IN, user);
            }
        };
        RoomModel.prototype.addRound = function (card) {
            var roundModel = new game.RoundModel();
            roundModel.serverCard = card;
            var arr = new Array();
            for (var i = 0; i < card.length; i++) {
                var num = game.PorkUtil.ChangeServerCardToClient(card[i]);
                var vo = new game.PorkVO(num);
                arr.push(vo);
            }
            roundModel.myCard = arr;
            roundModel.setAllType();
            roundModel.myCard = game.PorkUtil.SortCard(roundModel.myCard);
            game.GameModel.ins.roundModel = roundModel;
            this.roundArr.push(roundModel);
            console.log(roundModel.cardStr);
        };
        RoomModel.prototype.setJieSuanAll = function (msg) {
            this.isAllFinish = true;
            this.jieSuanAll = [];
            this.hasPlayedJu = 0;
            for (var item in msg.sc) {
                var jiesuanItem = new JieSuanAllItem();
                jiesuanItem.uid = item;
                jiesuanItem.scoreArr = msg.sc[item];
                this.hasPlayedJu = jiesuanItem.scoreArr.length;
                for (var i = 0; i < jiesuanItem.scoreArr.length; i++) {
                    jiesuanItem.resultScore += jiesuanItem.scoreArr[i];
                }
                this.jieSuanAll.push(jiesuanItem);
            }
            this.jieSuanAll.sort(function (a, b) { return b.resultScore - a.resultScore; });
        };
        RoomModel.prototype.checkIsOffLine = function (uid) {
            if (this.of == null) {
                return false;
            }
            else {
                if (this.of.indexOf(uid) < 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };
        RoomModel.prototype.getIsAccept = function ($uid) {
            console.log($uid);
            for (var uid in this.ju) {
                if ($uid == uid) {
                    if (this.ju[uid] == 1) {
                        return 1;
                    }
                    else if (this.ju[uid] == 0) {
                        return 0;
                    }
                }
            }
            return -1;
        };
        RoomModel.prototype.getTidByUid = function (uid) {
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].uid == uid) {
                    return this.users[i].tid;
                }
            }
        };
        return RoomModel;
    }());
    game.RoomModel = RoomModel;
    __reflect(RoomModel.prototype, "game.RoomModel");
})(game || (game = {}));
//# sourceMappingURL=RoomModel.js.map