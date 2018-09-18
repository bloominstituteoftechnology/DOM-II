// Your code goes here

/****************
 * 
 * Main Nav
 * 
 ***************/
function hideNav() {
  const navBar = document.querySelector(".main-navigation");
  console.log(navBar);

  window.addEventListener("scroll", function (event) {
    let currentYoff = window.scrollY;
    let navClasses = navBar.classList;

    if (currentYoff > 40 && !navClasses.contains("scrolled")) {
      navClasses.add("scrolled");
    } else if (currentYoff < 40) {
      navClasses.remove("scrolled");
    }

    prevYoff = currentYoff;

    console.log(prevYoff);
  });
};
hideNav();

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