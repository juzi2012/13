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
            this.preShowCpl();
        };
        LoadingModule.prototype.show = function (data) {
            // this.loadingBar = UI.Loading.UI_LoadingModule.createInstance() as UI.Loading.UI_LoadingModule;
            // this.loadingBar.x = App.StageUtils.getWidth()/2-this.loadingBar.width/2;
            // this.loadingBar.y = App.StageUtils.getHeight()-200;
            // this.mContent.addChild(this.loadingBar);
            this.mContent.m_bar.value = 0;
            this.mContent.m_bar.visible = false;
            App.Socket.connect(core.Handler.create(this, this.onServerConnected));
            // this.onServerConnected();
            _super.prototype.show.call(this, data);
        };
        LoadingModule.prototype.onServerConnected = function () {
            // RES.getResByUrl("https://cdn-ns-studio.gtarcade.com/product-160/cdn1/st/assets/common/modules/foundations/mainToolbar/icons/icons_small/96040.png", (data) =>
            // {
            // 	var bmp = new egret.Bitmap(data);
            // 	this.mContent.displayListContainer.addChild(bmp);
            // }, this, RES.ResourceItem.TYPE_IMAGE);
            this.mContent.m_btn_start.addClickListener(this.doStart, this);
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
                this.mContent.m_bar.visible = true;
                this.uid = this.mContent.m_txt_name.text;
                App.Socket.addCmdListener(MsgType.Login, core.Handler.create(this, this.loginCallBack));
                var loginMsg = new C2T_Login();
                loginMsg.Msg.name = "Jack" + this.uid; //App.MathUtils.random(1,1000);
                loginMsg.Msg.wid = this.uid; //"12345"+App.MathUtils.random(1,1000);
                loginMsg.Msg.mid = "123456" + App.MathUtils.random(1, 1000);
                loginMsg.Msg.head = "http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
                loginMsg.Msg.chid = "";
                App.Socket.send(loginMsg);
            }
        };
        LoadingModule.prototype.loginCallBack = function (msg) {
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
            ModuleMgr.ins.closeModule(ModuleEnum.LOADING);
            ModuleMgr.ins.showModule(ModuleEnum.FLOAT);
            if (game.GameModel.ins.roomModel != null && game.GameModel.ins.roomModel.isReConnectInRoom) {
                ModuleMgr.ins.showModule(ModuleEnum.GAME);
            }
            else {
                ModuleMgr.ins.showModule(ModuleEnum.GAME_MAIN, []);
            }
            // GameModel.ins.createRoundTest();
            // ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK,[]);
        };
        return LoadingModule;
    }(Module));
    game.LoadingModule = LoadingModule;
    __reflect(LoadingModule.prototype, "game.LoadingModule", ["RES.PromiseTaskReporter"]);
})(game || (game = {}));
//# sourceMappingURL=LoadingModule.js.map