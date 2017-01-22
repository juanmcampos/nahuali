module Nahuali {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        player: Nahuali.Player;
        enemySkull: Nahuali.EnemieSkull;
        flameEnemy: Nahuali.FlameEnemie;
        map: Phaser.Tilemap;
        layer1: Phaser.TilemapLayer;
        enemiesGroup: Phaser.Group;

         timer:any = 0;
         timer2:any = 0;
         music:any;

        create() {
            
            this.music = this.game.add.audio('level1');
            this.music.play();
            
            //this.game.world.setBounds(0, 0, 800, 600);
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            
            this.map = this.game.add.tilemap("map");
            this.map.addTilesetImage("tiles");
            // Phaser.Canvas.setSmoothingEnabled(this.game.context, false);
            
            this.layer1 = this.map.createLayer("background");
            //this.layer = this.map.createLayer('Tile Layer 1');
            this.layer1.scale.set(7.5);
            this.layer1.resizeWorld();
            
            this.player = new Player(this.game, 130, 284);
            
            this.enemiesGroup = this.game.add.group();
            


           /* this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: 1}, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            this.input.onDown.addOnce(this.fadeOut, this);*/
            this.layer1.fixedToCamera = false;
            this.startGame();
            this.game.time.reset();

        }
        
        update(){
             this.layer1.position.x -=4;
             //for (var x = 0; x < 10; x++){

            this.timer += this.game.time.elapsed; //this is in ms, not seconds. 
            this.timer2 += this.game.time.elapsed;
           let timeok = Math.floor(Math.random() * 1200 ) + 900;
           let timeok2 = Math.floor(Math.random() * 8000 ) + 5300;
            if (this.timer >= timeok) {
                this.timer -= timeok;
                var num1 = Math.floor(Math.random() * 800 ) + 700;
                var num2 = Math.floor(Math.random() * 600) + 10;
                let tipopiedra=Math.floor(Math.random() * 4) + 1;
                let asset:string ="enemySkull";
                switch(tipopiedra){
                    case 1:
                        asset = "piedra1";
                        break;
                    case 2:
                        asset = "piedra2";
                        break;
                    case 3:
                        asset = "piedra3";
                        break;
                    case 4:
                        asset = "piedra4";
                        break;
                    default:
                        
                }
                this.enemySkull = new EnemieSkull(this.game,num1,num2,asset);
                //this.flameEnemy = new FlameEnemie(this.game,(Math.floor(Math.random() * 800 ) + 700),(Math.floor(Math.random() * 600) + 10));
                this.enemiesGroup.add(this.enemySkull);
                
            }
            
             if (this.timer2 >= timeok2) {
                this.timer2 -= timeok2;
                this.flameEnemy = new FlameEnemie(this.game,(Math.floor(Math.random() * 800 ) + 700),(Math.floor(Math.random() * 600) + 10));
                console.log("aaaaa")
                this.enemiesGroup.add(this.flameEnemy);
             }
            
            this.game.physics.arcade.overlap(this.player, this.enemiesGroup, this.touchEnemy, null, this);
    
            this.game.debug.text('Score: ' + this.game.time.totalElapsedSeconds().toFixed(2), 32, 32);
            //}
        }

        fadeOut() {
            this.music.stop();
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);

        }

        startGame() {
           

           // this.game.state.start('Level1', true, false);

        }
        
        touchEnemy (player, enemy) {
    
            this.game.time.reset();
            player.kill();
        
        }

    }

}