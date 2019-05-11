// Your code goes here


// DBLCLICK
const logo = document.querySelector('.logo-heading');
console.log(logo);
logo.addEventListener('dblclick', function(e) {
  console.log("The Logo was double clicked!");
});

// MOUSEOVER
const busImg = document.querySelector(".busImg");
console.log(busImg);
busImg.addEventListener("mouseover", function(e) {
  console.log("Mouse went over the Bus Image!");
  busImg.style.width = "80%";
});