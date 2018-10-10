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
    var RankItem = (function (_super) {
        __extends(RankItem, _super);
        function RankItem() {
            return _super.call(this) || this;
        }
        RankItem.prototype.setData = function (id, data) {
            this.m_txt_name.text = data['uname'];
            this.m_txt_score.text = data['wnum'] + "/" + data['num'];
            if (id == 0) {
                this.m_c1.selectedIndex = 0;
                this.m_img_rank.url = "ui://ljka2qsxdu504";
            }
            else if (id == 1) {
                this.m_c1.selectedIndex = 0;
                this.m_img_rank.url = "ui://ljka2qsxdu503";
            }
            else if (id == 2) {
                this.m_c1.selectedIndex = 0;
                this.m_img_rank.url = "ui://ljka2qsxdu502";
            }
            else {
                this.m_c1.selectedIndex = 1;
                this.m_txt_rank.text = (id + 1).toString();
            }
            this.m_head.setURL(data["header"]);
            // this.m_head.url="http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";//data['header'];
        };
        return RankItem;
    }(UI.Rank.UI_RankItem));
    game.RankItem = RankItem;
    __reflect(RankItem.prototype, "game.RankItem");
})(game || (game = {}));
//# sourceMappingURL=RankItem.js.map