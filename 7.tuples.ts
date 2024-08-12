/* Tuples -> Represents an array with fixed no. of elements, where each element can have different type
             Order of types in tuple definition corresponds to the order of the values in the actual array
             Have specific structure and can be used to model finite sequences with known lengths */
const bDay: [string, number, boolean, number, string] = [
  "April",
  8,
  true,
  23,
  "May",
];
console.log("bDay  ---> ", bDay);
console.log("bDay[1]  ---> ", bDay[1]);
console.log("bDay[2]  ---> ", bDay[2]);
console.log("bDay[3]  ---> ", bDay[3]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Destructuring
let [red, redDate, happy, blueDate, blue] = bDay;
console.log("red  ---> ", red);
console.log("redDate  ---> ", redDate);
console.log("happy  ---> ", happy);
console.log("blueDate  ---> ", blueDate);
console.log("blue  ---> ", blue);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const spclDay: (string | number | boolean)[] = [
  17,
  "March",
  true,
  11,
  "December",
];
console.log("spclDay  ---> ", spclDay);
