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

// console.log(awesomeInstructors)


// reduce
// const nums = [25, 5, 100, 10]

// let sum = nums.reduce((prev, num) => {
//   return prev + num
// }, 0)

// console.log(sum)

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

// console.log(tally)


// filter
const nums = [100, 2, 5, 42, 99]

const numsOver50 = nums.filter(num => num > 50)

// console.log(numsOver50)

const arr = [true, false, true, false, false, true, false]

const filteredArr = arr.filter(el => el)

// console.log(filteredArr) // [true, true, true]

const arr2 = [true, false, 0, 'string', '', null, undefined, 42]

const truthyArr = arr2.filter(el => el)

// console.log(truthyArr)

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"]

const notJerks = people.filter(per => per != 'jerks')

// console.log(notJerks)


// find
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
]

const firstWhiteCar = cars.find(car => car.color === 'white')

// console.log(firstWhiteCar)

const missingCar = cars.find(car => car.color === 'black')

// console.log(missingCar)

const oldishCar = cars.find(car => car.year < 2014)

// console.log(oldishCar)


// findIndex
const firstWhiteCarIdx = cars.findIndex(car => car.color === 'white')

// console.log(firstWhiteCarIdx)

const missingCarIdx = cars.findIndex(car => car.color === 'black')

// console.log(missingCarIdx)


// some
const hasFord = cars.some(car => car.make === 'Ford')

console.log(hasFord)

const thingsInMyRoom = ["evil monkey", "bed", "lamp", "three tacos"]

const isThereAnEvilMonkeyInMyRoom = thingsInMyRoom.some(thing => thing === 'evil monkey')

console.log(isThereAnEvilMonkeyInMyRoom)


// every
const everyCarIsBlue = cars.every(car => car.color === 'blue')

console.log(everyCarIsBlue)

const everythingIsEvilMonkey = thingsInMyRoom.every(thing => thing === 'evil monkey')

console.log(everythingIsEvilMonkey)