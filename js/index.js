// Your code goes here

const title = document.querySelector('h1');
const anchor = document.querySelectorAll('a');
const body = document.querySelector('body')
const head2 = document.querySelectorAll('h2')
const pic1 = document.querySelectorAll('img')
const buttons = document.querySelectorAll(".btn");

buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        element.style.backgroundColor = "yellow";
    });
})
buttons.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        element.style.color = 'blue'
    })
})
title.addEventListener('click', (event) => {
    title.textContent = 'Get ready for a good time!';
});
head2.forEach(element => {
    element.addEventListener('wheel', (event) => {
        element.style.color = 'black';
        element.style.backgroundColor = 'yellow';
        element.style.textAlign = 'center';

    })
})

anchor.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        element.style.color = "white";
        element.style.backgroundColor = 'grey';
    })
})

body.addEventListener('keydown', (event) => {
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
})
pic1.forEach(element => {
    element.addEventListener('load', (event) => {
        console.log('All pictures have been loaded!');
    });
});
anchor.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        element.style.color = "white";
        element.style.backgroundColor = 'grey';
    })
    element.addEventListener('mouseleave', (event) => {
        element.style.color = "black";
        element.style.backgroundColor = 'white'
    });
})
const navLink = document.querySelectorAll('.nav-link')
navLink.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.preventDefault()
    })
})