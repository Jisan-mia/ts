"use strict";
// variable
var b;
b = 5;
b = 'something';
// object
var stuObj = {
    name: 'jisan',
    age: 19,
    isCaptain: true,
    semester: 3
};
var gratitude;
gratitude = {
    isSatisfied: true,
    howMuchSatisfied: '99.99%',
    gratitudeMsg: "You're a gem Sumit bhaiya",
    questions: ['How much useful is it to use union types for arrays. I think one array should work with one type of values']
};
gratitude.questionAns = ['?'];
// array with multiple type values 
var a = [];
a.push('Jisan');
a.push(5);
// function
var addNumbers = function (a, b, c) {
    return a + b;
};
addNumbers(5, 8);
function getStudentDetails(studentDetails, classTeacherId) {
    return "\n      name: " + studentDetails.name + "\n      age: " + studentDetails.age + "\n      isCaptain: " + studentDetails.isCaptain + "\n      semester: " + studentDetails.semester + "\n      classTeacherId: " + classTeacherId + "\n    ";
}
var studentDetail1 = getStudentDetails({ name: 'Jisan', age: 19, isCaptain: true, semester: 3 }, 324422);
var studentDetail2 = getStudentDetails({ name: 'Rahman', age: 20, semester: 3 }, '4523x4');
console.log(studentDetail2);
