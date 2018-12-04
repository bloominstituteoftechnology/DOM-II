// ===== NAVIGATION =====

let navAnchors = document.querySelectorAll('.nav-link');
let nav = document.querySelector('.main-navigation');

navAnchors.forEach(function(index, i){
    navAnchors[i].addEventListener('mouseenter', function(e) {
        e.target.style.color = '#fcc100';
        e.target.style.textShadow= '1px 1px 1px black';
        e.target.style.textDecoration = 'underline';
    });

    navAnchors[i].addEventListener('mouseleave', function(e) {
        e.target.style.color = '';
        e.target.style.textShadow= '';
        e.target.style.textDecoration = 'none';
    });

    navAnchors[i].addEventListener('click', function(e){
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

// === Intro Section ===

let intro = document.querySelector('.intro');

intro.addEventListener('mouseover', function(e){
    e.target.style.fontWeight = '900';
})

intro.addEventListener('mouseout', function(e){
    e.target.style.fontWeight = '';
})


// === Destination Section ===

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

const destination = document.querySelectorAll('.destination');

const dir0 = document.createElement('p');
dir0.textContent = '';
dir0.style.fontSize = '1.2em';

const dir1 = document.createElement('p');
dir1.textContent = 'Click Above Buttons to Register';
dir1.style.textAlign = 'center';
dir1.style.fontSize = '1.2em';

const dir2 = document.createElement('p');
dir2.textContent = 'Double-Click Above Buttons to Un-Register';
dir2.style.textAlign = 'center';
dir2.style.fontSize = '1.2em';

destination[1].append(dir0);
destination[1].append(dir1);
destination[1].append(dir2);