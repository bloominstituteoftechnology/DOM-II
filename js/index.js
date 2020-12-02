let headerTitle = document.querySelector(".logo-heading");
headerTitle.addEventListener('mouseover',event =>{
    headerTitle.style.color = "red";
});

let daBody = document.querySelector('body');
document.addEventListener('keydown',event=>{
    if(event.key === "Enter"){
        daBody.scrollTop = 100;
        console.log('this is supossed to scroll')
    }
});

let go = document.querySelector('.text-content h2');
go.addEventListener('scroll',event =>{
    go.animate([ 
        { transform: 'translate3D(0, -300px, 0)' }
      ], {
        duration: 1000,
        iterations: Infinity
      })
});

let intro = document.querySelector('.intro');
intro.addEventListener('click',event=>{
    intro.style.color = "pink";
})

let destinations = document.querySelector('.destination');
destinations.addEventListener('dblclick',event=>{
    destinations.textContent = "DON'T READ! TRAVEL!"
})

document.addEventListener('online',event=>{
    alert('You are online, buddy!');
    debugger;
    console.log('You are online, buddy!')
});

let head4 = document.querySelector('h4');
head4.addEventListener('focus',event=>{
    console.log('hola')
});

