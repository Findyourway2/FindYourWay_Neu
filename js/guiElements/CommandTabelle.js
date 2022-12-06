"use strict";

class CommandTabelle{

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

        stroke(0);
        fill(220);
        rect(this.x, this.y, this.width, this.height, );
        line(this.x, this.y + (tileSize * 0.75), this.x + (tileSize * 9), this.y + (tileSize * 0.75));
        line(this.x + (tileSize*3), this.y, this.x + (tileSize*3), this.y + (tileSize*10));
        line(this.x + (tileSize*6), this.y, this.x + (tileSize*6), this.y + (tileSize*10));

    }
}