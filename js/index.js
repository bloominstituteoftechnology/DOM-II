// Your code goes here
const title = document.querySelector('.logo-heading')
    title.addEventListener('mouseover', function(evt) {
        evt.target.style.color = 'orange'

        setTimeout(() => {
            evt.target.style.color = '';
        }, 1000);
    })
    const navLink = document.querySelectorAll('.nav-link');
    // highlight the mouseover target
    navLink[0].addEventListener('click', (event) => {
        event.target.style.color = 'orange';
    });

    // highlight the mouseover target
    navLink[1].addEventListener('click', (event) => {
        event.target.style.color = 'blue';
    });

    // highlight the mouseover target
    navLink[2].addEventListener('click', (event) => {
        event.target.style.color = 'grey';
    });

    // highlight the mouseover target
    navLink[3].addEventListener('click', (event) => {
        event.target.style.color = 'yellow';
    });

const starter = document.querySelector('.intro');
    starter.addEventListener('dblclick', (event) => {
        event.target.style.color = 'white';
        event.target.style.backgroundColor = 'red';

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.color = "";
            event.target.style.backgroundColor = "";
        }, 1500);
    });

const pic = document.querySelector('.intro img');
    pic.addEventListener('mouseout', (event) => {
        event.target.style.width = '25%';

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.width = '';
        }, 1000);
    })

const map = document.querySelector('.content-section .img-content');
    map.addEventListener('click', (event) => {
        event.target.style.width = '200px';

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.width = '';
        }, 1000);
    });

const destPoint = document.querySelector('.content-destination img');
    destPoint.addEventListener('click', (event) => {
        event.target.style.width = '50%';

        // reset the color after a short delay
        setTimeout(function() {
            event.target.style.width = '';
        }, 1000);
    });

const button = document.querySelectorAll('.btn');
    button.forEach((unit) => {
        unit.addEventListener('click', (event) =>{
            event.target.style.color = 'yellow';
            event.target.style.backgroundColor = 'Purple';
        });
    });

const copyRight = document.querySelector('.footer');
    copyRight.addEventListener('mouseover', (event) => {
        event.target.style.color = 'crimson';
        event.target.style.backgroundColor = 'lightblue';
    })

    copyRight.addEventListener('click', (event) => {
        event.target.style.fontSize = '3rem';
    })

document.body.addEventListener('mousewheel', (event) => {
    event.target.style.color = 'lightgreen';

    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.color = '';
    }, 5000);
});
