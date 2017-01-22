module Nahuali {
    
    export class EnemieSkull extends Phaser.Sprite {
        

        
        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'enemySkull', 0);
            
            game.physics.enable(this,Phaser.Physics.ARCADE);

            this.anchor.setTo(0.5, 0);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            
           // var alien = aliens.create(200 + x * 48, y * 50, 'alien');
            this.name = 'alien' + x.toString() + y.toString();
            this.checkWorldBounds = true;
            this.events.onOutOfBounds.add(this.alienOut, this);
            
            /*this.body.collideWorldBounds = true;
            this.anchor.setTo(0.5,0.5);*/
            
            game.add.existing(this);

        }
        
        update() { 
            this.body.velocity.y = 50 + Math.random() * 200;
        }
        
        alienOut(alien) {

            //  Move the alien to the top of the screen again
            alien.reset(alien.x, 0);
        
            //  And give it a new random velocity
            alien.body.velocity.y = 50 + Math.random() * 200;
        
        }
        
    }

}