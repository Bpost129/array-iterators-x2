// forEarch
const friends = ['Melissa', 'Marc', 'Andrew', 'Nick']

friends.forEach(friend => {
  console.log(`I have a friend named ${friend}`)
})


// map
const nums = [1, 2, 3]
const squared = nums.map(num => num * num)

console.log(squared)

const studentsArray = ['Anna', 'Nathan', 'Laura', 'Cara', 'Shubdeep', 'Jamelyn', 'Tom']

const students = studentsArray.map((student, idx) => {
  const transformedStudent = { name: student, studentNum: idx + 1, enrolled: true }
  return transformedStudent
})

console.log(students)