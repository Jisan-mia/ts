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

### Arrays 
Lets say we need an array of number/string etc.
  - We can define types of array values by writing the type of values and bracket []
  eg. `let nums: [number]` 
  - Now, we cannot add values to that array of another types
  - ***Note:*** if the type is any(any[]) then we can add different types values on that array
  eg.` let arr: any[] = [1, 'hi', true]`
```ts
// examples
let nums: number[] = [1, 2, 3, 4, 5]3
let arr: any[] = [5, false, 'hello']
```

### Tuples
If we don't want to set any[] type to array instead we want to set types for every value of an array. 
   - Here we can use tuple
   below is an example
```ts
   
let person: [number, string, boolean] = [3, 'Jisan', true]

// Tuple array
let employee: [number, string][]

employee = [
  [5, 'Jack'],
  [6, 'Doe'],
  [7, 'Jhon']
]
```

### Union
- Lets say, wee have some products and each has *productId*, the value of this can be a number or a randomly generated string

- Question is how do we set type to variable which value could be one or another types?

- Here it come ***union***, 
all we need to do is set multiple types separated a ***Pipe ( | ) character***
```ts
// example
let productId: number | string;
productId = '234xcfswe323'
productId = 3321
```

### Enum or enumerate types
Enum allows us to define a set of named ***constants***. Using **enums** can make it easier to document intent, or create a set of distinct cases. TypeScript provides both **numeric** and **string-based** enums.

To *define/create* an enum
- write enum keyword(**enum**)
- enum name with Capital (first letter)
- second bracket **{}**
- constants separated by comma (,)
  - By default *constants* value are numeric and starts from 0
  - if we **implicitly** set values (**numeric**) to any particular enum constant, other constants (which are after that constant) value would be **incremented by one**
  - on the other hand, if we implicitly set value to one of the constants as **string**, we need to set value to the next **constant** as well.

To get enum particular constant value
  - First type enum Name(**SubjectsCodes**)
  - **dot(.)** and
  - constant name inside that enum(**math**)

```ts
// examples
enum Directions {
  top, // value is 0
  right, // value is 1
  bottom = 5,  // value is 5
  left // value is 6
}

enum SubjectsCodes {
  math = '23432',
  physics = '34234',
  chemistry = '32423'
}

console.log(SubjectsCodes.chemistry)
```

### Objects
We have a student object which includes *id* and *name* attributes. Now, how to set types for id and name for this **object**. 

Follow the blow example  

```ts
// one way of writing types for objects
const student: {
  id: number,
  name: string
} = {
  id: 2,
  name: 'Jisan'
}


// another way is to create type in external variable for the object like this
type Student1 = {
  id: number,
  name: string
}

const student1: Student1 = {
  id: 1,
  name: 'Jisan Mia'
}

```


### Type Assertion

- Let's assume we have a variable named **code** with a type of any and value **213**
- we have another variable named **employeeCode**. It uses the code variable value as its value. 
- but in this case we know that the number of employeeCode must be a **number**. though we already assigned code which has *any type*
- in this case we can use ***type assertion*** to say that employeeCode value is number

there are **two ways** to do type assertion in ts
below are examples

```ts
// 1. using angular bracket
let code: any = 200;
let employeeCode = <number> code;

// 2. using as keyword
let employeeCode2 = code as number;
```