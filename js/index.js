// Your code goes here
let topImg = document.querySelector(".intro img");
topImg.addEventListener("mouseover", event => {
  event.target.src = "img/adventure.jpg";
});

topImg.addEventListener("mouseout", event => {
  event.target.src = "img/fun-bus.jpg";
});

let intro = document.querySelector(".intro");

let yourName = document.createElement("h1");
yourName.style.color = "blue";
yourName.textContent = "Type your Name";
intro.appendChild(yourName);

let yourNameSpace = document.createElement("h1");
yourNameSpace.style.color = "blue";
yourNameSpace.style.border = "1px solid green";
yourNameSpace.style.height = "10rem";

document.addEventListener("keydown", logKey);
function logKey(e) {
  yourNameSpace.textContent += ` ${e.code}`;
}

intro.appendChild(yourNameSpace);

//drop

let dropzoneE = document.createElement("p");
dropzoneE.style.height = "1 rem";
dropzoneE.style.width = "15rem";
dropzoneE.style.background = "red";
dropzoneE.textContent = "Europe";
intro.appendChild(dropzoneE);

let dropzoneSA = document.createElement("p");
dropzoneSA.style.height = "1 rem";
dropzoneSA.style.width = "15rem";
dropzoneSA.style.background = "yellow";
dropzoneSA.textContent = "South America";
intro.appendChild(dropzoneSA);

let dropzoneM = document.createElement("p");
dropzoneM.style.height = "1 rem";
dropzoneM.style.width = "15rem";
dropzoneM.style.background = "green";
dropzoneM.textContent = "Mexico";
intro.appendChild(dropzoneM);

let cDestination = document.querySelector(".content-destination");

let dropzoneEC = document.createElement("div");
dropzoneEC.style.height = "5rem";
dropzoneEC.style.width = "15rem";
dropzoneEC.style.background = "red";
dropzoneEC.textContent = "Africa";
dropzoneEC.style.fontSize = "4rem";
cDestination.appendChild(dropzoneEC);

dropzoneEC.addEventListener("click", e => {
  e.target.style.background = "black";
});
dropzoneEC.addEventListener("click", e => {
  e.target.style.color = "red";
});

let cDesImg = document.querySelector(".content-destination img");
dropzoneEC.addEventListener("click", e => {
  cDesImg.src = "img/fun-bus.jpg";
});

let dropzoneSAC = document.createElement("div");
dropzoneSAC.style.height = "5rem";
dropzoneSAC.style.width = "15rem";
dropzoneSAC.style.background = "yellow";
dropzoneSAC.textContent = "South America";
cDestination.appendChild(dropzoneSAC);

let dropzoneMC = document.createElement("div");
dropzoneMC.style.height = "5rem";
dropzoneMC.style.width = "15rem";
dropzoneMC.style.background = "green";
dropzoneMC.textContent = "Mexico";
cDestination.appendChild(dropzoneMC);

/*
let dragEl = document.createElement("#dra");
dragEl.style.height = "5rem";
dragEl.style.width = "15rem";
dragEl.style.background = "white";
dragEl.textContent = "BUS!";
*/

// window resize
let midTitle = document.querySelector(".intro h2");

window.addEventListener("resize", e => {
  midTitle.textContent = "Bang! Bang! Fun! Fun!";
});

//scroll

let contHome = document.querySelector(".container home");
//let rotImg = document.querySelector(".img-content img");

window.addEventListener("scroll", function(e) {
    intro.style.background = "green";
});

//double click
let imgContent = document.querySelectorAll(".img-content img");

imgContent.forEach(item => {
    item.addEventListener("dblclick", e => {
        item.style.transform = 'scale(1.3)';
        item.style.transition = ' transform 0.5s';
    })
})

let imgContentDown = document.querySelectorAll(".img-content img");

imgContentDown.forEach(item => {
    item.addEventListener("click", e => {
        item.style.transform = 'scale(1)';
        item.style.transition = ' transform 0.5s';
    })
})