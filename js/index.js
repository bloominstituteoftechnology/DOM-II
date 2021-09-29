links.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = '';
    }, 500);
}, false);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"){
        document.classList.add("off");
    }
});
const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.style.position = "fixed";

const navLinks = document.querySelectorAll('.nav-link');
navLinks.style.justifyContent = "space-evenly";

const butt = document.querySelectorAll('.btn');
butt.style.border = "yellow";
butt.style.cursor = "pointer";

const images = document.querySelectorAll('.img-content');

images.forEach(imgs => {
    imgs.addEventListener("mouseover", () => {
        imgs.style.transform = "rotate(90deg)";
    });
});

images.forEach(imgs => {
    imgs.addEventListener("mouseleave", () => {
        imgs.style.transform = "rotate(270deg)";
    });
});

const resizer = document.querySelector('.content-destination');

function reportWindowSize() {
  resizer.textContent = window.innerHeight;
  resizer.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

const doubleClick = document.querySelector('p');

doubleClick.addEventListener('dblclick', function() {
    doubleClick.classList.toggle('.large');
})