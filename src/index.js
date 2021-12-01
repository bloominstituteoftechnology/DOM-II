import './less/index.less'

// Your code goes here!


const logo = document.querySelector('h1.logo-heading'); // <h1 class="logo-heading">Fun Bus</h1>
logo.addEventListener('mouseover', event => {
    logo.style.color = 'green';
});

const nav = document.querySelectorAll('nav a');
nav.forEach(item => {
    return item.addEventListener('click', event => {
        event.target.style.color = 'red';
        event.preventDefault();
    })
});

const h1 = document.querySelectorAll('h1')
h1.forEach(item => item.addEventListener('mouseover', event => {
    event.target.style.color = 'green';
}));

const h2 = document.querySelectorAll('h2')
h2.forEach(item => item.addEventListener('pointerover', event => {
    event.target.style.color = 'purple';
}));

const h4 = document.querySelectorAll('h4')
h4.forEach(item => item.addEventListener('pointerleave', event => {
    event.target.style.color = 'gray';
}));

const paras = document.querySelectorAll('p')
paras.forEach(item => item.addEventListener('dblclick', event => {
    event.target.style.color = 'blue';
}));

const footer = document.querySelector('footer');
footer.addEventListener('mouseover', event => {
    event.target.style.color = 'orange';
})

const button = document.querySelectorAll('.btn');
button.forEach(item => item.addEventListener('mouseover', event => {
    event.target.style.color = 'yellow';
    event.target.style.border = '1px dashed blue';
}))

const destination = document.querySelectorAll('.destination p');
destination.forEach(item => {
    return item.addEventListener('click', event => {
        event.target.style.color = 'red';
        event.preventDefault();
    })
});

const destinationH2 = document.querySelectorAll('.content-destination h2');
destinationH2.forEach(item => {
    return item.addEventListener('click', event => {
        event.target.style.color = 'brown';
        event.preventDefault();
    })
});
const textContent = document.querySelectorAll('.text-content p');
textContent.forEach(item => item.addEventListener('mouseover', event => {
    event.target.style.color = 'pink';
}));

