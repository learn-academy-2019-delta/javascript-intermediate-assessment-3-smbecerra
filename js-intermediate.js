// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = (n) => {
  let arr = [1,1]
  for (let i = 2; i < n; i++){
    arr.push(arr[i-1] + arr[i - 2])
  }
  return arr
}

console.log(getFib(10))


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.


var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [7, 23, -823]


// Almost there! Need help with checking for types. 
const oddChecker = (arr) => arr.filter(num => num % 2 > 1 || num % 2 > 0 && num != typeof(String() || Boolean()));
console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
console.log(originalArray1.reverse())
var originalArray2 = ["a", "t", "l", "e", "d"]
console.log(originalArray2.reverse())



// 5. Write the code that would make this test pass.

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

// let friendlyArray = [1,2,3,4,5]
// let newArr = []
// const multTwo = (arr) => {
//   for (let i = 0; i < arr.length; i++)
//   arr.push(newArr[i] *2 )
  
//   return arr;
let friendlyArray = [1,2,3,4,5]
const multTwo = (arr) => arr.map(num => num * 2);


console.log(multTwo(friendlyArray))


// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

const letterCounter = (str) => {
  return (str.split('l').length);
}

console.log(letterCounter(ourString))

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "llamas" 
// Expected output: “am” 

function theMiddle(str) {
      
      if (str.length % 2 > 0){
        return str.substr(str.length / 2, 1)
      } else {
        return str.substr((str.length / 2) - 1, 2)
      }
      
    }



    console.log(theMiddle(middleLetters1));
    console.log(theMiddle(middleLetters2));


// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

let roundGang = {
   Earth: {radius: 3958.8,},
   Moon: {radius: 1079.4,},
   Jupiter: {radius: 43441}
   
}




const areaOfSphere = (sphere) => {
      return "The Earth's area is " + 4 * 3.14 * Math.pow(roundGang.Earth.radius, 2) + " square miles. "
      +
      " The Moon's area is " + 4 * 3.14 * Math.pow(roundGang.Moon.radius, 2) + " square miles. "
      +
      " Jupiter's area is " + 4 * 3.14 * Math.pow(roundGang.Jupiter.radius, 2) + " squares miles."
}

console.log(areaOfSphere(roundGang))

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

let myDoors = "My car has " + myCar.specs.doors + " doors."
let myTransmission = "My car has a " + myCar.specs.transmission + " transmission."

console.log(myDoors)
console.log(myTransmission)



// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
