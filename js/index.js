let links = document.querySelector('nav-link');
links.forEach(text => {
    text.addEventListener('mouseover', event => {
        event.target.style.textDecoration = 'underline'
    });
});