// Your code goes here
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function (event) {
  event.target.style.color = "green";
});

const body = document.querySelector("body");
body.addEventListener("keydown", function (event) {
  if (event.keyCode == 66) {
    h1.innerHTML = "Dope Bus";
  }
});

const container = document.querySelectorAll('.container.home')
body.addEventListener('wheel', function() {
    container[0].style.background = 'red';
})

