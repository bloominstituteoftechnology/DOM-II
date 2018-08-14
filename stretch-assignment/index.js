
// add border to logo heading

let mouseEnter = document.querySelector(".logo-heading");
mouseEnter.addEventListener("mouseenter", () => {

    mouseEnter.style.border = "2px solid black";

});

// say hi on scroll
window.addEventListener('scroll', () => {
    console.log("Hi");
});

// click on paragraph to change color to red
const click = document.querySelector('p');

click.addEventListener('click', event => {
    click.style.color = 'red';
});



// Change nav links to differnt cooler when hoverd
const mouseOver1 = document.querySelector("nav-link-1");
mouseOver.addEventListener('mouseover', event => {
    mouseOver.style.color = 'blue';
});

const mouseOver2 = document.querySelector("nav-link-2");

mouseOver.addEventListener('mouseover', event => {
    mouseOver.style.color = 'green';
});


//Change background color to yellow on keydown
const background = document.querySelector('body');
background.addEventListener('keydown', () => {
    background.style.backgroundColor = "yellow";
});


const banner = document.querySelector('.intro img');
banner.addEventListener('mouseover', () => {
    banner.style.height = "20%";
    //Bring back Back default banner
    banner.addEventListener('mouseleave', () => {
        banner.style.height = "auto";
    });
});
//Hide banner on double click but show upon keypress
banner.addEventListener('dblclick', () => {
    banner.style.display = "none";
    window.addEventListener('scroll', () => {
        banner.style.display = "block";
    });
});