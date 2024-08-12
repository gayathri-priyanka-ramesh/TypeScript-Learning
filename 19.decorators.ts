/* Decorators -> Mechanism for adding metadata information to our source code
                 Used to add something to existing logic (easily add reusable logic to existing code)
                 Popular choice for libraries - 'Use' more than 'Create'
                 Can be attached to classes and class members (not for functional programming) 
                 As the features of decorators become less and less small, their signatures become more and more complicated
                 
        TypeScript Decorators -> Resemble other languages meta programming (Java Annotations, C# attributes, Python Decorators
                                 Until TS5, Experimental decorators (Stage 2) were used by enabling flag
                                 TS5 uses Stage 3 JS Decorators 
                                 Stage 2 and 3 decorators are very different
            Syntax: @decoratorName
            
            In 'tsconfig.json' file
                Set '"target": "ES2022"'
                TS identifies the stage of decorators using the value of 
                "experimentalDecorators":true -> Stage 2
                "experimentalDecorators":false -> Stage 3 (default - this line may or may not be given)

            Types -> Class Decorators
                     Field Decorators
                     Method Decorators
                     Accessor Decorators
            */

// Class Decorators
// @printDecoratorData
// @withEmploymentDateOnPrototype
// @withEmploymentDateOnClass
class ManagerClassDec {
  // Decorator cannot be call on other stuffs like fields if the function has a parameter 'context:ClassDecoratorContext' and can be called only on class
  task: string = "Simple Task";
  project: string = "Simple Project";
  constructor() {
    console.log("Initializing the 'Manager' Class");
  }
}

// Decorator function is called even without creating an instance of the class
// Decorator Signature
function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log('"printDecoratorData" decorator called');
  console.log("value (printDecoratorData)  ---> ", value);
  console.log("context (printDecoratorData)  ---> ", context);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  context.addInitializer(() => {
    console.log(
      "Initialized Class (printDecoratorData)  --->  Name ->",
      context.name,
      "Kind ->",
      context.kind
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  });
  console.log("addInitializer  ---> ", context.addInitializer);
}

function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  console.log('"withEmploymentDateOnPrototype" decorator called');
  value.prototype.employmentDateOnPrototype = new Date().toISOString();
  console.log(
    "value.prototype.employmentDateOnPrototype  --->",
    value.prototype.employmentDateOnPrototype
  );
  console.log("value.prototype  ---> ", value.prototype);
  console.log("value (withEmploymentDateOnPrototype)  ---> ", value);
  console.log("context (withEmploymentDateOnPrototype)  ---> ", context);
  // console.log(
  //   "employmentDateOnPrototype  ---> ",
  //   employmentDateOnPrototype
  // );
  console.log(
    "employmentDateOnPrototype  ---> Cannot find name 'employmentDateOnPrototype'. Did you mean 'withEmploymentDateOnPrototype'?"
  );
  console.log(
    "withEmploymentDateOnPrototype  ---> ",
    withEmploymentDateOnPrototype
  );
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

function withEmploymentDateOnClass<T extends { new (...args: any[]): {} }>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    employmentData = new Date().toISOString();
    constructor(...args: any[]) {
      console.log('"withEmploymentDateOnClass" decorator called');
      super(...args);
      console.log("Adding Employment date to  ---> ", baseClass.name);
      console.log("context (withEmploymentDateOnClass)  ---> ", context);
      console.log("this.employmentData  ---> ", this.employmentData);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
  };
}

// Creating instance of 'ManagerClassDec' class
// const managerObjClassDec = new ManagerClassDec();
// console.log("managerObjClassDec  ---> ", managerObjClassDec);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Field Decorators
type Task = {
  name: string;
  level: "low" | "medium" | "complicated";
};
class ManagerFieldDec {
  // Strongly typed and gives compilation error as the decorator can be called with field of 'Task[]'
  // @withTask({ name: "passed-low-task", level: "low" })
  //  Unable to resolve signature of property decorator when called as an expression. Argument of type 'ClassFieldDecoratorContext<ManagerFieldDec, string[]> & { name: "tasks"; private: false; static: false; }' is not assignable to parameter of type 'ClassFieldDecoratorContext<ManagerFieldDec, Task[]>'. The types returned by 'access.get(...)' are incompatible between these types. Type 'string[]' is not assignable to type 'Task[]'. Type 'string' is not assignable to type 'Task'.
  tasks: string[] = [];

  // @withTask
  // Unable to resolve signature of property decorator when called as an expression. The runtime will invoke the decorator with 2 arguments, but the decorator expects 1.
  // @withTask()
  // Expected 1 arguments, but got 0.
  // @withTask({})
  // Argument of type '{}' is not assignable to parameter of type 'Task'. Type '{}' is missing the following properties from type 'Task': name, level
  @withTask({ name: "passed-low-task", level: "low" })
  // @withTask({ name: "passed-medium-task", level: "medium" })
  // @withTask({ name: "passed-complicated-task", level: "complicated" })
  tasksWithTaskDecorators: Task[] = [];

  @withComplicatedTask
  tasksWithComplicatedTask: Task[] = [];

  @withTask({ name: "passed-medium-task", level: "medium" })
  @withComplicatedTask
  tasksBothDecorators: Task[] = [];

  // @withTaskNested
  // To be called as a function as it accepts too few arguments to be used as a decorator -> This is executed even without creating the object for the class
  // @withTaskNested()
  tasksNestedDecorators: Task[] = [];
}

// It can be called on fields only if 'context: ClassFieldDecoratorContext' is given
function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      console.log('"withTask" decorator called');
      console.log("target (withTask)  ---> ", target);
      console.log("context (withTask)  ---> ", context);
      console.log("args before push (withTask)  ---> ", args);
      args.push(task);
      console.log("args after push (withTask)  ---> ", args);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      return args;
    };
  };
}

function withComplicatedTask<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, V>
) {
  return function (args: V) {
    console.log('"withComplicatedTask" decorator called');
    console.log("target (withComplicatedTask)  ---> ", target);
    console.log("context (withComplicatedTask)  ---> ", context);
    console.log("args before push (withComplicatedTask)  ---> ", args);
    // args.push({ name: "added-low-task", level: "low" });
    // args.push({ name: "added-medium-task", level: "medium" });
    args.push({ name: "added-complicated-task", level: "complicated" });
    console.log("args after push (withComplicatedTask)  ---> ", args);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return args;
  };
}

function withTaskNested() {
  console.log('"withTaskNested" decorator called');
  return withTask({
    name: "nested-medium-task",
    level: "medium",
  });
}

// const managerObjFieldDec = new ManagerFieldDec();
// console.log("managerObjFieldDec  ---> ", managerObjFieldDec);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Method Decorators
class ProjectMethodDec {
  constructor() {
    console.log("Initializing the 'ProjectMethodDec' Class");
  }

  budget: number = 900;
  // @withBudget(10)
  writeTests() {
    console.log("Tests are important!!!");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
  // @withBudget(500)
  fixBugsInProduction() {
    console.log("Fixing bug in production ... :(");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
}

// const projectObjMethodDec = new ProjectMethodDec();
// projectObjMethodDec.writeTests();
// projectObjMethodDec.fixBugsInProduction();
// projectObjMethodDec.writeTests();
// projectObjMethodDec.fixBugsInProduction();
// projectObjMethodDec.writeTests();

// This is executed even without creating the object for the class
function withBudget(actionBudget: number) {
  // Function works only with classes that has 'budget: number' as a property
  return function <T extends { budget: number }>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    console.log('"withBudget" decorator called');
    return function (...args: any) {
      // This function has access to the local instance ('this' is casted to 'T') -> Ignore this error
      const instance = this as T;
      console.log("target (withBudget)  ---> ", target);
      console.log("context (withBudget)  ---> ", context);
      console.log("instance (withBudget)  ---> ", instance);
      console.log(
        "this (withBudget)  --->  'this' implicitly has type 'any' because it does not have a type annotation"
      );
      console.log("args (withBudget)  ---> ", args);
      if (instance.budget > actionBudget) {
        instance.budget = instance.budget - actionBudget;
        console.log(
          "instance.budget (after usage of actionBudget) ---> ",
          instance.budget
        );
        target.apply(instance, args);
      } else {
        console.log("context.name  ---> ", context.name);
        // Usage of 'Insufficient Budget for ${context.name}'  --->  Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'
        console.error(
          `Insufficient Budget for ${context.name.toString()} and it is not executed as it requires budget of ${actionBudget}, whereas the available budget is only ${
            instance.budget
          }`
        );
      }
      return target;
    };
  };
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Accessors Decorators
class ManagerAccessorDec {
  constructor() {
    console.log("Initializing the 'ManagerAccessorDec' Class");
  }

  @watchChange
  // 'accessor' is a basic feature from modern JS called as 'Auto-accessors' -> unlike regular fields, define a getter and setter on the class prototype
  accessor project: string = "Simple Project";
}

const managerObjAccessorDec = new ManagerAccessorDec();
console.log(
  "managerObjAccessorDec.project (Initial)  ---> ",
  managerObjAccessorDec.project
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

managerObjAccessorDec.project = "Complicated Project";
console.log(
  "managerObjAccessorDec.project (First Change)  ---> ",
  managerObjAccessorDec.project
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

managerObjAccessorDec.project = "Super Complicated Project";
console.log(
  "managerObjAccessorDec.project (Second Change)  ---> ",
  managerObjAccessorDec.project
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function watchChange<T, V>(
  accessor: { get: (this: T) => V; set: (this: T, value: V) => void },
  context: ClassAccessorDecoratorContext<T, V>
) {
  console.log('"watchChange" decorator called');
  console.log("accessor (watchChange)  ---> ", accessor);
  console.log("context (watchChange)  ---> ", context);
  return {
    get: function (this: T) {
      console.log("'this' inside Get Function  ---> ", this);
      return accessor.get.call(this) + "  ---  Result of 'Get Function";
    },
    // Sends a log every time a particular field is changed
    set: function (this: T, value: V) {
      console.log("'this' inside Set Function  ---> ", this);
      console.log(`Setting ${context.name.toString()} to ${value}`);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      accessor.set.call(this, value);
    },
  };
}
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
