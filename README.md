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
- You are all done to maker your hands dirty with ts


### Basic Types in TypeScript
I assume you know what is variable in JS (to remind you again, variables are like container where we can store data/values and can access or modify them later)

Steps to create a variable with types in Typescript
- variable-keyword(var/let/const) 
- variableName(studentName, id etc)
- colon(:) 
- what type of variable it is? (number, string etc)
- assignment-operator(=)
- value of that type
```ts
// example: 
let studentName: string = "Jisan"
const studentId: number = 3
```
Some other types are:
  - number
  - string
  - boolean
  - any

   
**Note-1**: A variable declared with a particular type of value cannot be changed to another type of value
```ts
let salary: number = 20000
salary = 'twentyK' // error
```

**Note-2**: But when we implicitly set a variable type to any, we can change this with any other types of value later.
```ts
let x: any = 'hi'
x = 5 // ok
```
**Note-3**: When we just declare a variable with no types and values. TypeScript give any types to this variable automatically.
```ts
let a; // it has any type
a = true
```
**Note-4**: When we declare a variable and assign a value, but don't set any type to this. In that case TypeScript will set its type according to the value. In TS it's called infer.
```ts
let z = 10 // it has number type
z = 'hi' // error
```

***Other Example of Variables***
```ts
let studentId: number = 5;
let studentName: string = 'Jisan';
let isPresentToday: boolean = true;
let x: any = 'Hi';
x = 10
```

### Arrays & Tuples
