// Your code goes here

const commands = document.querySelectorAll('a')
commands.forEach(commands => {
    commands.addEventListener('mouseover',() => {
        link.style.color = 'fuscia'

    })
});

document.addEventListener('keydown',(a) => {
    if(a.key === a.key === 'Esacpe'){
        alert('I See You')
}
})
document.addEventListener('wheel', (event) => {
    if(event.deltaY>0)
    document.body.style.backgroundColor = 'rose gold';
    if(event.deltaY<0)
    document.body.style.backgroundColor = 'pink';

});

const p = document.querySelectorAll('p')
window.addEventListener('load',() => {
    setTimeout(function(){
        p.forEach(instance => {
            instance.textContent = 'Vamonos Mi Gente'
        })
        },5000)
});

links.forEach(link => {
    link.addEventListener('focus', () => {
        link.style.transform = 'scale(1.2)'
    })
});

window.addEventListener('resize', () => {
    document.querySelector('body').style.backgroundColor = 'magenta'
});

const imgs = document.querySelectorAll('img')

window.addEventListener('scroll', () => {
    imgs.forEach(img => {
        img.style.display = 'none'
    })
});

links.forEach(link => {
    link.addEventListener('dblclick', () => {
        alert('You know you want to ride!')
    } )
});

const divs = document.querySelectorAll('div')
divs.forEach(div => {
    div.addEventListener('mousemove',(e) => {
        e.target.style.backgroundColor = 'blue'
    })
});

document.addEventListener('keyup', (e) => {
    if(e.key != 27 || e.key != 'Escape'){
        alert('Press the escape key')
    }
});

const navBar = document.querySelector('.nav')

navBar.addEventListener('click', () => {
    alert('Are you sure you want to go there?')
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()
        alert('Where are you going?')
    })
});












// First try
// function addListeners(mouseover) {
//     commands.addEventListener('mouseover', handleEvent);
// }


//     function addListeners(wheel) {
//         commands.addEventListener('wheel', handleEvent);
// }
//     function addListeners(keydown){
//         commands.addEventListener('keydown', handleEvent);
//     }

//         function addListeners(load) {
//             commands.addEventListener('load', handleEvent);
//         }

//             function addListeners(focus) {
//                 commands.addEventListener('focus', handleEvent);
//             }

//                 function addListeners(resize) {
//                 commands.addEventListener('resize', handleEvent);
//                 }

//                 function addListeners(scroll) {
//                 commands.addEventListener('scroll', handleEvent);
//                 }

//                 function addListeners(select) {
//                 commands.addEventListener('select', handleEvent);
//                 }

//                 function addListeners(dblclick) {
//                 commands.addEventListener('dblclick', handleEvent);
//                 }

//                 function addListeners(drag) {
//                 commands.addEventListener('drag', handleEvent);
//                 }
                
//                 function addListener(drop){
//                 commands.addEventListener('drop', handleEvent);
//                 }

//                 console.log(addListeners)
            




