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
var proto;
(function (proto) {
    var CMD;
    (function (CMD) {
        CMD[CMD["NONE"] = 0] = "NONE";
        CMD[CMD["HEART_BEAT"] = 1] = "HEART_BEAT";
        CMD[CMD["BATTLE_REPORT_NOTIFY"] = 4] = "BATTLE_REPORT_NOTIFY";
        CMD[CMD["LOGIN"] = 2001] = "LOGIN";
        CMD[CMD["CREATE_PLAYER"] = 2002] = "CREATE_PLAYER";
        CMD[CMD["STATIC_CWAR_TIME_DATA"] = 2003] = "STATIC_CWAR_TIME_DATA";
        CMD[CMD["STATIC_CWAR_TIME_DATA_NOTIFY"] = 2005] = "STATIC_CWAR_TIME_DATA_NOTIFY";
        CMD[CMD["BATTLE_REPORT_TEST"] = 10000] = "BATTLE_REPORT_TEST";
    })(CMD = proto.CMD || (proto.CMD = {}));
    ;
})(proto || (proto = {}));
(function (proto) {
    var StaticCwarTimeDataRes = (function (_super) {
        __extends(StaticCwarTimeDataRes, _super);
        function StaticCwarTimeDataRes() {
            var _this = _super.call(this, "StaticCwarTimeDataRes") || this;
            /**
             * 必须传
             */
            _this.userId = 0;
            /**
             * 可以传可以不传的
             */
            _this.userName = "";
            /**
             * 数组
             */
            _this.arr = [];
            return _this;
        }
        return StaticCwarTimeDataRes;
    }(proto.BaseProtoBuf));
    proto.StaticCwarTimeDataRes = StaticCwarTimeDataRes;
    __reflect(StaticCwarTimeDataRes.prototype, "proto.StaticCwarTimeDataRes");
})(proto || (proto = {}));
(function (proto) {
    var StaticCwarTimeDataReq = (function (_super) {
        __extends(StaticCwarTimeDataReq, _super);
        function StaticCwarTimeDataReq() {
            var _this = _super.call(this, "StaticCwarTimeDataReq") || this;
            /**
             * 必须传
             */
            _this.userId = 0;
            /**
             * 可以传可以不传的
             */
            _this.userName = "";
            /**
             * 数组
             */
            _this.arr = [];
            return _this;
        }
        return StaticCwarTimeDataReq;
    }(proto.BaseProtoBuf));
    proto.StaticCwarTimeDataReq = StaticCwarTimeDataReq;
    __reflect(StaticCwarTimeDataReq.prototype, "proto.StaticCwarTimeDataReq");
})(proto || (proto = {}));
(function (proto) {
    var StaticCwarTimeDataNotify = (function (_super) {
        __extends(StaticCwarTimeDataNotify, _super);
        function StaticCwarTimeDataNotify() {
            var _this = _super.call(this, "StaticCwarTimeDataNotify") || this;
            /**
             * 必须传
             */
            _this.userId = 0;
            /**
             * 可以传可以不传的
             */
            _this.userName = "";
            /**
             * 数组
             */
            _this.arr = [];
            return _this;
        }
        return StaticCwarTimeDataNotify;
    }(proto.BaseProtoBuf));
    proto.StaticCwarTimeDataNotify = StaticCwarTimeDataNotify;
    __reflect(StaticCwarTimeDataNotify.prototype, "proto.StaticCwarTimeDataNotify");
})(proto || (proto = {}));
(function (proto) {
    var user_login = (function (_super) {
        __extends(user_login, _super);
        function user_login() {
            var _this = _super.call(this, "user_login") || this;
            /**
             * 必须传
             */
            _this.userId = 0;
            /**
             * 可以传可以不传的
             */
            _this.userName = "";
            return _this;
        }
        return user_login;
    }(proto.BaseProtoBuf));
    proto.user_login = user_login;
    __reflect(user_login.prototype, "proto.user_login");
})(proto || (proto = {}));
(function (proto) {
    var StaticCwarTimeModel = (function (_super) {
        __extends(StaticCwarTimeModel, _super);
        function StaticCwarTimeModel() {
            var _this = _super.call(this, "StaticCwarTimeModel") || this;
            _this.bol = false;
            return _this;
        }
        return StaticCwarTimeModel;
    }(proto.BaseProtoBuf));
    proto.StaticCwarTimeModel = StaticCwarTimeModel;
    __reflect(StaticCwarTimeModel.prototype, "proto.StaticCwarTimeModel");
})(proto || (proto = {}));
(function (proto) {
    var StaticCwarTimeData = (function (_super) {
        __extends(StaticCwarTimeData, _super);
        function StaticCwarTimeData() {
            var _this = _super.call(this, "StaticCwarTimeData") || this;
            /**
             * 必须传
             */
            _this.userId = 0;
            return _this;
        }
        return StaticCwarTimeData;
    }(proto.BaseProtoBuf));
    proto.StaticCwarTimeData = StaticCwarTimeData;
    __reflect(StaticCwarTimeData.prototype, "proto.StaticCwarTimeData");
})(proto || (proto = {}));
(function (proto) {
    var BattleReportTestReq = (function (_super) {
        __extends(BattleReportTestReq, _super);
        function BattleReportTestReq() {
            var _this = _super.call(this, "BattleReportTestReq") || this;
            /**
             * 进攻方
             */
            _this.attackList = undefined;
            /**
             * 防守方
             */
            _this.defenseList = undefined;
            /**
             * 战斗行为
             */
            _this.ticks = [];
            return _this;
        }
        return BattleReportTestReq;
    }(proto.BaseProtoBuf));
    proto.BattleReportTestReq = BattleReportTestReq;
    __reflect(BattleReportTestReq.prototype, "proto.BattleReportTestReq");
})(proto || (proto = {}));
(function (proto) {
    var BattleReportTestRes = (function (_super) {
        __extends(BattleReportTestRes, _super);
        function BattleReportTestRes() {
            var _this = _super.call(this, "BattleReportTestRes") || this;
            /**
             * 进攻方
             */
            _this.attackList = undefined;
            /**
             * 防守方
             */
            _this.defenseList = undefined;
            /**
             * 战斗行为
             */
            _this.ticks = [];
            return _this;
        }
        return BattleReportTestRes;
    }(proto.BaseProtoBuf));
    proto.BattleReportTestRes = BattleReportTestRes;
    __reflect(BattleReportTestRes.prototype, "proto.BattleReportTestRes");
})(proto || (proto = {}));
(function (proto) {
    var BattleTick = (function (_super) {
        __extends(BattleTick, _super);
        function BattleTick() {
            var _this = _super.call(this, "BattleTick") || this;
            _this.tick = 0;
            _this.acts = [];
            return _this;
        }
        return BattleTick;
    }(proto.BaseProtoBuf));
    proto.BattleTick = BattleTick;
    __reflect(BattleTick.prototype, "proto.BattleTick");
})(proto || (proto = {}));
(function (proto) {
    var BattleAct = (function (_super) {
        __extends(BattleAct, _super);
        function BattleAct() {
            var _this = _super.call(this, "BattleAct") || this;
            _this.tick = 0;
            _this.id = null;
            _this.kind = 0;
            _this.target = null;
            _this.value = 0;
            _this.hp = 0;
            _this.skill = 0;
            _this.x = 0;
            return _this;
        }
        return BattleAct;
    }(proto.BaseProtoBuf));
    proto.BattleAct = BattleAct;
    __reflect(BattleAct.prototype, "proto.BattleAct");
})(proto || (proto = {}));
(function (proto) {
    var BattlePlayer = (function (_super) {
        __extends(BattlePlayer, _super);
        function BattlePlayer() {
            var _this = _super.call(this, "BattlePlayer") || this;
            /**
             * 用户id
             */
            _this.playerId = null;
            /**
             * 战斗单位id
             */
            _this.id = null;
            /**
             * npcId
             */
            _this.modelId = 0;
            /**
             * 1:进攻方2:防守方
             */
            _this.side = 0;
            /**
             * 最大血量
             */
            _this.maxHp = 0;
            /**
             * 当前血量
             */
            _this.hp = 0;
            /**
             * 技能组
             */
            _this.skills = [];
            /**
             * 移动速度
             */
            _this.speed = 0;
            /**
             * 敏捷
             */
            _this.agility = 0;
            /**
             * 横坐标
             */
            _this.x = 0;
            /**
             * 纵坐标
             */
            _this.y = 0;
            return _this;
        }
        return BattlePlayer;
    }(proto.BaseProtoBuf));
    proto.BattlePlayer = BattlePlayer;
    __reflect(BattlePlayer.prototype, "proto.BattlePlayer");
})(proto || (proto = {}));
(function (proto) {
    var BattleTeam = (function (_super) {
        __extends(BattleTeam, _super);
        function BattleTeam() {
            var _this = _super.call(this, "BattleTeam") || this;
            /**
             * 1进攻方2防守方
             */
            _this.side = 0;
            /**
             * 用户id
             */
            _this.playerId = null;
            /**
             * 战斗单位
             */
            _this.battleUnits = [];
            return _this;
        }
        return BattleTeam;
    }(proto.BaseProtoBuf));
    proto.BattleTeam = BattleTeam;
    __reflect(BattleTeam.prototype, "proto.BattleTeam");
})(proto || (proto = {}));
(function (proto) {
    var CmdResHash = (function () {
        function CmdResHash() {
        }
        CmdResHash.setup = function () {
            CmdResHash.obj[proto.CMD.STATIC_CWAR_TIME_DATA] = "StaticCwarTimeDataRes";
            CmdResHash.obj[proto.CMD.STATIC_CWAR_TIME_DATA_NOTIFY] = "StaticCwarTimeDataNotify";
            CmdResHash.obj[proto.CMD.BATTLE_REPORT_TEST] = "BattleReportTestRes";
        };
        CmdResHash.obj = {};
        return CmdResHash;
    }());
    proto.CmdResHash = CmdResHash;
    __reflect(CmdResHash.prototype, "proto.CmdResHash");
})(proto || (proto = {}));
//# sourceMappingURL=ProtoBuf.js.map