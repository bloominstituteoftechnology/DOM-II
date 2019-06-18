// Your code goes here
// ----- Mouseover -----
let content = document.querySelector(" h2"); 

content.addEventListener("mouseover", function(event){
    event.target.style.color = "green"
    setTimeout(function() {
        event.target.style.color = "";
      }, 2000);
    }, false);


// ----- Click -----
const pickDestination = document.querySelector(".content-destination h2"); 
pickDestination.addEventListener("click", event => {
    pickDestination.textContent = "What am I doing with my life?"
}); 

const letsGo = document.querySelector(".content-section h2"); 
letsGo.addEventListener("click", event => {
    letsGo.textContent = "Hi, my name is jeff"
}) 

// ----- dblclick -----
const clickContent = document.querySelector(".text-content"); 

clickContent.addEventListener('dblclick', function(event){
    clickContent.classList.toggle("large") 
})



    