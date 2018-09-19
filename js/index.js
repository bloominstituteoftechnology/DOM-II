

//== Ten Random Events =========================================================

//-- 1: dblclick ---------------------------------
document.body.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '4rem';
    setTimeout(() => {event.target.style.fontSize = 'unset';},1000);
    console.log('Current: '+event.currentTarget.tagName);
});

//-- 2: load, 3: click ---------------------------

document.querySelectorAll('img').forEach(element => {
    element.addEventListener('load', (event) => {
        element.style.filter = 'invert(1)';
        element.style.transition = 'filter 1s ease';
    });
    element.addEventListener('click', (event) => {
        element.style.filter = 'unset';
    });
});

//-- 4: mouseenter, 5: mouseleave ----------------
document.querySelectorAll('*').forEach(element => { // WE'RE DOING IT LIVE
    element.addEventListener('mouseenter', function (event){
        this.style.outline = '1px solid red';
    });
    element.addEventListener('mouseleave', function (event){
        this.style.outline = 'unset';
    });
});

//-- 6: mousemove, 7: mouseover, 8: submit -------
let asteroids = [
    '&star;','&star;','&star;','&star;','&star;',
    '&starf;','&starf;','&starf;','&starf;','&starf;',
    '*',
    '&bigstar;',
    '&#x02729;',
    '&#x0272A;',
    '&#x000A4;',
    '&#x02600;',
    '&#x025C8;',
    '&#x02604;',
    '&#x025C7;'
];
let starLifespan = 2000;
let NO_MORE_STARS_PLEASE = false;
document.body.addEventListener('mousemove', function (event){
    if(NO_MORE_STARS_PLEASE) return;
    for(let count = 0; count < 10; count++){ // Have fun, CPU!
        setTimeout(() => {
            let star = document.createElement('span');
            star.innerHTML = asteroids[Math.floor(Math.random()*asteroids.length)];
            star.style.position = 'fixed';
            star.style.left = (Math.floor(-50+Math.random()*100) + event.clientX) + 'px';
            star.style.top  = (Math.floor(-50+Math.random()*100) + event.clientY) + 'px';
            star.style.fontSize = Math.floor(Math.random()*2+1)+'rem';
            star.style.opacity = '1';
            document.body.appendChild(star);
            star.style.transition = `opacity ease ${starLifespan/1000}s`;
            setTimeout(() => {
                star.style.opacity = '0';
            }, 10);
            setTimeout(() => {
                document.body.removeChild(star);
            }, starLifespan);
            star.addEventListener('mouseover', explode);
        }, Math.random()*1000);
    }
});
function explode (event){
    this.style.color = 'red';
    this.style.transtion = 'font-size 1s ease';
    this.style.fontSize = '5rem';
}
let sweetRelease = document.createElement('form');
let submitButton = document.createElement('button');
submitButton.innerText = "Disable Myspace / Free CPU";
sweetRelease.addEventListener('submit', (event) => {
    event.preventDefault();
    NO_MORE_STARS_PLEASE = true;
    okayJustOneMore();
});
sweetRelease.appendChild(submitButton);
document.querySelector('footer').appendChild(sweetRelease);
