import { null2D } from "../useful/null2D";
import { coordObjects2D } from "../useful/coordObjects2D";

export class GameBoard{
    constructor(size){
        this.boardArray = null2D(size);
        this.shipArray = new Array();
        this.freeSpaces = coordObjects2D(size);
        
    }

    canPlaceShip(ship){
        let shipSpaces = [{x:ship.x, y:ship.y}];
        let orientation = ship.orientation;
        let p,q;
        if(orientation === 1){p = -1; q = 0;}
        if(orientation === 2){p = 0; q = 1;}
        if(orientation === 3){p = 1; q = 0;}
        if(orientation === 4){p = 0; q = -1;}
        
        for(let i = 1; i < ship.size; i++) shipSpaces.push({x : ship.x + q * i, y : ship.y + p * i});



        for(let i = 0; i < this.shipArray.length; i++){
            let ship1 = this.shipArray[i];
            for(let j = 0; j < shipSpaces.length; j++){
                let space = shipSpaces[j];
                if(ship1.isOnCoords(space.x, space.y)) return false;
            }
        }
        return true;
    }

    placeShip(ship){
        if(!this.canPlaceShip(ship)) return;
        this.shipArray.push(ship);
    }

}