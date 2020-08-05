// Your code goes here

//h2
const titles = document.querySelectorAll('h2')

titles.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.color = 'pink';
        element.style.fontSize = '50px';
    })
});

titles.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.style.color = 'black';
        element.style.fontSize = '3.6rem';
    })
});


//p 
const paragraph = document.querySelectorAll('p')

paragraph.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'blue';
    })
});

paragraph.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.style.color = 'brown';
    })
});

//button
const button = document.querySelectorAll('.btn')

button.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'green';
    })
});

//nav
const nav = document.querySelectorAll('a')

nav.forEach(element => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(1.3)';
    })
    element.addEventListener('focus', (event) => {
        event.target.style.background = 'pink';  
    })
});


//img 
const img = document.querySelectorAll('img')

img.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.2)';
        element.style.transition= 'all 0.3s';
    })
});

img.forEach(element => {
element.addEventListener("mouseleave", () => {
    element.style.transform ="scale(1)";
})
});


//h4 
const h4 = document.querySelectorAll('h4')

h4.forEach(element => {
    element.addEventListener('wheel', (event) => {
        event.target.style.background = 'gray';
        
    })
});