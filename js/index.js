// Your code goes here


//Mouse over event listener for Navigation Anchor tags

const nav = document.querySelectorAll(".nav-link");

nav.forEach((currentvalue) => {
    currentvalue.addEventListener("mouseover", (e) => {
        currentvalue.style.color = "red";
    });
    currentvalue.addEventListener("mouseout", (e) => {
        currentvalue.style.color = "#212529";
    });
});

// Keydown event listener 

const home = document.querySelector(".home");

document.addEventListener("keydown", (e) => {
    const keyName = e.key;
    if(keyName != "Escape"){
        home.style.opacity = ".5";
    } else { //resets the opacity back to default with the esc key
        home.style.opacity = "";
    }
});

// Click event listener

const bus = document.querySelector("img");

//Adds text whenever the bus img is clicked on
bus.addEventListener("click", (e) => {
    e.stopPropagation();

    const text = document.createElement("h2");
    text.textContent = "Wow! Now try pressing any key! Can also press escape to cancel the effect!";

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
