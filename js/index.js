// Your code goes here

// Buttons (MouseOver, DoubleClick, MouseClick) //
const myButton1 = document.getElementsByClassName('btn')[0];
//console.log(myButton1);
myButton1.addEventListener('mouseover', function (e) {
    e.stopPropagation();
    myButton1.style.color = 'black';
    myButton1.style.backgroundColor = 'yellow';
});
const myButton2 = document.getElementsByClassName('btn')[1];
//console.log(myButton2);
myButton2.addEventListener('dblclick', function (e) {
    myButton2.style.color = 'yellow';
    myButton2.style.backgroundColor = 'black';
});
const myButton3 = document.getElementsByClassName('btn')[2];
//console.log(myButton3);
myButton3.addEventListener('click', function (e) {
    myButton3.style.color = 'black';
    myButton3.style.backgroundColor = 'yellow';
});

// Nav Links (Scroll) //
function randomColors() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const navLinks = document.querySelectorAll('a');
//console.log(navLinks);
window.addEventListener('scroll', function (e) {
    navLinks.forEach(item => item.style.color = randomColors());
    e.stopPropagation();
});

// Window (Load & Copy) //
window.addEventListener('load', function (e) {
    //alert('Hello! Welcome to my website.'); Comment back for StandUp
});

window.addEventListener('copy', (e) => {
    navigator.clipboard.readText().then(t => {
        alert(`You stole, "${t}". YOU THIEF!`);
    });
})

// IMG (Resize) //
const img1 = document.getElementsByTagName('img')[0];
//console.log(img1);
window.addEventListener('resize', function (e) {
    img1.style.opacity = 0.8;
})

let help = document.querySelector('.logo-heading');
help.addEventListener('dragstart', function (e) {
    e.target.textContent = 'Help. I\'m being held hostage.';
});
help.addEventListener('dragend', function (e) {
    e.target.textContent = 'Fun Bus';
});