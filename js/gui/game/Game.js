/**
 * Created by j514340 on 30.03.2020.
 */
"use strict";

class Game {
    static setup() {
        //Muss hier separat sein, damit später z.B. commandList.addEntry o.ä. funktioniert
        this.commandList = GameFactory.createCommandList({
            x: 12, y:4, wideX:12, wideY:5
        });

        //Alle Elemente müssen Teil von gamePanel.content sein.
        this.gamePanel = GuiFactory.createDrawPanel({
            content: [
                GuiFactory.createLabel({
                    text: "Find Your Way 2", textSize: 50, labelColor: color(255, 0, 0),
                    x: 0, y: 0, width: 0, height: 2, fullWidth: true
                }),
                GuiFactory.createButton({
                    text: "Tutorial",
                    x: 2,
                    y: 2,
                    width: 3,
                    height: 1,
                    btnColor: 230,
                    mouseAction: function (accessMode) {
                        if (accessMode === mouseAccessMode.clicked) {
                            alert("TODO");
                        }
                    }
                }),
                GuiFactory.createButton({
                    text: "Level auswählen",
                    x: 7,
                    y: 2,
                    width: 3,
                    height: 1,
                    btnColor: 230,
                    mouseAction: function (accessMode) {
                        if (accessMode === mouseAccessMode.clicked) {
                            drawSelectLevel = true;
                            drawGame = false;
                        }
                    }
                }),
                GuiFactory.createButton({
                    text: ">", x: 13, y: 2, width: 1, height: 1, btnColor: 230
                }),
                GuiFactory.createButton({
                    text: "||", x: 14, y: 2, width: 1, height: 1, btnColor: 230
                }),
                GuiFactory.createButton({
                    text: "X", x: 15, y: 2, width: 1, height: 1, btnColor: 230
                }),
                GameFactory.createField({level: LevelLoader.level1, x: 1, y: 4, wideX: 1, wideY: 5}),
                this.commandList,
                //Command Buttons
                GuiFactory.createButton({
                    text: "Gehe", x: 2, y: 15, wideX: 17, wideY: 5, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Dreh Links", x: 5, y: 15, wideX: 20, wideY: 5, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Dreh Rechts", x: 8, y: 15, wideX: 23, wideY: 5, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Wenn", x: 2, y: 16.5, wideX: 17, wideY: 7, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Solange", x: 5, y: 16.5, wideX: 20, wideY: 7, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Lese Benefit", x: 8, y: 16.5, wideX: 23, wideY: 7, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Auf Benefit", x: 2, y: 18, wideX: 17, wideY: 9, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Vor Wand", x: 5, y: 18, wideX: 20, wideY: 9, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Wahr", x: 8, y: 18, wideX: 23, wideY: 9, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Wiederhole", x: 5, y: 19.5, wideX: 20, wideY: 11, width: 2, height: 1, btnColor: 230, mouseAction: CommandButtonBehavior.action
                })
            ]
        });

        //this.gamePanel.add(this.commandList);

    }

    static draw() {

        this.gamePanel.draw();

    }
}