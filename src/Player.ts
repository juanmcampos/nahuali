module Nahuali {
    
    export class Player extends Phaser.Sprite {
        
        directionVelocity: number = 500;
        flipFlop: boolean = false;
        changeDirection: Phaser.Key;
        test: number;
        limit: number;
        shipTrail: any;
        
        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'player', 0);

            this.anchor.setTo(0.5, 0);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            
            game.physics.enable(this,Phaser.Physics.ARCADE);
            this.body.collideWorldBounds = true;
            this.anchor.setTo(0.5,0.5);
            

            game.add.existing(this);
            
            this.changeDirection = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
            
            this.shipTrail = game.add.emitter(this.x - 10,this.y,1000);
            this.shipTrail.width = 10;
            
            
            //this.shipTrail.height = 10;
            this.shipTrail.makeParticles('bullet');
            this.shipTrail.setXSpeed(20,-20);
            this.shipTrail.setYSpeed(170,150);
            this.shipTrail.setRotation(50,-50);
            this.shipTrail.setAlpha(1,0.01,800);
            this.shipTrail.setScale(4,5,4,5,2000,Phaser.Easing.Quintic.Out);
            this.shipTrail.start(false,5000,10);


        }
        
        update() {
            
             
            if (this.changeDirection.isDown){
                    if (!this.flipFlop) {
                        console.log("ok");
                        this.directionVelocity *= -1;
                        this.flipFlop = true;
                        this.game.add.tween(this).to( { angle: 45 }, 2000, Phaser.Easing.Linear.None, true);
                    }
                }
            
                if (this.changeDirection.isUp) {
                    this.flipFlop = false;
                }
                 
                if(this.test<360){
                    this.test++;
                }else{
                    this.test=0;
                }
                
                this.body.velocity.y = this.directionVelocity;
                console.log(this.body.position.x)
                if(this.body.position.x < 300){
                    this.body.velocity.x = 50;
                }

                 this.shipTrail.x = this.x;
                 this.shipTrail.y = this.y;
            
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