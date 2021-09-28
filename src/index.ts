// Basic types in TypeScript
/*
  to declare a variable with types, structure/step is

  i) variable-keyword(var/let/const) 
  ii) variableName(studentName, id etc)
  iii) clone(:) 
  iv) what type of variable it is? (number, string etc)
  v) assignment-operator(=)
  vi) value of that type
  example: 
    let studentName: string = "Jisan"
    const studentId: number = 3

  Some other types are:
   - number
   - string
   - boolean
   - any

   
  Note:A variable declared with a particular type of value cannot be changed to another type of value
  Note2: But when we implicitly set a variable type to any(let x: any = 'hi'), we can change this with any other types of value.
*/

// examples

let studentId: number = 5;
let studentName: string = 'Jisan';
let isPresentToday: boolean = true;
let x: any = 'Hi';
x = 10

// Arrays & Tuples
/* 
  Lets say we need an array of number. 
*/