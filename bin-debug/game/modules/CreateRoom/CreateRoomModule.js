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
    var CreateRoomModule = (function (_super) {
        __extends(CreateRoomModule, _super);
        function CreateRoomModule() {
            var _this = _super.call(this) || this;
            _this.maxHuaSe = 0;
            _this.selectHuaSe = 0;
            _this.type = 1;
            return _this;
        }
        CreateRoomModule.prototype.initContent = function () {
            this.content = UI.CreateRoom.UI_CreateRoom.createInstance();
        };
        Object.defineProperty(CreateRoomModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        CreateRoomModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5faj";
            // this.mContent.m_typeCtrl.addEventListener(egret.Event.CHANGE,this.tabChange,this);
            this.mContent.m_btn_type0.addClickListener(this.tabChange, this);
            this.mContent.m_btn_type1.addClickListener(this.tabChange, this);
            this.mContent.m_btn_type2.addClickListener(this.tabChange, this);
            this.mContent.m_btn_type3.addClickListener(this.tabChange, this);
            this.mContent.m_btn_type4.addClickListener(this.tabChange, this);
            this.mContent.m_btn_type5.addClickListener(this.tabChange, this);
            this.mContent.m_check_5.addClickListener(this.checkJiayiSe, this);
            this.mContent.m_check_4.addClickListener(this.checkJiayiSe, this);
            this.mContent.m_check_3.addClickListener(this.checkJiayiSe, this);
            this.mContent.m_check_2.addClickListener(this.checkJiayiSe, this);
            this.mContent.m_radio_huase1.addClickListener(this.huaseAdd, this);
            this.mContent.m_radio_huase2.addClickListener(this.huaseAdd, this);
            this.mContent.m_radio_huase3.addClickListener(this.huaseAdd, this);
            this.mContent.m_radio_huase4.addClickListener(this.huaseAdd, this);
            this.mContent.m_checkbox_jiayise.addClickListener(this.jiayise, this);
            this.mContent.m_typeCtrl.selectedIndex = 0;
            this.tabChange(null);
            this.mContent.m_btn_buy.addClickListener(this.onBuyHandle, this);
            this.mContent.m_btn_create.addClickListener(this.onCreateHandle, this);
            this.mContent.m_btn_paytype0.addClickListener(this.countCard, this);
            this.mContent.m_btn_paytype1.addClickListener(this.countCard, this);
            this.mContent.m_btn_junum0.addClickListener(this.countCard, this);
            this.mContent.m_btn_junum1.addClickListener(this.countCard, this);
            this.mContent.m_btn_junum2.addClickListener(this.countCard, this);
            this.mContent.m_btn_shuoming.addClickListener(this.showShuoMing, this);
            this.countCard();
            _super.prototype.preShow.call(this, data);
        };
        CreateRoomModule.prototype.countCard = function () {
            var jn = 6;
            var pn = 2;
            switch (this.mContent.m_JuShuCtrl.selectedIndex) {
                case 0:
                    jn = 6;
                    break;
                case 1:
                    jn = 12;
                    break;
                case 2:
                    jn = 18;
                    break;
            }
            switch (this.mContent.m_NumCtrl.selectedIndex) {
                case 0:
                    pn = 2;
                    if (this.mContent.m_typeCtrl.selectedIndex == 3) {
                        pn = 6;
                    }
                    break;
                case 1:
                    pn = 3;
                    if (this.mContent.m_typeCtrl.selectedIndex == 4) {
                        pn = 5;
                    }
                    break;
                case 2:
                    pn = 4;
                    if (this.mContent.m_typeCtrl.selectedIndex == 4) {
                        pn = 6;
                    }
                    break;
                case 3:
                    pn = 5;
                    break;
            }
            if (this.mContent.m_payCtrl.selectedIndex == 0) {
                this.mContent.m_btn_create.m_txt_cardnum.text = "X" + ((jn / 6) * pn).toString(); //总房卡数=（局数/6）*玩家人数。局数=6/12/18。
            }
            else {
                this.mContent.m_btn_create.m_txt_cardnum.text = "X" + (jn / 6).toString(); // AA支付每人房卡数=（局数/6）。
            }
        };
        CreateRoomModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        CreateRoomModule.prototype.checkJiayiSe = function () {
            if (this.mContent.m_typeCtrl.selectedIndex == 2) {
                if (this.mContent.m_check_5.selected == true) {
                    this.mContent.m_checkbox_jiayise.selected = true;
                    this.mContent.m_checkbox_jiayise.enabled = false;
                    this.mContent.m_huase.visible = true;
                }
                else {
                    this.mContent.m_checkbox_jiayise.selected = true;
                    this.mContent.m_checkbox_jiayise.enabled = true;
                    this.mContent.m_huase.visible = true;
                }
            }
            this.countCard();
        };
        CreateRoomModule.prototype.tabChange = function (evt) {
            this.mContent.m_huase.visible = true;
            this.mContent.m_checkbox_jiayise.selected = false;
            switch (this.mContent.m_typeCtrl.selectedIndex) {
                case 0:
                    this.type = 2;
                    this.mContent.m_payCtrl.selectedIndex = 1;
                    this.mContent.m_JuShuCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl.selectedIndex = 2;
                    this.mContent.m_NumCtrl1.selectedIndex = 0;
                    this.mContent.m_checkbox_zhuang.selected = false;
                    this.mContent.m_checkbox_mapai.selected = false;
                    this.maxHuaSe = 0;
                    this.mContent.m_jiama.visible = true;
                    this.mContent.m_jiayise.visible = false;
                    this.mContent.m_checkbox_jiayise.selected = false;
                    break;
                case 1:
                    this.type = 3;
                    this.mContent.m_payCtrl.selectedIndex = 1;
                    this.mContent.m_JuShuCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl.selectedIndex = 3;
                    this.mContent.m_NumCtrl1.selectedIndex = 1;
                    this.mContent.m_checkbox_zhuang.selected = false;
                    this.mContent.m_checkbox_mapai.selected = false;
                    this.maxHuaSe = 1;
                    this.mContent.m_jiama.visible = true;
                    this.mContent.m_jiayise.visible = false;
                    this.mContent.m_checkbox_jiayise.selected = false;
                    break;
                case 2:
                    this.type = 4;
                    this.mContent.m_payCtrl.selectedIndex = 1;
                    this.mContent.m_JuShuCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl.selectedIndex = 2;
                    this.mContent.m_NumCtrl1.selectedIndex = 1;
                    this.mContent.m_checkbox_zhuang.selected = false;
                    this.mContent.m_checkbox_mapai.selected = false;
                    this.maxHuaSe = 1;
                    this.mContent.m_jiama.visible = true;
                    this.mContent.m_jiayise.visible = true;
                    this.mContent.m_huase.visible = false;
                    break;
                case 3:
                    this.type = 5;
                    this.mContent.m_payCtrl.selectedIndex = 1;
                    this.mContent.m_JuShuCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl1.selectedIndex = 2;
                    this.mContent.m_checkbox_zhuang.selected = false;
                    this.mContent.m_checkbox_mapai.selected = false;
                    this.maxHuaSe = 2;
                    this.mContent.m_jiama.visible = true;
                    this.mContent.m_jiayise.visible = false;
                    this.mContent.m_checkbox_jiayise.selected = false;
                    break;
                case 4:
                    this.type = 6;
                    this.mContent.m_payCtrl.selectedIndex = 1;
                    this.mContent.m_JuShuCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl.selectedIndex = 2;
                    this.mContent.m_NumCtrl1.selectedIndex = 0;
                    this.mContent.m_checkbox_zhuang.selected = false;
                    this.mContent.m_checkbox_mapai.selected = false;
                    this.maxHuaSe = 1;
                    this.mContent.m_jiama.visible = false;
                    this.mContent.m_jiayise.visible = false;
                    this.mContent.m_checkbox_jiayise.selected = false;
                    break;
                case 5:
                    this.type = 7;
                    this.mContent.m_payCtrl.selectedIndex = 1;
                    this.mContent.m_JuShuCtrl.selectedIndex = 0;
                    this.mContent.m_NumCtrl.selectedIndex = 2;
                    this.mContent.m_NumCtrl1.selectedIndex = 0;
                    this.mContent.m_checkbox_zhuang.selected = false;
                    this.mContent.m_checkbox_mapai.selected = false;
                    this.maxHuaSe = 0;
                    this.mContent.m_jiama.visible = false;
                    this.mContent.m_jiayise.visible = false;
                    this.mContent.m_checkbox_jiayise.selected = false;
                    break;
            }
            for (var i = 1; i < 5; i++) {
                this.mContent["m_radio_huase" + i].selected = false;
            }
            this.mContent.m_radio_huase1.selected = true;
            if (this.mContent.m_typeCtrl.selectedIndex == 3) {
                this.mContent.m_num1.text = "6人";
            }
            else if (this.mContent.m_typeCtrl.selectedIndex == 4) {
                this.mContent.m_num1.text = "2人";
                this.mContent.m_num2.text = "5人";
                this.mContent.m_num3.text = "6人";
            }
            else {
                this.mContent.m_num1.text = "2人";
                this.mContent.m_num2.text = "3人";
                this.mContent.m_num3.text = "4人";
            }
            this.selectHuaSe = 1;
            this.countCard();
        };
        CreateRoomModule.prototype.huaseAdd = function (evt) {
            if (this.maxHuaSe == 1) {
                for (var i = 1; i < 5; i++) {
                    this.mContent["m_radio_huase" + i].selected = false;
                }
                (evt.currentTarget).asButton.selected = true;
                this.selectHuaSe = 1;
            }
            else {
                if ((evt.currentTarget).asButton.selected == true) {
                    this.selectHuaSe += 1;
                }
                else {
                    this.selectHuaSe -= 1;
                }
                if (this.selectHuaSe == 0) {
                    (evt.currentTarget).asButton.selected = true;
                    this.selectHuaSe = 1;
                }
                if (this.maxHuaSe < this.selectHuaSe) {
                    (evt.currentTarget).asButton.selected = (evt.currentTarget).asButton.selected == true ? false : true;
                    this.selectHuaSe = this.maxHuaSe;
                    game.AlertUtil.floatMsg('最多只能选择2个花色');
                }
            }
        };
        CreateRoomModule.prototype.jiayise = function () {
            if (this.mContent.m_checkbox_jiayise.selected == true) {
                this.mContent.m_huase.visible = true;
            }
            else {
                this.mContent.m_huase.visible = false;
            }
        };
        CreateRoomModule.prototype.onBuyHandle = function () {
            // ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
            this.checkShowBind();
            game.ServerEngine.leaveRooom();
        };
        //检查是否需要弹出兑换框
        CreateRoomModule.prototype.checkShowBind = function () {
            var url = game.GameModel.ins.CheckBindServer; //"http://alpha-pay.fpwan.net/Game/Shisanzhang/BindWindow";
            HttpAPI.HttpGET(url, { 'userId': game.GameModel.ins.uid }, this.onCallBack, this.onError, this);
        };
        CreateRoomModule.prototype.onCallBack = function (evt) {
            console.log(evt.target.response);
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.data == true) {
                ModuleMgr.ins.showModule(ModuleEnum.BUY_CARD);
            }
            else {
                this.onShowBuyCard();
            }
        };
        CreateRoomModule.prototype.onError = function () {
        };
        CreateRoomModule.prototype.onShowBuyCard = function () {
            var url = game.GameModel.ins.BuySerever + "&userId=" + game.GameModel.ins.uid + "&appId=6000015&payId=103&taocanId=3&serverId=1&from=1&redirectUrl=" + game.GameModel.ins.BuySereverRedirect;
            // window.open(url,"_blank");
            top.location.href = url;
        };
        CreateRoomModule.prototype.onCreateHandle = function () {
            var arr = this.getRoomInfo();
            // ServerEngine.createRoom(ty,pn,jn,zz,jm,fc,core.Handler.create(this,this.createRoomCallBack));
            game.ServerEngine.createRoom(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], core.Handler.create(this, this.createRoomCallBack));
        };
        CreateRoomModule.prototype.getRoomInfo = function () {
            // ty:2(玩法id),
            var ty = this.type;
            // pn:人数,
            var pn = 2;
            // jn:局数,
            var jn = 6;
            // zz:是否坐庄(1:是，0:否),
            var zz = 1;
            // jm:是否加马(1:是，0:否),
            var jm = 0;
            // fc:(1:房主付,2:均摊)
            var fc = 1;
            // jp:加花色 int数组，不加花色留空) }花色对应值:0:方块 1:梅花2：红桃 3:黑桃
            var jp = [];
            //th 1 先比大小，2 先比花色
            var th = 0;
            fc = this.mContent.m_payCtrl.selectedIndex == 0 ? 2 : 1;
            zz = this.mContent.m_checkbox_zhuang.selected ? 1 : 0;
            jm = this.mContent.m_checkbox_mapai.selected ? 1 : 0;
            switch (this.mContent.m_JuShuCtrl.selectedIndex) {
                case 0:
                    jn = 6;
                    break;
                case 1:
                    jn = 12;
                    break;
                case 2:
                    jn = 18;
                    break;
            }
            switch (this.mContent.m_NumCtrl.selectedIndex) {
                case 0:
                    pn = 2;
                    if (this.mContent.m_typeCtrl.selectedIndex == 3) {
                        pn = 6;
                    }
                    break;
                case 1:
                    pn = 3;
                    if (this.mContent.m_typeCtrl.selectedIndex == 4) {
                        pn = 5;
                    }
                    break;
                case 2:
                    pn = 4;
                    if (this.mContent.m_typeCtrl.selectedIndex == 4) {
                        pn = 6;
                    }
                    break;
                case 3:
                    pn = 5;
                    break;
            }
            if (this.mContent.m_radio_huase1.selected) {
                jp.push(0);
            }
            if (this.mContent.m_radio_huase2.selected) {
                jp.push(1);
            }
            if (this.mContent.m_radio_huase3.selected) {
                jp.push(2);
            }
            if (this.mContent.m_radio_huase4.selected) {
                jp.push(3);
            }
            if (this.mContent.m_typeCtrl.selectedIndex == 0 || this.mContent.m_typeCtrl.selectedIndex == 5 || (this.mContent.m_checkbox_jiayise.selected == false && this.mContent.m_typeCtrl.selectedIndex == 2)) {
                jp = [];
            }
            if (this.mContent.m_typeCtrl.selectedIndex == 3 && jp.length == 1) {
                jp.push(jp[0]);
            }
            if (this.mContent.m_typeCtrl.selectedIndex == 5) {
                ty = 7;
            }
            if (this.mContent.m_tonghuaType.selectedIndex == 0) {
                th = 1;
            }
            else {
                th = 2;
            }
            return [ty, pn, jn, zz, jm, fc, jp, th];
        };
        CreateRoomModule.prototype.createRoomCallBack = function (msg) {
            App.Socket.removeCmdListener(MsgType.CreateRoom, this.createRoomCallBack);
            App.MessageCenter.addListener(game.MsgEnum.NEW_UESR_IN, this.enterRoomCallBack, this);
            game.ServerEngine.enterRoom(msg.rid);
        };
        CreateRoomModule.prototype.enterRoomCallBack = function (user) {
            if (user.uid == game.GameModel.ins.uid) {
                App.MessageCenter.removeListener(game.MsgEnum.NEW_UESR_IN, this.enterRoomCallBack, this);
                ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN, ModuleEnum.GAME);
            }
        };
        CreateRoomModule.prototype.showShuoMing = function () {
            ModuleMgr.ins.showModule(ModuleEnum.ModelShuoMing, this.mContent.m_typeCtrl.selectedIndex);
        };
        return CreateRoomModule;
    }(PopModuleView));
    game.CreateRoomModule = CreateRoomModule;
    __reflect(CreateRoomModule.prototype, "game.CreateRoomModule");
})(game || (game = {}));
//# sourceMappingURL=CreateRoomModule.js.map