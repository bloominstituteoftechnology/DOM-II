// 1. Mouse Move = Random Nav Colors
const navAnima = document.querySelector('body');
const navItems = document.querySelectorAll('a');

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


//2. 