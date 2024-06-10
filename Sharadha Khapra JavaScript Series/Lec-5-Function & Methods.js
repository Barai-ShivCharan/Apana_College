/*
function myFunctionfirst(message){
    // Parameter -->Input
    console.log(message);
}
myFunctionfirst("I love JavaScript")// Arguments


function myFunction(message ,n){
    // Parameter -->Input
    console.log(message,n);
}
myFunction("I love JavaScript by sharadha kahpra",5)// Arguments


//Lets Create a function To Calculate the sum of Two numbers
function sum(a,b){
    console.log(a+b);
}
sum(2,400)

//  Return function with value
function sumof(x,y){
    s=x+y;
    return s;
}
let val=sumof(3,4)
console.log(val)


// Add Two number by Arrow Function
 const arrowSum=(a,b)=>{
    console.log(a+b);
 }
 arrowSum(2,490)
// Multiple Two number by Arrow Function
 const arrowmul=(a,b)=>{
    console.log(a*b);
 }
 arrowmul(2,490)

 const arrowmul1=(a,b)=>{
    return a*b;
 }
 console.log(arrowmul1(2,490))


 const printello=()=>{
    console.log("Hello Mr Shivcharan Barai")
 }
 */

// Q-1: Create a function using the "Function" keyword that takes a String as an agruments and return the number of Vowels in the String.
/*
function countVowels(str) {
  //"ApanCollege" count=5
  let count = 0;
  for (const char of str) {
    // console.log(char)
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      count++;
  }
  console.log(count);
}
countVowels("Apanacollege")
*/

// Q-2: Create an Arrow funvtion to Perform the same task
/*
const countstr_arrowfn=(str)=>{
    let count = 0;
    for (const char of str) {
      // console.log(char)
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      )
        count++;
    }
    console.log(count);
}
countstr_arrowfn("abc")
*/

// aa.forEach loop function
/*
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){// value at each index]
    console.log(val)
})*/

// Above Code can be Written as by Using arrow function

/*
let arr=[1,2,3,4,5];
let arr1=["pune","delhi","Gujarat"];

// arr1.forEach((val)=>{
arr1.forEach((val,idx,arr)=>{
    // console.log(val);
    console.log(val.toUpperCase(),idx,arr);
})
*/

// Q-3 For a Given array of numbers, print the square of each value using the forEach loop.
/*
let nums=[1,2,3,4,5,6];

nums.forEach((num)=>{
    console.log(num*num);//num**2
});*/

//Some  more Array Methods

//1> Map
/*
 let nums=[1,2,3,4,5,6]

 nums.map((val)=>{
  console.log(val*val);
 })
*/
/*
let nums=[1,2,3,4,5,6]

let numval=nums.map((val)=>{
// let numval=nums.map((val)=>{
  return val*2;

})
console.log(numval)
*/

// 2 Filter
/*
let arr=[1,2,3,4,5,6,7,8];

let evenArr=arr.filter((val)=>{
  return val%2==0;
})
console.log(evenArr)*/

// 3 Reduce

/*
let arr=[1,2,3,4];

let output=arr.reduce((result,current)=>{// gives single valu
  return result+current;
  // reurnn result>current?result:current;// for greater value find in single form
})
console.log(output)
*/

// Q-4 We are Given array of marks of student. Filter out the  marks of students that scored above 90.

/*
let marks=[34,56,89,90,94,97,34,23,32];
let topper=marks.filter((val)=>{
  return val > 90;
})

console.log(topper)
*/



// Q-5 Take a number n as input from the user.Create an array of numbers from 1 to n

let n=prompt("enter the number here.... ")

let arr=[];
for(let i=1;i<=n;i++){
  arr[i-1]=i;
}
console.log(arr)
// ->Use the reduce method to calculate sum of all nujmbers in the array
let sum=arr.reduce((res,curr)=>{
  return res+curr;
});
console.log(sum)
// Use the reduce method to calculate product of all numbers in the array


