import './less/index.less'

// Your code goes here!
const aboutUs = document.querySelector(".nav-link:nth-of-type(2)");
aboutUs.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "https://unsplash.com/s/photos/puppy";
})

const nav = document.querySelector(".container.nav-container");
nav.addEventListener("mouseenter", function(){
nav.style.backgroundColor = "yellow";
});
nav.addEventListener("mouseleave", function(){
nav.style.backgroundColor = "white";
});


const letsGo = document.querySelector(".content-section");
letsGo.addEventListener("mouseover", function(){
letsGo.style.flexDirection = "column";
letsGo.style.alignItems = "center";
const timerId = setTimeout(function(){
letsGo.style.flexDirection = "row";
clearTimeout(timerId)
}, 3000)

});


const changeImg = document.querySelector(".content-destination img");
changeImg.addEventListener("dblclick", function(){
changeImg.src = "https://source.unsplash.com/white-and-black-cruise-ship-FWJinfDsIn8"
});


const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
let keySequence = ""
document.addEventListener("keydown", function(event){
    if(arrowKeys.includes(event.code)){
        keySequence = keySequence.concat("", event.code)
    }
    if(keySequence === arrowKeys.join("")){
        alert("If you don't share this page with 20 people within 5 minutes, you will die tomorrow.")
      keySequence = ""
    }
});


const funBusText = document.querySelector(".intro p");
window.addEventListener("resize", function(){
funBusText.textContent = "Welcome to the FunBus where all your fantasies can come true if you are willing to let lose and enjoy the experience. Expect the unexpected and follow your passion. "
});

const signUps = document.querySelectorAll(".btn");
signUps.forEach(function(signUp){
signUp.addEventListener("click", function(event){
    signUp.style.backgroundColor = "hotpink";
    const timerId = setTimeout(function(){
        signUp.style.backgroundColor = "#17A2B8"     
        clearTimeout(timerId)
        }, 1000)
})
});

const adventureAwaits = document.querySelector(".content-section.inverse-content h2");
adventureAwaits.addEventListener("pointerover", function(){
adventureAwaits.style.fontSize = "8.0rem";
const timerId = setTimeout(function(){
    adventureAwaits.style.fontSize = "3.2REM"     
    clearTimeout(timerId)
    }, 6000)
});


const funBus = document.querySelector(".intro h2");
funBus.addEventListener("mousedown", function(){
funBus.textContent = "LET'S PARTY!! 💁‍♂️💁‍♂️";
funBus.style.fontWeight = "bold"
funBus.style.fontSize = "4.0rem"
});
funBus.addEventListener("mouseup", function(){
    funBus.textContent = "OR NOT 🙄🙄"
    funBus.style.fontWeight = "bold"
    funBus.style.fontSize = "3.0rem"
    const timerId = setTimeout(function(){
        funBus.textContent = "Welcome To Fun Bus!"
        funBus.style.fontSize = "3.2REM"  
        funBus.style.fontWeight = "normal"   
        clearTimeout(timerId)
        }, 1500)
});


