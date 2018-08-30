let funBusH1 = document.querySelector('.logo-heading');
let funner = function (e) {
    if (e.target.innerHTML === 'Fun Bus') {
        e.target.innerHTML = 'The Funnest Bus!'
    }
    else {
        e.target.innerHTML = 'Fun Bus';
    }
}
funBusH1.addEventListener('click', funner);

let busImage = document.querySelector('.intro img');
let addBorder = function (e) {
    if (e.target.style.borderBottom === '') {
        e.target.style.borderBottom = '2px dashed #C0C0C0'; 
    }
    else {
        e.target.style.borderBottom = '';
    }
}
busImage.addEventListener('mouseenter', addBorder);

let headers = document.querySelectorAll('h2');
let changeToBlue = function (e) {
    if (e.target.style.color === '') {
        e.target.style.color = 'blue';
    }
    else {
        e.target.style.color = '';
    }
}
headers.forEach(function (item) {
    item.addEventListener('copy', changeToBlue)});

let adventureJpg = document.querySelector('.content-section img');
let disappear = function (e) {
    if (e.target.style.display === '') {
        e.target.style.display = 'none';
    }
    else {
        e.target.style.display = '';
    }
}
adventureJpg.addEventListener('mouseup', disappear)

let inverse = document.querySelector('.inverse-content');
let inverseInverse = function (e) {
    if (e.target.style.flexDirection === '') {
        e.target.style.flexDirection = 'row-reverse';
    }
    else {
        e.target.style.flexDirection = '';
    }
}
inverse.addEventListener('contextmenu', inverseInverse);

let destinationJpg = document.querySelector('.inverse-content img');
let addFullBorder = function (e) {
    if (e.target.style.border === '') {
        e.target.style.border = '2px dashed #C0C0C0'; 
    }
    else {
        e.target.style.border = '';
    }
}
destinationJpg.addEventListener('drag', addFullBorder);