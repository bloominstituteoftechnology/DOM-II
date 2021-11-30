import './less/index.less'

// Your code goes here!

// mouseover
const logo = document.querySelector('.logo-heading');

const mouseBlue = () => {
    logo.style.backgroundColor = 'dodgerblue';
}

logo.addEventListener('mouseover', mouseBlue)

const mouseOut = () => {
    logo.style.backgroundColor = '';
}
logo.addEventListener('mouseout', mouseOut)