/* Array -> Type of object that can store multiple values of same data type
            Type of values that an array can hold is specified in TS
    Types of Array Creation
        Square Bracket "[]" notaion
        Generic "Array<type>" notaion (not recommended as it is old)*/

let numsArr: number[] = [10, 20, 30, 40];
console.log("numsArr  ---> ", numsArr);
numsArr = [15, 25];
// numsArr=["A",true]
console.log("numsArr (after modification)  ---> ", numsArr);
numsArr.push(35);
// numsArr.push("B");
console.log("numsArr (after push)  ---> ", numsArr);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let objArr: object[];
// objArr = [10, "A", true];
objArr = [[10, "A", true]];
console.log("objArr  ---> ", objArr);
objArr = [
  [10, "A", true],
  { property1: "value1", property2: "value2" },
  numsArr,
];
console.log("objArr  ---> ", objArr);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let anyArr: any[] = [
  10,
  "A",
  true,
  [20, "B", false],
  { property1: "value1", property2: "value2" },
  objArr,
];
console.log("anyArr  ---> ", anyArr);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// let strArr: Array<string>;
let strArr: Array<string> = [];
console.log("strArr (initial)  ---> ", strArr);
strArr.push("A");
console.log("strArr (after push)  ---> ", strArr);
strArr = ["B", "C"];
console.log("strArr (after modification)  ---> ", strArr);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Multi-dimensional Array -> Array that contains other arrays as its elements (defined using nested square brackets) */
let singleDimension: number[] = [10, 20, 30];
console.log("singleDimension  ---> ", singleDimension);
console.table(singleDimension);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// let doubleDimension: number[][] = [[10, 20, 30], [], [30, 40],21];
let doubleDimension: number[][] = [[10, 20, 30], [], [30, 40]];
console.log("doubleDimension  ---> ", doubleDimension);
console.table(doubleDimension);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let tripleDimension: number[][][] = [
  // [[10, 20, 30], [40, 50], [], [],54],
  [[10, 20, 30], [40, 50], [], []],
  [[60], [70, 80]],
  [[], [90], []],
];
console.log("tripleDimension  ---> ", tripleDimension);
console.table(tripleDimension);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
