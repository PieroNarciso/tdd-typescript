import { describe, expect, it } from "vitest";
import { Doors } from "./hundred-doors";

describe("Hundred doors", () => {
  it('Should create 100 doors', () => {
    const doors = new Doors(100);
    expect(doors.getDoors().length).toBe(100);
  });

  it('Should create 3 doors with all closed', () => {
    const doors = new Doors(3);
    expect(doors.getDoors()).toEqual(Array(3).fill('#'));
  });

  it('Should visit n door and toggle its state', () => {
    const doors = new Doors(3);
    doors.visitDoor(2);
    expect(doors.getDoors()).toEqual(['#', '@', '#']);

    doors.visitDoor(3);
    expect(doors.getDoors()).toEqual(['#', '@', '@']);
  });

  it('Should throw an error if door does not exist', () => {
    const doors = new Doors(3);
    expect(() => doors.visitDoor(4)).toThrowError('Door 4 does not exist');
  });
});
