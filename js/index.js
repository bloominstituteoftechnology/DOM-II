// Your code goes here
const navigation = document.querySelectorAll('.nav')
navigation.forEach(navigation => {
navigation.addEventListener('mouseover', e => {
e.target.style.border = '3px solid green';
})
})

const funBusImg = document.querySelector('.intro')
funBusImg.addEventListener('dblclick', e => {
e.target.style.border = '3px solid hotpink';
})

const button = document.querySelectorAll('.btn')
button.forEach(button =>{
    button.addEventListener('click', e => {
        e.target.style.border = '3px solid red';
    })
})

const letsGo = document.querySelector('.text-content h2')
letsGo.addEventListener('resize', e => {
    e.target.style.transform = 'rotate(360deg)';
}) // not working

const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('drag', e => {
    logoHeading.style.transform = 'rotate(180deg)';
});

const destination = document.querySelectorAll('.h4')
destination.forEach((h4) => {
    h4.addEventListener('mouseenter', () => {
        
        //console.log('working')
        h4.target.style.backgroundColor = 'lightblue';
        h4.target.style.color = 'hotpink';
    })
})//not working

h4.addEventListener('mouseleave', () => {
    h4.target.style.backgroundColor = 'transparent';
    h4.target.style.color = 'black';
    //e.stopPropagation();
})

navLinks.forEach((link) => {
    link.addEventListener('click', e => {
        e.preventDefault();
    })
    })

const footer = document.querySelector('.footer p');
e.stopPropagation();
footer.addEventListener('wheel', e => {
    footer.style.color = '#FFFFFF';
})


