// 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function integerCheck(num){

    if(!Number.isInteger(num)){
        throw new Error("The number is not an Integer")
    }
}

try {
    integerCheck(5);
    integerCheck(5.643)
} catch (err) {
    console.error(err.message)
} 


// 2. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
    let obj = undefinedObj.someProperty;
} catch (err) {
    if(err instanceof TypeError){
        console.error("Caught TypeError",err.message)
    }else{
        console.error("An unexpected error occured",err.message)
    }
}

// 4. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.

function checkPositiveNum(num){
    if(num<0){
        throw new Error("The number is negative")
    }
    
}

try {
    checkPositiveNum(9);
    checkPositiveNum(-9);
} catch (err) {
    console.error(err.message)
}

// 5. Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

function checkNotEmptyAry(ary){
    if(ary.length === 0){
        throw new Error("The Array is Empty")
    }
}

try {
    checkNotEmptyAry([1,2,5,6])
    checkNotEmptyAry([])
} catch (err) {
    console.error(err.message)
}

// 6. Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function checkNonEmptyStr(str){
    if(str === ''){
        throw new Error("This String is empty")
    }
}

try {
    checkNonEmptyStr("Almas")
    checkNonEmptyStr("")
} catch (err) {
    console.error(err.message)
}

// 7. Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

try {
    const ary = [1, 2, 3];
    const value = ary[5];
    if(value === undefined){
        throw new RangeError("Put the correct index.")
    }
} catch (error) {
    if (error instanceof RangeError) {
        console.error("Invalid index:", error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}


// 8. Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

try {

    const obj = null;
    obj.method(); 
    undefinedVariable.method(); 
    const arr = [1, 2, 3];
    arr.length = "invalid"; 

} catch (error) {

    if (error instanceof TypeError) {
        console.error("Caught TypeError:", error.message);
    } else if (error instanceof ReferenceError) {
        console.error("Caught ReferenceError:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Caught RangeError:", error.message);
    } else if (error instanceof SyntaxError) {
        console.error("Caught SyntaxError:", error.message);
    } else {
        console.error("Caught generic Error:", error);
    }

}

// 9. Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI.

try {
   
    const encodedURI = '%invalidURI';
    const decodedURI = decodeURIComponent(encodedURI);
    
    console.log('Decoded URI:', decodedURI);

} catch (error) {
    if (error instanceof URIError) {
       
        console.error('Caught URIError:', error.message);

    } else {
    
        console.error('Unexpected error:', error);
    }
}


// 10. Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.

function processPayment(paymentInfo) {
    try {
        
        const paymentResult = makePayment(paymentInfo);
        console.log('Payment successful:', paymentResult);

    } catch (error) {

        console.error('Error processing payment:', error.message);
     
        notifyUser(paymentInfo.user, 'Payment failed. Please try again later.');
    } finally {
   
        logPaymentAttempt(paymentInfo);
    }
}

function makePayment(paymentInfo) {

    throw new Error('Insufficient funds');
}

function notifyUser(user, message) {
    console.log('User notified:', message);
}

function logPaymentAttempt(paymentInfo) {
    console.log('Payment attempt logged:', paymentInfo);
}

const paymentDetails = {
    user: 'exampleUser123',
    amount: 100,
    cardNumber: '1234 5678 9012 3456',
};

processPayment(paymentDetails);


// 11. Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.

try {

    eval('console.log("Hello, world!") + ');

} catch (error) {

    if (error instanceof EvalError) {
        console.error('Caught EvalError:', error.message);
    } else {
        console.error('Unexpected error:', error);
    }

}


// 12. Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.

try {
   
    console.log(undefinedVariable);

} catch (error) {

    console.error('Caught ReferenceError:', error.message);
}


// 13. Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

try {
  
    JSON.parse('{"name": "John", "age": 30, "city": "New York"}');

} catch (error) {

    console.error('Caught SyntaxError:', error.message);
}
