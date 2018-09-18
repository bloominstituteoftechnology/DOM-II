// Your code goes here


window.addEventListener("load", (event) => {
    TweenMax.from('.nav', 2, {
        opacity: 0
      });
    event.preventDefault();
});

let mainNavItem = document.querySelectorAll('.nav a');