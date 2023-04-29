export function coordObjects2D(size){
    let arr = new Array();

    for(let i = 0; i< size * size; i++){
        arr.push({x : Math.floor(i/size), y : i % size});
    }

    return arr;
}