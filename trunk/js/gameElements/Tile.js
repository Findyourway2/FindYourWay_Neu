/**
 * Created by j514340 on 24.03.2020.
 */
"use strict";

/*
 IDs:
 0 Leer
 1 Spieler
 2 Ziel
 3 Wand
 4 Benefit
 */

class Tile{

    constructor(){
        //Bleibt leer!
    }

    static addBenefit(){
        //TODO BENEFITS
        var benefit = null;
        //var benefit = new BenefitPopUp(benefits[0].imagePath,benefits[0].title,benefits[0].text);
        //benefits.shift();
        return benefit;
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


        switch(this.id){
            case 0:
                this.color = color('#dbdbdb');
                break;
            case 1:
                this.color = 80;
                this.sprite = player_up;
                break;
            case 2:
                this.color = color('#dbdbdb');
                break;
            case 3:
                this.color = color('#373f51');
                break;
            case 4:
                this.color = color(255,0,0);

                //TODO color shift
                //colorMode(HSB);
                /*if(this.farbRichtung === 'up'){
                    this.color = color(this.hue, 100, 100);
                    this.hue = this.hue + 0.5;
                    if(this.hue >= 329){
                        this.farbRichtung = 'down';
                    }
                }else if(this.farbRichtung = 'down'){
                    this.color = color(this.hue, 100, 100);
                    this.hue = this.hue - 0.5;
                    if(this.hue <= 198){
                        this.farbRichtung = 'up';
                    }
                }*/

                break;
            default:
                this.color = color(0,0,255);
                alert('INVALID FIELD ID! ID: ' + "+"+this.id+"+");
        }

        stroke(0);
        fill(this.color);
        rect(this.x, this.y, tileSize, tileSize);

        if(this.sprite){
            image(this.sprite, this.x, this.y, tileSize, tileSize);
            noFill();
           // rect(this.x, this.y, tileSize, tileSize); -> überflüssig
        }

        colorMode(RGB);
    }

    setWideScreenPosition(x,y){
        this.wideX = x;
        this.wideY = y;
    }



}