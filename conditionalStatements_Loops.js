// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Sample numbers : 3, -7, 2

function signOfProduct(a,b,c){
    let products = a * b * c;
    if(products < 0){
        return "-"
    }else if(products > 0){
        return "+"
    }else {
        return 0;
    }
}

console.log(signOfProduct(3,-7,2))

// 3. Write a JavaScript conditional statement to sort three numbers. Sample numbers : 0, -1, 4

function sortNums(a,b,c){

    let sortedNums = [a,b,c].sort(((x,y) => y - x ))
    return sortedNums;
}

console.log(sortNums(0, -1, 4))

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

function checkOddAndEven(){

    for(let i=0; i<=15; i++){
        if(i % 2 === 0){
            console.log (`${i} : even`);
        }else{
            console.log (`${i} : odd`);
        }
    }


}
console.log(checkOddAndEven())

// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.


function computeGrade() {
    const students = [
        { name: 'David', marks: 80 },
        { name: 'Vinoth', marks: 77 },
        { name: 'Divya', marks: 88 },
        { name: 'Ishitha', marks: 95 },
        { name: 'Thomas', marks: 68 }
    ];
    
    let totalMarks = 0;
    for (let student of students) {
        totalMarks += student.marks;
    }
    let averageMarks = totalMarks / students.length;
    
    let grade;
    if (averageMarks < 60) {
        grade = 'F';
    } else if (averageMarks < 70) {
        grade = 'D';
    } else if (averageMarks < 80) {
        grade = 'C';
    } else if (averageMarks < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }
    

    console.log((`Average marks: ${averageMarks.toFixed(2)}, Grade: ${grade}`))
}

computeGrade();


// 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
