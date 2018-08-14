// Your code goes here

// prepare the nav links and logo
let navLogo = document.querySelector('.logo-heading');
let navLinks = document.querySelectorAll('.nav-link');
// pop-zooms navbar contents
function popNav(){
    // hide the nav links
    navLinks.forEach(function(link){
        link.style.opacity = '0';
    });
    // pop zoom the logo
    TweenMax.fromTo(navLogo, 2, {scale: 0.2} , {scale: 1.0, ease: Elastic.easeOut.config(1, 0.3)});
    // init a counter
    let c = 0;
    // every 200ms do this
    setInterval(function(){
        if(c == navLinks.length){
            return;
        }
        // pop each zoom link
        TweenMax.fromTo(navLinks[c], 1, {scale: 0.5, opacity: 0}, {scale : 1.0, opacity: 1, ease: Back.easeOut.config(4)});
        c += 1;
    }, 200);
}
// on page load, pop logo and navLinks
navLogo.addEventListener('load', popNav());

navLogo.addEventListener('mouseover', function(){
    TweenMax.fromTo(this, 1, {scale: 1}, {scale: 1.15, ease: Elastic.easeOut.config(1, 0.3)});
});
navLogo.addEventListener('mouseout', function(){
    TweenMax.fromTo(this, 1, {scale: 1.15} ,{scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
});
navLogo.addEventListener('click', function(){
    TweenMax.fromTo(this, 1, {scale: .8} ,{scale: 1.15, ease: Elastic.easeOut.config(1, 0.3)});
});


navLinks.forEach(function(link){
    link.addEventListener('mouseover', function(){
        TweenMax.fromTo(link, 0.3, {scale: 1}, {scale: 1.15, ease: Power1.easeOut});
    });
    link.addEventListener('mouseout', function(){
        TweenMax.fromTo(link, 0.3, {scale: 1.15}, {scale: 1, ease: Power1.easeOut});
    });
    link.addEventListener('click', function(){
        TweenMax.fromTo(link, 1, {scale: .8} ,{scale: 1.15, ease: Elastic.easeOut.config(1, 0.3)});
    });
});

let headerImg = document.querySelector('.header-img > img');
// headerImg.style.opacity = '0';
headerImg.addEventListener('load', function(){
    TweenMax.fromTo(headerImg, 1, {opacity: 0, 'margin-left': -800} , {opacity: 1, 'margin-left': 0, ease: Back.easeOut});
});

let scrollAmount = 0;
document.addEventListener('scroll', function(){
    let offset = window.scrollY;
    TweenMax.to(headerImg, 0.1, {scale: 1 + offset/300});
});
