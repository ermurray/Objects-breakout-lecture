const myEmptyObj = {};
const mySecondObj = {};

const myObj = {
  "key" : "value1",
  myArr: [1, 2, 3],
  myOtherObj: {
    "key": "value2"
  },
  myFunc: function(){
    console.log(`this is my key ${this.key}`);
  }

};

myObj.myFunc();

const objStuff = new Object(myObj);

objStuff.key = 'my newValue';

objStuff.myFunc();

const myVar = 'otherStuff'

mySecondObj.someStuff = "some other value";
mySecondObj[myVar] = 'a value of stuff'; // {otherstuff: "a value of stuff"}
console.log(mySecondObj);

// const myFun = function(obj) {
//   for (prop in obj){
//     console.log("the key",prop)
//     console.log("the value",obj.prop)

//   }
// }

// myFun(mySecondObj);

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






 const findMyCar = function(input){
  for (car in input) {
    if(input[car].color === 'blue'){
      console.log(input[car].name);
    }
  }

 }


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