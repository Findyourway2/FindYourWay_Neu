/**
 * Created by j514340 on 19.03.2020.
 */
"use strict";

//Orientiert sich an "DrawSelectLevel.js" in FYW1

class LevelSelection{
    static setup(){
        this.selectionPanel = GuiFactory.createDrawPanel({
            content: [
                GuiFactory.createButton({
                    text: "zurück", x: 1, y: 1, width: 3, height: 1, mouseAction: function (accessMode) {
                        if(accessMode === mouseAccessMode.clicked){
                            drawGame = true;
                            drawSelectLevel = false;
                        }
                    }
                })
            ]
        })
    }
    
    static draw(){
        this.selectionPanel.draw();
    }
}