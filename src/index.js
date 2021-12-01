import './less/index.less'

// Your code goes here!

// Title
const title = document.querySelector('h1');
// console.log(title.textContent);
title.addEventListener("mouseover", function( event ) {
    event.target.style.color = "hotpink";  
    setTimeout(function() {
      event.target.style.color = "";
    }, 400);
  }, false);

// Alert on Enter key
const printKey = function(e) {
    // console.log(e.key);
    if(e.key === "Enter") {
        alert("Warning! The fun bus can be extremely fun!")
    }
}

document.addEventListener("keydown", printKey);

// page loaded 
const loading = window;

loading.addEventListener('load', (event) => {
    console.log("loading complete")
    // console.log('page is fully loaded');
  });

//   header img

const headerImg = document.querySelector("header img");
headerImg.addEventListener("click", (event) => {
  newWindow = window.open("http://localhost:9000/img/fun-bus.jpg");
});





