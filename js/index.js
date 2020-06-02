// Your code goes here


// mouseover effect
const bottomBtn = document.getElementsByClassName('btn');

bottomBtn[1].addEventListener('mouseover', function () {
    bottomBtn[1].style.backgroundColor = "black";
    bottomBtn[1].style.color = "yellow";
})


//resize

window.addEventListener('resize', (event) => {
    alert('Lets Resize!');
});

// changing colors
const secondBorder = document.querySelector('.inverse-content');
window.addEventListener('load', () => {
    secondBorder.style.border = '0.8rem dashed green';
});

//nested click event
const destinationDiv = document.querySelector('.destination');
destinationDiv.style.cursor = "pointer";

destinationDiv.addEventListener('click', (n) => {
    if (destinationDiv.style.background !== 'blue') {
        destinationDiv.style.background = 'blue';
    } else {
        destinationDiv.style.background = 'initial';
    }
})



const destinationHover = document.querySelectorAll(".destination");
console.log(destinationHover);
destinationHover[0].addEventListener("mouseover", e => {
    console.log("clicked:sun");
});
destinationHover[1].addEventListener("mouseover", e => {
    console.log("clicked:mountain");
});
destinationHover[2].addEventListener("mouseover", e => {
    console.log("clicked:island");
});


// Variables
busClickCount = 0;

const topImgSelector = document.querySelector('img');
const letsGoHeading = document.querySelector('.text-content h2');


// Bus click
topImgSelector.addEventListener('click', () => {
    busClickCount++;
    alert(`Try again! Score: ${busClickCount}.`)
});