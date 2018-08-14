// Your code goes here

const homeContainer = document.querySelector(".container home");
homeContainer.addEventListener("click", (event)=>{
 console.log("home container was clicked!");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.addEventListener("click", (event))=>{
    event.target.style.color = "blue";
});

let introImg = document.getElementById(".intro img");

introImg.addEventListener("mouseenter", () => {
    introImg.style["border-radius"] = "8px";
});
introImg.addEventListener("dragstart", () => {
    alert("This image cannot be dragged!");
});

let signMeButton = document.querySelectorAll(".btn");
signMeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    document.querySelector(".container home").style.backgroundColor = getRandomColor(); 
}	});

function getRandomColor(){
    let letters= "0123456789ABCDEF";
    color += letters[Math.floor(Math.random()*16)];
}
return color;
});
signMeButton.addEventListener("auxclick", (event) =>{
    event.stopPropagation();
    document.querySelector(".container home").style.backgroundColor = "white";
});
document.querySelector(".container home").addEventListener("click", (event)=>{
  event.stopPropagation();
  document.querySelector(".container home").style.backgroundColor = "white";
}); 
