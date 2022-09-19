/**
 * Created by j514340 on 16.04.2020.
 */
"use strict";

class CommandList{
    
    constructor(){
        //Bleibt leer!
    }
    
    draw(){
        //Adjust position and size
        if(isWideScreen && this.wideX && this.wideY){
            this.x = this.wideX * tileSize;
            this.y = this.wideY * tileSize;
        }else{
            this.x = this.scaleX * tileSize;
            this.y = this.scaleY * tileSize;
        }

        this.width = this.scaleWidth * tileSize;
        this.height = this.scaleHeight * tileSize;


        fill(220);
        rect(this.x, this.y, this.width, this.height);

        for(var i = 0; i < this.entries.length; i++){
            fill(parseInt(Math.random()*255));
            rect(this.x, this.y+i*tileSize,this.width, 1*tileSize);
        }
    }

    addEntry(item){
        this.entries.push(item);
    }

    mouseAction(accessMode){
        if(accessMode === mouseAccessMode.released){
            if(Game.gamePanel.dragButton){
                this.addEntry(Game.gamePanel.dragButton);
                Game.gamePanel.dragButton = null;
            }
        }
    }

    mouseInElement(){
        if ((mouseX >= this.x) && (mouseX <= (this.x + this.width)) &&
            ((mouseY >= this.y) && (mouseY <= (this.y + this.height)))
        ) {
            return true;
        } else {
            return false;
        }
    }
}