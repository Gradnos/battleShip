export class Ship{
    constructor(size, x, y, orientation){
        this.size = size;
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        
        this.hp = size;
        this.exploded = false;
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