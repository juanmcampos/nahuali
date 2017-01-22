module Nahuali {

    export class GameOver extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        emitter: Phaser.Particles.Arcade.Emitter;
        anim: any;
        create() {
            

            this.background = this.add.sprite(150, 150, 'gameoverImg');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            
            

            this.add.tween(this.background).to({ alpha: 1}, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 290 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            this.input.onDown.addOnce(this.fadeOut, this);
            
             this.emitter = this.game.add.emitter(this.game.world.centerX, 0, 400);

	this.emitter.width = this.game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.

	this.emitter.makeParticles('rain');

	this.emitter.minParticleScale = 0.1;
	this.emitter.maxParticleScale = 0.5;

	this.emitter.setYSpeed(300, 500);
	this.emitter.setXSpeed(-5, 5);

	this.emitter.minRotation = 0;
	this.emitter.maxRotation = 0;

	this.emitter.start(false, 1600, 5, 0);
	
	        this.anim = this.background.animations.add('walk');
            this.anim.play(10, true);

        }

        fadeOut() {

            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);

        }

        startGame() {

             this.game.state.start('Level1', true, false);

        }

    }

}