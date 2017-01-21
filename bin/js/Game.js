var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    var game = new Nahuali.Game();
};
var Nahuali;
(function (Nahuali) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Boot', Nahuali.Boot, false);
            _this.state.add('Preloader', Nahuali.Preloader, false);
            _this.state.add('MainMenu', Nahuali.MainMenu, false);
            console.log(_this);
            _this.state.start('Preloader');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    Nahuali.Game = Game;
})(Nahuali || (Nahuali = {}));
//# sourceMappingURL=Game.js.map