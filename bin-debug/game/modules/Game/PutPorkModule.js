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
    var PutPorkModule = (function (_super) {
        __extends(PutPorkModule, _super);
        function PutPorkModule() {
            var _this = _super.call(this) || this;
            _this.startSelect = true;
            return _this;
        }
        PutPorkModule.prototype.initContent = function () {
            this.content = UI.Game.UI_PutPork.createInstance();
        };
        Object.defineProperty(PutPorkModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        PutPorkModule.prototype.preShow = function (data) {
            this.RenderList();
            this.mContent.m_btntype1.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype2.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype3.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype4.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype5.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype6.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype7.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype8.addClickListener(this.onChooseType, this);
            this.mContent.m_btntype9.addClickListener(this.onChooseType, this);
            this.mContent.m_area_top.addClickListener(this.onAreaClick, this);
            this.mContent.m_area_mid.addClickListener(this.onAreaClick, this);
            this.mContent.m_area_down.addClickListener(this.onAreaClick, this);
            this.mContent.m_porkList.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doSelect, this);
            this.mContent.m_porkList.addEventListener(egret.TouchEvent.TOUCH_END, this.stopSelect, this);
            this.mContent.m_btntype1.m_txt.url = "ui://jow5n9bqrezh1w";
            this.mContent.m_btntype2.m_txt.url = "ui://jow5n9bqrezh1x";
            this.mContent.m_btntype3.m_txt.url = "ui://jow5n9bqrezh1y";
            this.mContent.m_btntype4.m_txt.url = "ui://jow5n9bqrezh1z";
            this.mContent.m_btntype5.m_txt.url = "ui://jow5n9bqrezh20";
            this.mContent.m_btntype6.m_txt.url = "ui://jow5n9bqrezh21";
            if (game.GameModel.ins.roomModel.rinfo.rp == 6) {
                this.mContent.m_btntype7.m_txt.url = "ui://jow5n9bqrezh24";
                this.mContent.m_btntype8.m_txt.url = "ui://jow5n9bqrezh23";
            }
            else {
                this.mContent.m_btntype7.m_txt.url = "ui://jow5n9bqrezh23";
                this.mContent.m_btntype8.m_txt.url = "ui://jow5n9bqrezh24";
            }
            this.mContent.m_btntype9.m_txt.url = "ui://jow5n9bqrezh22";
            this.mContent.m_btn_close1.visible = false;
            this.mContent.m_btn_close2.visible = false;
            this.mContent.m_btn_close3.visible = false;
            this.mContent.m_btn_close1.addClickListener(this.onCloseSelect, this);
            this.mContent.m_btn_close2.addClickListener(this.onCloseSelect, this);
            this.mContent.m_btn_close3.addClickListener(this.onCloseSelect, this);
            this.mContent.m_btn_cancel.addClickListener(this.onReset, this);
            this.mContent.m_btn_ok.addClickListener(this.onOk, this);
            this.mContent.m_btn_help.addClickListener(this.onHelp, this);
            App.MessageCenter.addListener(game.MsgEnum.GAME_BAIPAI, this.BaiPaiCallBack, this);
            var teshuVO = game.PorkUtilExtends.isTeShuPai(game.GameModel.ins.roundModel.myCard);
            if (teshuVO != null && teshuVO.type > 0) {
                game.AlertUtil.alert("恭喜你获得特殊牌型\n[COLOR=#FF0000]" + game.PorkUtilExtends.getTeShuPai(teshuVO.type) + "[/COLOR]\n是否选择免摆？", new core.Handler(this, this.mianBai, [teshuVO]));
            }
            this.topSelectAry = [];
            this.midSelectAry = [];
            this.downSelectAry = [];
            this.preShowCpl();
        };
        PutPorkModule.prototype.mianBai = function (teshuVO) {
            var msg = new C2T_Message_BaiPai();
            var arr = [];
            for (var i = 0; i < teshuVO.arr.length; i++) {
                arr.push(game.PorkUtil.ChangeClientToServer(teshuVO.arr[i].data));
            }
            msg.cards = arr;
            msg.mb = 1;
            game.ServerEngine.sendBaiPai(msg);
        };
        PutPorkModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        PutPorkModule.prototype.RenderList = function () {
            if (game.GameModel.ins.roundModel.listCard.length <= 0) {
                this.mContent.m_ctrl.selectedIndex = 1;
            }
            else {
                this.mContent.m_ctrl.selectedIndex = 0;
                this.porkAry = new Array();
                this.mContent.m_porkList.itemRenderer = this.RenderListItem;
                this.mContent.m_porkList.callbackThisObj = this;
                // GameModel.ins.roundModel.listCard.sort()
                this.mContent.m_porkList.numItems = game.GameModel.ins.roundModel.listCard.length;
                this.mContent.m_porkList.addEventListener(fairygui.ItemEvent.CLICK, this.onClickPork, this);
                for (var i = 0; i < this.mContent.m_porkList.numItems; i++) {
                    this.mContent.m_porkList.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveChoose, this);
                }
                //根据牌型来确定按钮的状态
                this.setBtnTypeState();
            }
        };
        PutPorkModule.prototype.RenderListItem = function (index, _pork) {
            var pork = _pork;
            var porkVo = game.GameModel.ins.roundModel.listCard[index];
            pork.setData(porkVo);
            this.porkAry.push(pork);
        };
        PutPorkModule.prototype.RenderTopList = function (arr) {
            this.topSelectAry = arr;
            game.PorkUtil.SortCard(this.topSelectAry);
            this.mContent.m_btn_close1.visible = this.topSelectAry.length > 0 ? true : false;
            this.mContent.m_list_top.itemRenderer = this.RenderListItemTop;
            this.mContent.m_list_top.callbackThisObj = this;
            this.mContent.m_list_top.numItems = arr.length;
            this.findPaiXing(0, arr);
        };
        PutPorkModule.prototype.RenderListItemTop = function (index, _pork) {
            var pork = _pork;
            var porkVo = this.topSelectAry[index];
            pork.setData(porkVo);
        };
        PutPorkModule.prototype.RenderMidList = function (arr) {
            this.midSelectAry = arr;
            game.PorkUtil.SortCard(this.midSelectAry);
            this.mContent.m_btn_close2.visible = this.midSelectAry.length > 0 ? true : false;
            this.mContent.m_list_mid.itemRenderer = this.RenderListItemMid;
            this.mContent.m_list_mid.callbackThisObj = this;
            this.mContent.m_list_mid.numItems = arr.length;
            this.findPaiXing(1, arr);
        };
        PutPorkModule.prototype.RenderListItemMid = function (index, _pork) {
            var pork = _pork;
            var porkVo = this.midSelectAry[index];
            pork.setData(porkVo);
        };
        PutPorkModule.prototype.RenderDownList = function (arr) {
            this.downSelectAry = arr;
            game.PorkUtil.SortCard(this.downSelectAry);
            this.mContent.m_btn_close3.visible = this.downSelectAry.length > 0 ? true : false;
            this.mContent.m_list_down.itemRenderer = this.RenderListItemDown;
            this.mContent.m_list_down.callbackThisObj = this;
            this.mContent.m_list_down.numItems = arr.length;
            this.findPaiXing(2, arr);
        };
        PutPorkModule.prototype.RenderListItemDown = function (index, _pork) {
            var pork = _pork;
            var porkVo = this.downSelectAry[index];
            pork.setData(porkVo);
        };
        //手动选择牌
        PutPorkModule.prototype.onClickPork = function (evt) {
            var selectedPork = evt.itemObject;
            selectedPork.changeSelectState();
        };
        PutPorkModule.prototype.setBtnTypeState = function () {
            this.mContent.m_btntype1.enabled = (game.GameModel.ins.roundModel.duizi.length > 0);
            this.mContent.m_btntype2.enabled = (game.GameModel.ins.roundModel.liadui.length > 0);
            this.mContent.m_btntype3.enabled = (game.GameModel.ins.roundModel.santiao.length > 0);
            this.mContent.m_btntype4.enabled = (game.GameModel.ins.roundModel.shunzi.length > 0);
            this.mContent.m_btntype5.enabled = (game.GameModel.ins.roundModel.tonghua.length > 0);
            this.mContent.m_btntype6.enabled = (game.GameModel.ins.roundModel.hulu.length > 0);
            if (game.GameModel.ins.roomModel.rinfo.rp == 6) {
                this.mContent.m_btntype4.enabled = false;
                this.mContent.m_btntype5.enabled = false;
                this.mContent.m_btntype7.enabled = (game.GameModel.ins.roundModel.tonghuashun.length > 0);
                this.mContent.m_btntype8.enabled = (game.GameModel.ins.roundModel.tiezhi.length > 0);
            }
            else {
                this.mContent.m_btntype7.enabled = (game.GameModel.ins.roundModel.tiezhi.length > 0);
                this.mContent.m_btntype8.enabled = (game.GameModel.ins.roundModel.tonghuashun.length > 0);
            }
            this.mContent.m_btntype9.enabled = (game.GameModel.ins.roundModel.wutong.length > 0);
        };
        //牌型按钮点击事件
        PutPorkModule.prototype.onChooseType = function (evt) {
            App.SoundUtils.playSound("deal_mp3", 0, 1);
            var chooseType = (evt.currentTarget).name;
            this.findClickTypePork(chooseType);
        };
        PutPorkModule.prototype.doSelect = function () {
            this.startSelect = true;
        };
        PutPorkModule.prototype.stopSelect = function () {
            this.startSelect = false;
            this.lastTouch = null;
        };
        PutPorkModule.prototype.moveChoose = function (evt) {
            var pork = evt.currentTarget;
            if (this.lastTouch != pork) {
                this.lastTouch = pork;
                pork.changeSelectState();
            }
        };
        PutPorkModule.prototype.findClickTypePork = function (chooseType) {
            var arr = game.GameModel.ins.roundModel.getTypeByClick(chooseType);
            for (var i = 0; i < this.porkAry.length; i++) {
                this.porkAry[i].resetState();
                for (var j = 0; j < arr.length; j++) {
                    if (this.porkAry[i].vo == arr[j]) {
                        this.porkAry[i].changeSelectState();
                        break;
                    }
                }
            }
        };
        PutPorkModule.prototype.onAreaClick = function (evt) {
            var clickArea = (evt.currentTarget).name;
            var selectAry = this.getSelectPokerAry();
            this.doAreaClick(clickArea, selectAry);
        };
        PutPorkModule.prototype.doAreaClick = function (clickArea, selectAry) {
            switch (clickArea) {
                case "area_top":
                    if (this.mContent.m_list_top.numItems > 0) {
                        return;
                    }
                    if (this.midSelectAry.length > 0 && game.PorkUtil.checkCanPutDown(selectAry, this.midSelectAry) == true) {
                        game.AlertUtil.floatMsg("头墩不能比中墩大");
                        return;
                    }
                    if (this.downSelectAry.length > 0 && game.PorkUtil.checkCanPutDown(selectAry, this.downSelectAry) == true) {
                        game.AlertUtil.floatMsg("头墩不能比下墩大");
                        return;
                    }
                    if (selectAry.length == 3) {
                        game.GameModel.ins.roundModel.listCard = this.getRestPokerAry(selectAry);
                        this.RenderList();
                        this.RenderTopList(selectAry);
                        App.SoundUtils.playSound("deal_mp3", 0, 1);
                    }
                    this.checkRestOnly();
                    break;
                case "area_mid":
                    if (this.mContent.m_list_mid.numItems > 0) {
                        return;
                    }
                    if (this.downSelectAry.length > 0 && game.PorkUtil.checkCanPutDown(selectAry, this.downSelectAry) == true) {
                        game.AlertUtil.floatMsg("中墩不能比下墩大");
                        return;
                    }
                    if (this.topSelectAry.length > 0 && game.PorkUtil.checkCanPutDown(this.topSelectAry, selectAry) == true) {
                        game.AlertUtil.floatMsg("头墩不能比中墩大");
                        return;
                    }
                    if (selectAry.length == 5) {
                        game.GameModel.ins.roundModel.listCard = this.getRestPokerAry(selectAry);
                        this.RenderList();
                        this.RenderMidList(selectAry);
                        App.SoundUtils.playSound("deal_mp3", 0, 1);
                    }
                    this.checkRestOnly();
                    break;
                case "area_down":
                    if (this.mContent.m_list_down.numItems > 0) {
                        return;
                    }
                    if (this.midSelectAry.length > 0 && game.PorkUtil.checkCanPutDown(this.midSelectAry, selectAry) == true) {
                        game.AlertUtil.floatMsg("中墩不能比下墩大");
                        return;
                    }
                    if (this.topSelectAry.length > 0 && game.PorkUtil.checkCanPutDown(this.topSelectAry, selectAry) == true) {
                        game.AlertUtil.floatMsg("头墩不能比下墩大");
                        return;
                    }
                    if (selectAry.length == 5) {
                        game.GameModel.ins.roundModel.listCard = this.getRestPokerAry(selectAry);
                        this.RenderList();
                        this.RenderDownList(selectAry);
                        App.SoundUtils.playSound("deal_mp3", 0, 1);
                    }
                    this.checkRestOnly();
                    break;
            }
        };
        PutPorkModule.prototype.getSelectPokerAry = function () {
            var arr = [];
            for (var i = 0; i < this.porkAry.length; i++) {
                var pork = this.porkAry[i];
                if (pork.selectState == true) {
                    arr.push(pork.vo);
                }
            }
            return arr;
        };
        PutPorkModule.prototype.getRestPokerAry = function (selectAry) {
            var arr = [];
            for (var i = 0; i < this.porkAry.length; i++) {
                var pork = this.porkAry[i];
                var state = true;
                for (var j = 0; j < selectAry.length; j++) {
                    if (pork.vo == selectAry[j]) {
                        state = false;
                        break;
                    }
                }
                if (state == true) {
                    arr.push(pork.vo);
                }
            }
            return arr;
        };
        //牌型按钮点击事件
        PutPorkModule.prototype.onCloseSelect = function (evt) {
            var closeType = (evt.currentTarget).name;
            switch (closeType) {
                case "btn_close1":
                    game.GameModel.ins.roundModel.listCard = game.GameModel.ins.roundModel.listCard.concat(this.topSelectAry);
                    this.RenderList();
                    this.RenderTopList([]);
                    break;
                case "btn_close2":
                    game.GameModel.ins.roundModel.listCard = game.GameModel.ins.roundModel.listCard.concat(this.midSelectAry);
                    this.RenderList();
                    this.RenderMidList([]);
                    break;
                case "btn_close3":
                    game.GameModel.ins.roundModel.listCard = game.GameModel.ins.roundModel.listCard.concat(this.downSelectAry);
                    this.RenderList();
                    this.RenderDownList([]);
                    break;
            }
        };
        PutPorkModule.prototype.onReset = function () {
            game.GameModel.ins.roundModel.listCard = game.GameModel.ins.roundModel.myCard;
            this.RenderList();
            this.RenderTopList([]);
            this.RenderMidList([]);
            this.RenderDownList([]);
            this.mContent.m_ctrl.selectedIndex = 0;
        };
        PutPorkModule.prototype.onOk = function () {
            var msg = new C2T_Message_BaiPai();
            msg.cards = game.PorkUtil.ChangeClientArrToServer(this.topSelectAry).concat(game.PorkUtil.ChangeClientArrToServer(this.midSelectAry), game.PorkUtil.ChangeClientArrToServer(this.downSelectAry));
            msg.mb = 0;
            game.ServerEngine.sendBaiPai(msg);
        };
        PutPorkModule.prototype.BaiPaiCallBack = function (msg) {
            if (msg.uid == game.GameModel.ins.uid) {
                ModuleMgr.ins.closeModule(ModuleEnum.GAME_PUT_PORK);
            }
            // ModuleMgr.ins.changeScene(ModuleEnum.GAME,ModuleEnum.GAME_SINGLE_RESULT);
        };
        // 检查剩下的牌是不是刚好塞满最后一墩
        PutPorkModule.prototype.checkRestOnly = function () {
            var len = game.GameModel.ins.roundModel.listCard.length;
            if (len == 3) {
                if (this.mContent.m_list_top.numItems == 0) {
                    this.doAreaClick("area_top", game.GameModel.ins.roundModel.listCard);
                }
            }
            if (len == 5) {
                if (this.mContent.m_list_mid.numItems == 0) {
                    this.doAreaClick("area_mid", game.GameModel.ins.roundModel.listCard);
                }
                else if (this.mContent.m_list_down.numItems == 0) {
                    this.doAreaClick("area_down", game.GameModel.ins.roundModel.listCard);
                }
            }
        };
        PutPorkModule.prototype.findPaiXing = function (index, arr) {
            // 乌龙 ui://jow5n9bqfetr4k
            // 一对 ui://jow5n9bqrezh2d
            // 两对ui://jow5n9bqrezh2c
            // 三条ui://jow5n9bqrezh2b
            // 顺子ui://jow5n9bqrezh2a
            // 同花ui://jow5n9bqrezh29
            // 葫芦ui://jow5n9bqrezh28
            // 铁支ui://jow5n9bqrezh27
            // 同花顺 ui://jow5n9bqrezh25
            // 五同 ui://jow5n9bqrezh26
            if (arr == null || arr.length == 0) {
                this.mContent['m_paixing_' + index].url = "";
                return;
            }
            if (game.PorkUtil.findWuTong(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh26";
                return;
            }
            if (game.PorkUtil.findTongHuaShun(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh25";
                return;
            }
            if (game.PorkUtil.findTieZhi(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh27";
                return;
            }
            if (game.PorkUtil.findHuLu(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh28";
                return;
            }
            if (game.PorkUtil.findTongHua(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh29";
                return;
            }
            if (game.PorkUtil.findShunZi(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh2a";
                return;
            }
            if (game.PorkUtil.findSanTiao(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh2b";
                return;
            }
            if (game.PorkUtil.findLiaDui(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh2c";
                return;
            }
            if (game.PorkUtil.findDuiZi(arr).length > 0) {
                this.mContent['m_paixing_' + index].url = "ui://jow5n9bqrezh2d";
                return;
            }
            //乌龙
            this.mContent['m_paixing_' + index].url = "ui://jow5n9bqfetr4k";
        };
        PutPorkModule.prototype.onHelp = function () {
            ModuleMgr.ins.showModule(ModuleEnum.GAME_HELP);
        };
        PutPorkModule.prototype.preClose = function (data) {
            this.RenderTopList([]);
            this.RenderMidList([]);
            this.RenderDownList([]);
            this.mContent.m_ctrl.selectedIndex = 0;
            this.mContent.m_btntype1.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype2.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype3.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype4.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype5.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype6.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype7.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype8.removeClickListener(this.onChooseType, this);
            this.mContent.m_btntype9.removeClickListener(this.onChooseType, this);
            this.mContent.m_porkList.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.doSelect, this);
            this.mContent.m_porkList.removeEventListener(egret.TouchEvent.TOUCH_END, this.stopSelect, this);
            this.mContent.m_area_top.removeClickListener(this.onAreaClick, this);
            this.mContent.m_area_mid.removeClickListener(this.onAreaClick, this);
            this.mContent.m_area_down.removeClickListener(this.onAreaClick, this);
            this.mContent.m_btn_close1.removeClickListener(this.onCloseSelect, this);
            this.mContent.m_btn_close2.removeClickListener(this.onCloseSelect, this);
            this.mContent.m_btn_close3.removeClickListener(this.onCloseSelect, this);
            this.mContent.m_btn_cancel.removeClickListener(this.onReset, this);
            this.mContent.m_btn_ok.removeClickListener(this.onOk, this);
            this.mContent.m_btn_help.removeClickListener(this.onHelp, this);
            App.MessageCenter.removeListener(game.MsgEnum.GAME_BAIPAI, this.BaiPaiCallBack, this);
            this.porkAry = null;
            this.RenderTopList([]);
            this.RenderMidList([]);
            this.RenderDownList([]);
            _super.prototype.preClose.call(this, data);
        };
        return PutPorkModule;
    }(PopModuleView));
    game.PutPorkModule = PutPorkModule;
    __reflect(PutPorkModule.prototype, "game.PutPorkModule");
})(game || (game = {}));
//# sourceMappingURL=PutPorkModule.js.map