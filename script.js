const ary = [-4, -9, -3, 1, 2, 3, 4, 5];
let max = ary[0];
let min = ary[0];

for (let i = 0; i < ary.length; i++) {
  if (ary[i] > max) {
    max = ary[i];
  }
  if (ary[i] < min) {
    min = ary[i];
  }
}

// console.log(max);
// console.log(min);

//  JS Basic Exercise......

// current day and time....

// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDate = new Date();
const options = { weekday: "long" };

const currentDay = currentDate.toLocaleString("en-US", options);
// const currentTime = currentDate.toLocaleTimeString();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const pmAm = hours >= 12 ? "PM" : "AM";

const timeFormat = `Current Time is : ${
  hours % 12 || 12
} ${pmAm} : ${minutes} : ${seconds}`;

// console.log("Today is :", currentDay)
// console.log(timeFormat)

// Problem # 2
// Area of Triangle     .... Sides 5,6,7....
let x = 5;
let y = 6;
let z = 7;

let s = (x + y + z) / 2;
let area = Math.sqrt(s * ((s - x) * (s - y) * (s - z)));
// console.log(area)

// Problem # 3
// rotate the string 'w3resource' in the left direction....

let str = "w3resource";

function leftRotateString(str) {
  const rotatedString = str.slice(-1) + str.slice(0, -1);
  return rotatedString;
}

// console.log(leftRotateString(str))

//  Problem # 4
// Given year is a leap year in the Gregorian calendar....

let year = 2024;

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

if (leapYear(year)) {
  // console.log(`${year} is leap year`);
} else {
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

function getFileExtension(filename) {
  let parts = filename.split(".");
  return parts[parts.length - 1];
}

let fileName = "almas.io";
// console.log(getFileExtension(fileName))

// create a variable using a user-defined name....

let userObj = {};

// let userVariable = prompt("Enter variable");
// let variableValue = prompt("Enter value")

// userObj[userVariable] = variableValue;

// console.log("This is the user defined variable Object", userObj)

// difference between a given number and 13, if the number is broader than 13 return double the absolute difference....

function calculateDifference(number) {
  let difference = Math.abs(number - 13);

  if (difference > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}

// console.log(calculateDifference(50))

// create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string....

function addPy(str) {
  if (str.startsWith("Py")) {
    return str;
  } else {
    return "Py" + str;
  }
}

// console.log(addPy("almas"))

//   remove a character at the specified position in a given string and return the modified string....

function swapFirstAndLast(str) {
  if (str.length <= 1) {
    return str;
  }
  let firstChar = str[0];
  let lastChar = str[str.length - 1];
  let middleChar = str.substring(1, str.length - 1);
  return lastChar + middleChar + firstChar;
}

// console.log(swapFirstAndLast("almas"))

function addFirstCharToFrontAndBack(str) {
  let firstChar = str[0];
  return firstChar + str + firstChar;
}

// console.log(addFirstCharToFrontAndBack("almas"))

// check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function checkRange(num1, num2) {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// console.log(checkRange(20,500))

function check3Value(num1, num2, num3) {
  return (
    (num1 >= 50 && num1 >= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  );
}

// console.log(check3Value(20,30,90))

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function findScriptInString(str) {
  let scriptIndex = str.indexOf("Script");

  if (scriptIndex === 4) {
    return str.substring(0, 4) + str.substring(scriptIndex, 4);
  } else {
    return str;
  }
}

// console.log(findScriptInString("JavaScript"))

// function for remove extra white space and aslo remove the multiple space of single space in the string....
function removeWord(str) {
  let result = str.replace(/Script/g, " ");
  result = result.replace(/\s+/g, " ");

  return result.trim();
}

// console.log(removeWord("Hello this is Script and"))

// # Problem --- 31

// Write a JavaScript program to find the largest of three given integers.

function largest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// console.log(largest(12,65,3))

// # Problem --- 32

// Write a JavaScript program to find the closest value to 100 from two numerical values.

function closestValue(num1, num2) {
  let diff1 = Math.abs(num1 - 100);
  let diff2 = Math.abs(num2 - 100);

  if (diff1 < diff2) {
    return num1;
  } else if (diff2 < diff1) {
    return num2;
  } else {
    return num1;
  }
}

console.log(closestValue(20, 99));

// # Problem --- 32

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function checkNumRange(num1, num2) {
  return (
    (num1 >= 40 && num1 <= 60) ||
    (num1 >= 70 && num1 <= 100) ||
    (num2 >= 40 && num2 <= 60) ||
    (num2 >= 70 && num2 <= 100)
  );
}

console.log(checkNumRange(65, 55));

// # Problem --- 33

// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

function findLargest(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    return Math.max(num1, num2);
  } else {
    return "Numbers must be in the range 40..60 inclusive.";
  }
}

console.log(findLargest(55, 45));

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function checkNumbers(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return 30;
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return 40;
  } else {
    return 20;
  }
}

console.log(checkNumbers(5, 5, 5));

// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function checkMode(num1, num2, num3) {
  if (num1 < num2 && num2 < num3) {
    return "Strict mode";
  } else if (num1 <= num2 && num2 <= num3) {
    return "Soft mode";
  } else {
    return "Neither strict nor soft mode";
  }
}

console.log(checkMode(10, 15, 31));

// 48. Write a JavaScript program to reverse a given string.

function reverseStr(str) {
  let charAry = str.split("");
  let reversedAry = charAry.reverse();
  let reversedStr = reversedAry.join("");

  return reversedStr;
}

console.log(reverseStr("Hello, I am Almas Khan"));

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replaceWithNextChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
    } else if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + 1) % 26) + 65);
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceWithNextChar("abc"));

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

function capFirstLetter(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  let capitalizedStr = words.join(" ");
  return capitalizedStr;
}

console.log(
  capFirstLetter("in this string first letter of every word become cap.")
);

// 51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.

function transformToHoursAndMinutes(minutes) {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;

  let result = "";
  if (hours > 0) {
    result += hours + " hour";
    if (hours !== 1) {
      result += "s";
    }
  }
  if (remainingMinutes > 0) {
    if (result !== "") {
      result += " and ";
    }
    result += remainingMinutes + " minute";
    if (remainingMinutes !== 1) {
      result += "s";
    }
  }

  return result;
}

console.log(transformToHoursAndMinutes(60));

// 52. Write a JavaScript program to convert letters of a given string alphabetically.

function alphabeticallyArrange(str) {
  let chars = str.split("");
  chars.sort();
  let sortedStr = chars.join(" ");

  return sortedStr;
}

console.log(alphabeticallyArrange("poikmlbhyugwrwfvxczqa"));

// 54. Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str) {
  let pattern = /[aeiou]/gi;

  let matches = str.match(pattern);
  return matches || [];
  // return matches ? matches.length : 0;
}

console.log(countVowels("fdii2aiouwje"));

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
console.log(true, "THIS IS 4TH DAY WORK START HERE ...................");

function equalNumOfPsAndTs(str) {
  // Initialize counters for 'p' and 't'
  let pCount = 0;
  let tCount = 0;

  // Iterate through the characters of the string
  for (let char of str.toLowerCase()) {
    if (char === "p") {
      pCount++; // Increment pCount if the character is 'p'
    } else if (char === "t") {
      tCount++; // Increment tCount if the character is 't'
    }
  }

  // Check if the counts of 'p' and 't' are equal
  return pCount === tCount;
}

// console.log(equalNumOfPsAndTs("apple"))

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function divideWithCommas(dividend, divisor) {
  let result = dividend / divisor;

  let resultString = result.toString();

  let parts = resultString.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let formattedResult = parts.join(".");

  return formattedResult;
}

// console.log(divideWithCommas(10000,3))

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

function createCopies(inputStr, numCopies) {
  if (numCopies <= 0) {
    return "Number of copies must be a positive number.";
  }

  let result = "";

  for (let i = 0; i < numCopies; i++) {
    result += inputStr;
  }

  return result;
}

// console.log(createCopies(" Almas Khan ",3))

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.

function updateStr(str) {
  if (str.length < 3) {
    return "String must of 3 characters long or above.";
  }

  let lastThreeChar = str.slice(-3);

  let updatedStr = lastThreeChar.repeat(4);

  return updatedStr;
}

// console.log(updateStr('almas'))

// 59. Write a JavaScript program to extract the first half of a even string.

function extractFirstHalf(str) {
  if (str.length % 2 === 0) {
    let midpoint = str.length / 2;
    let firstHalf = str.substring(0, midpoint);

    return firstHalf;
  } else {
    return null;
  }
}

// console.log(extractFirstHalf("Sir Rizwan"))

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.

function removeFirstAndLast(str) {
  if (str.length >= 2) {
    return str.substring(1, str.length - 1);
  } else {
    return " ";
  }
}

// console.log(removeFirstAndLast("My goal is to become a successful businessman AgriTechPreneur"))

// 61. Write a JavaScript program to concatenate two strings except for their first character.

function concatStrsExceptFirstLetter(str1, str2) {
  if (str1.length > 0 && str2.length > 0) {
    return str1.substring(1) + str2.substring(1);
  } else {
    return str1 + str2;
  }
}

// console.log(concatStrsExceptFirstLetter("become a successful","Businessman AgriTechPreneur"))

// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

function movelastThreeCharToStart(str) {
  if (str.length >= 3) {
    let lastChar = str.slice(-3);
    let strWithoutLastThree = str.slice(0, -3);
    return lastChar + strWithoutLastThree;
  } else {
    return str;
  }
}

// console.log(movelastThreeCharToStart("Programmar Force"))

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

function createStrFromMiddleThree(str) {
  if (str.length >= 3 && str.length % 2 !== 0) {
    let middleIndex = Math.floor(str.length / 2);
    let middleThree = str.slice(middleIndex - 1, middleIndex + 2);
    return middleThree;
  } else {
    return "String is even and less then three";
  }
}

// console.log(createStrFromMiddleThree("Almas"));

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

function concatAndTrim(str1, str2){

    let minLength = Math.min(str1.length, str2.length)

    let result = str1.substring(0, minLength) + str2.substring(0, minLength)

    return result;
}

// console.log(concatAndTrim("JavaScript","Mastery"))

// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.  

function endWithScript(str){

    if(str.length >= 6 && str.endsWith("Script")){
        return true
    }else{
        return false;
    }
}

// console.log(endWithScript("JavaScript"))

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  

function displayCityName(str){

    if(str.startsWith("Los") || str.startsWith("New")){

        let cityName = str.split(" ")[0]
        return cityName;
    }else{
        return "";
    }
}

// console.log(displayCityName("Los Vegas"))
// console.log(displayCityName("New York"))

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  

function removeFirstAndLastChar(str){

    if(str.length <= 1){
        return str;
    }

    if(str[0] === 'p'){
        if(str[str.length - 1] === 'p'){
            return str.substring(1, str.length -1)
        }
    }
    return str;
}

// console.log(removeFirstAndLast("php"))

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.  

function createNewStr(str, n){
    
    if(str.length >= n){
        let firstChar = str.substring(0,n)
        let lastChar = str.substring (str.length - n)

        return firstChar + lastChar;
    }else {
        return "";
    }
}

// console.log(createNewStr("Almas", 2))

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  

function sumOfThreeElements(ary){

    if(ary.length === 3){

        let sum = ary[0] + ary[1] + ary[2];
        return sum;
    }else {
        return null;
    }

}

// console.log(sumOfThreeElements([1,2,3]))

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3. 

function rotateLeft(ary){
    
    if(ary.length === 3){

        let rotatAry = [ary[1], ary[2], ary[0]]
        return rotatAry;
    }else{
        return null;
    }

}

// console.log(rotateLeft([1,2,3]))

function checkOneAtOneOrLastPosition(ary){
    
    if(ary.length >= 1){

        if(ary[0] === 1 || ary[ary.length -1] === 1 ){
            return true
        }else{
            return false
        }
    }else {
        return false;
    }
}

// console.log(checkOneAtOneOrLastPosition([1,2,3,4,5]))

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  

function firstAndLastElementSame(ary){
    
    if(ary.length === 3){
        if(ary[0] === ary[2]){
            return true
        }else {
         return false
        }
    }else {
        return false
    }
}

// console.log(firstAndLastElementSame([1,2,1]))

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.  

function reverseElements(ary){

    if(ary.length === 3){

        let reversedAry = [ary[2], ary[1], ary[0]]
        return reversedAry;
    }else {
        return null;
    }
}

// console.log(reverseElements([1,2,3]))

// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.  

function largestValBetFirstAndLastElements(ary){

    if(ary.length < 2){
        return "Array should have at least two elements";
    }

    let maxVal = Math.max(ary[0], ary[ary.length -1])

    for(let i=1; i<ary.length - 1; i++){
        ary[i] = max;
    }

    return ary;
}

// console.log(largestValBetFirstAndLastElements([1,2,3,4,5,7]))

// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3. 

function getMiddleAry(ary1,ary2){

    if(ary1.length !== 3 || ary2.length !==3){
        
        throw new Error("Both Arrays must have length of 3");
    }

    const middleElements = [ary1[1], ary2[1]]
    return middleElements;
}

// console.log(getMiddleAry([1,2,3],[5,6,7]))

// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.  

function newAryFromFirstAndLast(ary){

    if(ary.length < 1){
        throw new Error("Array length must be larger than or equal to 1")
    }

    const newAry = [ary[0], ary[ary.length - 1]];
    return newAry;
}

// console.log(newAryFromFirstAndLast([1,2,3,4,5]))

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  

function containOneAndThree(ary){

    if(ary.length < 2){
        throw new Error("Ary must be of 2 length")
    }

    return ary.includes(1) || ary.includes(3)
}

// console.log(containOneAndThree([1,2]))

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

function doesNotContainOneAndThree(ary){
    if(ary.length < 2){
        throw new Error("Ary must have length of 2")
    }

    return !ary.includes(1) && !ary.includes(3)
}

// console.log(doesNotContainOneAndThree([4,5]))


// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  

function contains30And40Twice(array) {

    // if (array.length > 2) {
    //     throw new Error("Array length should be 0, 1, or 2");
    // }

    let count30 = 0;
    let count40 = 0;

    for (let num of array) {
        if (num === 30) {
            count30++;
        } else if (num === 40) {
            count40++;
        }
    }

    return count30 === 2 && count40 === 2;
}

// console.log(contains30And40Twice([30, 40, 40])); 

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  

function swapFirstAndLast(ary){

    if(ary.length < 1){
        throw new Error("Array length should be at least 1")
    }

    let firstElement = ary[0]
    ary[0] = ary[ary.length - 1];
    ary[ary.length - 1] = firstElement;

    return ary;
}

// console.log(swapFirstAndLast([1,2,3,4,5,6,7]))

// 81. Write a JavaScript program to add two digits to a given positive integer of length two.

function addTwoDigit(integer, digit1, digit2){

    let resultStr = integer.toString() + digit1.toString() + digit2.toString();

    let result = parseInt(resultStr)

    return result;
}

// console.log(addTwoDigit(14,2,6))


// 82. Write a JavaScript program to add two positive integers without carrying.  

function addWithoutCarrying(num1, num2) {
    let result = '';
    let str1 = num1.toString();
    let str2 = num2.toString();
    let maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(str1.charAt(str1.length - 1 - i) || '0');
        let digit2 = parseInt(str2.charAt(str2.length - 1 - i) || '0');
        let sum = (digit1 + digit2) % 10; 
        result = sum.toString() + result; 
    }

    return parseInt(result);
}

console.log(addWithoutCarrying(349, 140));

// 83. Write a JavaScript program to find the longest string from a given array of strings\

function findLongestString(ary) {
    if (ary.length === 0) {
        return null; 
    }

    let longestString = ary[0];
    
    for (let i = 1; i < ary.length; i++) {
        if (ary[i].length > longestString.length) {
            longestString = ary[i]; 
        }
    }

    return longestString;
}

// console.log(findLongestString(["Almas", "Zain", "Tanzeel", "Rizwan Sir", "Ali"])); 



