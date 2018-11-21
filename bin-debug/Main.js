//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            context.onUpdate = function () {
            };
        });
        // egret.lifecycle.onPause = () => {
        //     egret.ticker.pause();
        // }
        // egret.lifecycle.onResume = () => {
        //     egret.ticker.resume();
        // }
        // this.doTest();
        // 118.24.105.180
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.doTest = function () {
        game.GameModel.ins.createRoundTest();
        var aa = game.PorkUtil.findShunZi(game.GameModel.ins.roundModel.myCard);
        console.log(aa.length);
        for (var i = 0; i < aa.length; i++) {
            var str = "";
            for (var j = 0; j < aa[i].length; j++) {
                str += aa[i][j].point + "-";
            }
            console.log(str);
        }
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // let txt:egret.TextField = new egret.TextField();
                    // txt.textAlign = egret.HorizontalAlign.CENTER;
                    // txt.textColor = 0xffffff;
                    // txt.text = "正在加载中...."
                    // this.addChild(txt);
                    // txt.x = App.StageUtils.getWidth()/2;
                    // txt.y = App.StageUtils.getHeight()/2;
                    //预加载部分资源，主要是用来显示loading的部分素材
                    return [4 /*yield*/, this.loadPreLoadResource1()];
                    case 1:
                        // let txt:egret.TextField = new egret.TextField();
                        // txt.textAlign = egret.HorizontalAlign.CENTER;
                        // txt.textColor = 0xffffff;
                        // txt.text = "正在加载中...."
                        // this.addChild(txt);
                        // txt.x = App.StageUtils.getWidth()/2;
                        // txt.y = App.StageUtils.getHeight()/2;
                        //预加载部分资源，主要是用来显示loading的部分素材
                        _a.sent();
                        fairygui.UIPackage.addPackage("PreLoading");
                        this.startEngine();
                        return [4 /*yield*/, this.loadPreLoadResource()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 3:
                        result = _a.sent();
                        if (!(App.GlobalData.IsDebug == false)) return [3 /*break*/, 6];
                        return [4 /*yield*/, platform.login()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 5:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        _a.label = 6;
                    case 6:
                        this.loadLoadingResource();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadPreLoadResource1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadPreLoadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        ModuleMgr.ins.showModule(ModuleEnum.PRELOADING);
                        return [4 /*yield*/, RES.loadGroup("loading", 0)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加载 loading条需要的资源 ,方便做后面大资源的加载进度
     */
    Main.prototype.loadLoadingResource = function () {
        fairygui.UIPackage.addPackage("Loading");
        ModuleMgr.ins.closeModule(ModuleEnum.PRELOADING);
        ModuleMgr.ins.showModule(ModuleEnum.LOADING, []);
    };
    /**
     * 开始初始化引擎
     * Create a game scene
     */
    Main.prototype.startEngine = function () {
        //适配方式(全屏适配)//主要是针对UI的
        App.StageUtils.startFullscreenAdaptation(1206, 750);
        //初始化层级
        LayerCenter.Instance.init(this.stage);
        App.run(this.stage);
        // 初始化FairyGUI
        new RegModuleTask();
        new BindFGuiTask();
        new RegRunTimeClassTask();
        // App.EventCenter.addListener(AlertMsgVo.SYSTEM_CONFIRM,this.showAlert,this);
        // TypeScript 代码
        egret.ExternalInterface.addCallback("sendToTs", function (message) {
            console.log("message form native : " + message); //message form native : message from native
        });
    };
    /**
     * 开始游戏
     */
    Main.prototype.startGame = function () {
        fairygui.UIPackage.addPackage("Base");
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map