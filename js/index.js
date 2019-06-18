// Your code goes here
// ----- Mouseover -----
let content = document.querySelector(" h2"); 

content.addEventListener("mouseover", function(event){
    event.target.style.color = "green"
    setTimeout(function() {
        event.target.style.color = "";
      }, 2000);
    }, false);


// ----- Wheel -----
const theWeel = document.querySelector(".intro img"); 
theWeel.addEventListener("wheel", index => { 
    theWeel.
    
})


// ----- Click -----
const pickDestination = document.querySelector(".content-destination h2"); 
pickDestination.addEventListener("click", event => {
    pickDestination.textContent = "What am I doing with my life?"
}); 



    