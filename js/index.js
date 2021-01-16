// Your code goes here

window.onload = function(event) {
    console.log(`${event.type}`);
};

const funBusImg = document.querySelector("#funBusImg");
const mapImg = document.querySelector("#mapImg");
const boatCityImg = document.querySelector("#boatCityImg");
const boatRockImg = document.querySelector("#boatRockImg");
const para = document.querySelectorAll('p');
var darkMode = false;


funBusImg.addEventListener('mouseover', event =>{
    console.log(`${event.type}`);
    funBusImg.style.borderRadius = "10px";
    funBusImg.style.boxShadow = "10px 10px #AAD4E2";
    
}) 
funBusImg.addEventListener('mouseout', event =>{
    console.log(`${event.type}`);
    funBusImg.style.borderRadius = "0px";
    funBusImg.style.boxShadow = "0px 0px"
    funBusImg.setAttribute('title', '');
})

mapImg.addEventListener('mouseover', event=>{
    console.log(`${event.type}`);
    mapImg.style.boxShadow = "10px 10px #A2AD8B";
})
mapImg.addEventListener('mouseout', event=>{
    console.log(`${event.type}`);
    mapImg.style.boxShadow = "0px 0px";
    mapImg.setAttribute('title', '');
})
boatCityImg.addEventListener('mouseover', event=>{
    console.log(`${event.type}`);
    boatCityImg.style.boxShadow = "10px 10px #CA8071";
})
boatCityImg.addEventListener('mouseout', event=>{
    console.log(`${event.type}`);
    boatCityImg.style.boxShadow = "0px 0px";
    boatCityImg.setAttribute('title', '')
})
boatRockImg.addEventListener('mouseover', event=>{
    boatRockImg.style.boxShadow = "10px 10px #3F735D" 
})
boatRockImg.addEventListener('mouseout', event=>{
    boatRockImg.style.boxShadow = "0px 0px";
    boatRockImg.setAttribute('title', '');
})
funBusImg.addEventListener('click', event=>{
    console.log("" + event.type);
    funBusImg.setAttribute('title', 'Welcome To Fun Bus!');
})
mapImg.addEventListener('click', event=>{
    mapImg.setAttribute('title', "Let's Go!");
})
boatCityImg.addEventListener('click', event=>{
    boatCityImg.setAttribute('title', 'Adventure Awaits')
})
boatRockImg.addEventListener('click', event=>{
    boatRockImg.setAttribute('title', 'Pick Your Destination');
})

para.forEach(function(p){
    p.addEventListener('mousedown', event=>{
        p.style.fontSize = "24px"
    })
})
document.addEventListener('keydown', event=>{
    
    if(darkMode === false && event.keyCode === 68){
        alert('You have entered DARK MODE.  Double click to reset.');
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        let head = document.querySelector('.main-navigation');
        head.style.backgroundColor = "#FFEBCD";
        head.style.color = "black";
        darkMode = true;
    }
    
})
document.addEventListener('dblclick', event=>{

    if(darkMode === true){
        alert('You have exited DARK MODE.  Press "D" key to reset.');                
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let head = document.querySelector('.main-navigation');
        head.style.backgroundColor = "#FFEBCD";
        head.style.color = "black";
        darkMode = false;      
    }   
   
})  
 

