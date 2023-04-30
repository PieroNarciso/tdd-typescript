type DoorOpen = "@";
type DoorClosed = "#";
type Door = DoorOpen | DoorClosed;

export class Doors {
  private doors: boolean[] = [];

  constructor(numberOfDoors: number) {
    this.doors = new Array(numberOfDoors).fill(false);
  }

  public visitDoor(n: number): void {
    if (n > this.doors.length) {
      throw new Error(`Door ${n} does not exist`);
    }
    this.doors[n - 1] = !this.doors[n - 1];
  }

  public getDoors(): Door[] {
    return this.doors.map((door) => (door ? "@" : "#"));
  }
}
