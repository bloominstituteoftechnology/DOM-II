// Your code goes here


//1
var itemOne = document.querySelectorAll('header .container h1')[0].addEventListener('mouseover', itemOneFunc);

function itemOneFunc(item) {
    this.style.backgroundColor = 'red';
}

