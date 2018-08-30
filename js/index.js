// Your code goes here
const logoHeading = document. querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', function() {
    logoHeading.style.backgroundColor = 'aqua';
});
// logo on navbar

const yellowBus = document.querySelector(".intro img");
yellowBus.addEventListener('mouseenter', function() {
    yellowBus.setAttribute('src','http://p.fod4.com/p/channels/legacy/profile/1324963/43cabe19f80f9db1779b4d327fcc40cb.jpg');
});

yellowBus.addEventListener('mouseleave', function() {
    yellowBus.setAttribute('src','https://vignette.wikia.nocookie.net/mycun-the-movie/images/b/ba/Wheels-on-the-bus-yellow-e1445874888499.png/revision/latest?cb=20160128213056');
});

const welcomeMessage = document.querySelector('h2');
welcomeMessage.addEventListener('wheel', function() {
    welcomeMessage.innerText = 'Welcome to the Bun Fus!';
});

const dragPTag = document.querySelector('p');
dragPTag.addEventListener('drag', function() {
    this.style.display = 'none';
})
// .intro img 
// yellow bus image