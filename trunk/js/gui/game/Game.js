/**
 * Created by j514340 on 30.03.2020.
 */
"use strict";
//globale konstanten
const befehlfarbe = [238,44,44];
const kontrollfarbe = [28,134,238];
const bedingungfarbe = [1,238,118];

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
                    gif: ueberschrift_gif }),
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
                GuiFactory.createCommandTabelle({
                    x:4, y:15, wideX:16, wideY:5
                }),
                GameFactory.createScroller({
                    x: 15, y:4, wideX:15, wideY:5
                }),
               // GameFactory.createPlayer({wideX: 1, wideY: 5}),
                //Überschriften
                GuiFactory.createButton({
                    text: "Befehlsblöcke", x: 4, y: 15, wideX: 16, wideY: 4.9, width: 3, height: 1, btnColor: [200,0]
                }),
                GuiFactory.createButton({
                    text: "Kontrollblöcke", x: 7, y: 15, wideX: 19, wideY: 4.9, width: 3, height: 1, btnColor: [200,0]
                }),
                GuiFactory.createButton({
                    text: "Bedingungen", x: 10, y: 15, wideX: 22, wideY: 4.9, width: 3, height: 1, btnColor: [200,0]
                }),
                //Command Buttons
               GuiFactory.createButton({
                    text: "Gehe", x: 4.5, y: 16.5, wideX: 16.5, wideY: 6, width: 2, height: 1, btnColor: befehlfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Dreh Links", x: 4.5, y: 18, wideX: 16.5, wideY: 7.5, width: 2, height: 1, btnColor: befehlfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Dreh Rechts", x: 4.5, y: 19.5, wideX: 16.5, wideY: 9, width: 2, height: 1, btnColor: befehlfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Lese Benefit", x: 4.5, y: 21, wideX: 16.5, wideY: 10.5, width: 2, height: 1, btnColor: befehlfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Wenn", x: 7.5, y: 16.5, wideX: 19.5, wideY: 6, width: 2, height: 1, btnColor: kontrollfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Solange", x: 7.5, y: 18, wideX: 19.5, wideY: 7.5, width: 2, height: 1, btnColor: kontrollfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Wiederhole", x: 7.5, y: 19.5, wideX: 19.5, wideY: 9, width: 2, height: 1, btnColor: kontrollfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Auf Benefit", x: 10.5, y: 16.5, wideX: 22.5, wideY: 6, width: 2, height: 1, btnColor: bedingungfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Vor Wand", x: 10.5, y: 18, wideX: 22.5, wideY: 7.5, width: 2, height: 1, btnColor: bedingungfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GuiFactory.createButton({
                    text: "Wahr", x: 10.5, y: 19.5, wideX: 22.5, wideY: 9, width: 2, height: 1, btnColor: bedingungfarbe, mouseAction: CommandButtonBehavior.action
                }),
                GameFactory.createField({level: LevelLoader.level1, x: 1, y: 4, wideX: 1, wideY: 5})
            ]
        });

        this.gamePanel.add(this.commandList);

    }

    static draw() {

        this.gamePanel.draw();

    }
}