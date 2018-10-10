module game {
	export class MsgEnum{
		static FLOAT_MSG:string="FLOAT_MSG";

		static UPDATE_MYINFO:string="UPDATE_MYINFO";
		static CREATE_ROOM:string="CREATE_ROOM";
		static ENTER_ROOM_FAILD:string="ENTER_ROOM_FAILD";

		static NEW_UESR_IN:string="NEW_UESR_IN";//一个新的用户进到房间
		static NEW_UESR_OUT:string="NEW_UESR_OUT";//一个新的用户退出房间
		static NEW_UESR_READY:string="NEW_UESR_READY";//一个玩家准备
		static NEW_UESR_READY_CANCEL:string="NEW_UESR_READY_CANCEL";//一个玩家取消准备
		static GAME_USER_DIAOXIAN:string="GAME_USER_DIAOXIAN";//玩家掉线
		static GAME_USER_DIAOXIAN_BACK:string="GAME_USER_DIAOXIAN_BACK";//玩家掉线 重进来了

		static GAME_FAPAI:string="GAME_FAPAI";//发牌
		static GAME_BAIPAI:string="GAME_BAIPAI";//摆牌
		static GAME_SINGLE_RESULT:string="GAME_SINGLE_RESULT";//单局结算
		static GAME_RESTART:string="GAME_RESTART";//重新开始
		static GAME_BEGIN_RESTART:string="GAME_BEGIN_RESTART";//重新开始
		static GAME_CHECK_SINGLE:string="GAME_CHECK_SINGLE";//重新开始
		static GAME_ASKFOR_DISMISS:string="GAME_ASKFOR_DISMISS";//申请解散
		static GAME_ANSWER_FOR_DISMISS:string="GAME_ANSWER_FOR_DISMISS";//其他玩家解散反馈
		static GAME_ANSWER_FAILED:string="GAME_ANSWER_FAILED";//玩家解散失败

		static GAME_CHAT:string="GAME_CHAT";//聊天
		static GAME_FLOWER:string="GAME_FLOWER";//鲜花鸡蛋

		static STOP_PLAY_MUSIC:string="STOP_PLAY_MUSIC";//
		static STOP_PLAY_SOUND:string="STOP_PLAY_SOUND";//
		static CHANGE_BG:string="CHANGE_BG";//

		static PLAY_NEXT:string="PLAY_NEXT";//回放下一个
	}
}
