export class Ship{
    constructor(size, x, y, orientation){
        this.size = size;
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        
        this.hp = size;
        this.exploded = false;
    }

    isOnCoords(x,y){
        let xOffset = x - this.x;
        let yOffset = y - this.y;

        
        
        if(xOffset === 0){
            if(yOffset === 0) return true;   
            
            if(this.orientation === 1 && yOffset < 0 && -yOffset < this.size) return true;
            else if(this.orientation === 3 && yOffset > 0 && yOffset < this.size) return true;
            else return false;


        } else if( yOffset === 0){
            if(xOffset === 0) return true;

            if(this.orientation === 2 && xOffset > 0 && xOffset < this.size) return true;
            else if(this.orientation === 4 && xOffset < 0 && -xOffset < this.size) return true;
            else return false;

        } else return false;
    }



    #setHp(n){
        this.hp = n;
        if(n<1) this.#explode();
    }

    hit(){
        if(this.hp < 1) return;
        this.#setHp(this.hp-1);
    }

    #explode(){
        this.exploded = true;
    }
}