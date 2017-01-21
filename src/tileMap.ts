module Nahuali{
    
    export class Map extends Phaser.Tilemap{
        
        constructor(game: Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number){
            super(game, key, tileWidth, tileHeight, width, height);
        }
        
        
    }
    
}