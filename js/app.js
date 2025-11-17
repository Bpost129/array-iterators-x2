// forEarch
const friends = ['Melissa', 'Marc', 'Andrew', 'Nick']

friends.forEach(friend => {
  console.log(`I have a friend named ${friend}`)
})


// map
// const nums = [1, 2, 3]
// const squared = nums.map(num => num * num)

// console.log(squared)

const studentsArray = ['Anna', 'Nathan', 'Laura', 'Cara', 'Shubdeep', 'Jamelyn', 'Tom']

const students = studentsArray.map((student, idx) => {
  const transformedStudent = { name: student, studentNum: idx + 1, enrolled: true }
  return transformedStudent
})

// console.log(students)

const instructors = ["Beryl", "Ian", "Hunter", "Joe", "Jurgen", "Ben", "David"]

const awesomeInstructors = instructors.map(teach => {
  return teach + ' is awesome'
})

console.log(awesomeInstructors)


// reduce
const nums = [25, 5, 100, 10]

let sum = nums.reduce((prev, num) => {
  return prev + num
}, 0)

console.log(sum)

let votes = ['Yes', 'No', 'Yes', 'Yes', 'No']

let tally = votes.reduce((prev, vote) => {
  // if (prev[vote]) {
  //   prev[vote] += 1
  // } else {
  //   prev[vote] = 1
  // }

  // return prev

  prev[vote] = prev[vote] ? prev[vote] + 1 : 1
  return prev
}, {})

console.log(tally)