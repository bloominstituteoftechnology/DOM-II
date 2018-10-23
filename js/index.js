let navLinks = document.querySelectorAll("a");
let headline = document.querySelector("h1");
let subHeadings = document.querySelectorAll("h2");
let contentSections = document.querySelectorAll(".content-section");
let destination = document.querySelector(".content-destination");

headline.addEventListener("mouseenter", function(event) {
  event.target.parentNode.style.color = "purple";
});

window.addEventListener("scroll", function(event) {
  navLinks.forEach(x => (x.style.color = `rgba(${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, 1)`));
});

navLinks[0].addEventListener("click", function(event) {
  event.target.style["font-weight"] = 'bold';
  event.preventDefault();
});

subHeadings[0].addEventListener("dblclick", function(event) {
  event.target.style["font-style"] = "italic";
});

subHeadings[1].addEventListener("click", function(event) {
  event.target.style["font-weight"] = "bold";
  event.target.stopPropagation();
});

contentSections[0].querySelector(".text-content").querySelector("p").addEventListener("click", function(event) {
  event.target.style["font-weight"] = "bold";
  event.target.stopPropagation();
});

contentSections[0].querySelector(".text-content").querySelectorAll("p")[1].addEventListener("click", function(event) {
  event.target.style["font-weight"] = "bold";
  event.target.stopPropagation();
});

contentSections[1].querySelector(".text-content").addEventListener("mousemove", function(event) {
  event.target.style["background-color"] = `rgba(${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, 0.25)`;
  event.target.stopPropagation();
});

contentSections[1].querySelector(".text-content").addEventListener("mousedown", function(event) {
  event.target.style["background-color"] = 'white';
});

destination.querySelector("h2").addEventListener("mouseup", function(event) {
  event.target.style["font-weight"] = 'bold';
});

window.addEventListener("copy", function() {
  alert("Do you remember this window from the Xanga days?");
});

window.addEventListener("contextmenu", function() {
  alert("hey, whatcha doin?");
});

destination.querySelector("p").addEventListener("mouseleave", function(event) {
  event.target.style["font-style"] = 'italic';
});