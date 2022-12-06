/**
 * Created by j514340 on 15.04.2020.
 */
"use strict";


const mouseAccessMode = {
    clicked: 0,
    pressed: 1,
    released: 2
};


function mouseClicked() {
    var selector;
    if (drawGame) {
        selector = Game.gamePanel;
    } else if (drawSelectLevel) {
        selector = LevelSelection.selectionPanel;
    }
    for (var i = 0; i < selector.content.length; i++) {
        if (selector.content[i].mouseAction && selector.content[i].mouseInElement()) {
            selector.content[i].mouseAction(mouseAccessMode.clicked);
        }
    }
}

function mousePressed() {
    var selector;
    if (drawGame) {
        selector = Game.gamePanel;
    } else if (drawSelectLevel) {
        selector = LevelSelection.selectionPanel;
    }
    for (var i = 0; i < selector.content.length; i++) {
        if (selector.content[i].mouseAction && selector.content[i].mouseInElement()) {
            selector.content[i].mouseAction(mouseAccessMode.pressed);
        }
    }
}

function mouseReleased() {
    var selector;
    if (drawGame) {
        selector = Game.gamePanel;
    } else if (drawSelectLevel) {
        selector = LevelSelection.selectionPanel;
    }
    for (var i = 0; i < selector.content.length; i++) {
        if (selector.content[i].mouseAction && selector.content[i].mouseInElement()) {
            selector.content[i].mouseAction(mouseAccessMode.released);
        }else if(selector.content[i].mouseAction && selector.dragButton && mouseInNoElement(selector.content)){
            selector.dragButton = null;
        }
    }
}

function touchStarted() {
    if (drawGame) {

    } else if (drawSelectLevel) {

    }
}

/*
 Soll dafür sorgen, dass der Browser auf iOS nicht scrollt wenn man den Finger bewegt.
 */
function touchMoved() {
    return false;
}

function touchEnded() {
    if (drawGame) {

    } else if (drawSelectLevel) {

    }
}

function mouseInNoElement(list){
    var inNoElement = true;

    for(var i = 0; i < list.length; i++){
        if(list[i].mouseAction && list[i].mouseInElement()){
            return false;
        }
    }

    return inNoElement;
}