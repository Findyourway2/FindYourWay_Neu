/**
 * Created by j514340 on 23.03.2020.
 */
"use strict";

class Gif{

    constructor(){
        //Bleibt leer!
    }

    draw() {
        background (220);
        image(gif, 24,24);
    }

    setAlignment(hor,vert){
        this.horAlign = hor;
        this.vertAlign = vert;
    }

    setStyle(style,stroke,strokeWeight){
        this.textStyle = (style != null || style != undefined) ? style : NORMAL;
        this.stroke = (stroke != null || stroke != undefined) ? stroke : -1;
        this.strokeWeight = (strokeWeight != null || strokeWeight != undefined) ? strokeWeight : 1;
    }

    setFullWidth(fullWidth){
        this.fullWidth = fullWidth;
    }

    setWideScreenPosition(x,y){
        this.wideX = x;
        this.wideY = y;
    }
}