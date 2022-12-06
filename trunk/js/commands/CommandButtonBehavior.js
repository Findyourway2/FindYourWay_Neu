/**
 * Created by j514340 on 15.04.2020.
 */
"use strict";

class CommandButtonBehavior{
    static action(accessMode) {
        if(accessMode === mouseAccessMode.clicked){

        }else if(accessMode === mouseAccessMode.pressed){
            Game.gamePanel.dragButton = this;
        }else if(accessMode === mouseAccessMode.released){
            Game.gamePanel.dragButton = null;
        }
    }
}