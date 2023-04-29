import { GameBoard } from "./gameBoard";
import { Ship } from "../ship/ship";

let board = new GameBoard(10);
board.placeShip(new Ship(3,1,9,1));


test('returns false on place ship when meets directly', () => {
    let ship = new Ship(2,1,6,3);
    expect(board.canPlaceShip(ship)).toBe(false);
});

test('returns false on place ship when meets from the side', () => {
    let ship = new Ship(3,3,8,4);
    expect(board.canPlaceShip(ship)).toBe(false);
});

test('returns true on place ship when is 1 space away directly', () => {
    let ship = new Ship(2,1,5,3);
    expect(board.canPlaceShip(ship)).toBe(true);
});
test('returns true on place ship when is 1 space away from the side', () => {
    let ship = new Ship(3,4,8,4);
    expect(board.canPlaceShip(ship)).toBe(true);
});



