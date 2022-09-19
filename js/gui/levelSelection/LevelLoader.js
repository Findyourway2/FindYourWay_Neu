/**
 * Created by j514340 on 30.03.2020.
 */
"use strict";

class LevelLoader{

    static loadLevels(){
        this.level1 = this.getLevel("../res/level/easyAlgo.lvl");
        this.level2 = this.getLevel("../res/level/maze1.lvl");
        this.level3 = this.getLevel("../res/level/maze2.lvl");
        this.level4 = this.getLevel("../res/level/symmetrical.lvl");
    }

    static getLevel(file){
        var levelText = "";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    levelText = rawFile.responseText;
                }
            }
        };
        rawFile.send(null);

        return levelText;
    }

    static loadLevelIntoField(level, x,y, wideX, wideY){
        var field = [];

        for(var i = 0; i < 10; i++){
            field[i] = [];
            for(var u = 0; u < level.indexOf('-'); u++){
                var id = parseInt(level.charAt(u));
                if(id === 2){
                    //TODO filogo als sprite einfügen
                    field[i].push(GameFactory.createTile({x: u+x, y: i+y, wideX: u+wideX, wideY: i+wideY, id: id}));
                }else {
                    field[i].push(GameFactory.createTile({x: u+x, y: i+y, wideX: u+wideX, wideY: i+wideY, id: id}));
                }
            }
            level = level.substring(level.indexOf('-')+1);
        }

        return field;
    }

}