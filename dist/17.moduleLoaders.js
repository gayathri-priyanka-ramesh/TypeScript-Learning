/*  Scenario: Targetted browser is of older version (2015)
    
    Module Loaders -> Convert ES6 statements ('import' and 'export') to ES5
                      Used to convert everything and inject to script file (.js file)
                      Example: SystemJS, REQUIRE.JS */
System.register(["./moduleA", "./moduleB"], function (exports_1, context_1) {
    "use strict";
    var moduleA_1, moduleB_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (moduleA_1_1) {
                moduleA_1 = moduleA_1_1;
            },
            function (moduleB_1_1) {
                moduleB_1 = moduleB_1_1;
            }
        ],
        execute: function () {
            console.log("Calling 'printModule(\"moduleArgument\")' function from 'moduleA.ts' file in the '17.moduleLoaders.js' file\n", moduleA_1.printModule("moduleArgument"));
            console.log("Calling 'helloModule()' function from 'moduleB.ts' file in the '17.moduleLoaders.js' file\n", moduleB_1.helloModule());
        }
    };
});
