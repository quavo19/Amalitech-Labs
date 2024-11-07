// Capitalize first letter of a string
const CapitalizeStr = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1))
}
//console.log(CapitalizeStr("donald"), "capitalized")



// Reverse a string
const ReverseStr = (str) => {
    return str.split("").reverse().join("")
}
//console.log(ReverseStr("donald"), "reversed")



//check if the string is a Palindrome
const IsPalindrome = (str) => {
    console.log(str)
    const RevString = str.split("").reverse().join("")
    return str === RevString
}
//console.log(IsPalindrome("donod"))



// count the number of words in a string
const WordCount = (str) => {
    return str.split("").length
}
// console.log(WordCount("donald"))



//double every number in a array
const DoubleArr = (arr) => {
    console.log(arr)
    return (arr.length > 0 ? arr.map((number) => number*2) : "array is empty")
}
const testArr = [2,3,5,7,2,8,3,5]
//console.log(DoubleArr(testArr))



//filter out even numbers 
const EvenNumbersOnly = (arr) => {
    return arr.filter((number) => number %2 === 0)
}
//console.log(EvenNumbersOnly(testArr))


//Calculate the sum of all numbers in an array
const SumAllNumbers = (arr) => {
    return arr.reduce((acc, inc) => acc + inc)
}
//console.log(SumAllNumbers(testArr))



//Calculate the average of all numbers
const AverageNumber = (arr) => {
    return (arr.length / arr.reduce((a,b)=> a+b)).toFixed(2)
}
//console.log(AverageNumber(testArr))



//Return the full name from a person object
const FullName = (person) => {
    return (person.firstName + " " + person.lastName)
}
let personDetails = {
    firstName: "Donald",
    lastName: "Akite",
    age: 9
}
//console.log(FullName(personDetails))



//Check if person is 18 or older
const IsAdult = (person) => {
     return(person.age > 18 ? (person.firstName + " is An Adult") : (person.firstName + "Is a Minor")); 
}
//console.log(IsAdult(personDetails))



//Filter an array of objects to keep those at least minAge years old
const FilterByAge = (people, minAge) => {
return (
    ((typeof minAge === "number") ? (people.filter((person) => person.age > minAge)) : `"${minAge}" is not a number, enter a number`)
)}

let people = [
    {name: "Donald", age: 22},
    {name: "mich", age: 12},
    {name: "jane", age: 90},
    {name: "Doe", age: 52},
    {name: "Joan", age: 2},
    {name: "Eddie", age: 12},
    {name: "Karl", age: 22},
]
// console.log(FilterByAge(people, "two"))



//Function Composition
const compose = (...functions) => {
    return (input) => {
      return functions.reduceRight((acc, fn) => {
        return fn(acc);
      }, input);
    };
  };
const Composition = compose(DoubleArr,EvenNumbersOnly)

console.log(Composition([32,34,1,2,4,34,6,2,3,12,34,4]))
