const topLogo = document.querySelector(".logo-heading");
const signUpButton = document.getElementsByClassName("btn")

function mouseOver(){
    this.style.color = "#f5d442";
  }
function mouseOut(){
    this.style.color = "black";
  }
function escKey(event){
    if (event.key === "Escape") {
      alert("Please Do Not Press the Escape Button YOU CANNOT LEAVE.(well you could X out the browser")
    }
  }
  function linkAlert(){
  alert("Hi No Link Yet ha ha ha!");
  }
function blackOut(){
    document.querySelector("html").style.backgroundColor = "black";
    document.querySelector("html").style.color = "white";
  }

document.addEventListener("keydown", escKey);

document.addEventListener("dblclick", blackOut);

topLogo.addEventListener("mouseover", mouseOver)
topLogo.addEventListener("mouseout", mouseOut)
// signUpButton.addEventListener("click", linkAlert)
console.log(allButtons);

const pickDestination = document.querySelector(".text-content h2");
window.addEventListener('load', () => {
    pickDestination.style.fontSize = "10rem";
    setTimeout(function(){
        pickDestination.style.fontSize = "4rem";
    },1000);
}, false);

Array.from(signUpButton).forEach((elem)=>{
  elem.addEventListener('click', ()=>{
      elem.style.backgroundColor = 'pink';
  })
}, true);

