// ===== NAVIGATION =====

let navAnchors = document.querySelectorAll('.nav-link');
let nav = document.querySelector('.main-navigation');

navAnchors.forEach(function(index, i){
    navAnchors[i].addEventListener('mouseover', function(e) {
        e.target.style.color = '#fcc100';
        e.target.style.textShadow= '1px 1px 1px black';
        e.target.style.textDecoration = 'underline';
    });

    navAnchors[i].addEventListener('mouseout', function(e) {
        e.target.style.color = '';
        e.target.style.textShadow= '';
        e.target.style.textDecoration = 'none';
    });

    navAnchors[i].addEventListener("click", function(e){
        e.preventDefault();
    });
});

window.addEventListener('scroll', function(e) {
    nav.style.backgroundColor = '#fcc100';

    setTimeout(function(e) {
        nav.style.backgroundColor = '';
    }, 1000);
});


// ===== MAIN CONTENT =====

let button = document.querySelectorAll('.btn');

button.forEach(function(index, i){
    button[i].addEventListener('click', function(e) {
        e.target.textContent = 'You\'re Signed Up!';
    });
});

button.forEach(function(index, i){
    button[i].addEventListener('dblclick', function(e) {
        e.target.textContent = 'You\'re NOT Signed Up!';
    });
});