// Your code goes here

const navBar = document.querySelector(".main-navigation");
let navBarOpacity = 0.2;
navBar.style.backgroundColor = `rgba(71, 37, 14, ${navBarOpacity})`;
navBar.addEventListener("wheel", navBarChange);

function navBarChange(e) {
    e.preventDefault();
    console.log(e);
    navBarOpacity += e.deltaY > 0 ? .02 : -.02;
    navBarOpacity = Math.min(navBarOpacity, 1);
    navBarOpacity = Math.max(navBarOpacity, 0);
    navBar.style.backgroundColor = `rgba(71, 37, 14, ${navBarOpacity})`;
}