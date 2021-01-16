// Your code goes here

// window.onload = function(event) {
//     console.log(`${event.type}`);
// };

const funBusImg = document.querySelector("#funBusImg");
const mapImg = document.querySelector("#mapImg");
const boatCityImg = document.querySelector("#boatCityImg");
const boatRockImg = document.querySelector("#boatRockImg");


funBusImg.addEventListener('mouseover', event =>{
    console.log(`${event.type}`);
    funBusImg.style.borderRadius = "10px";
    funBusImg.style.boxShadow = "10px 10px #AAD4E2";
}) 
funBusImg.addEventListener('mouseout', event =>{
    console.log(`${event.type}`);
    funBusImg.style.borderRadius = "0px";
    funBusImg.style.boxShadow = "0px 0px"
})

mapImg.addEventListener('mouseover', event=>{
    console.log(`${event.type}`);
    mapImg.style.boxShadow = "10px 10px #A2AD8B";
})
mapImg.addEventListener('mouseout', event=>{
    console.log(`${event.type}`);
    mapImg.style.boxShadow = "0px 0px";
})
boatCityImg.addEventListener('mouseover', event=>{
    console.log(`${event.type}`);
    boatCityImg.style.boxShadow = "10px 10px #CA8071";
})
boatCityImg.addEventListener('mouseout', event=>{
    console.log(`${event.type}`);
    boatCityImg.style.boxShadow = "0px 0px";
})
boatRockImg.addEventListener('mouseover', event=>{
    boatRockImg.style.boxShadow = "10px 10px #3F735D" 
})
boatRockImg.addEventListener('mouseout', event=>{
    boatRockImg.style.boxShadow = "0px 0px";
})