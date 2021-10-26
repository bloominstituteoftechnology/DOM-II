// This is alerting "Hello World when the first H2's is mousedover"
const h2Elements = document.querySelectorAll("h2");
h2Elements[0].addEventListener("mouseover", h2);
function h2() {
  alert ("Hello World!");
}


// This turns the .logo-heading bluse when clicked 
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("click", logo);
function logo() {
    logoHeading.style.color = "blue"
}
