// 2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.  

function gcd(a, b) {
    if (b === 0) {
        return a; 
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(2,5));

// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.  Example : range(2, 9)

function range(x, y) {
    if (x === y - 1) {
        return [];
    } else {
        return [x + 1].concat(range(x + 1, y));
    }
}

console.log(range(2, 9)); 


// 4. Write a JavaScript program to compute the sum of an array of integers.  Example : var array = [1, 2, 3, 4, 5, 6]

function sumAry(ary){
    if(ary.length === 0){
        return 0;
    }else{
        return ary[0] + sumAry(ary.slice(1))
    }
}

console.log(sumAry([1,2,3,4,5]))


// 5. Write a JavaScript program to compute the exponent of a number.  Note : The exponent of a number says how many times the base number is used as a factor.



function computeExponent(base, exponent) {
 
    if (exponent === 0) {

        return 1; 

    } else if (exponent === 1) {

        return base; 

    } else {

        return base * computeExponent(base, exponent - 1);

    }
}

console.log(computeExponent(2, 2)); 
