module Nahuali {
    
    export class Player extends Phaser.Sprite {
        
        directionVelocity: number = 350;
        flipFlop: boolean = false;
        changeDirection: Phaser.Key;
        limit: number;
        shipTrail: any;
        goUp:boolean =false;
        startAngle:number = 135;
        
        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'player', 0);

            //this.anchor.setTo(0.5, 0);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            
            
            
            game.physics.enable(this,Phaser.Physics.ARCADE);
            //this.body.collideWorldBounds = true;
            //this.anchor.setTo(0.5,0.5);
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            
            this.anchor.set(0.5, 0.5);
             game.physics.arcade.enable(this);
            
            this.game.physics.arcade.enable(this);
            
            game.add.existing(this);
            
            this.scale.setTo(0.3, 0.3);
            
            this.changeDirection = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            
            this.shipTrail = game.add.emitter(this.x - 10,this.y,200);
            //this.shipTrail.width = 10;
            
            
            //this.shipTrail.height = 10;
            this.shipTrail.makeParticles('player');
            this.shipTrail.setXSpeed(-500);
            this.shipTrail.setYSpeed(0);
            this.shipTrail.gravity = 0;
            this.shipTrail.emitX = this.x - 25;
            this.shipTrail.emitY = this.y;
            //this.shipTrail.setYSpeed(170,150);
            //this.shipTrail.setRotation(50,-50);
            //this.shipTrail.setAlpha(1,0.01,800);
            //this.shipTrail.setScale(2,2,2,2,5000);
            
            this.shipTrail.setAlpha(1, 0, 500);
            this.shipTrail.setScale(0.25, 0, 0.25, 0, 1500);
            
            this.shipTrail.start(false,3000,1);
            
            

            this.game.add.tween(this).to({angle:'135'}, 1, Phaser.Easing.Linear.None, true, 0);
         
            this.changeDirection.onDown.add(()=>{
                        
                        if(this.startAngle==135){
                            this.game.add.tween(this).to({angle:'-90'}, 150, Phaser.Easing.Linear.None, true, 0);
                            this.startAngle = -90;
                       } else{
                           this.game.add.tween(this).to({angle:'90'}, 150, Phaser.Easing.Linear.None, true, 0);
                           this.startAngle=135;
                       }
                
            });
            
            this.events.onKilled.add(() => {
                 this.game.state.start('GameOver', true, false);
            });
       
        }
        
        update() {
            
            

             
            if (this.changeDirection.isDown){
                

                    
                    if (!this.flipFlop) {
                      //  this.scale.y *= 1;
                        //this.anchor.setTo(1, .5);
                        this.directionVelocity *= -1;
                        this.flipFlop = true;
                        
                       //this.game.add.tween(this).to( { angle: -225 }, 50, Phaser.Easing.Linear.None, true);
                    }
                }
            
                if (this.changeDirection.isUp) {
                    this.flipFlop = false;
                   // this.scale.y *= -1;
                    //this.game.add.tween(this).to({angle:'-90'}, 50, Phaser.Easing.Linear.None, true, 100);
                    //this.game.add.tween(this).to( { angle: 45 }, 50, Phaser.Easing.Linear.None, true);
                }
                
 
                 

                
                this.body.velocity.y = this.directionVelocity;
                
                
                
                if(this.body.position.x>=50){
                    this.body.position.x=50
                }
    
                 this.shipTrail.x = this.x;
                 this.shipTrail.y = this.y;
                 
                 this.shipTrail.forEach(function(item) {  item.rotation = this.rotation;}, this);
            
           /* this.game.time.events.repeat(25, 80, function() {
                this.body.velocity.y = Math.sin(this.game.time.now) * 25;
                console.log(this.body.velocity.y)
            }, this);*/

            /*this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

                this.body.velocity.x = -150;
                this.animations.play('walk');

                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = 150;
                this.animations.play('walk');

                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else {
                this.animations.frame = 0;
            }*/

        }
        
    }

}