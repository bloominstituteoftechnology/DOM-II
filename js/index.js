// Your code goes here
const busPic = document.querySelector("header img")
let funBus = document.querySelector("h1")
let h2 = document.querySelector("h2")
// // const boatPic = document.querySelector

h2.addEventListener("mouseenter", function( event ) {
    event.target.style.color = "red";
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  }, false);

  funBus.addEventListener("click", function(event){
    event.target.innerHTML = "Bus Fun"
  })

  funBus.addEventListener("dblclick", function(event){
    event.target.innerHTML = "Fun Bus"
  })

  busPic.addEventListener("mouseover", function(event){
      event.target.style.width ="50%"
  })

  busPic.addEventListener("mouseout", function(event){
    event.target.style.width ="100%"
})