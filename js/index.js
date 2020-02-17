// Your code goes here

// 1
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', (e) => {
    logo.style.color = 'red';
})

// 2
const busImage = document.querySelector('.intro img');
busImage.addEventListener('mouseover', (e) => {
    busImage.style.transform = 'scale(1.1)';
})

busImage.addEventListener('mouseleave', (e) => {
    busImage.style.transform = 'scale(1.0)';
})

// 3
const paragraph = document.querySelectorAll('p');
paragraph.forEach(para => {
    para.addEventListener('dblclick', (e) => {
        para.style.backgroundColor = "yellow";
    });
});

// 4

const adventureImg = document.querySelector('.img-content img');
adventureImg.addEventListener('mousemove', (e) => {
    alert('Click the sign up button below!');
});

// 5

const funImg = document.querySelector('.inverse-content img');
funImg.addEventListener('drag', (e) => {
    funImg.style.border = '5px solid red'
});

// 6




