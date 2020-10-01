// Your code goes here
window.addEventListener("online", (event) => {
    console.log("you are now connected to the network.");
});

const sizer = document.createElement("p")
    sizer.textContent = ("go to tablet view")
    navLink.appendChild

let logoHeading = document.querySelector(".logo-heading")

logoHeading.addEventListener("mouseover", function ( event ) {
    event.target.style.color = "blue";
    
setTimeout(function() {
    event.target.style.color = "";
}, 500);
}, false);

const navLink = document.querySelector(".nav-link")

function backColor(event){
    navLink.style.backgroundColor = 'orange';
}
navLink.addEventListener('click', backColor);

const btn = document.querySelector('.btn')

btn.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = "orange";
})

const dest =document.querySelector('.destination p');

document.addEventListener('keydown', (event) => {
    if (event.key === "b"){
        dest.style.color = 'orange';
    }
})

const travelText = document.querySelector(".intro p");

document.addEventListener('click', (event) =>{
    if (event.target === travelText){
    travelText.style.transform = "scale(1.5)"
    }
})