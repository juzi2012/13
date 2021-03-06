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
    var MoShiShuoMingModule = (function (_super) {
        __extends(MoShiShuoMingModule, _super);
        function MoShiShuoMingModule() {
            var _this = _super.call(this) || this;
            _this.maxHuaSe = 0;
            _this.selectHuaSe = 0;
            _this.type = 1;
            return _this;
        }
        MoShiShuoMingModule.prototype.initContent = function () {
            this.content = UI.CreateRoom.UI_GameShuoMing.createInstance();
        };
        Object.defineProperty(MoShiShuoMingModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        MoShiShuoMingModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://83u5vz94mdwm1a";
            this.mContent.m_txt_content.text = "    新版的方片十三张与原本十三张玩法一致，都是将13张牌按照头道3张，中道5张，尾道5张的方式进行摆牌并比较大小。并且新增加了加一色，纯一色，加马牌等特色玩法：" +
                "\n\n坐庄：勾选后，房主是庄家，所有闲家分别和庄家进行比牌，闲家之间不比较。" +
                "\n\n加马牌：勾选后，红桃K作为马牌，有马牌的玩家和其他玩家的总结算分数X2。" +
                "\n\n加一色：勾选后，在一副牌中增加一组该花色的A-K的13张牌，花色可自选。" +
                "\n\n大小王十三水：在此模式里有大小王两张牌当作癞子牌使用。" +
                "\n\n纯一色十三水：在此模式里所有的牌都只有一种花色，根据牌型比较大小，花色可自选。";
            _super.prototype.preShow.call(this, data);
        };
        MoShiShuoMingModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        return MoShiShuoMingModule;
    }(PopModuleView));
    game.MoShiShuoMingModule = MoShiShuoMingModule;
    __reflect(MoShiShuoMingModule.prototype, "game.MoShiShuoMingModule");
})(game || (game = {}));
//# sourceMappingURL=MoShiShuoMingModule.js.map