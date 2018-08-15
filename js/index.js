// Your code goes here

// invert text and background colors of content sections on hover

const contentSection = document.querySelector('.content-section');
const contentInverse = document.querySelector('.inverse-content');

contentSection.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = "#212529";
  document.body.style.color = "#FFFFFF";
});

// return to normal on mouseout

contentSection.addEventListener('mouseout', () => {
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "#212529";
});

// same function for inverse content

contentInverse.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = "#212529";
  document.body.style.color = "#FFFFFF";
});

// return to normal on mouseout

contentInverse.addEventListener('mouseout', () => {
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "#212529";
});

// nav bar animation(s)

window.addEventListener('load', navMove());

function navMove(){
    let navLogo = document.querySelector('.logo-heading');
    let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link){
        link.style.opacity = '0';
    });

    TweenMax.fromTo(navLogo, 2, {scale: 0.3} , {scale: 1.0, ease: Elastic.easeOut.config(1, 0.2)});

    let i = 0;

    setInterval(function(){
        if(i == navLinks.length){
            return;
        }
        TweenMax.fromTo(navLinks[i], 1, {scale: 0.5, opacity: 0}, {scale : 1.0, opacity: 1});
        i += 1;
    }, 300);
}
