/**
 * Created by j514340 on 05.03.2020.
 */
"use strict";

class UITest {
    
    static setup() {
        LevelLoader.loadLevels();
        Game.setup();

        this.test = new Button("Test", 0, 0, 3, 1, color(255, 0, 0));

        this.label = new Label("MOIN", 3, 0, 3, 1, null, color(255, 0, 0));
        this.label.setAlignment(CENTER, CENTER);
        this.label.setStyle(BOLD);

        this.l2 = new Label("MOIN", 3, 1, 3, 1, null, color(255, 0, 0));
        this.l2.setAlignment(CENTER, CENTER);
        this.l2.setStyle(NORMAL, 0, 2);

        this.testTile = new Tile(1, 3, 0);

        this.field = [];

        var xOffset = 3;
        var yOffset = 4;

        for(var i = 0; i < 10; i++){
            for(var u = 0; u < 10; u++){
                this.field.push(new Tile(u+xOffset,i+yOffset,3));
            }
        }

    }



    static draw() {
        fill(0);

        for (var i = 0; i < height / tileSize; i++) {
            for (var u = 0; u < width / tileSize; u++) {
                fill(50);
                stroke(0);
                rect(u * tileSize, i * tileSize, tileSize, tileSize);
                fill(color(255, 0, 0));
                noStroke();
                textAlign(LEFT, TOP);
                text(i + u, (u * tileSize) + tileSize / 2, (i * tileSize) + tileSize / 2, tileSize, tileSize);
                //text(i+u,(u*tileSize),(i*tileSize),tileSize,tileSize);
            }
        }


        this.test.draw();
        this.label.draw();
        this.l2.draw();

        this.testTile.draw();
        //test.dragButton();

        for(var i = 0; i < 10; i++){
            for(var u = 0; u < 10; u++){
                Game.field[u][i].draw();
            }
        }
    }
}