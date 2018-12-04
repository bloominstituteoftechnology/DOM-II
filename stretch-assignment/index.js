let red = document.querySelector('.block--red');
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');
let blocks = document.querySelectorAll('.block');

//Assign a variable to the current lowest ordered element
let neg = 0;
let currentTopPos = red.offsetTop; //Position of default top position

blocks.forEach(b => {
    b.style.marginLeft = '0px';
    let interval;

    //On click, set the order to a lower number of the lowest ordered element, to make it appear above/before the rest.
    b.addEventListener('click', (e) => {
        let offsetTop = e.target.offsetTop;
        let distanceToTravelUp = (offsetTop - currentTopPos);
        neg -= 1;
        e.target.style.zIndex = '5';
        TweenMax.to(e.target, 1, {y: `-${distanceToTravelUp}px`});
        //Set final values after animation
        setTimeout(() => {
            e.target.style.zIndex = 'auto';
            e.target.style.order = `${neg}`;
            TweenMax.to(e.target, 0, {y: '0px'});
            //Set the new top position element
            currentTopPos = e.target.offsetTop;
        }, 1000)
    });

    //On mousedown, start an interval executing every 10ms that adds 1px left margin (To visually push it to the right)
    b.addEventListener('mousedown', (e) => {
        e.target.dataset.flying = 'true';
        interval = setInterval(function() {
            //Max distance they can travel is 500px before the right side of their screen
            if(e.target.offsetLeft <= window.innerWidth - 500) {
            let current = Number(b.style.marginLeft.split('px')[0]);
            let newMargin = current + 1;
            TweenMax.to(e.target, 0.001, {marginLeft: `${newMargin}px`});
            }
            
        }, 10);
    });

    //On mouseup/mouseleave remove the interval that is moving the rocket/box to the right.
    b.addEventListener('mouseup', (e) => {
        e.target.dataset.flying = 'false';
        clearInterval(interval);
    });
    b.addEventListener('mouseleave', (e) => {
        e.target.dataset.flying = 'false';
        clearInterval(interval);
    });
});