// Your code goes here

//mouseover
const mynav = document.querySelectorAll('a')
mynav.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'red'
    })
})

const paragraph = document.querySelectorAll('p')
paragraph.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'IndianRed'
    })
})

const h4 = document.querySelectorAll('h4')
h4.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'White'
    })
})

//mouseout 
mynav.forEach(link => {
    link.addEventListener('mouseout' , () => {
        link.style.color = 'brown'
    })
})

const h2 = document.querySelectorAll('h2')
h2.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'White'
    })
})
//dbclick
const bttn = document.querySelectorAll('.btn')
bttn.forEach(element => {
    element.addEventListener('dblclick' , () => {
        element.style.color = 'pink'
    })
});

//wheel

const maintitles = document.querySelectorAll('h2')
maintitles.forEach(element => {
    element.addEventListener('wheel' , () => {
        element.style.fontStyle = 'inherit'
    })
});

//click 
const body = document.querySelector('body')
body.addEventListener('click' , (event) => {
    body.style.backgroundColor = 'lightSteelBlue'
})

const footer = document.querySelector('footer')
footer.addEventListener('click' , (event) => {
    footer.style.backgroundColor = 'Bisque'
})

//mouseleave

const header = document.querySelector('header')
header.addEventListener('mouseleave', function () {
    header.style.background = 'Bisque';
});