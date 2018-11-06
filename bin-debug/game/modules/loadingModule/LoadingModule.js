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
var game;
(function (game) {
    var LoadingModule = (function (_super) {
        __extends(LoadingModule, _super);
        function LoadingModule() {
            return _super.call(this) || this;
        }
        // private loadingBar:UI.Loading.UI_LoadingModule;
        LoadingModule.prototype.initContent = function () {
            this.content = UI.Loading.UI_LoadingModule.createInstance();
        };
        Object.defineProperty(LoadingModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        LoadingModule.prototype.preShow = function (data) {
            this.mContent.m_btn_start.visible = false;
            this.mContent.m_txt.visible = false;
            this.preShowCpl();
        };
        LoadingModule.prototype.show = function (data) {
            // this.loadingBar = UI.Loading.UI_LoadingModule.createInstance() as UI.Loading.UI_LoadingModule;
            // this.loadingBar.x = App.StageUtils.getWidth()/2-this.loadingBar.width/2;
            // this.loadingBar.y = App.StageUtils.getHeight()-200;
            // this.mContent.addChild(this.loadingBar);
            // 121.40.23.6
            // 118.24.105.180
            this.mContent.m_bar.value = 0;
            this.mContent.m_bar.visible = false;
            this.mContent.m_img.visible = false;
            this.mContent.m_txt_name.requestFocus();
            App.Socket.connect(core.Handler.create(this, this.onServerConnected));
            // this.onServerConnected();
            console.log(fairygui.GRoot.inst.width);
            console.log(window.innerWidth);
            console.log(fairygui.GRoot.inst.height);
            console.log(window.innerHeight);
            // console.log(LayerCenter.Instance.stage.height)
            setDivOri(window.innerWidth, window.innerHeight);
            _super.prototype.show.call(this, data);
        };
        LoadingModule.prototype.onServerConnected = function () {
            // RES.getResByUrl("https://cdn-ns-studio.gtarcade.com/product-160/cdn1/st/assets/common/modules/foundations/mainToolbar/icons/icons_small/96040.png", (data) =>
            // {
            // 	var bmp = new egret.Bitmap(data);
            // 	this.mContent.displayListContainer.addChild(bmp);
            // }, this, RES.ResourceItem.TYPE_IMAGE);
            if (App.GlobalData.IsDebug == false) {
                App.Socket.addCmdListener(MsgType.Login, core.Handler.create(this, this.loginCallBack));
                var loginMsg = new C2T_Login();
                loginMsg.Msg.name = game.OptModel.ins.name; //App.MathUtils.random(1,1000);
                loginMsg.Msg.wid = game.OptModel.ins.token; //"12345"+App.MathUtils.random(1,1000);
                loginMsg.Msg.mid = App.MathUtils.random(1, 1000000).toString();
                loginMsg.Msg.head = game.OptModel.ins.head;
                loginMsg.Msg.chid = game.OptModel.ins.channelId;
                App.Socket.send(loginMsg);
            }
            else {
                this.mContent.m_btn_start.visible = true;
                this.mContent.m_txt.visible = true;
                this.mContent.m_btn_start.addClickListener(this.doStart, this);
            }
            // this.mContent.m_txt_name.text="t1";
            // this.doStart()
            //  let imageLoader: egret.ImageLoader = new egret.ImageLoader();
            // imageLoader.crossOrigin = "anonymous";
            // imageLoader.addEventListener(egret.Event.COMPLETE, function (event: egret.Event) {
            // 	let  imageLoader = <egret.ImageLoader>event.currentTarget;
            // }, this);
            // imageLoader.load('http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg');
            // egret.ImageLoader.crossOrigin = "anonymous"; 
            // RES.getResByUrl('http://bbs.egret.com/static/image/smiley/qita/17.jpg',this.loaded,this,RES.ResourceItem.TYPE_IMAGE)
        };
        LoadingModule.prototype.loaded = function () {
            console.log(111);
        };
        LoadingModule.prototype.doStart = function () {
            if (this.mContent.m_txt_name.text != "") {
                this.mContent.m_btn_start.visible = false;
                this.mContent.m_txt.visible = false;
                this.mContent.m_bar.visible = true;
                this.mContent.m_img.visible = true;
                this.uid = this.mContent.m_txt_name.text;
                App.Socket.addCmdListener(MsgType.Login, core.Handler.create(this, this.loginCallBack));
                var loginMsg = new C2T_Login();
                loginMsg.Msg.name = this.uid; //App.MathUtils.random(1,1000);
                loginMsg.Msg.wid = this.uid; //"12345"+App.MathUtils.random(1,1000);
                loginMsg.Msg.mid = App.MathUtils.random(1, 1000).toString();
                loginMsg.Msg.head = "http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
                loginMsg.Msg.chid = "";
                App.Socket.send(loginMsg);
            }
        };
        LoadingModule.prototype.loginCallBack = function (msg) {
            this.mContent.m_bar.visible = true;
            this.mContent.m_img.visible = true;
            App.Socket.removeCmdListener(MsgType.Login, this.loginCallBack);
            game.ServerEngine.addSocketListener();
            RES.loadGroup("game", 0, this);
            //监听是不是退出的会重新回到游戏
            App.Socket.addCmdListener(MsgType.ReConnect, core.Handler.create(this, this.reConnectCallBack));
            game.ServerEngine.sendBeart();
        };
        LoadingModule.prototype.reConnectCallBack = function (msg) {
            game.GameModel.ins.setReConnectInfo(msg);
        };
        LoadingModule.prototype.onProgress = function (current, total) {
            this.mContent.m_img.x = this.mContent.m_bar.x - 5 + (current / total) * (this.mContent.m_bar.width - 80);
            this.mContent.m_bar.max = total;
            this.mContent.m_bar.value = current;
            if (current == total) {
                this.startGame();
            }
        };
        LoadingModule.prototype.startGame = function () {
            game.SettingModel.ins.init();
            fairygui.UIPackage.addPackage("Base");
            fairygui.UIPackage.addPackage("MainUI");
            fairygui.UIPackage.addPackage("Mail");
            fairygui.UIPackage.addPackage("Kefu");
            fairygui.UIPackage.addPackage("Notice");
            fairygui.UIPackage.addPackage("ZhanJi");
            fairygui.UIPackage.addPackage("Activity");
            fairygui.UIPackage.addPackage("AddRoom");
            fairygui.UIPackage.addPackage("CreateRoom");
            fairygui.UIPackage.addPackage("BuyCard");
            fairygui.UIPackage.addPackage("Setting");
            fairygui.UIPackage.addPackage("ShuoMing");
            fairygui.UIPackage.addPackage("Game");
            fairygui.UIPackage.addPackage("Bg1");
            fairygui.UIPackage.addPackage("Bg2");
            fairygui.UIPackage.addPackage("Bg3");
            fairygui.UIPackage.addPackage("Bg4");
            fairygui.UIPackage.addPackage("MainBg");
            fairygui.UIPackage.addPackage("PutPorkBg");
            fairygui.UIPackage.addPackage("GameHelper");
            fairygui.UIPackage.addPackage("Rank");
            fairygui.UIPackage.addPackage("Result");
            fairygui.UIPackage.addPackage("Charge");
            fairygui.UIPackage.addPackage("TestPork");
            // ModuleMgr.ins.closeModule(ModuleEnum.LOADING);
            ModuleMgr.ins.showModule(ModuleEnum.FLOAT);
            // ModuleMgr.ins.showModule(ModuleEnum.TESTPORK);
            console.log("-----shareRoomId" + game.OptModel.ins.shareRoomId);
            console.log("-----shareRePlayRoomId" + game.OptModel.ins.shareRePlayRoomId);
            if (game.GameModel.ins.roomModel != null && game.GameModel.ins.roomModel.isReConnectInRoom) {
                ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.GAME);
            }
            else if (game.OptModel.ins.shareRoomId != null && game.OptModel.ins.shareUserId != game.GameModel.ins.uid) {
                game.ServerEngine.enterRoom(game.OptModel.ins.shareRoomId);
                App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_IN, this.enterRoomCallBack, this);
                App.MessageCenter.addListener(game.MsgEnum.ENTER_ROOM_FAILD, this.enterRoomFaild, this);
            }
            else if (game.OptModel.ins.shareRePlayRoomId != null) {
                HttpAPI.HttpGET("http://" + App.GlobalData.SocketServer + ":8883/huifang", { 'uid': game.GameModel.ins.uid, 'id': game.OptModel.ins.shareRePlayRoomId }, this.onCallBack, this.onError, this);
            }
            else {
                ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.GAME_MAIN, []);
            }
            // GameModel.ins.createRoundTest();
            // ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK,[]);
            //拿取地理位置
            game.LocationModel.ins.getJsLocation();
        };
        LoadingModule.prototype.enterRoomCallBack = function (user) {
            if (user.uid == game.GameModel.ins.uid) {
                App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_IN, this.enterRoomCallBack, this);
                ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.GAME);
            }
        };
        LoadingModule.prototype.enterRoomFaild = function () {
            ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.GAME_MAIN, []);
        };
        LoadingModule.prototype.onCallBack = function (evt) {
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.data == null) {
                game.AlertUtil.floatMsg(callBackJson.err);
                ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.GAME_MAIN, []);
            }
            else {
                var data = JSON.parse(callBackJson.data['msg']);
                var round = new game.Round();
                round.init(data);
                ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.REPLAY, round);
            }
        };
        LoadingModule.prototype.onError = function (evt) {
            ModuleMgr.ins.changeScene(ModuleEnum.LOADING, ModuleEnum.GAME_MAIN, []);
        };
        return LoadingModule;
    }(Module));
    game.LoadingModule = LoadingModule;
    __reflect(LoadingModule.prototype, "game.LoadingModule", ["RES.PromiseTaskReporter"]);
})(game || (game = {}));
//# sourceMappingURL=LoadingModule.js.map