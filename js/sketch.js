/**
 * Created by j514340 on 02.03.2020.
 */
"use strict";


var drawUITest, drawSelectLevel, drawGame;

var isWideScreen;

var canvas;

var tileSize;

function preload(){
    //TODO
}

function setup() {
    drawUITest = false;
    drawGame = true;
    drawSelectLevel = false;

    //window.innerXXX liest die Fenstergröße aus, damit wird der Canvas angepasst.
    //"heigth" und "width" sind die Höhe und Breite des Canvas, darum hier window.innerXXX
    canvas = createCanvas(window.innerWidth, window.innerHeight);

    getReferenceAndTileSize();

    //Setup der Masken
    UITest.setup();
    Game.setup();
    LevelSelection.setup();
}

function draw() {
    background(255);

    if(drawUITest){
        UITest.draw();
    }else if(drawSelectLevel){
        LevelSelection.draw();
    }else if(drawGame){
        Game.draw();
    }
}

window.onresize = function () {
    //window.innerXXX liest die Fenstergröße aus, damit wird der Canvas angepasst.
    //"heigth" und "width" sind die Höhe und Breite des Canvas, darum hier window.innerXXX
    canvas.size(window.innerWidth, window.innerHeight);

    getReferenceAndTileSize();
};

function getReferenceAndTileSize() {
    //Ist der Bildschirm hochkant, passen 17 Tiles in der Breite auf den Bildschirm
    //Ist der Bildschirm weitkant, passen 17 Tiles in der Höhe auf den Bildschirm
    if (width >= height) {
        isWideScreen = true;
        tileSize = height/17;
    } else {
        isWideScreen = false;
        tileSize = width/17;
    }
}