// Your code goes here

function playSound(soundfile) {
    document.getElementById("dummy").innerHTML= "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\"loop=\"false\" />";
  }


const funBusHeading = document.querySelectorAll(".nav-link");
const funBusImages = document.querySelectorAll("img");
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
    playSound("message.mp3")
})

//// Fun bus image
