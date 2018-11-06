// TypeScript file

class RegModuleTask{     
    public constructor() {
        this.exec();
    }

    private exec():void{
        if(DEBUG){
            this.checkHasSameId();
        }
        this.regModule(ModuleEnum.PRELOADING, LayerEnum.SCENE, game.PreLoadingModule, []);
        this.regModule(ModuleEnum.LOADING, LayerEnum.SCENE, game.LoadingModule, []);
        this.regModule(ModuleEnum.TEST, LayerEnum.SCENE, game.TESTModule, []);
        this.regModule(ModuleEnum.GAME_MAIN, LayerEnum.SCENE, game.GameMainModule, []);
        this.regModule(ModuleEnum.MAIL, LayerEnum.POPUP, game.MailModule, []);
        this.regModule(ModuleEnum.MAIL_DETAIL, LayerEnum.POPUP, game.MailDetailModule, []);
        this.regModule(ModuleEnum.NOTICE, LayerEnum.POPUP, game.NoticeModule, []);
        this.regModule(ModuleEnum.KEFU, LayerEnum.POPUP, game.KeFuModule, []);
        this.regModule(ModuleEnum.ZHANJI, LayerEnum.POPUP, game.ZhanJiModule, []);
        this.regModule(ModuleEnum.ZHANJIDETAIL, LayerEnum.POPUP, game.ZhanJiDetailModule, []);
        this.regModule(ModuleEnum.RANK, LayerEnum.POPUP, game.RankModule, []);
        this.regModule(ModuleEnum.ACTIVITY, LayerEnum.POPUP, game.ActivityModule, []);
        this.regModule(ModuleEnum.JOINROOM, LayerEnum.POPUP, game.JoinRoomModule, []);
        this.regModule(ModuleEnum.CREATE_ROOM, LayerEnum.POPUP, game.CreateRoomModule, []);
        this.regModule(ModuleEnum.BUY_CARD, LayerEnum.POPUP, game.BuyCardModule, []);
        this.regModule(ModuleEnum.SETTING, LayerEnum.POPUP, game.SettingModule, []);
        this.regModule(ModuleEnum.SHUOMING, LayerEnum.POPUP, game.ShuoMingModule, []);
        this.regModule(ModuleEnum.GAME, LayerEnum.SCENE, game.Game, []);
        this.regModule(ModuleEnum.GAME_PUT_PORK, LayerEnum.POPUP, game.PutPorkModule, []);
        this.regModule(ModuleEnum.GAME_HELP, LayerEnum.POPUP, game.GameHelpModule, []);
        this.regModule(ModuleEnum.GAME_SINGLE_RESULT, LayerEnum.POPUP, game.SingleResultModule, []);
        this.regModule(ModuleEnum.GAME_ALL_RESULT, LayerEnum.SCENE, game.AllResultModule, []);

        this.regModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY, LayerEnum.POPUP, game.SingleResultPlayModule, []);
        this.regModule(ModuleEnum.GAME_ALL_RESULT_PLAY, LayerEnum.SCENE, game.AllResultPlayModule, []);

        this.regModule(ModuleEnum.DISSOLVE_ROOM, LayerEnum.TOP, game.DissolveRoomModule, []);
        this.regModule(ModuleEnum.ALERT, LayerEnum.TOP, game.AlertModule, []);
        this.regModule(ModuleEnum.FLOAT, LayerEnum.TOP, game.FloatMsgModule, []);
        this.regModule(ModuleEnum.CHAT, LayerEnum.POPUP, game.ChatModule, []);
        this.regModule(ModuleEnum.USERINFO, LayerEnum.POPUP, game.UserInfoPanel, []);
        this.regModule(ModuleEnum.REPLAY, LayerEnum.SCENE, game.GameReplay, []);
        this.regModule(ModuleEnum.TESTPORK, LayerEnum.POPUP, game.TestPorkModule, []);
        this.regModule(ModuleEnum.BOFANGMA, LayerEnum.POPUP, game.ChaKanMaPanel, []);
        this.regModule(ModuleEnum.JIESANSORT, LayerEnum.POPUP, game.JieSanSort, []);
        this.regModule(ModuleEnum.CHARGE, LayerEnum.POPUP, game.ChargeModule, []);
        
    }

    private regModule(moduleId:ModuleEnum, layerKind:LayerEnum, moduleCls:any, groups:string[] = null):ModuleConfigVo
    {
        var config:ModuleConfigVo = new ModuleConfigVo();
        config.moduleId = moduleId;
        config.layerKind = layerKind;
        config.moduleCls = moduleCls;
        config.groupNames = groups;
        switch(layerKind){
            case LayerEnum.SCENE:
                config.setIsAutoSize(true);
                break;
            case LayerEnum.UI:
                config.setIsAutoSize(true);
                break;
            case LayerEnum.STATIC:
                config.setIsAutoSize(false);
                config.setDisposeWhenClose(false);
                break;
            case LayerEnum.POPUP:
                config.setIsAutoSize(true);
                config.setShowCover(true);
                break;
            case LayerEnum.TOP:
                config.setIsAutoSize(true);
                break;
        }
        ModuleMgr.ins.regModule(config);
        return config;
    }

    //检查功能id是否有重复的内容
    private checkHasSameId():void{
        if(DEBUG){
            var valueList:number[] = [];
            for(var key in ModuleEnum){
                var keyNumber:number = Number(key);
                if(isNaN(keyNumber) == false){
                }else{
                    var value:number = Number(ModuleEnum[key]);
                    var index:number = valueList.indexOf(value);
                    if(index >= 0){
                        throw new Error(`重复的功能Id:${key}:${value}`);
                    }else{
                        valueList.push(value);
                    }
                }
            }
        }
    }
    
}