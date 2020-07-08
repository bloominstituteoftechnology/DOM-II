// animations 
gsap.from('.logo-heading', {duration: 2, y: '-80%', ease: 'bounce'});
gsap.fromTo("#yellowBus", {rotation: 0, x: 450, duration: 2}, {rotation: 0, x: 0, duration: 1});
gsap.fromTo("#yellowBus", {opacity: 0}, {opacity: 1, duration: 2});
// selectors for nav bar 
const home = document.getElementById('home');
const about = document.getElementById('about') ;
const blog = document.getElementById('blog');
const contact = document.getElementById('contact');

// events for nav bar (mouseover, mouseout)

home.addEventListener("mouseover", () => home.style = 'color: red');
home.addEventListener("mouseout", () =>  home.style = 'color: black');
about.addEventListener("mouseover", ()=> about.style = 'color: yellow');
about.addEventListener("mouseout", () =>  about.style = 'color: black');
blog.addEventListener("mouseover", ()=> blog.style = 'color: dodgerblue');
blog.addEventListener("mouseout", () =>  blog.style = 'color: black');
contact.addEventListener("mouseover", ()=> contact.style = 'color: tomato');
contact.addEventListener("mouseout", () =>  contact.style = 'color: black');

// events for nav bar (click , double click)

home.addEventListener("click", () => home.style = 'font-size: 200%');
home.addEventListener("dblclick", () =>  home.style = 'font-size: 250%');
about.addEventListener("click", ()=> about.style = 'font-size: 200%');
about.addEventListener("dblclick", () =>  about.style = 'font-size: 250%');
blog.addEventListener("click", ()=> blog.style = 'font-size: 200%');
blog.addEventListener("dblclick", () =>  blog.style = 'font-size: 250%');
contact.addEventListener("click", ()=> contact.style = 'font-size: 200%');
contact.addEventListener("dblclick", () =>  contact.style = 'font-size: 250%');


// event for text bellow (text animation)
gsap.to("#txt1", {
    duration: 2,
    text: {
        value: "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition.",
        delimiter: " "
    },
    ease: "none"
});
gsap.to("#txt2", {
    duration: 2,
    text: {
        value: "Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.",
        delimiter: " "
    },
    ease: "none"
});
gsap.to("#txt3", {
    duration: 2,
    text: {
        value: "Expedition colorful design simple excursion blogger blogger design WordPress design, design organized website theme.",
        delimiter: " "
    },
    ease: "none"
});

// scrolling event listener and more animations
window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    if(scrolled > 700){
        return gsap.to("#footer", {
            duration: 1,
            text: {
                value: "copyright 2020",
                delimiter: ""
            },
            ease: "none"
        });
    }
    if (scrolled > 400){
        return gsap.to("#destination", {
            duration: 1,
            text: {
                value: "Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.",
                delimiter: ""
            },
            ease: "none"
        });
    }

})

// selections  events 
