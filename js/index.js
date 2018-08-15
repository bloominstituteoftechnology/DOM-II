// Your code goes here

const homeContainer = document.querySelector(".container home");
homeContainer.addEventListener("click", (event)=>{
 console.log("home container was clicked!");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.addEventListener("click", ()=>{
    event.target.style.color = "red";
});

const funBusImg = document.querySelector(".intro img");

funBusImg.addEventListener("mouseleave", () => {
    funBusImage.style.transform="rotate(5deg)";
    console.log("hoppa");
});
introImg.addEventListener("dragstart", () => {
    alert("This image cannot be dragged!");
});

const signMeButton = document.querySelectorAll(".btn");
signMeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    document.querySelector(".container home").style.backgroundColor = getRandomColor(); 
	});

    const AdventureImg = document.querySelector("adventure");
window.adventureImage.style.border = "thick solid pink";
console.log("big adventure!");

function getRandomColor(){
    let letters= "0123456789ABCDEF";
    color += letters[Math.floor(Math.random()*16)];
     return color;
}


signMeButton.addEventListener("auxclick", (event) =>{
    event.stopPropagation();
    document.querySelector(".container home").style.backgroundColor = "white";
});
document.querySelector(".container home").addEventListener("click", (event)=>{
  event.stopPropagation();
  document.querySelector(".container home").style.backgroundColor = "white";
}); 

const footer = document.querySelector("footer");
window.addEventListener("drag", ()=> {
    footer.style.margin = "25rem";
    console.log("adventure img!");
});