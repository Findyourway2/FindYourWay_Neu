/**
 * Created by j514340 on 02.04.2020.
 */
"use strict";

class DrawPanel{

    constructor(){
        //Bleibt leer!
    }
    
    add(object){
        this.content.push(object);
    }

    draw(){
        background(this.background);
        
        for(var i = 0; i < this.content.length; i++){
            this.content[i].draw();
        }
        
        if(this.dragButton){
            this.dragButton.dragButton();
        }
    }
    
    setBackground(color){
        this.background = color;
    }
    
}