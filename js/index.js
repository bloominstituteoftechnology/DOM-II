// Your code goes here
const navLinks = document.querySelectorAll(".main-navigation .nav-container .nav .nav-link");

navLinks.forEach(link => link.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.transition = "all 0.2s";
}));

navLinks.forEach(link => link.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
}));