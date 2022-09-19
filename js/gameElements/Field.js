/**
 * Created by j514340 on 02.04.2020.
 */
"use strict";

class Field{

    constructor(){
        //Bleibt leer!
    }

    draw(){
        for(var i = 0; i < this.field.length; i++){
            for(var u = 0; u < this.field[i].length; u++){
                this.field[u][i].draw();
            }
        }
    }

    //TODO Feld Tiles updaten?
    /*setWideScreenPosition(x,y){
        this.wideX = x;
        this.wideY = y;
    }*/
}