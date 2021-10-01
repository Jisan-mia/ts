// variable
let b: string | number
b = 5;
b = 'something'


// object
let stuObj = {
  name: 'jisan', 
  age: 19, 
  isCaptain: true,
  semester: 3
}
 
let gratitude: {
  isSatisfied: boolean,
  howMuchSatisfied: number | string,
  gratitudeMsg: string,
  questions: string[],
  questionAns?: string[]
}
gratitude = {
  isSatisfied: true,
  howMuchSatisfied: '99.99%',
  gratitudeMsg: "You're a gem Sumit bhaiya",
  questions: ['How much useful is it to use union types for arrays. I think one array should work with one type of values']
}

gratitude.questionAns = ['?']

// array with multiple type values 
let a: (string | number) [] = []
a.push('Jisan')
a.push(5)

// function
const addNumbers = (a: number, b: number, c?: number): number => {
  return a + b
}
addNumbers(5,8)

//  Type Aliases
/* 
  with type alias we can make type schema or structure objects, function arguments, variables etc
  To create type aliases
    - type keyword
    - type alias Name
    - and then types schema
*/
type StudentDetails = {
  name: string;
  age: number; 
  isCaptain?: boolean;
  semester: number;
}

type stringOrNum = string | number

function getStudentDetails(studentDetails: StudentDetails, classTeacherId: stringOrNum): string {
  return `
      name: ${studentDetails.name}
      age: ${studentDetails.age}
      isCaptain: ${studentDetails.isCaptain}
      semester: ${studentDetails.semester}
      classTeacherId: ${classTeacherId}
    `
}

const studentDetail1 = getStudentDetails({name: 'Jisan', age:19, isCaptain: true, semester: 3}, 324422)

const studentDetail2 = getStudentDetails({name: 'Rahman', age:20, semester: 3}, '4523x4')
console.log(studentDetail2)

// function signatures
let userDetails: (id: stringOrNum, userInfo: {
  name: string, 
  age: number
}) => void;

userDetails = (id: stringOrNum, user: {
  name: string,
  age: number
}) => {
  console.log(`id: ${id}, userName: ${user.name}`)
}
userDetails(3, {name: 'jisan', age: 19})

// classes
class Player {
  name: string
  private age:  number
  country: string

  constructor(name: string, age: number, country: string) {
    this.name = name
    this.age = age
    this.country = country
  }

  play() {
    return `${this.name} is playing from ${this.country}`
  }

}
const sakib = new Player('Sakib', 38, 'Bangladesh')
const masrafee = new Player('masrafee', 41, 'Bangladesh')

// sakib.age = 39 // error

const players: Player[] = []

players.push(sakib)
players.push(masrafee)
console.log(players)

// interfaces
interface RectangleOptions {
  width: number,
  length: number,
} 

function drawRectangle(options: RectangleOptions) {
  let width  = options.width;
  let length = options.length
}

let threeDOptions = {
  width: 20,
  length: 40,
  height: 10,
}
drawRectangle(threeDOptions) 


// Generics  
const addRandomId = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100)
  return {...obj, id}
}

const user = addRandomId({
  name: 'Jisan',
  age: 19,
  country: 'Bangladesh'
})

// interface in generics
interface ApiResponse<T> {
  status: number;
  type: string;
  data: T
}

const response1: ApiResponse<object> = {
  status: 200,
  type: 'good',
  data: {
    name: 'Text',
    age: 39
  }
}