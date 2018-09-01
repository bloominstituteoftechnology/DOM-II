const logo = document.querySelector('.logo-heading');
const rickRoll = document.querySelector(".rickRoll");
const buttonList = document.querySelectorAll('.btn');
const adventurePic = document.querySelector(".img-content img");


//new images for rickRoll
const rick = document.createElement('img');
rick.src = "img/rick.jpg"
const roll = document.createElement('img');
roll.scr = "img/roll.jpg"

//img event
rickRoll.addEventListener("mouseover", mouseOverImage);

function mouseOverImage () {
    if (rickRoll.src.includes("img/fun-bus.jpg")) {
        rickRoll.src = "img/rick.jpg"
    } else if (rickRoll.src.includes("img/rick.jpg")) {
        rickRoll.src = "img/roll.jpg"
    } else if (rickRoll.src.includes("img/roll.jpg")) {
        rickRoll.src = "img/fun-bus.jpg"
    }
};
//needs debugging. Ask for advice on stand up

//button event
buttonList.forEach(function(button) {
    button.addEventListener('click', goAway);
});

function goAway (event){
    event.target.style.display = "none";
};



// needs debugging

//nav 
logo.addEventListener("mouseover", function() {
    logo.style.border = '2px dashed black';
    logo.style.backgroundColor = 'gold';
    logo.style.padding = '10px';
});

//adventure pick effect
function fade() {
    adventurePic.style.opacity = '.7';
};
function noFade() {
    adventurePic.style.opacity = '';
};
adventurePic.addEventListener("mouseover", fade);
adventurePic.addEventListener("mouseout", noFade);