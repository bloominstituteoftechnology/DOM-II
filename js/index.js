const navLink = document.querySelectorAll(".nav-link");
navLink.addEventListener("click", (event) => {
    event.target.style.color = "blue";
const logoHead = document.querySelector('.logo-heading')
logoHead.addEventListener('mouseover', (event) => {
    color: green;
    transform: scale(2);
  }
}
document.querySelector(".container home").addEventListener("click", (event)=>{
  event.stopPropagation();
  document.querySelector(".container home").style.backgroundColor = "white";
});
const site = document.querySelector('html');
site.addEventListener('contextmenu', () => { // 3. contextmenu
  site.style.opacity = "0.5";
  site.style.background = "red";
})
site.addEventListener('mousemove', () => { // 4. mousemove
  site.style.opacity = "1";
  site.style.background = "green";
})
// Event Propagation: stopPropagation
const intro = document.querySelector('.intro');
const introH2 = document.querySelector('.intro h2');
intro.addEventListener('click', (e) => {
  console.log('intro clicked');
})
introH2.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('intro h2 clicked');
})
