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
var T2C_UpdateMyInfo = (function (_super) {
    __extends(T2C_UpdateMyInfo, _super);
    function T2C_UpdateMyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2C_UpdateMyInfo;
}(T2C_Message_Base));
__reflect(T2C_UpdateMyInfo.prototype, "T2C_UpdateMyInfo");
var T2C_Enter_Room = (function (_super) {
    __extends(T2C_Enter_Room, _super);
    function T2C_Enter_Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_Enter_Room.prototype.execute = function (msg) {
        this.fname = msg['fname'];
        this.fuid = msg['fuid'];
        this.rid = msg['rid'];
        this.gps = msg['gps'];
        this.rinfo = msg['rinfo'];
        this.users = msg['users'];
        this.zuid = msg['zuid'];
    };
    return T2C_Enter_Room;
}(T2C_Message_Base));
__reflect(T2C_Enter_Room.prototype, "T2C_Enter_Room");
var T2C_Create_Room = (function (_super) {
    __extends(T2C_Create_Room, _super);
    function T2C_Create_Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2C_Create_Room;
}(T2C_Message_Base));
__reflect(T2C_Create_Room.prototype, "T2C_Create_Room");
var T2C_Leave_Room = (function (_super) {
    __extends(T2C_Leave_Room, _super);
    function T2C_Leave_Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2C_Leave_Room;
}(T2C_Message_Base));
__reflect(T2C_Leave_Room.prototype, "T2C_Leave_Room");
var T2C_Ready = (function (_super) {
    __extends(T2C_Ready, _super);
    function T2C_Ready() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2C_Ready;
}(T2C_Message_Base));
__reflect(T2C_Ready.prototype, "T2C_Ready");
var T2C_GameStart = (function (_super) {
    __extends(T2C_GameStart, _super);
    function T2C_GameStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2C_GameStart;
}(T2C_Message_Base));
__reflect(T2C_GameStart.prototype, "T2C_GameStart");
var T2C_BaiPai = (function (_super) {
    __extends(T2C_BaiPai, _super);
    function T2C_BaiPai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return T2C_BaiPai;
}(T2C_Message_Base));
__reflect(T2C_BaiPai.prototype, "T2C_BaiPai");
var T2C_JieSuanAll = (function (_super) {
    __extends(T2C_JieSuanAll, _super);
    function T2C_JieSuanAll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_JieSuanAll.prototype.execute = function (msg) {
        this.et = msg["et"];
        this.sc = msg["sc"];
    };
    return T2C_JieSuanAll;
}(T2C_Message_Base));
__reflect(T2C_JieSuanAll.prototype, "T2C_JieSuanAll");
var T2C_JieSuanSingle = (function (_super) {
    __extends(T2C_JieSuanSingle, _super);
    function T2C_JieSuanSingle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_JieSuanSingle.prototype.execute = function (msg) {
        this.bp = msg["bp"];
        this.sc = msg["sc"];
    };
    return T2C_JieSuanSingle;
}(T2C_Message_Base));
__reflect(T2C_JieSuanSingle.prototype, "T2C_JieSuanSingle");
var T2C_ReConnect = (function (_super) {
    __extends(T2C_ReConnect, _super);
    function T2C_ReConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_ReConnect.prototype.execute = function (msg) {
        this.dealer = msg['dealer'];
        this.fname = msg['fname'];
        this.fuid = msg['fuid'];
        this.js = msg['js'];
        this.jt = msg['jt'];
        this.ju = msg['ju'];
        this.of = msg['of'];
        this.rid = msg['rid'];
        this.rinfo = msg['rinfo'];
        this.users = msg['users'];
        this.status = msg['status'];
    };
    return T2C_ReConnect;
}(T2C_Message_Base));
__reflect(T2C_ReConnect.prototype, "T2C_ReConnect");
var T2C_DiaoXian = (function (_super) {
    __extends(T2C_DiaoXian, _super);
    function T2C_DiaoXian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_DiaoXian.prototype.execute = function (msg) {
        this.name = msg["name"];
        this.uid = msg["uid"];
    };
    return T2C_DiaoXian;
}(T2C_Message_Base));
__reflect(T2C_DiaoXian.prototype, "T2C_DiaoXian");
var T2C_DiaoXian_Back = (function (_super) {
    __extends(T2C_DiaoXian_Back, _super);
    function T2C_DiaoXian_Back() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_DiaoXian_Back.prototype.execute = function (msg) {
        this.name = msg["name"];
        this.uid = msg["uid"];
    };
    return T2C_DiaoXian_Back;
}(T2C_Message_Base));
__reflect(T2C_DiaoXian_Back.prototype, "T2C_DiaoXian_Back");
var T2C_AskForDismiss = (function (_super) {
    __extends(T2C_AskForDismiss, _super);
    function T2C_AskForDismiss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_AskForDismiss.prototype.execute = function (msg) {
        this.name = msg["name"];
        this.uid = msg["uid"];
        this.time = msg["time"];
    };
    return T2C_AskForDismiss;
}(T2C_Message_Base));
__reflect(T2C_AskForDismiss.prototype, "T2C_AskForDismiss");
var T2C_AnswerForDismiss = (function (_super) {
    __extends(T2C_AnswerForDismiss, _super);
    function T2C_AnswerForDismiss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_AnswerForDismiss.prototype.execute = function (msg) {
        this.uid = msg["uid"];
        this.act = msg["act"];
    };
    return T2C_AnswerForDismiss;
}(T2C_Message_Base));
__reflect(T2C_AnswerForDismiss.prototype, "T2C_AnswerForDismiss");
var T2C_Chat = (function (_super) {
    __extends(T2C_Chat, _super);
    function T2C_Chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2C_Chat.prototype.execute = function (msg) {
        this.uid = msg["uid"];
        this.uname = msg["uname"];
        this.str = msg["str"];
        this.time = msg["time"];
        this.times = msg["times"];
        this.type = msg["type"];
    };
    return T2C_Chat;
}(T2C_Message_Base));
__reflect(T2C_Chat.prototype, "T2C_Chat");
var T2C_Msg = (function (_super) {
    __extends(T2C_Msg, _super);
    function T2C_Msg() {
        var _this = _super.call(this) || this;
        _this.Msg = new T2C_Message_Base();
        return _this;
    }
    T2C_Msg.prototype.execute = function (data) {
        _super.prototype.execute.call(this, data);
        if (this.Err == '') {
            if (this.Aid == MsgType.UpdateMyInfo) {
                this.Msg = new T2C_UpdateMyInfo();
            }
            else if (this.Aid == MsgType.EnterRooom) {
                this.Msg = new T2C_Enter_Room();
            }
            else if (this.Aid == MsgType.CreateRoom) {
                this.Msg = new T2C_Create_Room();
            }
            else if (this.Aid == MsgType.LeaveRoom) {
                this.Msg = new T2C_Leave_Room();
            }
            else if (this.Aid == MsgType.Ready) {
                this.Msg = new T2C_Ready();
            }
            else if (this.Aid == MsgType.ReadyCancel) {
                this.Msg = new T2C_Ready();
            }
            else if (this.Aid == MsgType.GameStart) {
                this.Msg = new T2C_GameStart();
            }
            else if (this.Aid == MsgType.BaiPai) {
                this.Msg = new T2C_BaiPai();
            }
            else if (this.Aid == MsgType.JieSuan_Single) {
                this.Msg = new T2C_JieSuanSingle();
            }
            else if (this.Aid == MsgType.JieSuan_All) {
                this.Msg = new T2C_JieSuanAll();
            }
            else if (this.Aid == MsgType.ReConnect) {
                this.Msg = new T2C_ReConnect();
            }
            else if (this.Aid == MsgType.PlayerDisConnect) {
                this.Msg = new T2C_DiaoXian();
            }
            else if (this.Aid == MsgType.PlayerInAfterDisConnect) {
                this.Msg = new T2C_DiaoXian_Back();
            }
            else if (this.Aid == MsgType.AskForDismiss) {
                this.Msg = new T2C_AskForDismiss();
            }
            else if (this.Aid == MsgType.AnswerForDismiss) {
                this.Msg = new T2C_AnswerForDismiss();
            }
            else if (this.Aid == MsgType.Chat) {
                this.Msg = new T2C_Chat();
            }
            else {
                this.Msg = new T2C_Message_Base();
            }
            this.Msg.execute(data.Msg);
            App.Socket.dispatchCmd(this.Aid, this.Msg);
        }
        else {
            App.MessageCenter.dispatch(game.MsgEnum.FLOAT_MSG, this.Err, this.Aid);
            if (this.Aid == MsgType.EnterRooom) {
                App.MessageCenter.dispatch(game.MsgEnum.ENTER_ROOM_FAILD);
            }
        }
    };
    return T2C_Msg;
}(T2C_Base));
__reflect(T2C_Msg.prototype, "T2C_Msg");
window["T2C_Msg"] = T2C_Msg;
//# sourceMappingURL=T2C_Msg.js.map