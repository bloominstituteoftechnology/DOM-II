// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const mainNav = document.querySelector('.main-navigation');
const homeContent = document.querySelector('.home');
const topPic = document.querySelector('.top-pic');
const Page = document.querySelector('.container');
const pTags = document.querySelectorAll('p');

Page.addEventListener('mouseover', (event) => {
  event.classList.toggle('hide-this');
})

logoHeading.addEventListener('click', (event) => {
  console.log("Logo Click Registered!");
  event.target.style.color = "gray";
});

mainNav.addEventListener('mouseover', (event) => {
  event.classList.toggle('hide-this');
});

homeContent.addEventListener('dblclick', () => {
  tweenMax.to('.main-naviation', 2, {x: -20, y: -10, opacity: 1});
});

topPic.addEventListener('keydown', (event) => {
  event.target.style.width = "200px";
});

topPic.addEventListener('focus', (event) => {
  event.target.style.height = "200px";
});

Page.addEventListener('scroll', (event) => {
  event.target.style.height = event.target.style.height * 2;
});

Page.addEventListener('resize', () => {
  console.log("Return page to normal");
});
.addEventListener('select', (event) => {
  event.target.style.font-size = "12px";
});

pTags.addEventListener('drag', (event) => {
  console.log("Stop dragging the paragraphs, please.");
});
