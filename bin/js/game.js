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
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
            }
            else {
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    Nahuali.Boot = Boot;
})(Nahuali || (Nahuali = {}));
var Nahuali;
(function (Nahuali) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Boot', Nahuali.Boot, false);
            _this.state.add('Preloader', Nahuali.Preloader, false);
            _this.state.add('MainMenu', Nahuali.MainMenu, false);
            _this.state.add('Level1', Nahuali.Level1, false);
            _this.state.start('Boot');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    Nahuali.Game = Game;
})(Nahuali || (Nahuali = {}));
var Nahuali;
(function (Nahuali) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.player = new Nahuali.Player(this.game, 130, 284);
            this.startGame();
        };
        Level1.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        Level1.prototype.startGame = function () {
        };
        return Level1;
    }(Phaser.State));
    Nahuali.Level1 = Level1;
})(Nahuali || (Nahuali = {}));
var Nahuali;
(function (Nahuali) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 290 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    }(Phaser.State));
    Nahuali.MainMenu = MainMenu;
})(Nahuali || (Nahuali = {}));
var Nahuali;
(function (Nahuali) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            var _this = _super.call(this, game, x, y, 'player', 0) || this;
            _this.directionVelocity = 500;
            _this.flipFlop = false;
            _this.anchor.setTo(0.5, 0);
            game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.anchor.setTo(0.5, 0.5);
            game.add.existing(_this);
            _this.changeDirection = _this.game.input.keyboard.addKey(Phaser.Keyboard.S);
            return _this;
        }
        Player.prototype.update = function () {
            if (this.changeDirection.isDown) {
                if (!this.flipFlop) {
                    console.log("ok");
                    this.directionVelocity *= -1;
                    this.flipFlop = true;
                    game.add.tween(this).to({ angle: 45 }, 2000, Phaser.Easing.Linear.None, true);
                }
            }
            if (this.changeDirection.isUp) {
                this.flipFlop = false;
            }
            if (this.test < 360) {
                this.test++;
            }
            else {
                this.test = 0;
            }
            this.body.velocity.y = this.directionVelocity;
            console.log(this.body.position.x);
            if (this.body.position.x < 300) {
                this.body.velocity.x = 50;
            }
        };
        return Player;
    }(Phaser.Sprite));
    Nahuali.Player = Player;
})(Nahuali || (Nahuali = {}));
var Nahuali;
(function (Nahuali) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/logo.png');
            this.load.audio('music', 'assets/title.mp3', true);
            this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
            this.load.image('level1', 'assets/level1.png');
            this.load.image('player', 'assets/player.png');
            this.game.load.tilemap('map', 'assets/tileMaps/tile/tile_property.json');
            this.game.load.image('tiles', 'assets/tileMaps/map/gridtiles.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    }(Phaser.State));
    Nahuali.Preloader = Preloader;
})(Nahuali || (Nahuali = {}));
//# sourceMappingURL=game.js.map