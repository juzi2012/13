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
    var NoticeModule = (function (_super) {
        __extends(NoticeModule, _super);
        function NoticeModule() {
            return _super.call(this) || this;
        }
        NoticeModule.prototype.initContent = function () {
            this.content = UI.Notice.UI_Notice.createInstance();
        };
        Object.defineProperty(NoticeModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        NoticeModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5faq";
            this.noticeData = RES.getRes("notice_json");
            if (this.noticeData != null && this.noticeData.length > 0) {
                this.mContent.m_c1.selectedIndex = 0;
                this.mContent.m_list.itemRenderer = this.RenderListItem;
                this.mContent.m_list.callbackThisObj = this;
                this.mContent.m_list.addEventListener(fairygui.ItemEvent.CLICK, this.onItemClick, this);
                this.mContent.m_list.numItems = this.noticeData.length;
                this.setContent(this.noticeData[0]);
                this.mContent.m_list.selectedIndex = 0;
            }
            else {
                this.mContent.m_c1.selectedIndex = 1;
            }
            _super.prototype.preShow.call(this, data);
        };
        NoticeModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        NoticeModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(this.noticeData[index]);
        };
        NoticeModule.prototype.onItemClick = function (evt) {
            var data = evt.itemObject.m_data;
            this.setContent(data);
        };
        NoticeModule.prototype.setContent = function (data) {
            this.mContent.m_txt_title.text = data.title;
            this.mContent.m_txt_content.text = data.content;
            this.mContent.m_txt_time.text = "";
        };
        return NoticeModule;
    }(PopModuleView));
    game.NoticeModule = NoticeModule;
    __reflect(NoticeModule.prototype, "game.NoticeModule");
})(game || (game = {}));
//# sourceMappingURL=NoticeModule.js.map