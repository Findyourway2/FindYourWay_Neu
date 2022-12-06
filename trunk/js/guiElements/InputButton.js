/**
 * Created by j514340 on 23.03.2020.
 */
"use strict";

class InputButton {

    constructor() {
        //Bleibt leer!
    }

    draw() {
        //Adjust position and size
        if (isWideScreen && this.wideX && this.wideY) {
            this.x = this.wideX;
            this.y = this.wideY;
        } else {
            this.x = this.scaleX;
            this.y = this.scaleY;
        }

        this.width = this.scaleWidth;
        this.height = this.scaleHeight;

        if (this.stroke != undefined){
            stroke(this.stroke);
        }else{
            noStroke();
        }
        if(this.btnColor != undefined){
            fill(this.btnColor);
        }else {
            fill(150);
        }
        if (this.winkel != undefined) {
            rect(this.x, this.y, this.width, this.height, this.winkel);
        }else{
            rect(this.x, this.y, this.width, this.height);
        }
        textAlign(this.textAlignX, this.textAlignY);
        if (this.textSize != undefined){
            textSize(this.textSize);
        }else {
            textSize(this.height / 3);
        }
        if (this.textCol != undefined) {
            fill(this.textCol);
        }else{
            fill(0);
        }
        noStroke();
        text(this.text, this.textPosX, this.textPosY, this.textWidth, this.textHeight);
        //Back to default (12);
        textSize(12);
        //Back to default (LEFT,TOP);
        textAlign(LEFT, TOP);
    }

    setWideScreenPosition(x,y){
        this.wideX = x;
        this.wideY = y;
    }

}