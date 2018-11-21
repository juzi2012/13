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
    var RankModule = (function (_super) {
        __extends(RankModule, _super);
        function RankModule() {
            return _super.call(this) || this;
        }
        RankModule.prototype.initContent = function () {
            this.content = UI.Rank.UI_RankModule.createInstance();
        };
        Object.defineProperty(RankModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        RankModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80du5019";
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.setVirtual();
            HttpAPI.HttpGET("http://" + App.GlobalData.SocketServer + ":8883/rank", { 'uid': game.GameModel.ins.uid }, this.onCallBack, this.onError, this);
        };
        RankModule.prototype.onCallBack = function (evt) {
            this.preShowCpl();
            var callBackJson = JSON.parse(evt.target.response);
            if (callBackJson.err == "") {
                this.result = callBackJson.data;
                this.mContent.m_list.numItems = this.result.length;
            }
            else {
                console.log(callBackJson.err);
            }
            this.mContent.m_txt_name.text = game.GameModel.ins.uname;
            this.mContent.m_img_outrank.visible = true;
            for (var i = 0; i < this.result.length; i++) {
                if (this.result[i]['uid'] == game.GameModel.ins.uid) {
                    this.mContent.m_img_outrank.visible = false;
                    var rankTxt = (i + 1).toString();
                    this.mContent.m_txt_rank.text = "第" + rankTxt + "名";
                    this.mContent.m_txt_name.text = this.result[i]['uname'];
                    this.mContent.m_txt_score.text = this.result[i]['wnum'] + "/" + this.result[i]['num'];
                    break;
                }
            }
            this.mContent.m_head.setURL(game.GameModel.ins.avatar);
        };
        RankModule.prototype.onError = function (evt) {
        };
        RankModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        RankModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(index, this.result[index]);
        };
        return RankModule;
    }(PopModuleView));
    game.RankModule = RankModule;
    __reflect(RankModule.prototype, "game.RankModule");
})(game || (game = {}));
//# sourceMappingURL=RankModule.js.map