// Your code goes here
const logoHeading = document.querySelector("h1"); // changes logo color of fun bus 
logoHeading.addEventListener("click",() => {
    logoHeading.style.color = "yellow";
});

logoHeading.addEventListener ("dblclick", () => { // logo click
alert ("Welcome!")
});

const button1 = document.querySelector('.destination');
button1.addEventListener('click', () => {
    button1.style.backgroundColor = "yellow"; //button
});

const button2 = document.querySelector(".btn");
button2.addEventListener('mouseup', (event) => {
    button2.style.backgroundColor = "green";
    console.log(event);
    event.stopPropagation();
});

const button3 = document.querySelector(".btn:nth-of-type(2)");
button3.addEventListener('mouseup', ()=>{
    button3.style.backgroundColor = "blue";
});

const stopNav = document.querySelector("a");
stopNav.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("No longer refreshing");
});

document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", function() {
      a.style.color= "yellow";
    });
  });


