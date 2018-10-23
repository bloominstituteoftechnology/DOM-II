// Your code goes here

// NavBar
const funBusNav = document.querySelectorAll(".nav-link");
// Images
const funBusImg = document.querySelectorAll("img");

const destinationButton = document.querySelectorAll(".btn");

const subHeadings = document.querySelectorAll("h2");


// Home Button
funBusNav[0].addEventListener("mouseover", event => {
    funBusNav[0].style.color = "pink";
    funBusNav[0].style.background = "grey";
    funBusNav[1].style.color = "yellow";
    funBusNav[1].style.background = "grey";
    funBusNav[2].style.color = "blue";
    funBusNav[2].style.background = "grey";
    funBusNav[3].style.color = "orange";
    funBusNav[3].style.background = "grey";
});

funBusNav[0].addEventListener("click", function(event) {
    event.target.style["font-weight"] = 'bold';
    event.preventDefault();
  });

// Images Manipulation

funBusImg[0].addEventListener("mouseover", event => {
    funBusImg[0].src = "https://media.giphy.com/media/pUeXcg80cO8I8/giphy.gif";
    funBusImg[1].src = "https://media.giphy.com/media/pcJQF8W3GK76gzkizh/giphy.gif";
    funBusImg[2].src = "https://media.giphy.com/media/8lQyyys3SGBoUUxrUp/giphy.gif";
})

// h2 Manipulation


subHeadings[1].addEventListener("click", function(event) {
    event.target.style["font-weight"] = "bold";
    event.target.stopPropagation();
  });

// Destination Button
destinationButton[1].addEventListener("mouseover", event => {
    destinationButton[1].style.color = "pink";
    destinationButton[1].style.background = "grey";
    destinationButton[1].style.padding = "3%";
    destinationButton[1].style.borderRadius = "20%";
    destinationButton[1].style.boxShadow = "2px 17px 35px 1px #8E0000";
    event.stopPropagation()
});





