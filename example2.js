const newObj = {};

const myalpha = ['a', 'b', 'c']


const specialStuff = {
  "key": "value1 ",
  myNumberArr: [1,2,3], //[3,2,1]
  myAge: 2,
  nestedObject: {

    "key": "value2",
    someNumber: 50
  },
  name: 'Eric',
  speak: function(){
    console.log(`hey my name is ${this.name}`)
  },
  myalpha
};

console.log('dotssssssss', specialStuff.nestedObject.key)

const newBlank = new Object(); // {}
console.log('newBlank ------------>',newBlank)

const reallySpecialStuff = new Object(specialStuff)
// console.log('our really special stuff before ME', reallySpecialStuff);

reallySpecialStuff.name = 'ME';
// console.log('our really special stuff', reallySpecialStuff);

const arr = [['key', 'value'], ['key2', 'value2']]

const newThing = Object.fromEntries(arr);

console.log(newThing);

console.log(Object.entries(reallySpecialStuff));
console.log('values ======>',Object.values(reallySpecialStuff));
console.log('keys=======>',Object.keys(reallySpecialStuff));

const  objequal = function(obj1, obj2) {
  const keys = Object.keys(obj1);
  // if( //length 1  === /// length 2)
  for ( const key of keys) {

    if(Array.isArray(obj1[key])) {
      //function to compare array
    }

    if (!obj2[key]) {
      return false
    }
    if (obj1[key] !== obj2[key]){
      return false
    }
  }
  return true
}
