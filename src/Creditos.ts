module Nahuali{
    export class Creditos extends Phaser.State {
        background: Phaser.Sprite;
        
        create(){
            this.background = this.add.sprite(0, 0, 'credits');
            this.spacePress = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            
            this.spacePress.onDown.addOnce(this.startGame, this);
        }
        
        startGame(){
            this.game.state.start('GgjSplash', true, false);
        }
    }
}
