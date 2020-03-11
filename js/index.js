// Your code goes here
let x = 0;
homeLink.addEventListener(
    'click',//string which names event type
    ()=>{
console.log('link got clicked')
}//callback function
)
const nav1 = document.querySelector('nav')
nav1.addEventListener("mouseover", ()=>{
   
    nav1.style.backgroundColor = "green";
})

nav1.addEventListener("mouseout", ()=>{
   
    turnWhite = nav1.style.backgroundColor = "white";
    if(x===10){
        turnWhite.preventDefault;
    }
})



//

document.querySelector('header').addEventListener("click",()=>(
   alert("header is clciked")
)
)
console.log("this "+"that")