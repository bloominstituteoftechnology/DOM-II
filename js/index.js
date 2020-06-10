// Your code goes here
// 1
const navCol=document.querySelector('nav');
    navCol.addEventListener('mouseover',(e)=>{
        e.target.style.color='red';
    console.log('1 works');
    });
// 2
    navCol.addEventListener('mouseout',(e)=>{
        e.target.style.color='black';
        console.log('2 works');
    });
// 3
const head=document.querySelector('.logo-heading');
    head.addEventListener('dblclick',(e)=>{e.target.style.color='navy';
    console.log('3 works');
    });

// 4
const key=document.querySelector('body');
    key.addEventListener('keydown', (e)=>{
        e.target.style.backgroundColor='skyblue';
        e.target.style.color='white';
        console.log('4 works');
    });
// 5
    key.addEventListener('keyup', (e)=>{
        e.target.style.backgroundColor='white';
        e.target.style.color='black';
        console.log('5 works');
    });
// 6
const opac= document.querySelector('img');
    opac.addEventListener('mouseover',(e)=>{
        e.target.style.opacity='0.5';
        console.log('6 works');
    });
// 7
    opac.addEventListener('mouseout',(e)=>{
        e.target.style.opacity='1.0';
        console.log('7 works');
    })
// 8
const first=document.querySelector('.content-destination')
    first.addEventListener('wheel', (e)=>{
        event.currentTarget.style.border = "5px solid green";
        event.currentTarget.style.padding = "10%";
        console.log('8 works');
    }); 
// 9
const newBack=document.querySelector('body');
    newBack.addEventListener('click',(e)=>{
        e.target.style.backgroundColor='blue';
        console.log('9 works');
    });
// 10
window.addEventListener('load',(e)=>{
    alert('Plz dont refresh me! If you do I wont be me anymore');
    console.log('10 works');
});
