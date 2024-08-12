/* Getters and Setters -> Allows to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value (Access and modify class properties) */

class Counter {
  private _count: number = 0;
  public increment: Function;
  public decrement: Function;
  get count(): number {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("this (getter)  ---> ", this);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return this._count;
  }
  set count(value: number) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("this (setter)  ---> ", this);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    this._count = value;
  }
  constructor() {
    console.log("Constructor Function  --- This  ---> ", this);
    // Public Method -> access and modify private variable
    this.increment = function () {
      this._count++;
      return `Incremented`;
    };
    this.decrement = function () {
      this._count--;
      return `Decremented`;
    };
  }
}
const cnt = new Counter();
console.log(`Get Initial Value Value  --->  ${cnt.count}`);
console.log(`Set New Value  --->  ${(cnt.count = 10)}`);
console.log(`Get after setting New Value  --->  ${cnt.count}`);
console.log(`Counter Increment 1  --->  ${cnt.increment()}`);
console.log(`Counter Increment 2  --->  ${cnt.increment()}`);
console.log(`Counter Current Value  --->  ${cnt.count}`);
console.log(`Set New Value  --->  ${(cnt.count = 20)}`);
console.log(`Counter Current Value  --->  ${cnt.count}`);
console.log(`Counter Decrement 1  --->  ${cnt.decrement()}`);
console.log(`Counter Decrement 2  --->  ${cnt.decrement()}`);
console.log(`Counter Current Value  --->  ${cnt.count}`);
console.log(`Set New Value  --->  ${(cnt.count = 30)}`);
console.log(`Counter Current Value  --->  ${cnt.count}`);
console.log(`Counter Increment 3  --->  ${cnt.increment()}`);
console.log(`Counter Decrement 3  --->  ${cnt.decrement()}`);
console.log(`Counter Decrement 4  --->  ${cnt.decrement()}`);
console.log(`Counter Final Value  --->  ${cnt.count}`);
