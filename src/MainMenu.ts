module Nahuali {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        emitter: Phaser.Particles.Arcade.Emitter;
        spacePress: Phaser.Key;
        
        textoInit: any;
        
        textReflect: any;
        
        timer:any = 0;
        timeOnce:boolean = false;
        
        create() {
            

            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            
            

            this.add.tween(this.background).to({ alpha: 1}, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 290 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

           // this.input.onDown.addOnce(this.fadeOut, this);
            
            this.spacePress = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            
            this.spacePress.onDown.addOnce(this.fadeOut, this);
            
            
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
        	
        	
        	this.textoInit = this.game.add.text(this.game.world.centerX, this.game.world.centerY+200, "- PRESIONA [ ESPACIO ] -");
 this.textoInit.alpha = 0;
            //  Centers the text
            this.textoInit.anchor.set(0.5);
            this.textoInit.align = 'center';

            //  Our font + size
            this.textoInit.font = 'Arial';
            this.textoInit.fontWeight = 'bold';
            this.textoInit.fontSize = 30;
            this.textoInit.fill = '#ffffff';
            
                this.textReflect = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 230, "- PRESIONA [ ESPACIO ] -");
   
    this.textReflect.alpha = 0;
    //  Centers the text
    this.textReflect.anchor.set(0.5);
    this.textReflect.align = 'center';
    this.textReflect.scale.y = -1;

    //  Our font + size
    this.textReflect.font = 'Arial';
    this.textReflect.fontWeight = 'bold';
    this.textReflect.fontSize = 30;
    
    let grd = this.textReflect.context.createLinearGradient(0, 0, 0, this.textoInit.canvas.height);

    //  Add in 2 color stops
    grd.addColorStop(0, 'rgba(255,255,255,0)');
    grd.addColorStop(1, 'rgba(255,255,255,0.28)');

    //  And apply to the Text
    this.textReflect.fill = grd;
    this.textoInit.visible = false;
    this.textReflect.visible = false;

    
    this.add.tween(this.textoInit).to({ alpha: 1}, 2000, Phaser.Easing.Linear.None, true);
    this.add.tween(this.textReflect).to({ alpha: 1}, 2000, Phaser.Easing.Linear.None, true);

    

        }
        
        update(){
            this.timer += this.game.time.elapsed; //this is in ms, not seconds. 
            if(this.timeOnce){
            if (this.timer >= 800) {
                this.timer -= 800;
                this.textoInit.visible = !this.textoInit.visible;
                this.textReflect.visible = !this.textReflect.visible;
            }
            
            }
            else {
                    this.textoInit.visible = false;
                    this.textReflect.visible = false;
                if (this.timer >= 2000) {
                    this.timer -= 2000;
                this.timeOnce = true;
                }
            }
        }
        
        fadeOut() {
            
            this.textoInit.visible = false;
            this.textReflect.visible = false;
            

            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);

        }

        startGame() {
            
             this.game.state.start('Level1', true, false);
        }

    }

}