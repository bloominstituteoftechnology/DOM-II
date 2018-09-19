// Your code goes here

function playSound(soundfile) {
    document.getElementById("dummy").innerHTML= "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\"loop=\"false\" />";
  }


const funBusHeading = document.querySelectorAll(".nav-link");
const funBusImages = document.querySelectorAll("img");
const destinationContainer = document.querySelectorAll("destination");
const destinationButton = document.querySelectorAll(".btn");
const theBody = document.querySelector("body");

///This was my attempt at getting 
///event propogation to work. 
/// It just ended up breaking the page

// body.addEventListener("click", e => {
//     alert("What are you trying to click?");
// })

//// Home link

funBusHeading[0].addEventListener("mouseover", e => {
    funBusHeading[0].style.color = "red";
    funBusHeading[0].style.background = "green";
    funBusHeading[0].style.padding = "3%";
    funBusHeading[0].style.borderRadius = "20%";
    funBusHeading[0].style.boxShadow = "2px 17px 35px 1px #8E0000"
    funBusHeading[1].style.fontSize = "10px";
    funBusHeading[2].style.fontSize = "10px";
    funBusHeading[3].style.fontSize = "10px";
})

funBusHeading[0].addEventListener("mouseout", e => {
    funBusHeading[0].style.background = "white";
    funBusHeading[0].style.color = "black";
    funBusHeading[0].style.padding = "0%";
    funBusHeading[0].style.boxShadow = "none";
    funBusHeading[1].style.fontSize = "16px";
    funBusHeading[2].style.fontSize = "16px";
    funBusHeading[3].style.fontSize = "16px";
})

//// About Us link

funBusHeading[1].addEventListener("mouseover", e => {
    funBusHeading[1].style.color = "red";
    funBusHeading[1].style.background = "green";
    funBusHeading[1].style.padding = "3%";
    funBusHeading[1].style.borderRadius = "20%";
    funBusHeading[1].style.boxShadow = "2px 17px 35px 1px #8E0000";
    funBusHeading[0].style.fontSize = "10px";
    funBusHeading[2].style.fontSize = "10px";
    funBusHeading[3].style.fontSize = "10px";
})

funBusHeading[1].addEventListener("mouseout", e => {
    funBusHeading[1].style.background = "white";
    funBusHeading[1].style.color = "black";
    funBusHeading[1].style.padding = "0%";
    funBusHeading[1].style.boxShadow = "none";
    funBusHeading[0].style.fontSize = "16px";
    funBusHeading[2].style.fontSize = "16px";
    funBusHeading[3].style.fontSize = "16px";
})


//// Blog link

funBusHeading[2].addEventListener("mouseover", e => {
    funBusHeading[2].style.color = "red";
    funBusHeading[2].style.background = "green";
    funBusHeading[2].style.padding = "3%";
    funBusHeading[2].style.borderRadius = "20%";
    funBusHeading[2].style.boxShadow = "2px 17px 35px 1px #8E0000";
    funBusHeading[0].style.fontSize = "10px";
    funBusHeading[1].style.fontSize = "10px";
    funBusHeading[3].style.fontSize = "10px";
})

funBusHeading[2].addEventListener("mouseout", e => {
    funBusHeading[2].style.background = "white";
    funBusHeading[2].style.color = "black";
    funBusHeading[2].style.padding = "0%";
    funBusHeading[2].style.boxShadow = "none";
    funBusHeading[0].style.fontSize = "16px";
    funBusHeading[1].style.fontSize = "16px";
    funBusHeading[3].style.fontSize = "16px";
})

//// Contact link

funBusHeading[3].addEventListener("mouseover", e => {
    funBusHeading[3].style.color = "red";
    funBusHeading[3].style.background = "green";
    funBusHeading[3].style.padding = "3%";
    funBusHeading[3].style.borderRadius = "20%";
    funBusHeading[3].style.boxShadow = "2px 17px 35px 1px #8E0000";
    funBusHeading[0].style.fontSize = "10px";
    funBusHeading[1].style.fontSize = "10px";
    funBusHeading[2].style.fontSize = "10px";
})

funBusHeading[3].addEventListener("mouseout", e => {
    funBusHeading[3].style.background = "white";
    funBusHeading[3].style.color = "black";
    funBusHeading[3].style.padding = "0%";
    funBusHeading[3].style.boxShadow = "none";
    funBusHeading[0].style.fontSize = "16px";
    funBusHeading[1].style.fontSize = "16px";
    funBusHeading[2].style.fontSize = "16px";
})

funBusHeading[3].addEventListener("click", e => {
    playSound("Krueger.mp3");
    e.preventDefault();
    e.stopPropagation();
});

/// Images

funBusImages[0].addEventListener("mouseover", e => {
    funBusImages[0].src = "https://pa1.narvii.com/6846/79706defae23d7cdb1103648171f261c61375ed8_hq.gif";
    funBusImages[0].align ="right";
    playSound("Freddie.mp3")
})

funBusImages[1].addEventListener("mouseover", e => {
    funBusImages[1].src = "https://j.gifs.com/864LV5.gif";
})

funBusImages[1].addEventListener("mouseout", e => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "red";
})

funBusImages[2].addEventListener("mouseover", e => {
    funBusImages[2].src = "https://j.gifs.com/864LQW.gif";
})

funBusImages[3].addEventListener("mouseover", e => {
    funBusImages[3].src = "https://i0.wp.com/riversofgrue.com/wp-content/uploads/2013/06/noesf.gif?resize=450%2C253&ssl=1";
    playSound("Hahahahaha.mp3")
})

////// destination containers

// destinationContainer[0].addEventListener("mouseover", () => {
//     destinationContainer[0].style.color = "green";
// })



////// buttons

destinationButton[0].addEventListener("mouseover", e => {
    destinationButton[0].style.color = "red";
    destinationButton[0].style.background = "green";
    destinationButton[0].style.padding = "3%";
    destinationButton[0].style.borderRadius = "20%";
    destinationButton[0].style.boxShadow = "2px 17px 35px 1px #8E0000";
    e.stopPropagation()
})

destinationButton[0].addEventListener("click", e => {
    playSound("message.mp3");
    e.preventDefault();
    e.stopPropagation;
})

destinationButton[1].addEventListener("mouseover", e => {
    destinationButton[1].style.color = "red";
    destinationButton[1].style.background = "green";
    destinationButton[1].style.padding = "3%";
    destinationButton[1].style.borderRadius = "20%";
    destinationButton[1].style.boxShadow = "2px 17px 35px 1px #8E0000";
    e.stopPropagation()
})

destinationButton[1].addEventListener("click", e => {
    playSound("Krueger.mp3");
    e.preventDefault();
    e.stopPropagation;
})

destinationButton[2].addEventListener("mouseover", e => {
    destinationButton[2].style.color = "red";
    destinationButton[2].style.background = "green";
    destinationButton[2].style.padding = "3%";
    destinationButton[2].style.borderRadius = "20%";
    destinationButton[2].style.boxShadow = "2px 17px 35px 1px #8E0000";
    e.stopPropagation()
})

destinationButton[2].addEventListener("click", e => {
    playSound("freeys_come.mp3");
    e.preventDefault();
    e.stopPropagation();
})