class Scroller {

    constructor() {
        //Bleibt leer!
    }

    draw(mousePosY) {
        //Adjust position and size
        if (isWideScreen && this.wideX && this.wideY) {
            this.x = this.wideX * tileSize + 1;
            this.y = this.wideY * tileSize;
        } else {
            this.x = this.scaleX * tileSize + 1;
            this.y = this.scaleY * tileSize;
        }

        this.width = this.scaleWidth * tileSize;
        this.height = this.scaleHeight * tileSize;
        this.heightBar = this.scaleHeightBar * tileSize;

        var yHeight = 0.5 * tileSize;

        if (mousePosY >= this.y + yHeight && mousePosY <= this.y + this.height - yHeight) {
            //Mouse is dragged, draw button at mouse position
            this.yPos = mousePosY - yHeight;
        }

        if (this.yPos <= this.y){
            this.yPos = this.y;
        }else if(this.yPos >= this.y + this.height){
            this.yPos = this.y + (this.height - 1 * tileSize);
        }

            fill(200);
            stroke(0);
            rect(this.x, this.y, this.width, this.height);

            fill(220);
            stroke(0);
            rect(this.x, this.yPos, this.width, this.heightBar)
    }

    mouseAction(accessMode) {
        if (accessMode === mouseAccessMode.released) {
            if (Game.gamePanel.dragButton) {
                Game.gamePanel.dragButton = null;
            }
        }
        if (accessMode === mouseAccessMode.pressed) {
            if (Game.gamePanel.dragButton === null) {
                Game.gamePanel.dragButton = this;
            }
        }
        if (accessMode === mouseAccessMode.clicked) {
            if (Game.gamePanel.dragButton) {
                Game.gamePanel.dragButton = null;
            }
        }
    }

    dragButton() {
        this.draw(mouseY);
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

