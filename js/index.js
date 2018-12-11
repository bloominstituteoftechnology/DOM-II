// Your code goes here
const menuHome = document.querySelector("a");
menuHome.addEventListener("mouseover", function(event1) {
   event1.target.style.backgroundColor = "red"
})
menuHome.addEventListener("mouseout", function(event1) {
    event1.target.style.backgroundColor = "white"
 })
//************************************************************ */
const funBus = document.querySelector(".main-navigation .logo-heading");
funBus.style.color = "green";
funBus.addEventListeners("click", function(){
    alert("Greeting To All !");
});

const welcome = document.querySelector(".intro h2");
welcome.style.color = "deeppink";

const allH2s = document.querySelectorAll(".content-section h2");
allH2s[0].style.color = "cyan";
allH2s[1].style.color = "orange";

const adventurePara = document.querySelector(".content-section p");
adventurePara.style.color = "brown";

const pickDestination = document.querySelector(".content-destination h2");
pickDestination.style.color = "purple";

const buttons = document.querySelectorAll(".destination .btn")
buttons[0].style.color = "maroon"
buttons[1].style.color = "navy";
buttons[2].style.color = "olive";

const footer = document.querySelector("footer p")
footer.style.color = "pink";