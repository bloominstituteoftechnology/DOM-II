// 1. Mouse Move = Random Nav Colors
const navAnima = document.querySelector('.main-navigation');
const navItems = document.querySelectorAll('.nav a');
const picFade = document.querySelector('#pic3');
const funButton = document.querySelector('#btnfun');
const mtnButton = document.querySelector('#btnmountain');
const islandButton = document.querySelector('#btnisland');

navAnima.addEventListener('mousemove', random);
function random() {
    navItems.forEach(item => item.style.color = getColor());
}
function getColor() {
    const charactrs = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += charactrs[Math.floor(Math.random() * 16)];
    } 
    return color;
}


//2. Fade Out
picFade.addEventListener('mouseover', function(e) {
    e.preventDefault();
    e.target.style.opacity = '0.5';
});

//3. Fade In
picFade.addEventListener('mouseout', function(e) {
    e.target.style.opacity = '1';
});


//4. Alert on Click
funButton.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Let\'s Have Fun!');
});

//5. Disable on Click
mtnButton.addEventListener('click', function(e) {
    e.preventDefault();
});

//6. Alert on Double Click
mtnButton.addEventListener('dblclick', function(e) {
    e.preventDefault();
    alert('To the Top!');
});

//7. Alert on Right Click
islandButton.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Go "Right" to the Island!');
});