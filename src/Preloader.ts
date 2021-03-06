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
            this.load.image('tail','assets/tail.png');
            this.load.spritesheet('enemySkull', 'assets/simon.png', 58, 96, 5);
            this.load.spritesheet('piedra1', 'assets/piedra1.png', 70, 70);
            this.load.spritesheet('piedra2', 'assets/piedra2.png', 34, 33);
            this.load.spritesheet('piedra3', 'assets/piedra3.png', 80, 55);
            this.load.spritesheet('piedra4', 'assets/piedra4.png', 17, 25);
            
            this.load.spritesheet('skull', 'assets/skull.png', 64, 71);
            this.game.load.spritesheet('rain', 'assets/rain.png', 17, 17);
            
            this.game.load.tilemap('map', 'assets/tileMaps/map/level1.json', null, Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles', 'assets/tileMaps/tile/tiles.png');
            this.game.load.image('bullet', 'assets/bullet.png');
            this.game.load.spritesheet('gameoverImg', 'assets/gameover.png', 570, 135);
            this.game.load.image('credits', 'assets/creditos.png');
            //this.game.load.audio('main', ['assets/audio/MysticForestHeatleyBros.mp3']);
            this.game.load.audio('level1', ['assets/audio/BambooJungleHeatleyBros.mp3']);
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