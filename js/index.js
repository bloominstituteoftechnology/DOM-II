const aTag = document.querySelectorAll(".nav-link");

aTag.forEach(tag => {
    tag.addEventListener('click', function(event) { event.preventDefault() });
});

const para = document.querySelectorAll('p');
const textColorChange = function(event) {
    event.target.style.color = 'green';
}

para.forEach(text => {
    text.addEventListener('mouseover', textColorChange)
});

const headerOne = document.querySelectorAll('h1');
const headerColorChange = function(event) {
    event.target.style.color = 'dodgerblue';
}

headerOne.forEach(head => {
    head.addEventListener('mousemove', headerColorChange);
});

const headerTwo = document.querySelectorAll('h2');
headerTwo.forEach(head => {
    head.addEventListener('mousemove', headerColorChange);
});

const headerFour = document.querySelectorAll('h4');
headerFour.forEach(head => {
    head.addEventListener('mousemove', headerColorChange);
});