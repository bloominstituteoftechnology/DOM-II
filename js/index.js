// Your code goes here

//click event listener
let myTest = document.querySelector('.logo-heading');
myTest.addEventListener('click', () => {
    myTest.textContent = 'Creepy Bus';
    myTest.style.color ='red';
});

//mouse enter event listener
let headerImg = document.querySelector('.intro img');
headerImg.addEventListener('mouseenter', () => {
    // headerImg.style.borderRadius = '50%';
    headerImg.src = './img/evil-tele.jpg';
});

//mouse leave event listener
headerImg.addEventListener('mouseleave', () => {
    // headerImg.style.borderRadius = '50%';
    headerImg.src = './img/fun-bus.jpg';
});

//dblclick evenListener
let creepyImg1 = document.querySelector('.img-content img')
creepyImg1.addEventListener('dblclick', () => {
    creepyImg1.src = './img/scary1.jpg';
});


//resize window event listener
window.addEventListener("resize", () => {
    document.querySelector('html').style.backgroundColor = 'red';
  });
  