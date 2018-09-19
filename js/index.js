// Your code goes here

/****************
 * 
 * Main Nav
 * 
 ***************/
function hideNav() {
  const navBar = document.querySelector(".main-navigation");
  // console.log(navBar);

  window.addEventListener("scroll", function (event) {
    let currentYoff = window.scrollY;
    let navClasses = navBar.classList;

    if (currentYoff > 90 && !navClasses.contains("scrolled")) {
      navClasses.add("scrolled");
    } else if (currentYoff < 90) {
      navClasses.remove("scrolled");
    }
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
const contentSection = document.querySelector(".content-section");
contentSection.addEventListener("dblclick", (e) => {
  console.log("Double clicked content");
});

/****************
 * 
 * inverse content 
 * 
 ***************/
const inverseContent = document.querySelectorAll(".inverse-content div");
// console.log(inverseContent);
inverseContent.forEach(item => () => {
  item.draggable = true;
  item.addEventListener("dragover", dragover);
  item.addEventListener("dragenter", dragenter);
  item.addEventListener("drop", drop);
  item.addEventListener("mouseover", this.border = "1px solid red");
});


function dragover(e) {
  e.preventDefault();
  this.background = "red";
}

function dragenter(e) {
  e.preventDefault();
}

function drop() {
  this.append();
}



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


/****************
 * 
 * random console logs
 * 
 ***************/

window.addEventListener('resize', (e) => {
  console.log("Don't squeeze me out");
});