"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Class Decorators
// @printDecoratorData
// @withEmploymentDateOnPrototype
// @withEmploymentDateOnClass
class ManagerClassDec {
    // Decorator cannot be call on other stuffs like fields if the function has a parameter 'context:ClassDecoratorContext' and can be called only on class
    task = "Simple Task";
    project = "Simple Project";
    constructor() {
        console.log("Initializing the 'Manager' Class");
    }
}
// Decorator function is called even without creating an instance of the class
// Decorator Signature
function printDecoratorData(value, context) {
    console.log('"printDecoratorData" decorator called');
    console.log("value (printDecoratorData)  ---> ", value);
    console.log("context (printDecoratorData)  ---> ", context);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    context.addInitializer(() => {
        console.log("Initialized Class (printDecoratorData)  --->  Name ->", context.name, "Kind ->", context.kind);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    });
    console.log("addInitializer  ---> ", context.addInitializer);
}
function withEmploymentDateOnPrototype(value, context) {
    console.log('"withEmploymentDateOnPrototype" decorator called');
    value.prototype.employmentDateOnPrototype = new Date().toISOString();
    console.log("value.prototype.employmentDateOnPrototype  --->", value.prototype.employmentDateOnPrototype);
    console.log("value.prototype  ---> ", value.prototype);
    console.log("value (withEmploymentDateOnPrototype)  ---> ", value);
    console.log("context (withEmploymentDateOnPrototype)  ---> ", context);
    // console.log(
    //   "employmentDateOnPrototype  ---> ",
    //   employmentDateOnPrototype
    // );
    console.log("employmentDateOnPrototype  ---> Cannot find name 'employmentDateOnPrototype'. Did you mean 'withEmploymentDateOnPrototype'?");
    console.log("withEmploymentDateOnPrototype  ---> ", withEmploymentDateOnPrototype);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}
function withEmploymentDateOnClass(baseClass, context) {
    return class extends baseClass {
        employmentData = new Date().toISOString();
        constructor(...args) {
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
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let ManagerFieldDec = (() => {
    let _instanceExtraInitializers = [];
    let _tasksWithTaskDecorators_decorators;
    let _tasksWithTaskDecorators_initializers = [];
    let _tasksWithComplicatedTask_decorators;
    let _tasksWithComplicatedTask_initializers = [];
    let _tasksBothDecorators_decorators;
    let _tasksBothDecorators_initializers = [];
    return class ManagerFieldDec {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _tasksWithTaskDecorators_decorators = [withTask({ name: "passed-low-task", level: "low" })];
            _tasksWithComplicatedTask_decorators = [withComplicatedTask];
            _tasksBothDecorators_decorators = [withTask({ name: "passed-medium-task", level: "medium" }), withComplicatedTask];
            __esDecorate(null, null, _tasksWithTaskDecorators_decorators, { kind: "field", name: "tasksWithTaskDecorators", static: false, private: false, access: { has: obj => "tasksWithTaskDecorators" in obj, get: obj => obj.tasksWithTaskDecorators, set: (obj, value) => { obj.tasksWithTaskDecorators = value; } }, metadata: _metadata }, _tasksWithTaskDecorators_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _tasksWithComplicatedTask_decorators, { kind: "field", name: "tasksWithComplicatedTask", static: false, private: false, access: { has: obj => "tasksWithComplicatedTask" in obj, get: obj => obj.tasksWithComplicatedTask, set: (obj, value) => { obj.tasksWithComplicatedTask = value; } }, metadata: _metadata }, _tasksWithComplicatedTask_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _tasksBothDecorators_decorators, { kind: "field", name: "tasksBothDecorators", static: false, private: false, access: { has: obj => "tasksBothDecorators" in obj, get: obj => obj.tasksBothDecorators, set: (obj, value) => { obj.tasksBothDecorators = value; } }, metadata: _metadata }, _tasksBothDecorators_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        // Strongly typed and gives compilation error as the decorator can be called with field of 'Task[]'
        // @withTask({ name: "passed-low-task", level: "low" })
        //  Unable to resolve signature of property decorator when called as an expression. Argument of type 'ClassFieldDecoratorContext<ManagerFieldDec, string[]> & { name: "tasks"; private: false; static: false; }' is not assignable to parameter of type 'ClassFieldDecoratorContext<ManagerFieldDec, Task[]>'. The types returned by 'access.get(...)' are incompatible between these types. Type 'string[]' is not assignable to type 'Task[]'. Type 'string' is not assignable to type 'Task'.
        tasks = (__runInitializers(this, _instanceExtraInitializers), []);
        // @withTask
        // Unable to resolve signature of property decorator when called as an expression. The runtime will invoke the decorator with 2 arguments, but the decorator expects 1.
        // @withTask()
        // Expected 1 arguments, but got 0.
        // @withTask({})
        // Argument of type '{}' is not assignable to parameter of type 'Task'. Type '{}' is missing the following properties from type 'Task': name, level
        tasksWithTaskDecorators = __runInitializers(this, _tasksWithTaskDecorators_initializers, []);
        tasksWithComplicatedTask = __runInitializers(this, _tasksWithComplicatedTask_initializers, []);
        tasksBothDecorators = __runInitializers(this, _tasksBothDecorators_initializers, []);
        // @withTaskNested
        // To be called as a function as it accepts too few arguments to be used as a decorator -> This is executed even without creating the object for the class
        // @withTaskNested()
        tasksNestedDecorators = [];
    };
})();
// It can be called on fields only if 'context: ClassFieldDecoratorContext' is given
function withTask(task) {
    return function (target, context) {
        return function (args) {
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
function withComplicatedTask(target, context) {
    return function (args) {
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
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// Method Decorators
class ProjectMethodDec {
    constructor() {
        console.log("Initializing the 'ProjectMethodDec' Class");
    }
    budget = 900;
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
function withBudget(actionBudget) {
    // Function works only with classes that has 'budget: number' as a property
    return function (target, context) {
        console.log('"withBudget" decorator called');
        return function (...args) {
            // This function has access to the local instance ('this' is casted to 'T') -> Ignore this error
            const instance = this;
            console.log("target (withBudget)  ---> ", target);
            console.log("context (withBudget)  ---> ", context);
            console.log("instance (withBudget)  ---> ", instance);
            console.log("this (withBudget)  --->  'this' implicitly has type 'any' because it does not have a type annotation");
            console.log("args (withBudget)  ---> ", args);
            if (instance.budget > actionBudget) {
                instance.budget = instance.budget - actionBudget;
                console.log("instance.budget (after usage of actionBudget) ---> ", instance.budget);
                target.apply(instance, args);
            }
            else {
                console.log("context.name  ---> ", context.name);
                // Usage of 'Insufficient Budget for ${context.name}'  --->  Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'
                console.error(`Insufficient Budget for ${context.name.toString()} and it is not executed as it requires budget of ${actionBudget}, whereas the available budget is only ${instance.budget}`);
            }
            return target;
        };
    };
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// Accessors Decorators
let ManagerAccessorDec = (() => {
    let _instanceExtraInitializers = [];
    let _project_decorators;
    let _project_initializers = [];
    return class ManagerAccessorDec {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _project_decorators = [watchChange];
            __esDecorate(this, null, _project_decorators, { kind: "accessor", name: "project", static: false, private: false, access: { has: obj => "project" in obj, get: obj => obj.project, set: (obj, value) => { obj.project = value; } }, metadata: _metadata }, _project_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        constructor() {
            console.log("Initializing the 'ManagerAccessorDec' Class");
        }
        #project_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _project_initializers, "Simple Project"));
        get project() { return this.#project_accessor_storage; }
        set project(value) { this.#project_accessor_storage = value; }
    };
})();
const managerObjAccessorDec = new ManagerAccessorDec();
console.log("managerObjAccessorDec.project (Initial)  ---> ", managerObjAccessorDec.project);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
managerObjAccessorDec.project = "Complicated Project";
console.log("managerObjAccessorDec.project (First Change)  ---> ", managerObjAccessorDec.project);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
managerObjAccessorDec.project = "Super Complicated Project";
console.log("managerObjAccessorDec.project (Second Change)  ---> ", managerObjAccessorDec.project);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
function watchChange(accessor, context) {
    console.log('"watchChange" decorator called');
    console.log("accessor (watchChange)  ---> ", accessor);
    console.log("context (watchChange)  ---> ", context);
    return {
        get: function () {
            console.log("'this' inside Get Function  ---> ", this);
            return accessor.get.call(this) + "  ---  Result of 'Get Function";
        },
        // Sends a log every time a particular field is changed
        set: function (value) {
            console.log("'this' inside Set Function  ---> ", this);
            console.log(`Setting ${context.name.toString()} to ${value}`);
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
            accessor.set.call(this, value);
        },
    };
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
