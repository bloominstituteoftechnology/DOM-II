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
    if(keyName){
        home.style.opacity = ".5";
    }
});
 