/**
 * Created by j514340 on 23.03.2020.
 */
"use strict";

class Label{
    //TODO https://stackoverflow.com/questions/52614829/p5-js-change-text-color-in-for-a-single-word-in-a-sentence

    constructor(){
        //Bleibt leer!
    }

    draw(){
        //Adjust position and size
        if(isWideScreen && this.wideX && this.wideY){
            this.x = this.wideX * tileSize;
            this.y = this.wideY * tileSize;
        }else {
            this.x = this.scaleX * tileSize;
            this.y = this.scaleY * tileSize;
        }
            
        if(this.fullWidth){
            this.width = width;
        }else {
            this.width = this.scaleWidth * tileSize;
        }
        this.height = this.scaleHeight * tileSize;
        //TODO: textSize responsive

            this.gif.size(500, 100);
            this.gif.position(window.innerWidth/3, 0);
            noFill();
            // rect(this.x, this.y, tileSize, tileSize); -> überflüssig

        /*if(this.stroke === -1){
            noStroke();
        }else{
            stroke(this.stroke);
        }

        //TODO auf SparkassenFont anpassen
        if(this.font != null){
            textFont(this.font);
        }
        
        fill(this.labelColor);
        textStyle(this.textStyle);
        textAlign(this.horAlign,this.vertAlign);
        strokeWeight(this.strokeWeight);
        textSize(this.textSize);
        text(this.text,this.x,this.y,this.width,this.height);
        //Back to default
        textStyle(NORMAL);
        strokeWeight(1);*/
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

    setFont(font){
        this.font = font;
    }

    setFullWidth(fullWidth){
        this.fullWidth = fullWidth;
    }

    setWideScreenPosition(x,y){
        this.wideX = x;
        this.wideY = y;
    }
}