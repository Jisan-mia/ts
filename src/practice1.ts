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

