// step 10 tuples

// tuples allow you to represnt an array with a fixed number of elements where the type of elements are known 
// this is useful for grouping differenet types of values together

// Basic Tuple Example

// let person: [string, number]

// person = ["samad", 24] // correct
// person = [24, "maryam"] // incorrect why beczaus we know that the first element is string and second element is number

// person = ["maryam", 24] // is correct and person = [24, "maryam"] is incorrect


// accessing tuples elements 
// let person: [string, number] = ["maryam", 24]
// //  person mai index 0 par string and index 1 par number
// console.log(person[0]) 
// console.log(person[1])

// using tuples in functions

// function printPerson(person: [string, number]) {
//     console.log(`my name is ${person[0]} and my age is ${person[1]}`)

// }

// printPerson(["maryam", 24])

// funtion rturning a tuple

// function getPerson(): [string, number]{
//     return ["maryam", 24]
// }

// let person = getPerson()
// console.log(person) 


// Tuples with Optional Elements

// let person: [string, number?, boolean?] 

// person = ["maryam"] // correct
// person = ["maryam", 24] // correct
// person = ["maryam", 24, true] // correct
// person = ["maryam", 24, true, false] // incorrect

// tuples with rest Elements

let person: [string, ...number[]]

person = ["maryam"] // correct
person = ["maryam", 24, 25, 26, 27, 28] // correct
person = [25, "maryam"] // incorrect

