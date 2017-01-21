module Nahuali{
    
    export class tileMap extends Phaser.tileMap{
        
        constructor(game: Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number){
            super(game, tileWidth, tileHeight, width, height);
        }
        
        
        
    }
    
}