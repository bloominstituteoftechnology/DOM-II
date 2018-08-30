// Your code goes here
const button = document.querySelectorAll('.btn');

const buttonColorHandler = function() {
    this.style.backgroundColor = 'white';
    this.style.color = '#17A2B8';
}

button.forEach(button => {
    button.addEventListener('mouseover', buttonColorHandler);
});