
const ary = [-4,-9,-3,1,2,3,4,5];
let max = ary[0];
let min = ary[0];

for(let i=0; i < ary.length; i++){
    if(ary[i] > max){
        max = ary[i];
    }
    if(ary[i] < min){
        min = ary[i]
    }
}

// console.log(max);
// console.log(min);

//  JS Basic Exercise......

// current day and time....

// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDate = new Date();
const options = { weekday: 'long'}

const currentDay = currentDate.toLocaleString('en-US', options);
// const currentTime = currentDate.toLocaleTimeString();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const pmAm = hours >= 12 ? 'PM' : 'AM';

const timeFormat = `Current Time is : ${ hours % 12 || 12 } ${pmAm} : ${minutes} : ${seconds}`

// console.log("Today is :", currentDay)
// console.log(timeFormat)


// Problem # 2
// Area of Triangle     .... Sides 5,6,7....
let x = 5;
let y = 6; 
let z = 7;

let s = (x+y+z)/2;
let area = Math.sqrt(s*((s-x)*(s-y)*(s-z)))
// console.log(area)

// Problem # 3
// rotate the string 'w3resource' in the left direction....

let str = "w3resource";


function leftRotateString(str){
    const rotatedString = str.slice(-1) + str.slice(0, -1)
    return rotatedString;
}

// console.log(leftRotateString(str))

//  Problem # 4
// Given year is a leap year in the Gregorian calendar....

let year = 2024;

function leapYear(year) {
    return (year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)
}

if(leapYear(year)){
    // console.log(`${year} is leap year`);
}else{
    // console.log(`${year} is not leap year`);
}


// Problem # 5
// Calculate multiplication and division of two numbers....

// let number1 = parseFloat(prompt('Enter the first number'))
// let number2 = parseFloat(prompt('Enter the second number'));

// let multiplication = number1 * number2;

// let divisionResult;

// if(number2 !== 0){
//     divisionResult = number1/number2;
// }else{
//     divisionResult = "Cannot divide by Zero"
// }

// console.log(multiplication)
// console.log(divisionResult)

// Problem # 6
// get the website URL (loading page)....
let webURL = window.location.href;

// console.log(webURL)

// Get the File Name Extension....

function getFileExtension(filename){
    
    let parts = filename.split(".");
    return parts[parts.length -1]
}

let fileName = "almas.io";
// console.log(getFileExtension(fileName))

// create a variable using a user-defined name....

let userObj = {}

// let userVariable = prompt("Enter variable");
// let variableValue = prompt("Enter value")

// userObj[userVariable] = variableValue;

// console.log("This is the user defined variable Object", userObj)

// difference between a given number and 13, if the number is broader than 13 return double the absolute difference....

function calculateDifference(number){

    let difference = Math.abs(number - 13)

    if(difference > 13){
        return difference * 2;
    }else{
        return difference
    }
}

// console.log(calculateDifference(50))


// create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string....

function addPy(str){
    if(str.startsWith("Py")){
        return str;
    }else{
        return "Py" + str
    }
}

console.log(addPy("almas"))