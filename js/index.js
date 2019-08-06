// mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e) => {
    logo.textContent = "Lets Go!";
})

// keydown
window.addEventListener('keydown', (e) => {
    console.log(`This is my keypress: ${e.code}`);
  });

// wheel
const mainNav = document.querySelector('.main-navigation');
console.log(mainNav);
mainNav.addEventListener('wheel', (e) => {
    mainNav.style.backgroundColor = "green";
})

// dbclick

const pictures = document.querySelectorAll('img');

for(i = 0; i < pictures.length; i ++){
    pictures[i].addEventListener('dblclick', (e) => {
        e.target.style.filter = "invert(100%)";
    });
};

// drag / drop

for(i = 0; i < pictures.length; i ++){
    pictures[i].addEventListener('drag', (e) => {
        e.target.setAttribute('src', "https://i.ibb.co/k58Sx7D/images.jpg")
    })
}

//load

//focus

//resize

// scroll

const home = document.querySelector('.home');
window.addEventListener('scroll', () => {
    home.style.background = '#E62739'
});

// select


