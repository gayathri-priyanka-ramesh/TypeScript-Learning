// Importing Modules using 'import' keyword
import { printModule } from "./moduleA";
import { helloModule } from "./moduleB";
console.log(
  "Calling 'printModule(\"moduleArgument\")' function from 'moduleA.ts' file in the '17.modules.ts' file\n",
  printModule("moduleArgument")
);
console.log(
  "Calling 'helloModule()' function from 'moduleB.ts' file in the '17.modules.ts' file\n",
  helloModule()
);

/*  "https://caniuse.com/" -> Help to use browser compatibily of 'ES6 Module'

    Compile the '17.modules.ts' file to generate '17.modules.js'
    Compiling this file will automatically compile the module files
    Include the generated '17.modules.js' file in the 'index.html' file
        <script src="dist/17.modules.js"></script>
    This shows the error
        Uncaught ReferenceError: exports is not defined
    Comment this line in the 'tsconfig.json' file and recompile the '17.modules.ts' file to update '17.modules.js' to 'ES6' version of .js file
        "module": "commonjs"
    This shows the error as the things used in 'import' is basically a module
        Uncaught SyntaxError: Cannot use import statement outside a module
    To use 'imports' in browser, specify the type as module in 'script' tag of 'index.html' file
        <script type="module" src="dist/17.modules.js"></script>
    
    If it shows the error 'net::ERR_ABORTED 404 (Not Found)', then modify 'import statement of the '17.modules.js' -> Add '.js' etension to file names after each compilation
        import { printModule } from "./moduleA.js";
        import { helloModule } from "./moduleB.js";
*/
