// Your code goes here



//---------- mouseover event-----------//

Array.from(document.links).forEach(link =>{
    link.addEventListener("mouseenter", function(event){
        event.target.style.color = "orange"

        //------reset color-----//
        setTimeout(function() {
            event.target.style.color = "";
        },400);
    }, false);
})


//----------keydown------------//

let h1Color = document.querySelector("logo-heading")
function enterKey(event){
    if(event.key === "Enter"){
        event.target.style.color = "green";
    }
}
document.addEventListener("keydown", enterKey);


//-------- alert --------------//

let button = document.querySelector("h1")
button.addEventListener("click", myFunction); 
function myFunction(event) {
    alert("WELCOME TO THE FUN BUS!");
}

//----------dbclick----------//

let db = document.querySelector("h2");

document.ondblclick = logDoubleClick;

function logDoubleClick(event) {
  db.textContent = "Congratulation, you have unlocked the secret message. Thank you for being a loyal supporter." ;
}

//-----------mouse over-----------//

let h1Over = document.querySelector("h1")
h1Over.addEventListener("mouseleave", function(event) {
    event.target.style.color = "purple"
});

// -----------------focus--------------//

const focus = document.querySelector(".footer p");

focus.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

focus.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

//------------------pointer move -------------------//

const point = document.querySelector('h2');

point.addEventListener("pointermove", (event) => {
   event.target.style.color = "red"
})



// ----------------- pointer leave ------------------//

const pointLeave = document.querySelector('p');

pointLeave.addEventListener("pointerleave", (event) => {
   event.target.style.color = "blue"
})

//------------ zoom-------------------//
const contentImg = document.querySelector('.intro img')

function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.300, scale), 1.3);
    contentImg.style.transform = `scale(${scale})`;    
}
let scale = 1;

contentImg.onwheel = zoom;

//---------------- Load --------------------//
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

