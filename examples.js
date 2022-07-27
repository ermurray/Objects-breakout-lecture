const myEmptyObj = {};
const mySecondObj = {};

const myObj = {
  "key" : "value1",
  myArr: [1, 2, 3],
  myOtherObj: {
    "key": "value2"
  },
  myFunc: function(){
    console.log(`this is my key ${this.myNum}`);
  },
  myNum: 1,

};
const myObj2 = {
  'key' : 'value3',
  myFunc: function(){
  
    console.log(`this is my key:${this.key}`)
  }
  
}

myObj.myFunc();
myObj2.myFunc();
const blankObj = new Object();
const objStuff = new Object(myObj);

objStuff.key = 'my newValue';
objStuff.myNum = 2;
objStuff.newNum = 3;

console.log("myNum",objStuff.newNum);

objStuff.myFunc();

const myVar = 'otherStuff'

mySecondObj.someStuff = "some other value";
mySecondObj[myVar] = 'a value of stuff'; // {otherstuff: "a value of stuff"}
console.log(mySecondObj);

const myFun = function(obj) {
  for (prop in obj){
    console.log("the key inside fun",prop)
    console.log("the value inside fun",obj[prop])

  }
}

myFun(myObj);

const car1 = {
  name: 'luke',
  make: "honda",
  model: "accord",
  color: "blue",
  year: "1985",
  type: "Sedan",
};

const car2 = {
  name: 'leia',
  make: "honda",
  model: "civic",
  color: "red",
  year: "1987",
  type: "Sedan",
};
const car3 = {
  name: "han",
  make: "toyota",
  model: "celica",
  color: "Hot Pink",
  year: "1999",
  type: "Sedan",
};

const cars = {
  car1: car1,
  car2,
  car3,
}
// const myArr = ['1', '2', '3'];

// const coolArr = {
//   0: '1',
//   1: '2',
//   2: '3'  
// }

const myKeys = Object.keys(car3);
const myVals = Object.values(car3);
const myEntries = Object.entries(car3);

console.log( 'this is my Keys:', myKeys);
console.log( 'this is my vals:', myVals);
console.log( 'this is my Entries:', myEntries);

const copyCar3 = Object.fromEntries(myEntries);
console.log('this is a copy:', copyCar3);



 const findMyCar = function(input){
   let result;
  for (car in input) {
    if(input[car].color === 'blue'){
      console.log(input[car].name);
    }
  }

 }
 
findMyCar(cars);



const isACar = (obj1, obj2) => {
 const keys1 = Object.keys(obj1)
 const keys2 = Object.keys(obj2)

 for (key in keys1){
   if(!keys2.includes(keys1[key])){
     return false
   } 
 }
 return true

} 

const person = {
  name: "bob",
  age: "555",


}


console.log(isACar(car1, car2)) // expect true
console.log(isACar(car1, person)) // expect false



//  findMyCar(cars);

class Person {
  constructor(name) {
    this.firstName = name;
    this.lastName = null;
  }
  sayName() {
    console.log(`I am called, ${this.firstName}`)  
  }
}