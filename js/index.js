// Your code goes here

const links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('mouseover',() => {
        link.style.color = 'gold'
    })
});


document.addEventListener('keydown', (e) => {
    if(e.key === 27 || e.key === 'Escape'){
        alert('No getting out of this roadtrip')
    }
})

document.addEventListener('wheel', (event) => {
    if(event.deltaY>0)
     document.body.style.backgroundColor = 'yellow';
     if(event.deltaY<0)
     document.body.style.backgroundColor = 'orange';
    
});

const p = document.querySelectorAll('p')
window.addEventListener('load',() => {
    setTimeout(function(){
        p.forEach(instance => {
            instance.textContent = 'The wheels on the bus go round and round, round and round'
        })
        },5000)
});

links.forEach(link => {
    link.addEventListener('focus', () => {
        link.style.transform = 'scale(1.2)'
    })
});

window.addEventListener('resize', () => {
    document.querySelector('body').style.backgroundColor = 'silver'
});

const imgs = document.querySelectorAll('img')

window.addEventListener('scroll', () => {
    imgs.forEach(img => {
        img.style.display = 'none'
    })
});

links.forEach(link => {
    link.addEventListener('dblclick', () => {
        alert('No No No!!! No Being Pushy!!!')
    } )
});

const divs = document.querySelectorAll('div')
divs.forEach(div => {
    div.addEventListener('mousemove',(e) => {
        e.target.style.backgroundColor = 'red'
    })
});

document.addEventListener('keyup', (e) => {
    if(e.key != 27 || e.key != 'Escape'){
        alert('Press the escape key')
    }
});

const navBar = document.querySelector('.nav')

navBar.addEventListener('click', () => {
    alert('Where you going?')
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()
        alert('Where you going?')
    })
});

