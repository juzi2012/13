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
    var ChaKanMaPanel = (function (_super) {
        __extends(ChaKanMaPanel, _super);
        function ChaKanMaPanel() {
            var _this = _super.call(this) || this;
            _this.code = "";
            return _this;
        }
        ChaKanMaPanel.prototype.initContent = function () {
            this.content = UI.ZhanJi.UI_BoFangMa.createInstance();
        };
        Object.defineProperty(ChaKanMaPanel.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ChaKanMaPanel.prototype.preShow = function (data) {
            this.mContent.m_btn_cancel.addClickListener(this.cancelHandle, this);
            this.mContent.m_btn_ok.addClickListener(this.okHandle, this);
            this.mContent.m_txt_input.addEventListener(egret.TextEvent.CHANGE, this.inputHandle, this);
            this.mContent.m_txt_input.alpha = 0;
            this.preShowCpl();
        };
        ChaKanMaPanel.prototype.inputHandle = function (evt) {
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
        ChaKanMaPanel.prototype.cancelHandle = function () {
            ModuleMgr.ins.closeModule(ModuleEnum.BOFANGMA);
        };
        ChaKanMaPanel.prototype.okHandle = function () {
            if (this.code.length < 6) {
                game.AlertUtil.floatMsg("回放码不正确，请重新输入.");
            }
            else {
                HttpAPI.HttpGET(HttpURLs.huifang, { 'uid': game.GameModel.ins.uid, 'id': this.code }, this.onCallBack, this.onError, this);
            }
        };
        ChaKanMaPanel.prototype.onCallBack = function (evt) {
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.data == null) {
                game.AlertUtil.floatMsg(callBackJson.err);
            }
            else {
                var data = JSON.parse(callBackJson.data['msg']);
                this.round = new game.Round();
                this.round.init(data);
                ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN, ModuleEnum.REPLAY, this.round);
            }
        };
        ChaKanMaPanel.prototype.onError = function (evt) {
        };
        return ChaKanMaPanel;
    }(PopModuleView));
    game.ChaKanMaPanel = ChaKanMaPanel;
    __reflect(ChaKanMaPanel.prototype, "game.ChaKanMaPanel");
})(game || (game = {}));
//# sourceMappingURL=ChaKanMaPanel.js.map