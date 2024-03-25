// 1. Write a JavaScript function that reverses a number. Example x = 32243;

function reversesNum(num) {
  let reversedStr = String(num).split("").reverse().join("");

  let reversedNum = parseInt(reversedStr);
  return reversedNum;
}

console.log(reversesNum(32243));

// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrom(str) {
  let modifiedStr = str.toLowerCase();
  let clearStr = modifiedStr.replace(/[\W_]/g, "");
  return modifiedStr === clearStr.split("").reverse().join("");
}

console.log(isPalindrom("madam"));

// 3. Write a JavaScript function that generates all combinations of a string.Example string : 'dog'

function createCombinations(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

console.log(createCombinations("dog"));

// 4. Write a JavaScript function that returns a string that has letters in alphabetical order. Example string : 'webmaster'

function sortStrAlphabetically(str) {
  return str.split("").sort().join("");
}

console.log(sortStrAlphabetically("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case. Example string : 'the quick brown fox'

function firstLetterToUpperCase(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(firstLetterToUpperCase("hello, i'm almas"));

// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. Example string : 'Web Development Tutorial'

function longestWord(str) {
  const aryStr = str.split(" ");

  let longestStr = aryStr[0];

  for (let i = 0; i < aryStr.length; i++) {
    if (aryStr[i].length > longestStr.length) {
      longestStr = aryStr[i];
    }
  }
  return longestStr;
}

console.log(longestWord("The Future of Word is AI"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox'

function countVowels(str) {
  let pattern = /[aeiou]/gi;

  let matches = str.match(pattern);
  return matches ? matches.length : 0;
}

console.log(countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion. Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(10));

// 9. Write a JavaScript function that accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(value) {
  return typeof value;
}

console.log(getType("Almas"));
console.log(getType(42));
console.log(getType(undefined));
console.log(getType(false));
console.log(getType({}));
console.log(getType(function () {}));
console.log(getType([]));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      }else{
        row.push(0)
      }
    }
    matrix.push(row)
  }
  return matrix;
}

console.log(matrix(5))

// 11. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5]

function findSecondLowestAndSecondLargest(ary){
    
    let sortedAryAsc = ary.slice().sort((a,b) => a - b)

    let sortedAryDesc = ary.slice().sort((a,b) => b - a)

    let secondGreatest = sortedAryDesc[1]
    let secondLowest = sortedAryAsc[1]

    return {
        secondLowest: secondLowest,
        secondGreatest: secondGreatest
    }
}

console.log(findSecondLowestAndSecondLargest([1,2,3,4,5,6,7,8]))

// 12. Write a JavaScript function that checks whether a number is perfect.

function perfectNum(num){

    let sum = 0;
    let divisor = []

    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            sum += i;
            divisor.push(i)
        }
    }

    if(sum === num){
        return{
            isPerfect: true,
            sum: sum,
            divisor: divisor    
        }
    }else{
        return {
            isPerfect: false,
            sum: sum,
            divisor:divisor
        }
    }

}

console.log(perfectNum(18))

// 13. Write a JavaScript function to compute the factors of a positive integer.

function computeFactors(num){

    factors = []
    
    if(num <= 0 || !Number.isInteger(num)){
        return "Invalid! Please put the positive integer"
    }

    for(let i=1; i<=num; i++){
        if(num % i === 0){
            factors.push(i)
        }
    }
    return factors
}

console.log(computeFactors(12))

// 14. Write a JavaScript function to convert an amount into coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.


function amountToCoins(amount, coins) {

    if (amount <= 0 || !Number.isInteger(amount)) {
        return "Invalid amount. Please provide a positive integer amount.";
    }

    const result = [];

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }

    return result;
}

console.log(amountToCoins(50, [5])); 
