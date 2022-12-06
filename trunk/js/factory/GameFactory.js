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

    static createScroller(parameter){
        var s = new Scroller();

        s.scaleX = parameter.x;
        s.scaleY = parameter.y;

        s.scaleWidth = 0.3;
        s.scaleHeight = 10;
        s.scaleHeightBar = 1;

        s.width = parameter.width * tileSize;
        s.height = parameter.height * tileSize

        s.wideX = parameter.wideX;
        s.wideY = parameter.wideY;
        s.yPos = parameter.wideY * tileSize;

        if(isWideScreen && s.wideX && s.wideY){
            s.x = s.scaleX * tileSize;
            s.y = s.scaleY * tileSize;
        }else{
            s.x = s.wideX * tileSize;
            s.y = s.wideY * tileSize;
        }

        return s;
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

        l.fillerKlein = GuiFactory.createButton({x: 2, y: 15, wideX: 16, wideY: 4.9, width: 3, height: 1, btnColor: 150});
        l.fillerGross = GuiFactory.createButton({x: 2, y: 15, wideX: 16, wideY: 4.9, width: 3, height: 2, btnColor: 150});
        
        l.entries = [];

        return l;
    }
}