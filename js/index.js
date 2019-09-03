// Your code goes here

let mainNav = document.querySelectorAll('.nav-link')

mainNav.forEach(el => el.addEventListener('mouseover', () => {
        el.style.color = 'red'   
}));
