// Your code goes here
const buttons = document.querySelectorAll('.btn')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        TweenLite.to(buttons[i], 1, { ease: CustomEase.create("custom", "M0,0.018 C0.138,0.222 0.739,0.302 1,0"), y: -500 }); 
    });
}
const home = document.querySelector('.home');
const navLinks = document.querySelectorAll('.nav a');
// navLinks[2].addEventListener('click', function () {
//     // home.addEventListener('click', function(e) {
//     //     e.target.style.display = 'none';
//     })
// })

home.addEventListener('click', function(e) {
    e.target.classList.toggle('font-change');
});

home.addEventListener('mouseover', function(e) {
    e.target.classList.add('josh-class');
})
home.addEventListener('mouseout', function(e) {
    e.target.classList.remove('josh-class');
})

const introHeading = document.querySelector('.intro h2');

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    introHeading.textContent += keyName;
  });
const paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('mouseover', function() {
        paragraphs[i].classList.add('color-changer');
    })
}
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('mouseout', function() {
        paragraphs[i].classList.remove('color-changer');
    })
}

const busImg = document.querySelector('.intro img'); 
busImg.addEventListener('mouseover', function() {
    busImg.classList.add('cross-out');
})
 
busImg.addEventListener('mouseout', function() {
    busImg.classList.remove('cross-out');
})