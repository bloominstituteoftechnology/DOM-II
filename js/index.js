// setup some hooks for the elements
const mainNav = document.querySelector(".main-navigation");
const mainNavTags = document.querySelectorAll("a");
const introImg = document.querySelector(".intro-img");
const funImg = document.querySelector(".fun-img");
const adventureHeading = document.querySelector(".adventure");
const freakyClick = document.querySelector(".freaky-click");
const imgDst = document.querySelector(".img-dst");
const imgAdventure = document.querySelector(".img-adv");
const keysH2 = document.querySelector(".keys-h2");
const copyChallenge = document.querySelector(".copy-challenge");
const selectText = document.querySelector(".select-text");
const nav1 = document.querySelector(".nav-1");
const nav2 = document.querySelector(".nav-2");
const nav3 = document.querySelector(".nav-3");
const nav4 = document.querySelector(".nav-4");


// add event listeners

//  1 on scroll wheel event
document.addEventListener("wheel", (event) => {
    mainNav.style.backgroundColor = "#333";
    mainNav.style.color = "#fff";
    for(let i = 0; i < mainNavTags.length; i++) {

        mainNavTags[i].style.color = "#fff";
        mainNav.style.opacity = "0.5";
    }
});

// 2 , 3 mouse over and mouse leave event listeners
introImg.addEventListener("mouseover", (event) => {
    introImg.src = "../img/fun-bus-invert.jpg";
});

introImg.addEventListener("mouseleave", (event) => {
    introImg.src = "../img/fun-bus.jpg";
});

// 4 on click and mouse over event
funImg.addEventListener("mouseover", (event) => {
    funImg.addEventListener("click", (event) => {
        funImg.src = "../img/fun-over.jpg";
        adventureHeading.innerText = "Blood Awaits";
        var audio = new Audio('/js/noo.mp3');
        audio.play();
    });
    event.target.style.cursor = "pointer";
});
 
// 5 key down event on the document object
document.addEventListener("keydown", event => {
    if (event.keyCode === 37) { // left
      keysH2.innerHTML = "<h2>LEFT</h2>";
    } else if (event.keyCode === 39) { // right
      keysH2.innerHTML = "<h2>RIGHT</h2>";
    } else if (event.keyCode === 40) { // down
      keysH2.innerHTML = "<h2>DOWN</h2>";
      imgAdventure.style.transform = "rotate(0deg)";
    } else if (event.keyCode === 90) { // rotate left Z
      imgAdventure.style.transform = "rotate(-90deg)";
      keysH2.innerHTML = "<h2>ROTATE LEFT</h2>";
    } else if (event.keyCode === 88) { // rotate right X
      imgAdventure.style.transform = "rotate(90deg)";
      keysH2.innerHTML = "<h2>ROTATE RIGHT</h2>";
    }
  });

// 6 dblclick event listener
freakyClick.addEventListener("dblclick", (event) => {
    imgAdventure.src = "../img/adventure-josh.jpg";
});


// 7 drag start event listener
imgAdventure.addEventListener("dragstart", (event) => {
    mainNav.style.backgroundColor = "#303";
    mainNav.style.color = "#f0f";
    for(let i = 0; i < mainNavTags.length; i++) {

        mainNavTags[i].style.color = "#f0f";
        mainNav.style.opacity = "0.8";
    }

    // 8 drag end event listener
    imgAdventure.addEventListener("dragend", (event) => {
        mainNav.style.backgroundColor = "coral";
        mainNav.style.color = "green";
        for(let i = 0; i < mainNavTags.length; i++) {
    
            mainNavTags[i].style.color = "green";
            mainNav.style.opacity = "0.9";
        }
    });
    
    imgAdventure.src = "../img/adventure-josh.jpg";
});

// 9 copy challenge copy event listener
copyChallenge.addEventListener("copy", (event) => {
    for(let i = 0; i < 3; i++) {
        alert("stop copying me!!!");
        copyChallenge.innerText = "copy alert copy allert copy allert!!!"
    }
});

// 10 cut event listener

selectText.addEventListener("cut", (event) => {
    for(let i = 0; i < 3; i++) {
        event.stopPropagation(); // stopping the body event from fireing
        alert("the correct select alert!!!");
    }
});

document.body.addEventListener("cut", (event) => {
    for(let i = 0; i < 3; i++) {
        alert("The body version of listener had been triggered!!!");
    }
});

// stopping default nav behavior on the nav items
nav1.addEventListener("click", (event) => {
    event.preventDefault();
    alert("you clicked a link!!!");
});

nav2.addEventListener("click", (event) => {
    event.preventDefault();
    alert("you clicked a link!!!");
});

nav3.addEventListener("click", (event) => {
    event.preventDefault();
    alert("you clicked a link!!!");
});

nav4.addEventListener("click", (event) => {
    event.preventDefault();
    alert("you clicked a link!!!");
});

