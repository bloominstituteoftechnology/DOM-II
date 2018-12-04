// Your code goes here


//Mouse over event listener for Navigation Anchor tags

const nav = document.querySelectorAll(".nav-link");

nav.forEach((currentvalue) => {
    currentvalue.addEventListener('mouseover', function(e) {
        currentvalue.style.color = "red";
    });
    currentvalue.addEventListener('mouseout', function(e) {
        currentvalue.style.color = "#212529";
    });
});

