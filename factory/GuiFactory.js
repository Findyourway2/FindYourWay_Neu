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
        b.btnColor = (parameter.btnColor !== null || parameter.btnColor !== undefined) ? parameter.btnColor : color(170);
        b.image = parameter.image;

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

    static createDrawPanel(parameter){
        var p = new DrawPanel();
        p.content = (parameter.content === null || parameter.content === undefined) ? [] : parameter.content;
        p.background = (parameter.background === null || parameter.background === undefined) ? 255 : parameter.background;
        p.dragButton = null;
        return p;
    }

    static createInputButton(parameter){
        var b = new InputButton();

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
        }else {
            b.x = b.scaleX * tileSize;
            b.y = b.scaleY * tileSize;
        }
        
        b.width = b.scaleWidth * tileSize;
        b.height = b.scaleHeight * tileSize;
        b.btnColor = (parameter.btnColor != null || parameter.btnColor != undefined) ? parameter.btnColor : color(170);
        b.image = parameter.image;
        return b;
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
        
        l.width = l.scaleWidth * tileSize;
        l.height = l.scaleHeight * tileSize;

        l.textSize = (parameter.textSize !== null || parameter.textSize !== undefined) ? parameter.textSize : 12;
        l.labelColor = (parameter.labelColor !== null || parameter.labelColor !== undefined) ? parameter.labelColor : color(0);

        l.horAlign = (parameter.horAlign === null || parameter.horAlign === undefined) ? CENTER : parameter.horAlign;
        l.vertAlign = (parameter.vertAlign === null || parameter.vertAlign === undefined) ? CENTER : parameter.vertAlign;

        l.stroke = (parameter.stroke === null || parameter.stroke === undefined) ? -1 : parameter.stroke;
        
        l.strokeWeight = (parameter.strokeWeight === null || parameter.strokeWeight === undefined) ? 1 : parameter.strokeWeight;

        //TODO: Default: SparkassenFont
        l.font = null;
        
        l.textStyle = (parameter.textStyle === null || parameter.textStyle === undefined) ? NORMAL : parameter.textStyle;
        
        l.fullWidth = (parameter.fullWidth === null || parameter.fullWidth === undefined) ? false : parameter.fullWidth;

        var a = document.createElement("img");
        a.src = "../res/ressourcen/FindYourWay.gif";
        a.width = 276;
        a.height = 110;
        a.alt = "gif";
        document.body.appendChild(a);

        return a;
    }

    static createNotification(parameter){
        //TODO implement
        alert('todo');
        return null;
    }
    
    
}