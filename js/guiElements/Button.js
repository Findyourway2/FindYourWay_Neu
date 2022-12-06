/**
 * Created by j514340 on 23.03.2020.
 */
"use strict";

class Button {

    constructor() {
        //Bleibt leer!
    }

    draw(mousePosX, mousePosY) {

        //Adjust position and size
        if (isWideScreen && this.wideX && this.wideY) {
            this.x = this.wideX * tileSize;
            this.y = this.wideY * tileSize;
        } else {
            this.x = this.scaleX * tileSize;
            this.y = this.scaleY * tileSize;
        }

        this.width = this.scaleWidth * tileSize;
        this.height = this.scaleHeight * tileSize;

        var xPos = this.x;
        var yPos = this.y;

        if (mousePosX && mousePosY) {
            //Mouse is dragged, draw button at mouse position
            xPos = mousePosX - (this.width / 2);
            yPos = mousePosY - (this.height / 2);
        }

        noStroke();
        fill(this.btnColor);
        if (this.image) {
            image(this.image, xPos, yPos, this.width, this.height);
        } else {
            rect(xPos, yPos, this.width, this.height, 10);
            textAlign(CENTER, CENTER);
            textSize(this.height / 3);
            fill(0);
            noStroke();
            text(this.text, xPos, yPos, this.width, this.height);
            //Back to default (12);
            textSize(12);
            //Back to default (LEFT,TOP);
            textAlign(LEFT, TOP);
        }


    }

    dragButton() {
        this.draw(mouseX, mouseY);
    }

    setWideScreenPosition(x, y) {
        this.wideX = x;
        this.wideY = y;
    }

    mouseInElement() {
        if ((mouseX >= this.x) && (mouseX <= (this.x + this.width)) &&
            ((mouseY >= this.y) && (mouseY <= (this.y + this.height)))
        ) {
            return true;
        } else {
            return false;
        }
    }

}