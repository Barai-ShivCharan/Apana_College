/*let btn1=document.querySelector("#btn1")

//Event Handling 
btn1.onclick=()=>{
    console.log("btn1 was clicked")
    let a=24;
    a++
    console.log(a)
}
*/
/*
let  div=document.querySelector("div")
div.onmouseover=()=>{
    console.log("You are Inside the div")
}*/

let btn2=document.querySelector("#btn1")
btn2.addEventListener("click",(evt)=>{
    console.log(" Button was clicked")
})
let btn1=document.querySelector("#btn1")
btn1.addEventListener("click",()=>{
    console.log(" Button was clicked")
})
