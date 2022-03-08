import './less/index.less'

// Your code goes here!
const header = document.querySelector('.logo-heading');
const NavLinks = document.querySelectorAll('.nav-link');
Array.from(NavLinks).forEach(link => link.addEventListener('click', evt => {
    evt.preventDefault();
    link.classList.remove('.nav-link')
}))

function headerBold(evt){
    header.textContent = 'Super Fun!'
}

header.addEventListener('click', headerBold);
