const navLogo = document.querySelector('.logo-heading');
const container = document.querySelector('.container')
const navMain = document.querySelector('.nav-container');
const wholePage = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');
const topNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');
const buttons = document.querySelectorAll('.btn');
const firstHeader = document.querySelector('.text-content h2');
const firstSection = document.querySelector('section');

navLogo.addEventListener("mouseover", function(event) {
    this.classList.add('nav-logo-border')

});

navLogo.addEventListener('mouseleave', function() {
    this.classList.remove('nav-logo-border');

});

window.addEventListener('wheel', function() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navLogo.style.display = 'none';
        navMain.style.justifyContent = 'center';
    } else {
        navLogo.style.cssText = ""
        navMain.style.justifyContent = "space-between";
    }
})

window.addEventListener('load', function() {
    this.alert('Welcome to the Fun Bus!');
})

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        this.style.color = "DarkTurquoise";
    });
};

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('dblclick', function() {
        this.style.color = '#212529';
    });
};

window.addEventListener('resize', function() {
    topNav.style.backgroundColor = '#17A2B8';
})

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', function() {
        for (let j = 0; j < paragraphs.length; j++) {
            paragraphs[j].style.color = '#17A2B8';
        }
    })
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dragend', function() {
        for (let j = 0; j < paragraphs.length; j++) {
            paragraphs[j].style.color = '#212529';
        }
    })
}

buttons.forEach(function(x) {
    x.addEventListener('click', function() {
        alert('Sorry, that page is under construction. Check back soon!');
    })
});


images[2].addEventListener('mousedown', function() {
    alert('What a pretty place! Don\'t you wish you were there?');
})

navLinks.forEach(function(links) {
    links.addEventListener('click', function(event) {
        event.preventDefault();
    })
})

firstHeader.addEventListener('click', function(event) {
    alert("This event won't propagate.");
    event.stopPropagation();
})

firstSection.addEventListener('click', function() {
    this.style.backgroundColor = 'aqua';
})

firstSection.addEventListener('dblclick', function() {
    this.style.cssText = '';
})