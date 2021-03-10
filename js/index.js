// // Your code goes here
// console.log("Hey Baby!")
// // let atag = document.querySelector("#homeLink");
// function clickEventHandler(event){
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// }

// homeLink.addEventListener(
//     'click',// string with the name of the event
//     () => {
//         //things we want happening when this link gets clicked
//         console.log("Quit it!!!");
//     }
// )

// document.querySelector('nav').addEventListener('click', () => {
//     console.log('You clicked my nav!!!')
// })

// document.querySelector('header').addEventListener('click', () => {
//     console.log('Woah there sunny, thats my header');
// })

// const h1 = document.querySelector('h1').addEventListener('mouseover', () => {
//   h1.textContent = 'hey'; 
// })

// document.body.innerHTML = "<div>YOU MESSED UP KID!</div>";
//calling my elements 
const navbar = document.querySelectorAll('.nav-link');
const ptags = document.querySelectorAll('p');
const htwo = document.querySelectorAll('h2');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const fourofh = document.querySelectorAll('h4');
const imgs = document.querySelectorAll('img');
const bg = document.querySelector('body');
const button = document.querySelectorAll('.btn');
const headone = document.querySelector('h1')

//mouseover
navbar[0].addEventListener('mouseover', () => {
    navbar[0].style.color = 'blue';
    navbar[0].style.fontSize = '10px';
})
navbar[1].addEventListener('mouseover', () => {
    navbar[1].style.color = 'coral';
    navbar[1].style.fontSize = '50px';
})
navbar[2].addEventListener('mouseover', () => {
    navbar[2].style.transform = 'rotate(180deg)';
    navbar[2].style.fontFamily = 'impact';
    navbar[2].style.fontSize = '35px'
    navbar[2].style.color = 'violet'
})
navbar[3].addEventListener('click', () => {
    navbar[3].style.color = 'red';
    navbar[3].style.fontSize = '5px';
    navbar[3].preventDefault();
})


//doubleclick
headone.addEventListener('dblclick', () => {
    headone.style.fontSize = '90px';
    headone.style.color = 'green'
})
// mouse down
for(let i = 0; i < ptags.length;i++){
 ptags[i].addEventListener('mousedown', () => {
    ptags[i].textContent = 'THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....THIS IS CURSED.... RUN.....';
    ptags[i].style.color = 'red'; 
 });
}

 //mouse up
 for(let i = 0; i < ptags.length;i++){
ptags[i].addEventListener('mouseup', () => {
    ptags[i].style.backgroundColor = 'black';
    ptags[i].style.fontFamily = 'impact';
});
 }

 bg.addEventListener('mousedown', () => {
     bg.style.backgroundColor = 'gray';
 })

footer.addEventListener('keydown', () => {
    footer.style.backgroundColor = 'red';
})
//click
header.addEventListener('click', () => {
    header.style.backgroundColor = 'black';
})
htwo[0].addEventListener('click', () => {
    htwo[0].style.fontSize = '30px';
    htwo[0].style.transform = 'rotate(180deg)';
    htwo[0].style.color = 'red';
})
htwo[1].addEventListener('click', () => {
    htwo[1].style.fontSize = '30px';
    htwo[1].style.transform = 'rotate(180deg)';
    htwo[1].style.color = 'red';
})
htwo[2].addEventListener('click', () => {
    htwo[2].style.fontSize = '30px';
    htwo[2].style.transform = 'rotate(180deg)';
    htwo[2].style.color = 'red';
})
htwo[3].addEventListener('click', () => {
    htwo[3].style.fontSize = '30px';
    htwo[3].style.transform = 'rotate(180deg)';
    htwo[3].style.color = 'red';
})
//mouseenter
imgs[0].addEventListener('mouseenter', () => {
    imgs[0].setAttribute("src","https://i.ytimg.com/vi/RNoHcWE8tbQ/maxresdefault.jpg")
})
imgs[1].addEventListener('mouseenter', () => {
    imgs[1].setAttribute("src","https://www.inquirer.com/resizer/I5QsRk86aSSVvBAyI_HB7AfADwA=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/5GONIXY3MZGAVPICL6URHI3NDI.jpg")
})
imgs[2].addEventListener('mouseenter', () => {
    imgs[2].setAttribute("src","https://swsca-production.s3.amazonaws.com/ckeditor_assets/2019/08/12/l1030678.JPG")
})
imgs[3].addEventListener('mouseenter', () => {
    imgs[3].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6cPYUMGG6HipDmqGgdw2Vem29medmq-jiw&usqp=CAU")
})
// mouseleave
fourofh[0].addEventListener('mouseleave', () => {
    fourofh[0].textContent = 'YOU WILL NEVER';
    
})
fourofh[1].addEventListener('mouseleave', () => {
    fourofh[1].textContent = 'LEAVE THIS PAGE';
})
fourofh[2].addEventListener('mouseleave', () => {
    fourofh[2].textContent = 'ALIVE!!!!';
})
//dblclick again
button[0].addEventListener('dblclick', () => {
    button[0].style.backgroundColor = 'black';
    button[0].textContent = 'AVERT';
    button[0].style.color = 'white';
})
button[1].addEventListener('dblclick', () => {
    button[1].style.backgroundColor = 'black';
    button[1].stopPropagation();// propagation **
    button[1].textContent = 'YOUR';
    button[1].style.color = 'white';
    
})
button[2].addEventListener('dblclick', () => {
    button[2].style.backgroundColor = 'black';
    button[2].textContent = 'EYES!!';
    button[2].style.color = 'white';
})