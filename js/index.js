// Your code goes here

//make links turn green
const links = document.querySelectorAll('a');
console.log(links);
const changeColorHandler = function(event) {
    if (this.style.color === '') {
    this.style.color = 'green';
    } else {
        this.style.color = '';
    }
};

links.forEach(function (item) {
    item.addEventListener('click', changeColorHandler)
});

//make bus picture disappear on mouseover

const busImg = document.querySelector('.home img');

const busImgNoneHandler = function(event) {
    event.stopPropagation();
    this.style.visibility = 'hidden';
};

const busImgreturnHandler = function(event) {
    event.stopPropagation();
    this.style.visibility = '';
};

busImg.addEventListener('mouseenter', busImgNoneHandler);
busImg.addEventListener('mouseleave', busImgreturnHandler);