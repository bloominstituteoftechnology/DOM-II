// Your code goes here


gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

//1
homeLink.addEventListener(
    'mouseover', //string with name of event
    () => {
        homeLink.style.color = 'pink';
        // things we want to happen   
       
    }
)

//2
homeLink.addEventListener(
    'click', () => {
        homeLink.style.color = 'red';
        event.stopPropagation();
    }
)

const wholePage = document.querySelector('html');

//3
document.addEventListener(
    'scroll', () => {
         wholePage.style.background = 'pink';
         console.log("this is working")
    }
)

const header = document.querySelector('header');


//4
header.addEventListener(
    'click', () => {
        header.style.background = "teal";
    }
)


//5
introText.addEventListener(
    'mousemove', () => {
        introText.style.color = 'teal';
    })



//6

introText.addEventListener(
    'mouseleave', () => {
        introText.style.color = 'black';
    }
)


const images = document.querySelectorAll("img")


forEach(function(item) {
    item.addEventListener("mouseenter", function() {
      gsap.effects.fade(this);
    });
  });




















