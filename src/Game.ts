/// <reference path="../tsDefinitions/phaser.d.ts" />

class Game{
    
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', this);
    }

    game: Phaser.Game;

    platforms: any;
    player: any;
    stars: any;
    score: any;
    scoreText: any;

    preload() {
        //this.game.load.image('logo', 'phaser2.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

    

    create() {
        this.game.add.sprite(0, 0, 'star');

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.add.sprite(0, 0, 'sky');

        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;

        var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;

        var ledge = this.platforms.create(400, 400, 'ground');
        ledge.body.immovable = true;
        ledge = this.platforms.create(-150, 250, 'ground');
        ledge.body.immovable = true;

        // The player and its settings
        this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

        //  We need to enable physics on the player
        this.game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);

        this.stars = this.game.add.group();
        this.stars.enableBody = true;

        for (var i = 0; i < 12; i++){
            var star = this.stars.create(i * 70, 0, 'star');
            star.body.gravity.y = 6;
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

        this.score = 0;
        this.scoreText = this.game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#000'});
    }


    update() {
        this.game.physics.arcade.collide(this.player, this.platforms);
        this.game.physics.arcade.collide(this.stars, this.platforms);

        this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);

        this.player.body.velocity.x = 0;

        var cursors = this.game.input.keyboard.createCursorKeys();

        if (cursors.left.isDown) {
            this.player.body.velocity.x = -150;
            this.player.animations.play('left');
        } else if (cursors.right.isDown) {
            this.player.body.velocity.x = 150;
            this.player.animations.play('right');
        } else {
            this.player.animations.stop;
            this.player.frame = 4;
        }

        if (cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -350;
        }

    }

    collectStar(player, star) {
        star.kill();
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
    }
    
}

window.onload = () => {
	var game = new Game();
}