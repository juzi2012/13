module proto
{
	export enum CMD
	{
		NONE  = 0, 
		HEART_BEAT = 1, 
		BATTLE_REPORT_NOTIFY = 4, 
		LOGIN = 2001, //尝试客户端登陆
		CREATE_PLAYER = 2002, 
		STATIC_CWAR_TIME_DATA = 2003, 
		STATIC_CWAR_TIME_DATA_NOTIFY = 2005, 
		BATTLE_REPORT_TEST		= 10000
	};
}
module proto
{
	export class StaticCwarTimeDataRes extends BaseProtoBuf
	{
		/**
		 * 必须传
		 */
		public userId:number = 0;
		/**
		 * 可以传可以不传的
		 */
		public userName:string = "";
		/**
		 * 数组
		 */
		public arr:Array<number> = [];

		public constructor()
		{
			super("StaticCwarTimeDataRes");
		}
	}
}
module proto
{
	export class StaticCwarTimeDataReq extends BaseProtoBuf
	{
		/**
		 * 必须传
		 */
		public userId:number = 0;
		/**
		 * 可以传可以不传的
		 */
		public userName:string = "";
		/**
		 * 数组
		 */
		public arr:Array<number> = [];

		public constructor()
		{
			super("StaticCwarTimeDataReq");
		}
	}
}
module proto
{
	export class StaticCwarTimeDataNotify extends BaseProtoBuf
	{
		/**
		 * 必须传
		 */
		public userId:number = 0;
		/**
		 * 可以传可以不传的
		 */
		public userName:string = "";
		/**
		 * 数组
		 */
		public arr:Array<number> = [];

		public constructor()
		{
			super("StaticCwarTimeDataNotify");
		}
	}
}
module proto
{
	export class user_login extends BaseProtoBuf
	{
		/**
		 * 必须传
		 */
		public userId:number = 0;
		/**
		 * 可以传可以不传的
		 */
		public userName:string = "";

		public constructor()
		{
			super("user_login");
		}
	}
}
module proto
{
	export class StaticCwarTimeModel extends BaseProtoBuf
	{
		public bol:boolean = false;

		public constructor()
		{
			super("StaticCwarTimeModel");
		}
	}
}
module proto
{
	export class StaticCwarTimeData extends BaseProtoBuf
	{
		/**
		 * 必须传
		 */
		public userId:number = 0;

		public constructor()
		{
			super("StaticCwarTimeData");
		}
	}
}
module proto
{
	export class BattleReportTestReq extends BaseProtoBuf
	{
		/**
		 * 进攻方
		 */
		public attackList:BattleTeam = undefined;
		/**
		 * 防守方
		 */
		public defenseList:BattleTeam = undefined;
		/**
		 * 战斗行为
		 */
		public ticks:Array<BattleTick> = [];

		public constructor()
		{
			super("BattleReportTestReq");
		}
	}
}
module proto
{
	export class BattleReportTestRes extends BaseProtoBuf
	{
		/**
		 * 进攻方
		 */
		public attackList:BattleTeam = undefined;
		/**
		 * 防守方
		 */
		public defenseList:BattleTeam = undefined;
		/**
		 * 战斗行为
		 */
		public ticks:Array<BattleTick> = [];

		public constructor()
		{
			super("BattleReportTestRes");
		}
	}
}
module proto
{
	export class BattleTick extends BaseProtoBuf
	{
		public tick:number = 0;
		public acts:Array<BattleAct> = [];

		public constructor()
		{
			super("BattleTick");
		}
	}
}
module proto
{
	export class BattleAct extends BaseProtoBuf
	{
		public tick:number = 0;
		public id:Long = null;
		public kind:number = 0;
		public target:Long = null;
		public value:number = 0;
		public hp:number = 0;
		public skill:number = 0;
		public x:number = 0;

		public constructor()
		{
			super("BattleAct");
		}
	}
}
module proto
{
	export class BattlePlayer extends BaseProtoBuf
	{
		/**
		 * 用户id
		 */
		public playerId:Long = null;
		/**
		 * 战斗单位id
		 */
		public id		:Long = null;
		/**
		 * npcId
		 */
		public modelId:number = 0;
		/**
		 * 1:进攻方2:防守方
		 */
		public side:number = 0;
		/**
		 * 最大血量
		 */
		public maxHp	:number = 0;
		/**
		 * 当前血量
		 */
		public hp		:number = 0;
		/**
		 * 技能组
		 */
		public skills:Array<number> = [];
		/**
		 * 移动速度
		 */
		public speed:number = 0;
		/**
		 * 敏捷
		 */
		public agility:number = 0;
		/**
		 * 横坐标
		 */
		public x:number = 0;
		/**
		 * 纵坐标
		 */
		public y:number = 0;

		public constructor()
		{
			super("BattlePlayer");
		}
	}
}
module proto
{
	export class BattleTeam extends BaseProtoBuf
	{
		/**
		 * 1进攻方2防守方
		 */
		public side:number = 0;
		/**
		 * 用户id
		 */
		public playerId:Long = null;
		/**
		 * 战斗单位
		 */
		public battleUnits:Array<BattlePlayer> = [];

		public constructor()
		{
			super("BattleTeam");
		}
	}
}
module proto
{
	export class CmdResHash
	{
		public static obj:Object = {};
		public static setup():void 
		{
			CmdResHash.obj[CMD.STATIC_CWAR_TIME_DATA] = "StaticCwarTimeDataRes";
			CmdResHash.obj[CMD.STATIC_CWAR_TIME_DATA_NOTIFY] = "StaticCwarTimeDataNotify";
			CmdResHash.obj[CMD.BATTLE_REPORT_TEST] = "BattleReportTestRes";
		}
	}
}