/**
 * Created by j514340 on 06.04.2020.
 */
"use strict";

class GameFactory{
    
    static createBenefitPopUp(parameter){
        //TODO implement
        alert('todo');
        return null;
    }
    
    static createField(parameter){
        var f = new Field();
        
        f.field = LevelLoader.loadLevelIntoField(parameter.level, parameter.x, parameter.y, parameter.wideX, parameter.wideY);
        
        return f;
    }
    
    static createPlayer(parameter){
        var p = new Player();
        
        p.startPosX = parameter.x;
        p.startPosY = parameter.y;

        p.wideX = parameter.wideX;
        p.wideY = parameter.wideY;
        
        p.dir = parameter.dir;
        
        p.playfield = parameter.playfield;
        
        return null;
    }
    
    static createTile(parameter){
        var t = new Tile();
        
        t.scaleX = parameter.x;
        t.scaleY = parameter.y;
        
        t.wideX = parameter.wideX;
        t.wideY = parameter.wideY;
        
        if(isWideScreen && t.wideX && t.wideY){
            t.x = t.scaleX * tileSize;
            t.y = t.scaleY * tileSize;
        }else{
            t.x = t.wideX * tileSize;
            t.y = t.wideY * tileSize;
        }
        
        t.id = parameter.id;
        t.sprite = parameter.sprite;
        
       // t.benefit = (t.id === 4) ? t.addBenefit() : null;
        
        return t;
    }

    static createCommandList(parameter){
        var l = new CommandList();

        l.scaleX = parameter.x;
        l.scaleY = parameter.y;

        l.scaleWidth = 3;
        l.scaleHeight = 10;

        l.wideX = parameter.wideX;
        l.wideY = parameter.wideY;

        if(isWideScreen && l.wideX && l.wideY){
            l.x = l.scaleX * tileSize;
            l.y = l.scaleY * tileSize;
        }else{
            l.x = l.wideX * tileSize;
            l.y = l.wideY * tileSize;
        }

        l.width = l.scaleWidth*tileSize;
        l.height = l.scaleHeight*tileSize;
        
        l.entries = [];

        return l;
    }
    
}