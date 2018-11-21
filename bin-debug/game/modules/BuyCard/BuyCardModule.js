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
    var BuyCardModule = (function (_super) {
        __extends(BuyCardModule, _super);
        function BuyCardModule() {
            var _this = _super.call(this) || this;
            _this.code = "";
            return _this;
        }
        BuyCardModule.prototype.initContent = function () {
            this.content = UI.BuyCard.UI_BuyCard.createInstance();
        };
        Object.defineProperty(BuyCardModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        BuyCardModule.prototype.preShow = function (data) {
            this.mContent.m_btn_close.addClickListener(this.onCloseClick, this);
            this.mContent.m_txt_input.addEventListener(egret.TextEvent.CHANGE, this.inputHandle, this);
            this.mContent.m_btn_buy.addClickListener(this.onBuyCard, this);
            this.mContent.m_btn_get.addClickListener(this.onBind, this);
            this.mContent.m_txt_input.alpha = 0;
            _super.prototype.preShow.call(this, data);
        };
        BuyCardModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        BuyCardModule.prototype.onBuyCard = function () {
            // let appId:number = 600015;//"appOrderId1111111111";
            // let goodsName:string = "获得50房卡";
            // let money:number=30;
            // let state:string = OptModel.ins.state;
            // let userId:string=GameModel.ins.uid;
            // let sign:string = new md5().hex_md5("appId="+appId+"goodsName="+goodsName+"money="+money+"state="+state+"userId="+userId+"dq9FR5gBTPdhuVtsdmCbhiKM4ByjGL");
            // showPay(appId,goodsName,money,state,userId,sign);
            // ModuleMgr.ins.showModule(ModuleEnum.CHARGE);
            var url = "http://alpha-pay.fpwan.net/Pay/Index?channelId=1045&userId=" + game.GameModel.ins.uid + "&appId=6000015&payId=103&taocanId=3&serverId=1&from=1&redirectUrl=http%3A%2F%2Falpha-hall.fpwan.com%2FgamePlay.html%3FchannelId%3D1045%26appId%3D600015%26test%3D1";
            // window.open(url,"_blank");
            top.location.href = url;
        };
        BuyCardModule.prototype.inputHandle = function (evt) {
            this.code = this.mContent.m_txt_input.text; //this.code+(evt.currentTarget as egret.TextField).text
            this.code = this.code.substr(0, 6);
            // this.mContent.m_txt_input.text="";
            var strArr = this.code.split("");
            for (var i = 0; i < 6; i++) {
                if (strArr[i] != null && strArr[i] != "") {
                    this.mContent['m_txt_input' + (i + 1)].text = strArr[i];
                }
                else {
                    this.mContent['m_txt_input' + (i + 1)].text = "";
                }
            }
        };
        BuyCardModule.prototype.onBind = function () {
            if (this.code.length == 6) {
                var url = "http://alpha-pay.fpwan.net/Game/Shisanzhang/IsBind";
                HttpAPI.HttpGET(url, { 'userId': game.GameModel.ins.uid, agentId: this.code }, this.onCallBack, this.onError, this);
            }
            else if (this.code.length == 0) {
                game.AlertUtil.floatMsg("请先输入邀请码");
            }
        };
        BuyCardModule.prototype.onCallBack = function (evt) {
            var callBackJson = JSON.parse(evt.target.response);
            console.log(evt.target.response);
            if (callBackJson.data == true) {
                game.AlertUtil.floatMsg("绑定成功");
            }
            else {
                game.AlertUtil.floatMsg(callBackJson['data']['message']);
            }
        };
        BuyCardModule.prototype.onError = function (evt) {
        };
        return BuyCardModule;
    }(PopModuleView));
    game.BuyCardModule = BuyCardModule;
    __reflect(BuyCardModule.prototype, "game.BuyCardModule");
})(game || (game = {}));
//# sourceMappingURL=BuyCardModule.js.map