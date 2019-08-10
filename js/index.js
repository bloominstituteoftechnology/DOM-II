// Your code goes here
allH2 = document.querySelectorAll('h2');
// 1
let h2Click = allH2.forEach(event => {
    event.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green';
    })
});

// 2
let navItem = document.querySelectorAll('.nav-link')

let navItemHover = navItem.forEach(event => {
    event.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '2.2rem';
    });
});

// 3
let navItemStopHover = navItem.forEach(event => {
    event.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '1.6rem';
    });
});

// 4
let img = document.querySelector('img');

img.addEventListener('mousedown', (event) => {
    event.target.style.border = '15px solid lightblue';
})

// 5
img.addEventListener('mouseup', (event) => {
    event.target.style.border = '0px';
})

// 6
document.addEventListener('keypress', (event) => {
    alert(event.key);
})

// 7
let h2DblClick = allH2.forEach(event => {
    event.addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'white';
    })
});

// 8
let logo = document.querySelector('.logo-heading');

logo.addEventListener('click', (event) => {
    event.target.style.color = 'tan';
});

// 9
logo.addEventListener('dblclick', (event) => {
    event.target.style.color = 'black';
});

// 10
let navItemClick = navItem.forEach(event => {
    event.addEventListener('click', (event) => {
        event.target.style.color = 'yellow';
    });
});