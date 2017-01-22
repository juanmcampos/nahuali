module Nahuali {
    
    export class EnemieSkull extends Phaser.Sprite {
        

        
        constructor(game: Phaser.Game, x: number, y: number, asset?:string ) {

            super(game, x, y,(asset===undefined)?'enemySkull':asset, 0);
            
            game.physics.enable(this,Phaser.Physics.ARCADE);

            this.anchor.setTo(0.5, 0);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            
           // var alien = aliens.create(200 + x * 48, y * 50, 'alien');
            this.name = 'alien' + x.toString() + y.toString();
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            //this.events.onOutOfBounds.add(this.alienOut, this);
            //this.body.allowGravity = false;
            /*this.body.collideWorldBounds = true;
            this.anchor.setTo(0.5,0.5);*/
            
            game.add.existing(this);

        }
        
        update() { 
            this.body.velocity.x = -240;
        }
        
        alienOut(alien) {

            
            alien.reset(alien.x, 0);
        
            alien.body.velocity.x = -240;//50 + Math.random() * 200;
        
        }
        
    }

}