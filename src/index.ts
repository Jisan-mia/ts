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
  Lets say we need an array of number/string etc.
  - We can define types of array values by writing the type of values and bracket []
  eg. let nums: [number] 
  - Now, we cannot add values to that array of another types
  - Note: if the type is any(any[]) then we can add different types values on that array
  eg. let arr: any[] = [1, 'hi', true]

*/

// examples
let nums: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [5, false, 'hello']

// Tuples
/*
  If we don't want to set any[] type to array instead we want to set types for every value of an array. 
   - here we can use tuple
   below is an example
*/
let person: [number, string, boolean] = [3, 'Jisan', true]

// Tuple array
let employee: [number, string][]

employee = [
  [5, 'Jack'],
  [6, 'Doe'],
  [7, 'Jhon']
]


// Union
/* lets say, wee have some products and each has productId, the value of this can be a number or a randomly generated string

Question is how do we set type to variable which value could be one or another types?

here it come union, 
all we need to do is set multiple types separated a Pipe(|) character
*/
// example
let productId: number | string;
productId = '234xcfswe323'
productId = 3321





// Enum or enumerate types
/* 
  Enum allows us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

  to define/create an enum
    - write enum keyword(enum)
    - enum name with Capital (first letter)
    - second bracket {}
    - constants separated by comma
      - by default constants value are numeric and starts from 0
      - if we implicitly set values(numeric) to any particular enum constant, other constants (which are after that constant) value would be incremented by one
      - on the other hand, if we implicitly set value to one of the constants as string, we need to set value to the next constant as well.

  to get enum particular constant value
    - enum Name(SubjectsCodes)
    - dot(.) and
    - constant name inside that enum(math)
  
  # below is an example of above description
*/

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





// Objects
/* 
  We have a student object which includes id and name attributes. Now, how to set types for id and name for this object. 
  Follow the blow example  
*/

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










// Type Assertion
/* 
  - Let's assume we have a variable named code with a type of any and value 213
  - we have another variable named employeeCode. It uses the code variable value as its value. 
  - but in this case we know that the number of employeeCode must be a number. though we already assigned code which has any type
  - in this case we can use type assertion to say that employeeCode value is number

  there are two ways to do type assertion in ts
  below are examples
*/

// 1. using angular bracket
let code: any = 200;
let employeeCode = <number> code;

// 2. using as keyword
let employeeCode2 = code as number;






// Functions
/* 
- in functions we can give type to arguments as well as to the return value
- arguments types define what types of value we can pass 
- return type defines what types of value we can return from a function

Note: sometimes we don't want to return any any value from function, maybe we just want to console.log() something. In that case we can use void as function return type
*/
function addTwoNum(a: number, b: number): number {
  return a + b;
}
console.log(addTwoNum(5, 20))

// function that return void(nothing)
function logMe(message: string): void {
  console.log(message)
}
logMe('Hey, me void')


// interfaces
/* 
 - interface is kind of like specific   structure of types for an object or functions

  - to create interface  
    - interface keyword
    - interface name(EmployeeInterface)
    - bracket  {}
    - propertyName : valueTypes
  -to use interface for object as its types
    - var/let/const
    - objName (employeeObj)
    - colon (:)
    - interfaceName (EmployeeInterface)
    - assignment (=) and bracket {}
    - inside bracket key-value pair as defined in the interface

  - Sometimes, we don't want each and every property of an interface to be mandatory. if we want we can make an interface property option by adding a question mark(?) to the end of their names.

  - also we can make particular property to be read only by using readOnly before their names


  => below is an example
*/
// interface with objects
interface EmployeeInterface {
  readonly id: number,
  name: string,
  age?: number
}

let employeeObj: EmployeeInterface = {
  id: 23,
  name: 'Jhon',
}
employeeObj.name = 'Mark' // can change
// employeeObj.id = 5 // can't change as id is readOnly


/* 
  Note: We cannot use union and primitive in interface
  => We can do this 
  type Pointer = number | string
  const p1: Pointer = 1
  => but cannot in interface
  interface Pointer = number | string (thrown error)
  const p1: Pointer = 1
*/

// interface with functions
interface MathFunc {
  (x: number, y: number) : number
}
const add: MathFunc = (x: number, y: number) : number => x + y


// Classes
/* 
  Classes are now available in JavaScript since es6 were introduced.
  Classes are used to create objects(multiple) of class is a blueprint of object
  To create class->
    - first class keyword (class)
    - class Name (Person)
    - bracket {} and some properties(class can have properties and methods)
    - constructor method
        - it is a method where wee need to initialize values for class properties
        - constructor method/function will run whenever we instantiated an object 
        - so we can pass parameters to constructor and initialize those to properties 
          by adding this. before property name 

*/

class Person {
  id: number
  name: string

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }

}
// initializing/instantiated an object to Person class
const jisan = new Person(25, 'Jisan')
const mark = new Person(33, 'Mark')
console.log(jisan)