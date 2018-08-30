// Your code goes here
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