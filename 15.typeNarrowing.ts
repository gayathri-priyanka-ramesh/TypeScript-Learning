/* Type Narrowing -> Process of refining a variable's type within a conditional bloack of code (Used to write more precise and type-safe code) 
        Mechanisms Available -> Type Guards ('typeof' or 'instanceof' Operator)
                                Intersection Types ('&' Operator)
                                Discriminated Unions
                                Exhaustiveness Checking with never */

// Type Guards -> Help TS to understand and narrow down the types more precisely
// 'typeof' operator
type MyType = string | number;
function fun(value: MyType): void {
  if (typeof value === "string") {
    console.log("Uppercase of", value, "is", value.toUpperCase());
  } else {
    console.log(
      value + " rounded to two decimal places is " + value.toFixed(2)
    );
  }
}
fun("Hello");
fun(22);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// 'instanceof' operator -> Check whether an object is an instance of a particular class or constructor function
class Dog {
  bark(): void {
    console.log("Woff Woff");
  }
}
class Cat {
  meow(): string {
    return "Meow Meow";
  }
}
class Duck {
  quack(): string {
    return "Quack Quack";
  }
}
function animalSound(animal: Dog | Cat | Duck) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    console.log(animal.meow());
  } else {
    return animal.quack();
  }
}
const dogObj = new Dog();
console.log("Dog Sound  ---> ", animalSound(dogObj));
const catObj = new Cat();
console.log("Cat Sound  ---> ", animalSound(catObj));
const duckObj = new Duck();
console.log("Duck Sound  ---> ", animalSound(duckObj));
// console.log("Duck Sound  ---> ", animalSound("animal"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Intersection Types -> Allows to combine multiple types into a single type using '&' operator, where the resulting type will have all the properties of individual type
type Employee = {
  id: number;
  name: string;
};
type Manager = {
  dept: string;
  role: string;
};

type ManagerEmployee = Employee & Manager;
const worker: ManagerEmployee = {
  id: 5,
  name: "AAA",
  dept: "CSE",
  role: "TL",
};
console.log("worker  ---> ", worker);
console.log("worker.id  ---> ", worker.id);
console.log("worker.name  ---> ", worker.name);
console.log("worker.dept  ---> ", worker.dept);
console.log("worker.role  ---> ", worker.role);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Discriminated Unions (not Recommended) ->
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

let circleObj: Circle = { kind: "circle", radius: 5 };
let squareObj: Square = { kind: "square", side: 6 };
let rectangleObj: Rectangle = { kind: "rectangle", length: 4, breadth: 3 };

type Shape = Circle | Square;
// May be assigned in future
// type Shape = Circle | Square | Rectangle;

// Discriminated Unions (not Recommended) ->
function getTrueShape(shape: Shape) {
  // This does not handle Future Modifications
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // It is definitely 'Square' if it is not 'Circle' -> no need of 'else' block as the 'if' block contains 'return' statement
  // return shape.side ** 2;

  // Modification for future Assignment
  else if (shape.kind === "square") return shape.side ** 2;
  // else return shape.breadth * shape.length;
}

console.log("Circle Area  ---> ", getTrueShape(circleObj));
console.log("Square Area  ---> ", getTrueShape(squareObj));
// console.log("Rectangle Area  ---> ", getTrueShape(rectangleObj));
console.log(
  "Rectangle Area  --->  Argument of type 'Rectangle' is not assignable to parameter of type 'Shape'. Property 'side' is missing in type 'Rectangle' but required in type 'Square'."
);
// Future Assignment
// console.log("Rectangle Area  ---> ", getTrueShape(rectangleObj));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Exhaustiveness Checking with never
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    // Precautionary step to make the code Future Proof as there is another interface for 'Rectangle' and shape may be of that type also in future
    // '_defaultForShape' shows "Type 'Rectangle' is not assignable to type 'never'" error if 'rectangle' case is not handled when 'Shape' is assigned as 'type Shape = Circle | Square | Rectangle;'
    // Future Assignment
    // case "rectangle":
    //   return shape.length * shape.breadth;
    default:
      // There should always be a default case which is of type 'never' and whatever shape is defined and it should return that
      // It is never to be used and hence, it is important and trivial to have and it is never supposed to be running
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
console.log("Circle Area  ---> ", getArea(circleObj));
console.log("Square Area  ---> ", getArea(squareObj));
// console.log("Rectangle Area  ---> ", getArea(rectangleObj));
console.log(
  "Rectangle Area  --->  Argument of type 'Rectangle' is not assignable to parameter of type 'Shape'. Property 'side' is missing in type 'Rectangle' but required in type 'Square'"
);
// Future Assignment
// console.log("Rectangle Area  ---> ", getArea(rectangleObj));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
