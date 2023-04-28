import { Ship } from "./ship";


let ship = new Ship(4,1,2,3);

test('correct size', () => {
    expect(ship.size).toBe(4);
});
test('correct x', () => {
  expect(ship.x).toBe(1);
});
test('correct y', () => {
  expect(ship.y).toBe(2);
});

test('correct orientation', () => {
  expect(ship.orientation).toBe(3);
});

test('correct hp', () => {
  expect(ship.hp).toBe(4);
});

test('hit works', () => {
  ship = new Ship(4,1,2,3);
  ship.hit()
  expect(ship.hp).toBe(3);
});

test('correct hp 0', () => {
  ship = new Ship(1,1,2,3);
  ship.hit()
  expect(ship.hp).toBe(0);
});


test('explodes correctly', () => {
  ship = new Ship(1,1,2,3);
  ship.hit()
  expect(ship.exploded).toBe(true);
});

test('doesnt explode wrongly', () => {
  ship = new Ship(2,1,2,3);
  ship.hit()
  expect(ship.exploded).toBe(false);
});


