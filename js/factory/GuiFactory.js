/**
 * Created by j514340 on 06.04.2020.
 */
"use strict";


class GuiFactory{

    static createButton(parameter){
        var b = new Button();
        
        b.scaleX = parameter.x;
        b.scaleY = parameter.y;
        b.scaleWidth = parameter.width;
        b.scaleHeight = parameter.height;
        
        b.wideX = parameter.wideX;
        b.wideY = parameter.wideY;
        
        b.text = parameter.text;
        
        if(isWideScreen && b.wideX && b.wideY){
            b.x = b.wideX * tileSize;
            b.y = b.wideY * tileSize;
        }else{
            b.x = b.scaleX * tileSize;
            b.y = b.scaleY * tileSize;
        }

        b.width = b.scaleWidth * tileSize;
        b.height = b.scaleHeight * tileSize;
        b.btnColor = (parameter.btnColor !== null || parameter.btnColor !== undefined) ? parameter.btnColor : color(70);
        b.image = parameter.image;
        b.textsize = parameter.textsize;

        b.mouseAction = parameter.mouseAction;
        
        /*
        * -1: Kein Commandbutton
        * 0: Gehe
        * 1: Dreh Links
        * 2: Dreh Rechts
        * 3: Wiederhole
        * 4: Wenn
        * 5: Solange
        * 6: Lese Benefit
        * 7: Auf Benefit
        * 8: Vor Wand
        * 9: Wahr
        * */
        b.commandButtonID = (parameter.commandButtonID !== null || parameter.commandButtonID !== undefined) ? parameter.commandButtonID : -1;

        return b;
    }

    static createInputButton(parameter){
        var b = new InputButton();

        b.scaleX = parameter.x;
        b.scaleY = parameter.y;
        b.scaleWidth = parameter.width;
        b.scaleHeight = parameter.height;

        b.wideX = parameter.wideX;
        b.wideY = parameter.wideY;

        b.stroke = parameter.stroke;
        b.winkel = parameter.winkel;

        b.textAlignX = parameter.textAlignX;
        b.textAlignY = parameter.textAlignY;
        b.textSize = parameter.textSize;
        b.textCol = parameter.textCol;
        b.text = parameter.text;
        b.textPosX = parameter.textPosX;
        b.textPosY = parameter.textPosY;
        b.textWidth = parameter.textWidth;
        b.textHeight = parameter.textHeight;


        if(isWideScreen && b.wideX && b.wideY){
            b.x = b.wideX;
            b.y = b.wideY;
        }else {
            b.x = b.scaleX;
            b.y = b.scaleY;
        }

        b.width = b.scaleWidth;
        b.height = b.scaleHeight;
        b.btnColor = parameter.btnColor;

        return b;
    }

    static createDrawPanel(parameter){
        var p = new DrawPanel();
        p.content = (parameter.content === null || parameter.content === undefined) ? [] : parameter.content;
        p.background = (parameter.background === null || parameter.background === undefined) ? 255 : parameter.background;
        p.dragButton = null;
        return p;
    }

    static createLabel(parameter){
        var l = new Label();

        l.scaleX = parameter.x;
        l.scaleY = parameter.y;
        l.scaleWidth = parameter.width;
        l.scaleHeight = parameter.height;

        l.wideX = parameter.wideX;
        l.wideY = parameter.wideY;

        l.text = parameter.text;

        if(isWideScreen && l.wideX && l.wideY){
            l.x = l.wideX * tileSize;
            l.y = l.wideY * tileSize;
        }else{
        l.x = l.scaleX * tileSize;
        l.y = l.scaleY * tileSize;}
        
        l.gif = parameter.gif;

        return l;
    }

    static createCommandTabelle(parameter){
        var t = new CommandTabelle();

        t.scaleX = parameter.x;
        t.scaleY = parameter.y;

        t.scaleWidth = 9;
        t.scaleHeight = 10;

        t.wideX = parameter.wideX;
        t.wideY = parameter.wideY;

        if(isWideScreen && t.wideX && t.wideY){
            t.x = t.scaleX * tileSize;
            t.y = t.scaleY * tileSize;
        }else{
            t.x = t.wideX * tileSize;
            t.y = t.wideY * tileSize;
        }

        t.width = t.scaleWidth*tileSize;
        t.height = t.scaleHeight*tileSize;

        return t;
    }

    static createNotification(parameter){
        //TODO implement
        alert('todo');
        return null;
    }
    
    
}