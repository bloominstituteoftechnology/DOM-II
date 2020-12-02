//1
let headerTitle = document.querySelector(".logo-heading");
headerTitle.addEventListener('mouseover',event =>{
    headerTitle.style.color = "red";
});

//2
let daBody = document.querySelector('body');
document.addEventListener('keydown',event=>{
    if(event.key === "Enter"){
        daBody.scrollTop = 100;
        console.log('this is supossed to scroll')
    }
});

//3
let go = document.querySelector('.text-content h2');
go.addEventListener('scroll',event =>{
    go.animate([ 
        { transform: 'translate3D(0, -300px, 0)' }
      ], {
        duration: 1000,
        iterations: Infinity
      })
});

//4
let intro = document.querySelector('.intro');
intro.addEventListener('click',event=>{
    intro.style.color = "pink";
})

//5
let destinations = document.querySelector('.destination');
destinations.addEventListener('dblclick',event=>{
    destinations.textContent = "DON'T READ! TRAVEL!"
})

//6
document.addEventListener('online',event=>{
    alert('You are online, buddy!');
    console.log('You are online, buddy!')
});

//7
let head4 = document.querySelector('h4');
head4.addEventListener('focus',event=>{
    console.log('hola')
});

//8 
let foot = document.querySelector('.footer p');
foot.addEventListener('wheel',event=>{
    foot.style.background = 'blue';
})

//9
document.addEventListener('offliner',event=>{
    alert('You are offline, pal!')
})

//10
window.addEventListener('load',event=>{
    console.log('it happened!')
});

function listener(event){
    console.log(`
    event passing through ${event.currentTarget.nodeName}
    target --> ${event.target.nodeName}`
    )
}

daBody.addEventListener('click',listener)
headerTitle.addEventListener('click',listener)
document.addEventListener('click',listener)
document.addEventListener('click',listener)
document.body.addEventListener('click', (e) => e.stopPropagation())

let navs = document.querySelector('nav');
navs.addEventListener('click',(e) => e.preventDefault());
