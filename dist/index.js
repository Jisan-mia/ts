"use strict";
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
var studentId = 5;
var studentName = 'Jisan';
var isPresentToday = true;
var x = 'Hi';
x = 10;
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
var nums = [1, 2, 3, 4, 5];
var arr = [5, false, 'hello'];
// Tuples
/*
  If we don't want to set any[] type to array instead we want to set types for every value of an array.
   - here we can use tuple
   below is an example
*/
var person = [3, 'Jisan', true];
// Tuple array
var employee;
employee = [
    [5, 'Jack'],
    [6, 'Doe'],
    [7, 'Jhon']
];
// Union
/* lets say, wee have some products and each has productId, the value of this can be a number or a randomly generated string

Question is how do we set type to variable which value could be one or another types?

here it come union,
all we need to do is set multiple types separated a Pipe(|) character
*/
// example
var productId;
productId = '234xcfswe323';
productId = 3321;
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
var Directions;
(function (Directions) {
    Directions[Directions["top"] = 0] = "top";
    Directions[Directions["right"] = 1] = "right";
    Directions[Directions["bottom"] = 5] = "bottom";
    Directions[Directions["left"] = 6] = "left"; // value is 6
})(Directions || (Directions = {}));
var SubjectsCodes;
(function (SubjectsCodes) {
    SubjectsCodes["math"] = "23432";
    SubjectsCodes["physics"] = "34234";
    SubjectsCodes["chemistry"] = "32423";
})(SubjectsCodes || (SubjectsCodes = {}));
console.log(SubjectsCodes.chemistry);
// Objects
/*
  We have a student object which includes id and name attributes. Now, how to set types for id and name for this object.
  Follow the blow example
*/
// one way of writing types for objects
var student = {
    id: 2,
    name: 'Jisan'
};
var student1 = {
    id: 1,
    name: 'Jisan Mia'
};
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
var code = 200;
var employeeCode = code;
// 2. using as keyword
var employeeCode2 = code;
var employeeObj = {};
employeeObj.name = 'Jhon';
employeeObj.id = 23;
// Functions
/*
- in functions we can give type to arguments as well as to the return value
- arguments types define what types of value we can pass
- return type defines what types of value we can return from a function

Note: sometimes we don't want to return any any value from function, maybe we just want to console.log() something. In that case we can use void as function return type
*/
function addTwoNum(a, b) {
    return a + b;
}
console.log(addTwoNum(5, 20));
// function that return void(nothing)
function logMe(message) {
    console.log(message);
}
logMe('Hey, me void');
