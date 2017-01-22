module Nahuali {

    export class GgjSplash extends Phaser.State {
        
        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        emitter: Phaser.Particles.Arcade.Emitter;
        create() {
            

            this.background = this.add.sprite(0, 0, 'ggj');
            this.background.alpha = 0;


        
           var tw= this.add.tween(this.background).to({ alpha: 1}, 2000, Phaser.Easing.Bounce.InOut, true);

            tw.onComplete.add(this.fadeOut, this);
            
            


        }

        fadeOut() {

           var tween = this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);

        }

        startGame() {

             this.game.state.start('MainMenu', true, false);
        }
        
    }
    
}