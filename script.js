
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

// console.log(addPy("almas"))

//   remove a character at the specified position in a given string and return the modified string....

function swapFirstAndLast(str){
    if(str.length <= 1){
        return str;
    }
    let firstChar = str[0];
    let lastChar = str[str.length - 1]
    let middleChar = str.substring(1, str.length - 1)
    return lastChar + middleChar + firstChar;
}

// console.log(swapFirstAndLast("almas"))

function addFirstCharToFrontAndBack(str){
    let firstChar = str[0]
    return firstChar + str + firstChar;
}

// console.log(addFirstCharToFrontAndBack("almas"))

// check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. 

function checkRange(num1, num2){

    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)
}

// console.log(checkRange(20,500))

function check3Value(num1,num2,num3){
    
    return (num1 >= 50 && num1 >= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)
}

// console.log(check3Value(20,30,90))

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 

function findScriptInString(str){
    let scriptIndex = str.indexOf("Script")

    if(scriptIndex === 4){
        return str.substring(0, 4) + str.substring(scriptIndex, 4 )
    }else{
        return str
    }
}

// console.log(findScriptInString("JavaScript"))

// function for remove extra white space and aslo remove the multiple space of single space in the string....
function removeWord(str){

    let result = str.replace(/Script/g, " ")
    result = result.replace(/\s+/g, " ")

    return result.trim();

}

// console.log(removeWord("Hello this is Script and"))


// # Problem --- 31

// Write a JavaScript program to find the largest of three given integers.

function largest(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3){
        return num1
    }else if(num2 >= num1 && num2 >= num3){
        return num2
    }else {
        return num3
    }
}

// console.log(largest(12,65,3))

// # Problem --- 32

// Write a JavaScript program to find the closest value to 100 from two numerical values. 

function closestValue(num1,num2){

let diff1 = Math.abs(num1 - 100)
let diff2 = Math.abs(num2 - 100)

    if(diff1 < diff2){
        return num1
    }else if(diff2 < diff1){
        return num2
    }else {
        return num1
    }
}

// console.log(closestValue(20,99))


// # Problem --- 32

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

function checkNumRange(num1, num2){

    return (num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100) || (num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)
}

// console.log(checkNumRange(65,55))


// # Problem --- 33

// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function findLargest(num1, num2) {
   
    if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
        
        return Math.max(num1, num2);
    } else {
        
        return "Numbers must be in the range 40..60 inclusive.";
    }
}


// console.log(findLargest(55, 45)); 
// console.log(findLargest(35, 50)); 

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40. 