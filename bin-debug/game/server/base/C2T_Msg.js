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
var MsgType;
(function (MsgType) {
    MsgType[MsgType["Login"] = 1001] = "Login";
    MsgType[MsgType["CreateRoom"] = 2003] = "CreateRoom";
    MsgType[MsgType["EnterRooom"] = 2001] = "EnterRooom";
    MsgType[MsgType["LeaveRoom"] = 2002] = "LeaveRoom";
    MsgType[MsgType["Ready"] = 2004] = "Ready";
    MsgType[MsgType["ReadyCancel"] = 2005] = "ReadyCancel";
    MsgType[MsgType["GameStart"] = 2006] = "GameStart";
    MsgType[MsgType["BaiPai"] = 2007] = "BaiPai";
    MsgType[MsgType["JieSuan_Single"] = 2009] = "JieSuan_Single";
    MsgType[MsgType["JieSuan_All"] = 2010] = "JieSuan_All";
    MsgType[MsgType["KickOut"] = 2011] = "KickOut";
    MsgType[MsgType["ReConnect"] = 2012] = "ReConnect";
    MsgType[MsgType["GameReStart"] = 2013] = "GameReStart";
    MsgType[MsgType["AskForDismiss"] = 2014] = "AskForDismiss";
    MsgType[MsgType["AnswerForDismiss"] = 2015] = "AnswerForDismiss";
    MsgType[MsgType["RoomDismiss"] = 2016] = "RoomDismiss";
    MsgType[MsgType["PlayerDisConnect"] = 2017] = "PlayerDisConnect";
    MsgType[MsgType["PlayerInAfterDisConnect"] = 2018] = "PlayerInAfterDisConnect";
    MsgType[MsgType["Chat"] = 2019] = "Chat";
    MsgType[MsgType["UpdateMyInfo"] = 2028] = "UpdateMyInfo";
})(MsgType || (MsgType = {}));
var C2T_Message_CreateRoom = (function () {
    function C2T_Message_CreateRoom() {
    }
    return C2T_Message_CreateRoom;
}());
__reflect(C2T_Message_CreateRoom.prototype, "C2T_Message_CreateRoom");
var C2T_Message_EnterRoom = (function () {
    function C2T_Message_EnterRoom() {
    }
    return C2T_Message_EnterRoom;
}());
__reflect(C2T_Message_EnterRoom.prototype, "C2T_Message_EnterRoom");
var C2T_Message_BaiPai = (function () {
    function C2T_Message_BaiPai() {
    }
    return C2T_Message_BaiPai;
}());
__reflect(C2T_Message_BaiPai.prototype, "C2T_Message_BaiPai");
var C2T_Message_AskForDismiss = (function () {
    function C2T_Message_AskForDismiss() {
    }
    return C2T_Message_AskForDismiss;
}());
__reflect(C2T_Message_AskForDismiss.prototype, "C2T_Message_AskForDismiss");
var C2T_Message_AnswerForDismiss = (function () {
    function C2T_Message_AnswerForDismiss() {
    }
    return C2T_Message_AnswerForDismiss;
}());
__reflect(C2T_Message_AnswerForDismiss.prototype, "C2T_Message_AnswerForDismiss");
var C2T_Chat = (function () {
    function C2T_Chat() {
        this.times = "1536840416000";
        this.type = 0; //0 普通聊天 1 鲜花砸蛋
    }
    return C2T_Chat;
}());
__reflect(C2T_Chat.prototype, "C2T_Chat");
var C2T_Msg = (function (_super) {
    __extends(C2T_Msg, _super);
    function C2T_Msg() {
        return _super.call(this) || this;
    }
    return C2T_Msg;
}(C2T_Base));
__reflect(C2T_Msg.prototype, "C2T_Msg");
//# sourceMappingURL=C2T_Msg.js.map