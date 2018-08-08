var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var MsgEnum = (function () {
        function MsgEnum() {
        }
        MsgEnum.FLOAT_MSG = "FLOAT_MSG";
        MsgEnum.UPDATE_MYINFO = "UPDATE_MYINFO";
        MsgEnum.CREATE_ROOM = "CREATE_ROOM";
        // static ENTER_ROOM:string="ENTER_ROOM";
        MsgEnum.NEW_UESR_IN = "NEW_UESR_IN"; //一个新的用户进到房间
        MsgEnum.NEW_UESR_OUT = "NEW_UESR_OUT"; //一个新的用户退出房间
        MsgEnum.NEW_UESR_READY = "NEW_UESR_READY"; //一个玩家准备
        MsgEnum.NEW_UESR_READY_CANCEL = "NEW_UESR_READY_CANCEL"; //一个玩家取消准备
        MsgEnum.GAME_USER_DIAOXIAN = "GAME_USER_DIAOXIAN"; //玩家掉线
        MsgEnum.GAME_USER_DIAOXIAN_BACK = "GAME_USER_DIAOXIAN_BACK"; //玩家掉线 重进来了
        MsgEnum.GAME_FAPAI = "GAME_FAPAI"; //发牌
        MsgEnum.GAME_BAIPAI = "GAME_BAIPAI"; //摆牌
        MsgEnum.GAME_SINGLE_RESULT = "GAME_SINGLE_RESULT"; //单局结算
        MsgEnum.GAME_RESTART = "GAME_RESTART"; //重新开始
        MsgEnum.GAME_BEGIN_RESTART = "GAME_BEGIN_RESTART"; //重新开始
        MsgEnum.GAME_CHECK_SINGLE = "GAME_CHECK_SINGLE"; //重新开始
        MsgEnum.GAME_ASKFOR_DISMISS = "GAME_ASKFOR_DISMISS"; //申请解散
        MsgEnum.GAME_ANSWER_FOR_DISMISS = "GAME_ANSWER_FOR_DISMISS"; //其他玩家解散反馈
        MsgEnum.GAME_ANSWER_FAILED = "GAME_ANSWER_FAILED"; //玩家解散失败
        MsgEnum.GAME_CHAT = "GAME_CHAT"; //聊天
        MsgEnum.STOP_PLAY_MUSIC = "STOP_PLAY_MUSIC"; //
        MsgEnum.STOP_PLAY_SOUND = "STOP_PLAY_SOUND"; //
        MsgEnum.PLAY_NEXT = "PLAY_NEXT"; //回放下一个
        return MsgEnum;
    }());
    game.MsgEnum = MsgEnum;
    __reflect(MsgEnum.prototype, "game.MsgEnum");
})(game || (game = {}));
//# sourceMappingURL=MsgEnum.js.map