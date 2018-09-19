//Corey Gumbs
//Sept 18, 2018
// Your code goes here



///Navigation
let aLinks = document.querySelectorAll("a");
aLinks.forEach((link) => {

    link.addEventListener("mouseover", (event) => {
        event.target.style.color = "#17A2B8";
    });

    link.addEventListener("mouseleave", (event) => {
        event.target.style.color = "#212529";
    });
});
