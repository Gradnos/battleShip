import { null2D } from "../useful/null2D";
import { coordObjects2D } from "../useful/coordObjects2D";

export class GameBoard{
    constructor(size){
        this.boardArray = null2D(size);
        this.shipArray = new Array();
        this.freeSpaces = coordObjects2D(size);
        

        
    }



}