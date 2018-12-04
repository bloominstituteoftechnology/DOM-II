// Your code goes here


//Mouse over event listener for Navigation Anchor tags

const nav = document.querySelectorAll(".nav-link");

nav.forEach((currentvalue) => {
    currentvalue.addEventListener("mouseover", (e) => {
        currentvalue.style.color = "red";
        setTimeout(function() {
            e.target.style.color = "";
          }, 500);
    });
});

// Keydown event listener 

const home = document.querySelector(".home");

document.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if(keyName){
        home.style.opacity = ".5";
        setTimeout(function() {
            home.style.opacity = "";
          }, 500);
    }
});

// Click event listener

const bus = document.querySelector("img");

//Adds text whenever the bus img is clicked on
bus.addEventListener("click", (e) => {
    e.stopPropagation();

    const text = document.createElement("h2");
    text.textContent = "Wow! Now try pressing any key!";

    const header = document.querySelector(".intro");
    header.appendChild(text);
}, { once: true });


// Scroll event listener

const images = document.querySelectorAll("img")
//Scrolling brings back the images
window.addEventListener("scroll", (e) => {
    images.forEach((currentvalue) => {
        currentvalue.style.display = "";
    });
});


// Resize event listener

//Resizing makes all images display none
window.addEventListener("resize", (e) => {
    images.forEach((currentvalue) => {
        currentvalue.style.display = "none";
    });
});

//Double click event listener 

const letsGo = document.querySelector(".content-section .text-content h2");

letsGo.addEventListener("dblclick", (e) => {
    e.target.style.cssText = "font-size : 10rem";
}); 


//Mousemove event listener

window.addEventListener("mousemove", (e) => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    home.style.color = `${color}`;
});

//Mouseover Rotate bus imgevent listener

bus.addEventListener("mouseover", (e) => {
    e.target.style.transform = "rotate(30deg)";
    setTimeout(function() {
        e.target.style.transform = "";
      }, 1000);
});

//click move event listener
//moves any element in the home container move to the right by 100px

home.addEventListener("click", (e) => {
    e.target.style.transform = "translateX(100px)";
});

//Click event listener for the Fun Bus logo heading

const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("click", (e) => {
    e.target.style.cssText = "font-size: 1rem";
});