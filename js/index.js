// Your code goes here
const navigation = document.querySelectorAll('.nav-link');

navigation.forEach(nav => {
    nav.addEventListener('mouseover', () => {
        nav.style.backgroundColor = 'red'
        
    })
    nav.addEventListener('mouseleave', () => {
        nav.style.backgroundColor = 'white'
    })
})

const buttons = document.querySelectorAll('.btn')

buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        button.style.backgroundColor = 'red'
        console.log(event)
    })
    button.addEventListener('mouseleave', () =>{
        button.style.backgroundColor = 'white'
        button.style.color = 'blue'
    })
});

window.addEventListener('load', ()=>{
    alert('click the button on the bottum of the page to schedule')
})


const aTag = document.querySelectorAll('.nav-link');
const pictureHightlight = document.querySelectorAll(".img-content");
const bod = document.querySelector('html');

buttons.forEach(button =>{
    button.addEventListener('click', event =>{
        button.style.backgroundColor = 'red'
        console.log(event)
    })
    button.addEventListener('mouseleave', () =>{
        button.style.backgroundColor = 'white'
        button.style.color = 'blue'
    })
});

aTag.forEach(tag =>{
    tag.addEventListener('mouseover', ()=>{
        tag.style.color = 'red'
        console.log('you moused over')
    })

    tag.addEventListener('mouseleave', ()=>{
        tag.style.color = 'black'
    })
});

pictureHightlight.forEach(pic =>{
    pic.addEventListener('dblclick', () =>{
        pic.style.borderWidth = '5px'
        pic.style.borderStyle = 'solid'
        pic.style.borderColor = 'blue'
    })
    pic.addEventListener('mouseleave', () =>{
        pic.style.borderWidth = '0px'
    })
});



bod.addEventListener('keydown', ()=>{
    bod.style.backgroundColor = 'blue'
})

window.addEventListener('scroll', () =>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    
    if (Math.floor(scrolled) === scrollable){
        alert('you reached the end');
    }
});