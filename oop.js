// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person{
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country
    }
}

let person1 = new Person("Almas",23,"Pakistan")
let person2 = new Person("Ali",26,"America")

console.log({person1,person2})