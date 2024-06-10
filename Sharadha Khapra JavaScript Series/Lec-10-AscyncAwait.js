// Asynchronous
/*
function hello() {
  console.log("Hello");
}
setTimeout(hello, 4000); // timeout   2s=2000(milisecond)

setTimeout(() => {
  console.log("This is setimeout arrow function");
}, 2000);
console.log("Hello2");
console.log("Hello3");
*/

//Callbacks---> A  callback is a function passed as an argument to another function.
/*
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(2, 3, sum);
*/

//Callback Hell---> Nested callbacks stacked below one another forming  a  pyramid. structurre.
/*
function getDataId(dataId, getNextData) {
  setTimeout(() => {
    console.log("Data", dataId);
    getNextData();
  }, 2000);
}
//This is callBAck Hell-->NEsted calll BAck
getDataId(1, () => {// This is callBack inside function are passed as arguments
  getDataId(2,()=>{ // Hell Because of Function
    getDataId(3,()=>{//inside function are passed as arguments
      getDataId(4)
    });
  });
});
*/

/*
Promises-->Promises  is introduce  to solve the problem of callBAck hell
Promise is for "Eventual" Completion of task .it is an objectt in js.........It is a sloution to callback hell.
A JavaScript Promise Object can be:
1- PEnding:The result is undefined
2-Resolved: The result is a Value(fulfilled)               resolve(result)
3-Rejected: The Result is an Error Object 

reject(error)
let promise = new Promise((resolve, reject) => {
  console.log("I am a Promise");
  resolve("Succuess")
  reject("Some error")
});
****Promise has state (pending ,fulfilles) & some result(result for solve & error For reject)
*/

// const getPromise = () => {
//   new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve("Success");
//   });
// };

// let promise=new getPromise();

//Async-Await
/**
 * async function always returns a promise.
 * async function myFunc(){...}
 * await pauses the execution of its surrounding async function until the promise is settled
 


*/

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 2000);
  });
}
async function getWeatherData(){
  await api()
  await api()
}
/**
 * IIFE:Immediately Invoked Function Experession
 * IIFE is a function that is callled immediately invoked as soon as it is defined.  (This is davace js)
 * it doesnot have any name .it is execuated on function no need to call function  (func)()
 * 
 * 
 * 




 */
