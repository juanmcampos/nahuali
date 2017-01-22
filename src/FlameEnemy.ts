module Nahuali {
    
    export class FlameEnemie extends Phaser.Sprite {
        

        
        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'skull', 0);
            
            game.physics.enable(this,Phaser.Physics.ARCADE);

            this.anchor.setTo(0.5, 0);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            
           // var alien = aliens.create(200 + x * 48, y * 50, 'alien');
            this.name = 'alien' + x.toString() + y.toString();
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            //this.events.onOutOfBounds.add(this.alienOut, this);
            this.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7,8]);
            this.animations.play('walk', 20, true);
            //this.body.allowGravity = false;
            /*this.body.collideWorldBounds = true;
            this.anchor.setTo(0.5,0.5);*/
            
            game.add.existing(this);

        }
        
        update() { 
            this.body.velocity.x = -300;
        }
        
        alienOut(alien) {

            
            alien.reset(alien.x, 0);
        
            alien.body.velocity.x = -300;//50 + Math.random() * 200;
        
        }
        
    }

}