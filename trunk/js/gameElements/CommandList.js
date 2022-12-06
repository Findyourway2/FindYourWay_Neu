/**
 * Created by j514340 on 16.04.2020.
 */
"use strict";

class CommandList {

    constructor() {
        //Bleibt leer!
    }

    draw(mousePosX, mousePosY) { //mousePosX, mousePosY
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

        fill(220);
        stroke(0);
        rect(this.x, this.y, this.width, this.height);

        //Platzhalter
        this.removeEntry(this.fillerKlein);
        if (Game.gamePanel.dragButton && this.mouseInElement() && Game.gamePanel.dragButton.__proto__.constructor.name != "Scroller") {
            if (!this.entries.includes(this.fillerKlein)) {
                this.addEntry(this.fillerKlein);
            }
        }

        var a = 0;
        for (var i = 0; i < this.entries.length; i++) {
            if (this.entries [i - 1] != null) {
                if (this.entries [i - 1].btnColor === kontrollfarbe) {
                    a += 1;
                }
            }
            if (this.entries [i].btnColor === this.fillerKlein) {
                var buttonFill = GuiFactory.createInputButton({
                    stroke: 0,
                    btnColor: this.fillerKlein.btnColor,
                    x: this.x,
                    y: this.y + (a * tileSize),
                    width: this.width,
                    height: 1 * tileSize
                });
                buttonFill.draw();
            } else if (this.entries [i].btnColor === kontrollfarbe) {
                var button1 = GuiFactory.createInputButton({
                    stroke: 0,
                    btnColor: this.entries[i].btnColor,
                    x: this.x,
                    y: this.y + (a * tileSize),
                    width: this.width,
                    height: 2 * tileSize,
                    textAlignX: CENTER,
                    textAlignY: TOP,
                    textSize: this.entries[i].height / 3,
                    text: this.entries[i].text,
                    textPosX: this.x,
                    textPosY: this.y + (10 + (a * tileSize)),
                    textWidth: this.width,
                    textHeight: 1 * tileSize
                });
                var button2 = GuiFactory.createInputButton({
                    btnColor: bedingungfarbe,
                    x: this.x + (tileSize / 3),
                    y: this.y + 5 + (a * tileSize + 0.5 * tileSize),
                    width: tileSize * 3 - (tileSize / 3),
                    height: 0.6 * tileSize,
                    textAlignX: LEFT,
                    textAlignY: CENTER,
                    text: "Bedingungen",
                    textPosX: this.x + (tileSize / 3),
                    textPosY: this.y + (a * tileSize + 0.4 * tileSize),
                    textWidth: this.width,
                    textHeight: 1 * tileSize
                });
                var button3 = GuiFactory.createInputButton({
                    btnColor: befehlfarbe,
                    x: this.x + (tileSize / 3),
                    y: this.y + 5 + (a * tileSize + 1.1 * tileSize),
                    width: tileSize * 3 - (tileSize / 3),
                    height: 0.6 * tileSize,
                    textAlignX: LEFT,
                    textAlignY: CENTER,
                    text: "Befehle",
                    textPosX: this.x + (tileSize / 3),
                    textPosY: this.y + (a * tileSize + 1 * tileSize),
                    textWidth: this.width,
                    textHeight: 1 * tileSize
                });
                button1.draw();
                button2.draw();
                button3.draw();
            } else {
                var button4 = GuiFactory.createInputButton({
                    stroke: 0,
                    btnColor: this.entries[i].btnColor,
                    x: this.x,
                    y: this.y + (a * tileSize),
                    width: this.width,
                    height: 1 * tileSize,
                    textAlignX: CENTER,
                    textAlignY: CENTER,
                    text: this.entries[i].text,
                    textPosX: this.x,
                    textPosY: this.y + (a * tileSize),
                    textWidth: this.width,
                    textHeight: 1 * tileSize
                });
                button4.draw();
            }
            a++;
        }
    }

    addEntry(item) {
        if (this.entries.length === 0) {
            this.entries.push(item);
        } else {
            let yCordInListO = this.y;
            let yCordInListU;
            for (let i = 0; i < this.entries.length; i++) {
                if (this.entries[i].btnColor === kontrollfarbe) {
                    yCordInListU = yCordInListO + (2 * tileSize);
                } else {
                    yCordInListU = yCordInListO + (1 * tileSize);
                }
                if (mouseY >= yCordInListO && mouseY <= yCordInListU) {
                    this.entries.splice(i, 0, item);
                    break;
                } else if (i === this.entries.length - 1) {
                    this.entries.push(item);
                    break;
                }
                yCordInListO = yCordInListU;
            }
        }
    }

    removeEntry(item) {
        if (item != null) {
            for (let i = 0; i < this.entries.length; i++) {
                if (this.entries[i] === item) {
                    for (let a = i; a < this.entries.length; a++) {
                        this.entries [a] = this.entries [a + 1];
                        if (a === this.entries.length - 1) {
                            this.entries.pop();
                        }
                    }
                    break;
                }
            }
        } else {
            let yCordInListO = this.y;
            let yCordInListU;
            for (let i = 0; i < this.entries.length; i++) {
                if (this.entries[i].btnColor === kontrollfarbe) {
                    yCordInListU = yCordInListO + (2 * tileSize);
                } else {
                    yCordInListU = yCordInListO + (1 * tileSize);
                }
                if (mouseY >= yCordInListO && mouseY <= yCordInListU) {
                    for (let a = i; a < this.entries.length; a++) {
                        this.entries [a] = this.entries [a + 1];
                        if (a === this.entries.length - 1) {
                            this.entries.pop();
                        }
                    }
                    break;
                }
                yCordInListO = yCordInListU;
            }
        }
    }

    mouseAction(accessMode) {
        if (accessMode === mouseAccessMode.released) {
            if (Game.gamePanel.dragButton && Game.gamePanel.dragButton.__proto__.constructor.name != "Scroller") {
                this.addEntry(Game.gamePanel.dragButton);
                Game.gamePanel.dragButton = null;
            }
            Game.gamePanel.dragButton = null;
        }
        if (accessMode === mouseAccessMode.pressed) {
            if (Game.gamePanel.dragButton === null) {
                let yCordInListO = this.y;
                let yCordInListU;
                for (let i = 0; i < this.entries.length; i++) {
                    if (this.entries[i].btnColor === kontrollfarbe) {
                        yCordInListU = yCordInListO + (2 * tileSize);
                    } else {
                        yCordInListU = yCordInListO + (1 * tileSize);
                    }
                    if (mouseY >= yCordInListO && mouseY <= yCordInListU) {
                        Game.gamePanel.dragButton = this.entries[i];
                    }
                    yCordInListO = yCordInListU;
                }
                this.removeEntry();
            }
        }
    }

    dragButton() {
        this.entries[0].draw(mouseX, mouseY);
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