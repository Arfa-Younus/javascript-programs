// // global variable 
// let globalVar = 10;
// function check(){
//    console.log(globalVar);
// }
// check();




// // local variable 
// function check(){
//     let localVar = "agr local varible ko bahir block ky "+
//     "call kro gy comment wala error ayega ";
//    console.log(localVar);
// }
// check();
// // console.log(localVar);
// //variabletypes.js:17 Uncaught ReferenceError: localVar is not defined
// //at variabletypes.js:17:13




// // instance variable
// class Car{
//     constructor (color){
//         this.color = color;
//         //So, in simple terms, this.color is an instance
//         // variable because it represents a unique characteristic (color) 
//         //for each individual car created from the Car class. 
//         //Each car has its own color, and the instance variable allows you to store and access 
//         //this specific information for each instance of the class.
//     }
//     displayColor(){
//         console.log(`this color is ${this.color}`)
//     }
// }
//  const redCol = new Car("red");
//  const blueCol = new Car("blue");

//  redCol.displayColor();
//  blueCol.displayColor();




// //class variable
// class Car{
//     static numberOfWheel = 4;

//     constructor (make){
//         this.make = make;
//     }
//      printDetails(){
//     console.log(`${this.make} has ${Car.numberOfWheel} wheels `)
//      }
// }

// const firstCarName = new Car("toyota");
// const secondCarName = new Car("honda");
// firstCarName.printDetails();
// secondCarName.printDetails();




// // static variable
// class Classroom{
//     static commmonBook = "history of pakistan ";
//     constructor(name){
//         this.name = name;
//     }
//     printData(){
//         console.log(`${this.name} is reading ${Classroom.commmonBook}`)
//     }
// }
// firstStu = new Classroom ("iqra");
// secondStu = new Classroom ("sara");
// firstStu.printData();
// secondStu.printData();