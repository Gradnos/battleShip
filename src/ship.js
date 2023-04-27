export const shipFactory = (size, x, y, orientation) =>{
    let hp = size;
    let exploded = false;
    const hit = () =>{
        hp--;
        if(hp < 1) explode();
        console.log(hp);
    };

    const explode = () =>{
        exploded = true;
    };
    
    const isExploded = () =>{
        return exploded;
    };

    return{
        size,
        x,
        y,
        isExploded,
        orientation,
        hit,
    };
};