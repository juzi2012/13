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
    var Pork = (function (_super) {
        __extends(Pork, _super);
        function Pork() {
            var _this = _super.call(this) || this;
            _this.selectState = false;
            _this.touchable = true;
            return _this;
        }
        Pork.prototype.setData = function (vo) {
            this.vo = vo;
            this.m_txt1.font = this.vo.font;
            this.m_txt2.font = this.vo.font;
            this.m_txt_type1.text = String(this.vo.type);
            this.m_txt_type2.text = String(this.vo.type);
            this.m_txt1.text = this.vo.showStr;
            this.m_txt2.text = this.vo.showStr;
            this.m_ctrlstate.selectedIndex = 1;
            if (this.vo.type == 5) {
                this.m_txt1.text = '';
                this.m_txt2.text = '';
                this.m_img_joke.visible = true;
            }
            else {
                this.m_img_joke.visible = false;
            }
            this.resetState();
        };
        Pork.prototype.changeSelectState = function () {
            this.selectState = !this.selectState;
            if (this.selectState == true) {
                this.y = -30;
            }
            else {
                this.y = 0;
            }
        };
        Pork.prototype.resetState = function () {
            this.selectState = false;
            this.y = 0;
        };
        Pork.prototype.showResult = function (vo) {
            this.vo = vo;
            this.m_txt1.font = this.vo.font;
            this.m_txt2.font = this.vo.font;
            this.m_txt_type1.text = String(this.vo.type);
            this.m_txt_type2.text = String(this.vo.type);
            this.m_txt1.text = this.vo.showStr;
            this.m_txt2.text = this.vo.showStr;
            this.m_ctrlstate.selectedIndex = 1;
            if (this.vo.type == 5) {
                this.m_txt1.text = '';
                this.m_txt2.text = '';
                this.m_img_joke.visible = true;
            }
            else {
                this.m_img_joke.visible = false;
            }
        };
        return Pork;
    }(UI.Game.UI_Pork));
    game.Pork = Pork;
    __reflect(Pork.prototype, "game.Pork");
})(game || (game = {}));
//# sourceMappingURL=Pork.js.map