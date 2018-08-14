// Your code goes here

// on page load, pop logo and navLinks
window.addEventListener('load', popNav());

// pop-zoom navbar contents
function popNav(){
    let navLogo = document.querySelector('.logo-heading');
    let navLinks = document.querySelectorAll('.nav-link');
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
        TweenMax.fromTo(navLinks[c], 1, {scale: 0.5, opacity: 0}, {scale : 1.0, opacity: 1});
        c += 1;
    }, 200);
}