import { shipFactory } from "./ship.js";

let ship = shipFactory(2,1,1,1);
console.log(ship);
ship.hit();
console.log(ship.isExploded());
ship.hit();
console.log(ship.isExploded());
