const listOfReceivedData = [
  {type:"astro", data:"Saturn Data"},
  {type:"bio", data:"Space Potatoes"},
  {type:"physics", data:"Lagrange Points"},
  {type:"bio", data:"OMG Tardigrades"},
  {type:"physics", data:"Material reflectivity"},
  {type:"astro", data:"Mercury is not the hottest"},
]

// Output:

//     {
//       "astro":["Saturn Data","Mercury is not the hottest"],
//       "bio":["Space Potatoes","OMG Tardigrades"],
//       "physics":["Lagrange

// for (const elem of inputData) is similar to the for each below on line 23

// const port  = process.env.PORT || "8080"

const organizeData = (inputData) => {
  const output = {};
  inputData.forEach((elm, index) => {
    !output[elm.type] ? output[elm.type] = [elm.data] : output[elm.type].push(elm.data)
  })
  return output;
};

//if(!output[elem.type]){

// }else{

// } this is similar to the ternary on line 24