// Your code goes here


// ************* Resize & Transitionend  events ***************************
// This makes the words "Welcome To Fun Bus!" move right to left

const h2First = document.querySelector('.intro h2');

h2First.style.width = "300px";

window.addEventListener('resize', () => {
    h2First.style.marginLeft = "800px";
    h2First.style.transitionDuration = "3s";
    // h2First.style.marginLeft = "0px";    
});

window.addEventListener('transitionend', () => {
    h2First.style.marginLeft = "0px";
    h2First.style.transitionDuration = "3s"; 
});

// ************* Scroll & Transitionend events ***************************
// This makes the  background green

const body = document.querySelector('body');
window.addEventListener('scroll', () => {
    body.style.background="green";
    body.style.transitionProperty="background";
    body.style.transitionDuration = "2s"; 

});

window.addEventListener('transitionend', () => {
    body.style.background="transparent";
    body.style.transitionProperty="background";
    body.style.transitionDuration = "2s"; 
});


// ************* auxclick & Transitionend events ***************************
// This makes the boat picture smaller then back to normal size
// when middle mouse button is clicked

const funPic = document.querySelector('.img-fluid');
funPic.addEventListener('auxclick', () => {
    funPic.style.transform="scale(0.5)";
    funPic.style.transitionDuration = "2s"; 
});

funPic.addEventListener('transitionend', () => {
    funPic.style.transform="scale(1)";
    funPic.style.transitionDuration = "2s"; 
});


// ************* dblclick event ***************************
// This makes the fun bus pic big on dblclick and then 
// normal on second dbl click

const funBusPic = document.querySelector('.intro img');
let funBusPicBig = false;
// funBusPic.style.objectFit="cover";
// let funBusPicHeight;

funBusPic.addEventListener('dblclick', () => {
    // funBusPicHeight=funBusPic.offsetHeight;
    // console.log("Hello World");
    // console.log(funBusPicHeight);
    // funBusPic.style.maxHeight="240px";
    // funBusPic.style.transform="scale(3)";



    if(!funBusPicBig) {
        funBusPic.style.transform="scale(3)";
        funBusPicBig=true;
    }
    else {
        funBusPic.style.transform="scale(1)";
        funBusPicBig=false;
    }



    funBusPic.style.transitionDuration = "2s"; 
    
});

// ************* click & Transitionend events &  stopPropagation ***************************
// This makes the background color of the "Fun in the sun section"
// change. The title changes blue and the section area changes to 
// orange. There is a stop propagation on the title, so that it does
// not change the section area



const FSh4Title = document.querySelector(".destination h4");
// console.log(FSh4Title);
// FSh4Title.style.background="blue";

FSh4Title.addEventListener('click', (event) => {
    FSh4Title.style.background="blue";
    FSh4Title.style.transitionProperty="background";
    FSh4Title.style.transitionDuration = "2s"; 
    event.stopPropagation();

});

FSh4Title.addEventListener('transitionend', () => {
    FSh4Title.style.background="transparent";
    FSh4Title.style.transitionProperty="background";
    FSh4Title.style.transitionDuration = "2s"; 
});


const FSSection = document.querySelector(".destination");
// FSSection.style.background="orange";

FSSection.addEventListener('click', () => {
    FSSection.style.background="orange";
    FSSection.style.transitionProperty="background";
    FSSection.style.transitionDuration = "2s"; 

});

FSSection.addEventListener('transitionend', () => {
    FSSection.style.background="transparent";
    FSSection.style.transitionProperty="background";
    FSSection.style.transitionDuration = "2s"; 
});

// ************* mouseenter & mouseleave event ***************************
const mapPic = document.querySelector('.img-content img');
// mapPic.style.width="50px";
mapPic.addEventListener('mouseenter', () => {
    mapPic.style.transform="rotate(180deg)";
    mapPic.style.transitionDuration = "2s"; 

});

mapPic.addEventListener('mouseleave', () => {
    mapPic.style.transform="rotate(0deg)";
    mapPic.style.transitionDuration = "2s"; 

});




// *********** Preventing the navigation from items from refreshing the page
const anchorList = document.querySelectorAll('a');

anchorList.forEach( elem => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

