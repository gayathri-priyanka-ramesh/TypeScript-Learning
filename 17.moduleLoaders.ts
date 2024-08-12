/*  Scenario: Targetted browser is of older version (2015)
    
    Module Loaders -> Convert ES6 statements ('import' and 'export') to ES5
                      Used to convert everything and inject to script file (.js file)
                      Example: SystemJS, REQUIRE.JS */

// Importing Modules
import { printModule } from "./moduleA";
import { helloModule } from "./moduleB";
console.log(
  "Calling 'printModule(\"moduleArgument\")' function from 'moduleA.ts' file in the '17.moduleLoaders.js' file\n",
  printModule("moduleArgument")
);
console.log(
  "Calling 'helloModule()' function from 'moduleB.ts' file in the '17.moduleLoaders.js' file\n",
  helloModule()
);

/*
    In 'tsconfig.json' file
        Change '"target": "ES6"' to ---> "target": "ES2015"
        Uncomment '"module": "commonjs"' and change it to '"module": "system"'
    Install SystemJS
        npm install systemjs --save
    Import the script file of SystemJS to 'index.html' file
        <script src="node_modules/systemjs/dist/system.min.js"></script>
    Dynamically load the '17.moduleLoaders.js' file using a 'script' tag in 'index.html' file
        <script>
            System.import("dist/17.moduleLoaders.js");
        </script>
    
    If it shows the error
        Uncaught (in promise) Error: Unable to resolve bare specifier 'dist/17.moduleLoaders.js'
*/
