/**
 * Created by j514340 on 24.03.2020.
 */
"use strict";

class Player{

    //TODO draw und wideX und wideY beachten!!
    
    constructor(){
        //Bleibt leer!
    }

    changeDestination(steps){
        switch(this.dir){
            case 0:
                for(var i = 0; i < steps; i++){
                    if(this.destY > 0 && this.playfield[this.destY-1][this.destX].id != 3){
                        this.destY--;
                    }
                }
                break;
            case 90:
                for(var i = 0; i < steps; i++){
                    if(this.destX < this.playfield.length-1 && this.playfield[this.destY][this.destX+1].id != 3){
                        this.destX++;
                    }
                }
                break;
            case 180:
                for(var i = 0; i < steps; i++){
                    if(this.destY < this.playfield.length-1 && this.playfield[this.destY+1][this.destX].id != 3){
                        this.destY++;
                    }
                }
                break;
            case 270:
                for(var i = 0; i < steps; i++){
                    if(this.destX > 0 && this.playfield[this.destY][this.destX-1].id != 3){
                        this.destX--;
                    }
                }
                break;
            default:
                break;
        }
    }

    setWideScreenPosition(x,y){
        this.wideX = x;
        this.wideY = y;
    }
}