let links = document.querySelectorAll('.nav-link');
links.forEach(text => {
    text.addEventListener('mouseover', event => {
        event.target.style.textDecoration = 'underline'
    });
});
links.forEach(text => {
    text.addEventListener('mouseout', event => {
        event.target.style.textDecoration = 'none'
    });
});
