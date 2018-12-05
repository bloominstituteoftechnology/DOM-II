// Your code goes here

//Intro Screen
let home = document.querySelector(".home");
let introScreen = document.querySelector(".intro-screen");
let introText = introScreen.querySelector("p");

window.addEventListener("load", function(e) { //====> when the page loads
    home.style.display = "none"; //hide the home container
    introScreen.style.display = "flex";
    introScreen.style.margin = "250px auto";
    introScreen.style.justifyContent = "center";
    introText.style.fontSize = "4rem";
    introText.style.border = "2px dashed #C0C0C0";
    introText.style.padding = "20px";

    introText.addEventListener("click", function(e) { //when user clicks text
        introScreen.style.display = "none"; //hide intro screen
        home.style.display = "block"; //show home container
    });
});


//Navbar
//I want to add a click event on .main-navigation that will make the navbar not "sticky"
// let navSystem = document.querySelector(".main-navigation");
// navSystem.addEventListener("click", function() {
//     navSystem.style.position = "static";
// });

let navLinks = document.querySelectorAll(".nav-link");
for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function() { //when the user mouses over link
        navLinks[i].style.color = "#F9E1D1"; //Change color
        navLinks[i].style.fontWeight = "bold"; //Change font-weight
    });

    navLinks[i].addEventListener("mouseout", function() { //when the user mouses out of link
        navLinks[i].style.color = "#212529"; //revert to original color
        navLinks[i].style.fontWeight = "normal"; //revert to normal
    });

    //Stop links from refreshing the page by using preventDefault()
    navLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation(); //the click event here won't trigger click on .main-navigation
    });
}

//Image Zoom
let images = document.querySelectorAll("img");
for(let k = 0; k < images.length; k++) {
    images[k].addEventListener("mouseover", function() {
        images[k].style.animation = "kenburns-bottom 5s ease-out both";
    });

    images[k].addEventListener("mouseout", function() {
        images[k].style.animation = "none";
    });
}

//Heading Doubleclicks
let headings = document.querySelectorAll("h2");
console.log(headings);
for(let i = 0; i < headings.length; i++) {
    headings[i].addEventListener("dblclick", function(){
        headings[i].style.animation = "scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
    });
    headings[i].addEventListener("animationend", function() {
        headings[i].style.animation = "none";
    });
}


//Buttons
let buttons = document.querySelectorAll(".btn"); //get all buttons
for(let j = 0; j < buttons.length; j++) { //iterate over the NodeList
    buttons[j].addEventListener('mouseover', function(){ //when user mouses over
        buttons[j].style.animation = "heartbeat 1s ease-in-out 2 both"; //add animation
    });
    buttons[j].addEventList

    buttons[j].addEventListener('click', function() {
        alert("Email us at reservations@funbus.com!");
    });
}

