// Your code goes here

/****************
 * 
 * Main Nav
 * 
 ***************/

let prevYoff = 0;
const navBar = document.querySelector("#main-navigation");

window.addEventListener('onscroll', (event) => {
  let currentYoff = window.scrollY;
  let getDown = currentYoff < prevYoff;
  let navClasses = navBar.classList;

  if (getDown && !navClasses.contains("scrolled")) {
    navClasses.add("scrolled");
  } else if (!getDown) {
    navClasses.remove("scrolled");
  }

  prevYoff = currentYoff;

  console.log(prevYoff);
});

const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(navItem => navItem.addEventListener('click', (event) => {
  event.preventDefault();
}));

navItems.forEach(navItem => navItem.addEventListener('mouseover', (event) => {
  navItem.style.color = "lightgrey";
}));
navItems.forEach(navItem => navItem.addEventListener('mouseout', (event) => {
  navItem.style.color = "";
}));

/****************
 * 
 * content section
 * 
 ***************/

/****************
 * 
 * inverse content 
 * 
 ***************/

/****************
 * 
 * content destination
 * 
 ***************/

/****************
 * 
 * content pick
 * 
 ***************/

const contentPick = document.querySelectorAll('.destination');
contentPick.forEach(pick => pick.addEventListener('click', (event) => {
  event.preventDefault();

  const picked = event.target.parentNode.children[0].innerText;

  alert("You picked " + picked + "\nYour going to have a great time!");
}));