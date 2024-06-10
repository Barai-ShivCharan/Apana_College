// console.log(document.head)

// document.body.style.background="green";
// document.body.childNodes[2].innerText="abcd";
/*
let header=document.getElementById("heading");//it return value if h1
console.dir(header);
// console.log(header);
let headings=document.getElementsByClassName("h-1")
console.dir(headings)

let parahs=document.getElementsByTagName("p")
console.dir(parahs)

let firstelement=document.querySelector("p")// 1st element targets
console.dir(firstelement)

let allelements=document.querySelectorAll("p")
console.dir(allelements)

let alleleclass=document.querySelectorAll(".h-1")// for class we use .
let alleleid=document.querySelectorAll("#h-1")// for id we use #
console.dir(alleleid)
*/

// let div=document.querySelector("div");
// console.dir(div)


// Q-1 Create H2 heading element wih text-"Hello JavaScript". append "from Apana College students" to this text using javaScript
// let h2=document.querySelector("h2")
// console.dir(h2.innerText)
// h2.innerText=h2.innerText +"From Apana College" //Concaten

//Q-2 Create 3 divs with common class name- "box",Access them & add some unique text to each of them.
let divs=document.querySelectorAll(".box");
divs[0].innerText="New Unique value 1"
divs[1].innerText="New Unique value 2"
divs[2].innerText="New Unique value 3"