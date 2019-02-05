// Your code goes here

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('keydown', function(event) {
  console.log(`this is the blank key: ${event.code}`)
})

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
})



const containerBtn = document.querySelector('.container')
containerBtn.addEventListener('click', function(event) {

//  target you are clicking on
console.log(`this is my target: ${event.target}`) 
  
// target that you added the event listener to.
console.log(`this is my current target: ${event.currentTarget}`)

    event.stopPropagation();
})
