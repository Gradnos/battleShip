import { Ship } from "./ship";




test('correct size', () => {
    let ship = new Ship(4,1,2,3);
    expect(ship.size).toBe(4);
});
test('correct x', () => {
  let ship = new Ship(4,1,2,3);
  expect(ship.x).toBe(1);
});
test('correct y', () => {
  let ship = new Ship(4,1,2,3);
  expect(ship.y).toBe(2);
});

test('correct orientation', () => {
  let ship = new Ship(4,1,2,3);
  expect(ship.orientation).toBe(3);
});

test('correct hp', () => {
  let ship = new Ship(4,1,2,3);
  expect(ship.hp).toBe(4);
});

test('hit works', () => {
  let ship = new Ship(4,1,2,3);
  ship.hit()
  expect(ship.hp).toBe(3);
});

test('correct hp 0', () => {
  let ship = new Ship(1,1,2,3);
  ship.hit()
  expect(ship.hp).toBe(0);
});


test('explodes correctly', () => {
  let ship = new Ship(1,1,2,3);
  ship.hit()
  expect(ship.exploded).toBe(true);
});

test('doesnt explode wrongly', () => {
  let ship = new Ship(2,1,2,3);
  ship.hit()
  expect(ship.exploded).toBe(false);
});



test('isOnCoords Is True On The Top Side When It Should Be', () => {
  let ship = new Ship(3,5,6,1);
  expect(ship.isOnCoords(5,4)).toBe(true);
});

test('isOnCoords Is False On The Top Side When It Should Be', () => {
  let ship = new Ship(3,5,6,1);
  expect(ship.isOnCoords(5,3)).toBe(false);
});


test('isOnCoords Is True On The Bottom Side When It Should Be', () => {
  let ship = new Ship(3,5,6,3);
  expect(ship.isOnCoords(5,8)).toBe(true);
});

test('isOnCoords Is False On The Bottom Side When It Should Be', () => {
  let ship = new Ship(3,5,6,3);
  expect(ship.isOnCoords(5,9)).toBe(false);
});


test('isOnCoords Is True On The Right Side When It Should Be', () => {
  let ship = new Ship(3,5,6,2);
  expect(ship.isOnCoords(7,6)).toBe(true);
});

test('isOnCoords Is False On The Right Side When It Should Be', () => {
  let ship = new Ship(3,5,6,2);
  expect(ship.isOnCoords(8,6)).toBe(false);
});


test('isOnCoords Is True On The Left Side When It Should Be', () => {
  let ship = new Ship(3,5,6,4);
  expect(ship.isOnCoords(3,6)).toBe(true);
});

test('isOnCoords Is False On The Left Side When It Should Be', () => {
  let ship = new Ship(3,5,6,4);
  expect(ship.isOnCoords(2,6)).toBe(false);
});

