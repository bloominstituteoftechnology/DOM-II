// Your code goes here

const navigation = document.querySelectorAll('.nav');
navigation.forEach(navigation => {
navigation.addEventListener('mouseover', e => {
e.target.style.border = '3px solid green';
})
})

const funBusImg = document.querySelector('.intro');
funBusImg.addEventListener('dblclick', e => {
e.target.style.border = '3px solid blue';
})

const button = document.querySelectorAll('.btn');
button.forEach(button => {
button.addEventListener('click', e => {
e.target.style.border = '3px solid red';
})
})

const letsGo = document.querySelector('.text-content h2');
letsGo.forEach(letsGo => {
letsGo.addEventListener('keydown', e => {
e.target.style.border = '3px solid red';
})
})

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("drag", e => {
    logoHeading.style.transform = "rotate(180deg)";
}); //want heading to rotate when I drag not working

allPs.forEach((p) => {
    p.addEventListener("mousedown", e => {
        e.stopPropagation();
        e.target.style.backgroundColor = "lightblue";
        e.target.style.color = "hotpink";
    })
    p.addEventListener("mouseup", e => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "black";
    })
})

navLinks.forEach((link) => {
    link.addEventListener("click", e => {
        e.preventDefault();
    })
})



//const footer = document.querySelector('.footer p');
    e.stopPropagation();
    footer.addEventListener("mousemove", () => {
    footer.style.color = "#17A2BB";
});

//const footer = document.querySelector('footer p'); this line breaks everything, why?
e.stopPropagation();
footer.addEventListener('mouseout', e => {
    footer.style.backgroundColor = '#17A2BB';
    footer.style.color = '#FFFFFF';
});

