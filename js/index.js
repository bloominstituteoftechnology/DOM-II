// Your code goes here

//click event listener
let myTest = document.querySelector('.logo-heading');
myTest.addEventListener('click', () => {
    myTest.textContent = 'Creepy Bus';
    myTest.style.color ='red';
});

//mouse over event listener
let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseenter', () => {
    // headerImg.style.borderRadius = '50%';
    headerImg.src = './img/evil-tele.jpg';
});

headerImg.addEventListener('mouseleave', () => {
    // headerImg.style.borderRadius = '50%';
    headerImg.src = './img/fun-bus.jpg';
});