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
    var SingleResultItem = (function (_super) {
        __extends(SingleResultItem, _super);
        function SingleResultItem() {
            return _super.call(this) || this;
        }
        SingleResultItem.prototype.setData = function (data) {
            this.porkVOArr = data.cards;
            // this.m_head.url="http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
            this.m_txt_name.text = game.GameModel.ins.roomModel.getUserById(data.uid).name;
            this.m_txt_id.text = "ID:" + data.uid;
            this.m_head.setURL(game.GameModel.ins.roomModel.getUserById(data.uid).avatar);
            var score = data.sc.toString();
            if (data.sc > 0) {
                score = "+" + score;
            }
            this.m_txt_score.text = score;
            this.m_list_top.itemRenderer = this.RenderListItem1;
            this.m_list_top.callbackThisObj = this;
            this.m_list_top.numItems = 3; //this.porkVOArr.length;
            this.m_list_mid.itemRenderer = this.RenderListItem2;
            this.m_list_mid.callbackThisObj = this;
            this.m_list_mid.numItems = 5; //this.porkVOArr.length;
            this.m_list_down.itemRenderer = this.RenderListItem3;
            this.m_list_down.callbackThisObj = this;
            this.m_list_down.numItems = 5; //this.porkVOArr.length;
        };
        SingleResultItem.prototype.setDataPlay = function (data) {
            this.juplayer = data;
            // this.m_head.url="http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
            this.m_txt_name.text = this.juplayer.name;
            this.m_txt_id.text = "ID:" + this.juplayer.id;
            var score = this.juplayer.sc.toString();
            if (data.sc > 0) {
                score = "+" + score;
            }
            this.m_txt_score.text = score;
            this.m_list_top.itemRenderer = this.RenderListItem11;
            this.m_list_top.callbackThisObj = this;
            this.m_list_top.numItems = 3; //this.porkVOArr.length;
            this.m_list_mid.itemRenderer = this.RenderListItem22;
            this.m_list_mid.callbackThisObj = this;
            this.m_list_mid.numItems = 5; //this.porkVOArr.length;
            this.m_list_down.itemRenderer = this.RenderListItem33;
            this.m_list_down.callbackThisObj = this;
            this.m_list_down.numItems = 5; //this.porkVOArr.length;
        };
        SingleResultItem.prototype.RenderListItem1 = function (index, _item) {
            var item = _item;
            item.setData(this.porkVOArr[index]);
        };
        SingleResultItem.prototype.RenderListItem2 = function (index, _item) {
            var item = _item;
            item.setData(this.porkVOArr[3 + index]);
        };
        SingleResultItem.prototype.RenderListItem3 = function (index, _item) {
            var item = _item;
            item.setData(this.porkVOArr[8 + index]);
        };
        SingleResultItem.prototype.RenderListItem11 = function (index, _item) {
            var item = _item;
            item.setData(this.juplayer.topCards[index]);
        };
        SingleResultItem.prototype.RenderListItem22 = function (index, _item) {
            var item = _item;
            item.setData(this.juplayer.midCards[index]);
        };
        SingleResultItem.prototype.RenderListItem33 = function (index, _item) {
            var item = _item;
            item.setData(this.juplayer.downCards[index]);
        };
        return SingleResultItem;
    }(UI.Result.UI_SingleResultItem));
    game.SingleResultItem = SingleResultItem;
    __reflect(SingleResultItem.prototype, "game.SingleResultItem");
})(game || (game = {}));
//# sourceMappingURL=SingleResultItem.js.map