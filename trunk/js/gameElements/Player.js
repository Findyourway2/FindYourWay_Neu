/**
 * Created by j514340 on 24.03.2020.
 */
"use strict";

class Player{

    
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


        switch(this.dir) {
            case 0:
                this.sprite = player_up;
                break;
            case 90:
                this.sprite = player_right;
                break;
            case 180:
                this.sprite = player_down;
                break;
            case 270:
                this.sprite = player_left;
                break;
            default:
                break;
        }

            image(this.sprite, this.x, this.y, tileSize, tileSize);
            noFill();
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