import './less/index.less'

// Your code goes here!

// Title(1)
const title = document.querySelector('h1');
// console.log(title.textContent);
title.addEventListener("mouseover", function( event ) {
    event.target.style.color = "hotpink";  
    setTimeout(function() {
      event.target.style.color = "";
    }, 400);
  }, false);

// Alert on Enter key(2)
const printKey = function(e) {
    // console.log(e.key);
    if(e.key === "Enter") {
        alert("Warning! The fun bus can be extremely fun!")
    }
}

document.addEventListener("keydown", printKey);

// page loaded (3)
const loading = window;

loading.addEventListener("load", (event) => {
    console.log("loading complete")
    // console.log('page is fully loaded');
  });

//   header img (4)

const headerImg = document.querySelector("header img");
headerImg.addEventListener("click", (event) => {
  newWindow = window.open("http://localhost:9000/img/fun-bus.jpg");
});



// dbl click button(5)
const buttonOne = document.querySelector(".btn");
buttonOne.textContent = 'Double click me';
const dubClick = function(event) {
    event.target.style.backgroundColor = 'red'
    event.preventDefault();
}
buttonOne.addEventListener("dblclick", dubClick);


// middle button click (6)
const buttons = document.querySelectorAll('.btn');
const midButton = Array.from(buttons)[1]
midButton.textContent = 'Click me once'
midButton.addEventListener("click", function(event) {
    event.target.style.backgroundColor = 'pink'
})

// console log selection (7-8)
const pickDestination = document.querySelector(".content-destination h2")
// console.log(pickDestination);
pickDestination.addEventListener("onmousemovde", function(event) {
    event.target.style.color = 'sky'
})
