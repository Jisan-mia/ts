"use strict";
// variable
let b;
b = 5;
b = 'something';
// object
let stuObj = {
    name: 'jisan',
    age: 19,
    isCaptain: true,
    semester: 3
};
let gratitude;
gratitude = {
    isSatisfied: true,
    howMuchSatisfied: '99.99%',
    gratitudeMsg: "You're a gem Sumit bhaiya",
    questions: ['How much useful is it to use union types for arrays. I think one array should work with one type of values']
};
gratitude.questionAns = ['?'];
// array with multiple type values 
let a = [];
a.push('Jisan');
a.push(5);
// function
const addNumbers = (a, b, c) => {
    return a + b;
};
addNumbers(5, 8);
function getStudentDetails(studentDetails, classTeacherId) {
    return `
      name: ${studentDetails.name}
      age: ${studentDetails.age}
      isCaptain: ${studentDetails.isCaptain}
      semester: ${studentDetails.semester}
      classTeacherId: ${classTeacherId}
    `;
}
const studentDetail1 = getStudentDetails({ name: 'Jisan', age: 19, isCaptain: true, semester: 3 }, 324422);
const studentDetail2 = getStudentDetails({ name: 'Rahman', age: 20, semester: 3 }, '4523x4');
console.log(studentDetail2);
// function signatures
let userDetails;
userDetails = (id, user) => {
    console.log(`id: ${id}, userName: ${user.name}`);
};
userDetails(3, { name: 'jisan', age: 19 });
// classes
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        return `${this.name} is playing from ${this.country}`;
    }
}
const sakib = new Player('Sakib', 38, 'Bangladesh');
const masrafee = new Player('masrafee', 41, 'Bangladesh');
// sakib.age = 39 // error
const players = [];
players.push(sakib);
players.push(masrafee);
console.log(players);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
let threeDOptions = {
    width: 20,
    length: 40,
    height: 10,
};
drawRectangle(threeDOptions);
