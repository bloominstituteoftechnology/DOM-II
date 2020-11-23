// Your code goes here

const logo =document.querySelector('.logo-heading');


logo.addEventListener("clic",() => {
    logo.style.transform = "scale(1.2)";
    logo.style.color = "white";
});

//Events-->Mouse Enter and Mouse Leave

const home = document.querySelectorAll('.nav-link').forEach(item =>{
    item.addEventListener("mouseenter",(e)=>{
        item.style.background="purple";
        item.style.color="white";
    });
});



 const mouseLeave = document.querySelectorAll('.nav-link').forEach(item =>{
     item.addEventListener("mouseleave",(e)=>{
         item.style.background="white";
         item.style.color="Black";
     })
 })
//Add Event Listener keydown
 document.addEventListener("keydown",(e)=>{
     if(e.key === 'c'){
       console.log("El mejor nombre dle mundo comienza con la letra :C");
     } else{
         console.log(`the letter that has been type is ${e.key}`);
     }
 })
 
// Add Event Listener Wheel(Zoom Effect)
  const imgDestination = document.querySelectorAll('img');

  function zoom(e) {
    e.preventDefault();
  
    scale += e.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    imgDestination[3].style.transform = `scale(${scale})`;
  }
  let scale =1;
  
  imgDestination[3].onwheel=zoom;
  
  //Add Event Listener Load

  const btn = document.getElementsByClassName('btn');
  const log =document.querySelector('.log');
  

  function handleEvent(e) {
    log.textContent = log.textContent + `${e.type}: ${e.loaded} process status`;
}

function addEventListener(press){
    press.addEventListener('loadstart',handleEvent);
    press.addEventListener('load',handleEvent);
    press.addEventListener('loadend',handleEvent);
    press.addEventListener('progress',handleEvent);
    press.addEventListener('error',handleEvent);
    press.addEventListener('abort',handleEvent);
}

function runPress(url){
    log.textContent='';

 const press = new XMLHttpRequest();
    addEventListener(press);
    press.open("GET",url);
    press.send();
    return press;
}

btn[1].addEventListener('click',()=>{
    runPress('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
});


/////////Add Event  Listerner Focus////////

const pass = document.querySelector('input[type="password"]');
const name = document.querySelector('input[type="text"]');



pass.addEventListener('focus',(e) =>{
    e.target.style.background="aqua";
    e.target.style.color="white";

});

function focus(targ){
    targ.addEventListener('focus',(event)=>{
        event.target.style.background="aqua";
    });
    return targ;
};
focus(name);


/////// Add Event Listener Resize/////

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

 function showWindowSize(){
     heightOutput.textContent=window.innerHeight;
     widthOutput.textContent=window.innerWidth;
 }

 window.onresize=showWindowSize;


 ////////




