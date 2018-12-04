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