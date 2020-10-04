// add a box around nav elements on mouse hover
let navItems = document.querySelectorAll('.nav-link');
navItems.forEach(a => {
    a.addEventListener('mouseover', e => {
        e.target.style['background-color'] = '#FBAF44'
    });
    a.addEventListener('mouseout', e => {
        e.target.style['background-color'] = 'transparent';
    });
});

// play an exciting animation when clicking the "logo"
let logo = document.getElementsByClassName('logo-heading')[0];
logo.addEventListener('click', e => {
    let animation = [
        {transform: 'none'},
        {transform: 'rotate(.5turn) scale(2)'},
        {transform: 'rotate(1turn)'}
    ];

    e.target.animate(animation, {duration: 1000});
});

// "raise" images from the page on hover
let imgContent = document.querySelectorAll('section img');
imgContent.forEach(img => {
    img.addEventListener('mouseover', e => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style['box-shadow'] = '12px 10px 10px 10px #BBBBBB';
    });
    img.addEventListener('mouseout', e => {
        e.target.style.transform = 'none';
        e.target.style['box-shadow'] = 'none';
    });
});

// highlight currently hovered destination in .content-pick
let destinations = document.querySelectorAll('.destination');
destinations.forEach(dest => {
    let button = dest.querySelector('.btn');
    button.addEventListener('mouseover', e => {
        dest.style['background-color'] = 'white';
        dest.style.transform = 'scale(1.1)';
        dest.style['box-shadow'] = '5px 5px 7px 2px #BBBBBB'
    });
    button.addEventListener('mouseout', e => {
        dest.style['background-color'] = 'transparent';
        dest.style.transform = 'none';
        dest.style['box-shadow'] = 'none';
    });
});
