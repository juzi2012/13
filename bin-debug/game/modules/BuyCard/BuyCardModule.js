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
            this.mContent.m_txt_input.alpha = 0;
            _super.prototype.preShow.call(this, data);
        };
        BuyCardModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
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
        return BuyCardModule;
    }(PopModuleView));
    game.BuyCardModule = BuyCardModule;
    __reflect(BuyCardModule.prototype, "game.BuyCardModule");
})(game || (game = {}));
//# sourceMappingURL=BuyCardModule.js.map