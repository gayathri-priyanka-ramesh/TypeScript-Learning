// Declaration Files (.d.ts) -> Files that consists of only declarations of 'types'
// Ctrl+click 'document' opens the 'lib.dom.d.ts'
console.log(document);

// Axios -> Library that comes with declaration files by default
// Ctrl+click 'axios' opens the 'index.d.ts'
import axios, { AxiosResponse } from "./node_modules/axios/index";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// It is an asynchronous function which executes after fetching the data while excecuting the rest of the code in the file
const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
      // "https://jsonplaceholder.typi.com/todos/1"
    );
    console.log("Todo  ---> ", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Wrong URL shows the error: Axios Error  --->  getaddrinfo ENOTFOUND jsonplaceholder.typi.com
      console.log("Axios Error  ---> ", error.message);
      if (error.response) {
        console.log("Status  ---> ", error.response.status);
        console.log("Data  ---> ", error.response.data);
      }
    } else {
      console.error("Error", error.message);
    }
  }
};
fetchData();

// Express -> Doesn't comes automatically with TS Types
/* To use with 'Express', Replace --->
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 to ---> 
   "scripts": {
    "start": "ts-node 16.declarationFiles.ts"
  }, 
  in the 'package.json' file
  Give 'npm start' in terminal */

// import express, { Request, Response } from "express";
// const app = express();
// const port = 3000;
// // Type 'http://localhost:3000/' in browser to view the response
// app.get("/", (request: Request, response: Response) => {
//   response.send("Hello, TypeScript with Express!");
// });
// app.listen(port, () => console.log(`Server running on port ${port}`));
