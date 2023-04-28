export function null2D(size){
    let arr = new Array();
    for(let i=0; i<size; i++){
        arr.push(new Array(size).fill(null));
    }
    return arr;
}