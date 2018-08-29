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
    var ZhanJiDetailModule = (function (_super) {
        __extends(ZhanJiDetailModule, _super);
        function ZhanJiDetailModule() {
            return _super.call(this) || this;
        }
        ZhanJiDetailModule.prototype.initContent = function () {
            this.content = UI.ZhanJi.UI_ZhanJiDetail.createInstance();
        };
        Object.defineProperty(ZhanJiDetailModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ZhanJiDetailModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80rezhz";
            if (data != null) {
                this.round = data;
            }
            this.mContent.m_btn_close.addClickListener(this.doClose, this);
            this.mContent.m_btn_sort.addClickListener(this.checkSort, this);
            this.mContent.m_txt_rid.text = "房号:" + this.round.Rd;
            this.mContent.m_txt_jid.text = "局数:" + this.round.Jn + "局";
            this.mContent.m_txt_time.text = Utils.timetrans(this.round.Tm * 1000);
            for (var i = 0; i < 6; i++) {
                if (this.round.jus[0].players[i] != null) {
                    this.mContent["m_txt_name" + (i + 1)].text = this.round.jus[0].players[i].name;
                    this.mContent["m_txt_score" + (i + 1)].text = "ID:" + this.round.jus[0].players[i].id.toString();
                }
                else {
                    this.mContent["m_txt_name" + (i + 1)].text = "";
                    this.mContent["m_txt_score" + (i + 1)].text = "";
                }
            }
            for (var item in this.round.playerFinalData) {
                if (this.round.playerFinalData[item].uid == game.GameModel.ins.uid) {
                    if (this.round.playerFinalData[item].sc > 0) {
                        this.mContent.m_img_win.url = "ui://lxifvkdup0d65";
                    }
                    else if (this.round.playerFinalData[item].sc == 0) {
                        this.mContent.m_img_win.url = "ui://lxifvkdup0d63";
                    }
                    else {
                        this.mContent.m_img_win.url = "ui://lxifvkdup0d64";
                    }
                    break;
                }
            }
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = this.round.jus.length;
            _super.prototype.preShow.call(this, data);
        };
        ZhanJiDetailModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        ZhanJiDetailModule.prototype.RenderListItem = function (index, _item) {
            var mailItem = _item;
            mailItem.setData(this.round.jus[index]);
        };
        ZhanJiDetailModule.prototype.checkSort = function () {
            if (this.round.jiesanId != "") {
                ModuleMgr.ins.showModule(ModuleEnum.JIESANSORT, this.round);
            }
            else {
                game.AlertUtil.floatMsg("房间没有解散");
            }
        };
        ZhanJiDetailModule.prototype.onCloseClick = function () {
            ModuleMgr.ins.closeModule(ModuleEnum.ZHANJI);
            _super.prototype.onCloseClick.call(this);
        };
        ZhanJiDetailModule.prototype.doClose = function () {
            ModuleMgr.ins.closeModule(ModuleEnum.ZHANJIDETAIL);
        };
        return ZhanJiDetailModule;
    }(PopModuleView));
    game.ZhanJiDetailModule = ZhanJiDetailModule;
    __reflect(ZhanJiDetailModule.prototype, "game.ZhanJiDetailModule");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiDetailModule.js.map