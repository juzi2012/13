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
    var ZhanJiModule = (function (_super) {
        __extends(ZhanJiModule, _super);
        function ZhanJiModule() {
            var _this = _super.call(this) || this;
            _this.curPage = 1;
            return _this;
        }
        ZhanJiModule.prototype.initContent = function () {
            this.content = UI.ZhanJi.UI_ZhanJi.createInstance();
        };
        Object.defineProperty(ZhanJiModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ZhanJiModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5fap";
            HttpAPI.HttpGET("http://" + App.GlobalData.SocketServer + ":8883/zhanji", { 'uid': game.GameModel.ins.uid, 'page': this.curPage }, this.onCallBack, this.onError, this);
            this.mContent.m_list.scrollPane.addEventListener(fairygui.ScrollPane.PULL_UP_RELEASE, this.onPullDownToRefresh, this);
            this.mContent.m_list.setVirtual();
            this.mContent.m_checkother.addClickListener(this.playerOther, this);
        };
        ZhanJiModule.prototype.onPullDownToRefresh = function (evt) {
            var footer = this.mContent.m_list.scrollPane.footer.asCom;
            // footer.getController("c1").selectedIndex = 1;
            this.mContent.m_list.scrollPane.lockFooter(footer.sourceHeight);
            HttpAPI.HttpGET("http://" + App.GlobalData.SocketServer + ":8883/zhanji", { 'uid': game.GameModel.ins.uid, 'page': this.curPage }, this.onCallBackAdd, this.onError, this);
        };
        ZhanJiModule.prototype.playerOther = function () {
            ModuleMgr.ins.showModule(ModuleEnum.BOFANGMA);
        };
        ZhanJiModule.prototype.onCallBack = function (evt) {
            this.preShowCpl();
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.err == "") {
                this.result = callBackJson.data;
            }
            else {
                game.AlertUtil.floatMsg(callBackJson.err);
                this.result = [];
            }
            game.ZhanJiModel.ins.init(this.result);
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = game.ZhanJiModel.ins.rounds.length;
            this.curPage = 2;
        };
        ZhanJiModule.prototype.onCallBackAdd = function (evt) {
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.err == "") {
                this.curPage += 1;
                this.result = this.result.concat(callBackJson.data);
                game.ZhanJiModel.ins.addData(callBackJson.data);
                this.mContent.m_list.numItems += callBackJson.data.length;
            }
            this.mContent.m_list.scrollPane.lockFooter(0);
        };
        ZhanJiModule.prototype.onError = function (evt) {
            this.mContent.m_list.scrollPane.lockFooter(0);
        };
        ZhanJiModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        ZhanJiModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(game.ZhanJiModel.ins.rounds[index]);
        };
        return ZhanJiModule;
    }(PopModuleView));
    game.ZhanJiModule = ZhanJiModule;
    __reflect(ZhanJiModule.prototype, "game.ZhanJiModule");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiModule.js.map