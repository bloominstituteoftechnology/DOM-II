// Your code goes here
let navItem = document.querySelectorAll('.nav-link');
console.log(navItem);
for(let i=0; i<navItem.length; i++){
    navItem[i].addEventListener('click', event =>{
        if(event.target.style.color != 'orange'){
            event.target.style.color = 'orange';
        }
        else{
            event.target.style.color = 'blue';
        }
    })
}

window.addEventListener('scroll', event =>{
    p.forEach((paragraph)=>{
        paragraph.style.color = 'purple';
    })
})

let p = document.querySelectorAll('p');
p.forEach((paragraph)=>{
    paragraph.addEventListener('copy', event =>{
        alert('Do not copy this text!');
    }) 
})

