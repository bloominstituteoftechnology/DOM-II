// Your code goes here
const timeLine = new TimelineMax();
window.addEventListener("load", function (event) {
    timeLine.staggerFrom('p', 0.5, {
        opacity: 0,
        cycle: {
            rotationX: [-90, 90]
        }
    }, 0.1)
});

//animate fun bus image
const introImage = document.querySelector('.intro img');
introImage.addEventListener('mouseover', function (event) {
    TweenLite.to(introImage, 2, { width: "200px" });

    introImage.addEventListener('mouseleave', function (event) {

        TweenLite.to(introImage, 2, { width: "100%" });

    });


});

//preventDefault on nav items
const norefreshing = document.querySelectorAll('.nav');
norefreshing.forEach((navItem, index) => {
    navItem.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('default prevented');
    })
});
const destination = document.querySelectorAll('.destination')
destination.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        item.style.backgroundColor = 'green';
    })
})

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button, idx) => {
    button.addEventListener('click', (event) => {
        button.style.display = 'none';
        event.stopPropagation();
    })
})
const body = document.querySelector('body');
document.addEventListener('scroll', (event) => {
    TweenMax.fromTo('body', 0.15, { x: -20 }, { x: 20, repeat: 5, yoyo: true, ease: Sine.easeInOut, onComplete: function () { TweenMax.to(this.target, 1.5, { x: 0, ease: Elastic.easeOut }) } })
})
document.addEventListener('keydown',(event)=>{
    body.style.backgroundColor = 'black'

    document.addEventListener('keyup',(event)=>{
        body.style.backgroundColor = "white"
    })
})
window.addEventListener('resize',(event)=>{
    alert(`Honey, I've shrunk the document!`)
})