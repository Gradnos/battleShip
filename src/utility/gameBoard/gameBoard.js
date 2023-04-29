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
        if(orientation === 1){p = -1; q = 0;}
        if(orientation === 2){p = 0; q = 1;}
        if(orientation === 3){p = 1; q = 0;}
        if(orientation === 4){p = 0; q = -1;}

        for(let i = 1; i < ship.size; i++) shipSpaces.push({x : ship.x + q * i, y : ship.y + p * i});

        this.shipArray.forEach(ship => {
            shipSpaces.forEach(space => {
                if(ship.isOnCoords(space.x, space.y)) return false;
            });
        });
        return true;
    }

    placeShip(ship){
        if(!this.canPlaceShip(ship)) return;

        this.shipArray.push(ship);





    }

}