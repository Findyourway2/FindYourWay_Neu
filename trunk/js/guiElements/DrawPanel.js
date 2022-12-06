/**
 * Created by j514340 on 02.04.2020.
 */
"use strict";

class DrawPanel {

    constructor() {
        //Bleibt leer!
    }

    add(object) {
        this.content.push(object);
    }

    draw() {
        let commandList = this.getContent("CommandList");
        background(this.background);

        for (var i = 0; i < this.content.length; i++) {
            this.content[i].draw();
        }

        if (this.dragButton) {
            this.dragButton.dragButton();
        }
    }

    setBackground(color) {
        this.background = color;
    }

    getContent(name) {
        for (let i = 0; i < this.content.length; i++) {
            if (this.content[i].__proto__.constructor.name === name) {
                return this.content[i];
            }
        }
    }

}