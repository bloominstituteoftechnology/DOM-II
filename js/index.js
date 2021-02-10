// Your code goes here
//Change opacity of Bus Image when hovering


//Joe's Example
// const busImg = document.querySelector('header img');
// busImg.addEventListener('mouseover', (event) => {
//     event.target.style.opacity = 0.5;
// });
// //Change opacity back after hovering 
// busImg.addEventListener('mouseout', (event) => {
//     event.target.style.opacity = 1;
// });

//
//Make title disappear
const funBusTitle = document.querySelector("h1");
console.log(funBusTitle);

funBusTitle.addEventListener('mouseover', function(event){
    event.target.style.opacity = 0;
});

//Make the first button yellow
const buttons = document.querySelectorAll(".btn");
console.log(buttons)

buttons[0].addEventListener('click', function(event){
    event.target.style.backgroundColor="yellow";
  });

//ESC Background Color Change (down is red,, up is blue)
const docBackground = document.querySelector("body");
console.log(docBackground)

docBackground.addEventListener('keydown', (event) =>{
    event.target.style.backgroundColor="red";
});

docBackground.addEventListener('keyup', (event) =>{
    event.target.style.backgroundColor="blue";
});

//Hover border on nav
//Mouseleave take away border on nav
document.querySelectorAll('.nav-link').forEach(item=>{
    item.addEventListener('mouseover', (event)=>{
        event.target.style.border="solid 2px pink"
    });
    item.addEventListener('mouseleave', (event)=>{
        event.target.style.border="none"
    });
});

//Green p text on doubleclick
//Purple p text on mousedown
document.querySelectorAll('p').forEach(item=>{
    item.addEventListener('dblclick', (event)=>{
        event.target.style.color="green"
    });
    item.addEventListener('mousedown', (event)=>{
        event.target.style.color="purple"
    });
    item.addEventListener('mouseup', (event)=>{
        event.target.style.color="brown"
    });
    item.addEventListener('copy', (event)=>{
        event.target.style.fontSize="200%"
    });
});







//attempt 2

// buttons.forEach(item => {
//     buttons.addEventListener('onmouseover', function(){
//         buttons.style.backgroundColor="red";
// });

// const buttonsRealArray=Array.from(buttons);


//attempt 1
// buttons.addEventListener('onmouseover', function(event){
//   button.style.backgroundColor="red";

//});








