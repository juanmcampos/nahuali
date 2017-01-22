module Nahuali {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('titlepage', 'assets/sunset.png');
            this.load.image('ggj', 'assets/globalgamejam.png');
            this.load.image('logo', 'assets/logo.png');
            this.load.audio('music', 'assets/title.mp3', true);
            this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
            this.load.image('level1', 'assets/level1.png');
            this.load.image('player','assets/snake.png');
            this.load.spritesheet('enemySkull', 'assets/simon.png', 58, 96, 5);
            this.game.load.spritesheet('rain', 'assets/rain.png', 17, 17);
            
            this.game.load.tilemap('map', 'assets/tileMaps/map/level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles', 'assets/tileMaps/tile/tiles.png');
            this.game.load.image('bullet', 'assets/bullet.png');
            this.game.load.spritesheet('gameoverImg', 'assets/gameover.png', 570, 135);
        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        startMainMenu() {

            this.game.state.start('GgjSplash', true, false);

        }

    }

}