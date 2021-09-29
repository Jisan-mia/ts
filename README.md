## What is TypeScript
TypeScript is an open source language and is a superset of JavaScript

- Offers additional features so JavaScript including static types
- Using types is completely optional
- Compiles down to regular JS
- Can be used for front-end JS as well as backend with Node.js
- Includes most features from ES6, ES7 (classes, arrow functions, etc)
- Types from 3rd party libraries can be added with type definitions.

### Dynamic vs Static Typing
| Dynamic      | Static |
| ----------- | ----------- |
| In **dynamically typed languages**, the types are associated with run-time values and not named explicitly in your code      | In **statically typed languages**, you explicitly assign types to variables, function parameters, return values, etc |
| Eg. **Java, C, C++, Rust, Go**   | Eg. **JavaScript, Python, Ruby, PHP**        |

### Pros & Cons of TypeScript
|Pros     | Cons      |
| --------- | --------- |
| More Robust | More Code to Write |
| Easily spot Bugs | More To Learn |
| Predictability | Required Compilation |
| Readability | Not True Static Typing |
| Popular |  |

### States of Compiling TypeScript

- TypeScript uses .ts and .tsx (working JSX like React) extension
- TSC (TypeScript Compiler) is used to compile .ts file down to JS
- Can watch files and report errors at compile time
- Many tools include TS compilation by default
- Most IDEs have great support for TS
- The tsconfig.json file is used to configure how TypeScript works

### Lets make our hand dirty with TypeScript
Environment Setup:
- First we need to install TypeScript globally in our machine
  - Using npm `npm i -g typescript`
  - Using yarn `yarn add global typescript`
- Create a folder with .ts extension
- In the terminal type `tsc fileName` it will compile ts file down to js
- To manage how to compile a typescript file in terminal type ``
- And it will create a `tsconfig.json` file where you can manage your ts file compilation and others


