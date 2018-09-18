// Quan's code goes here
const botBtn = document.querySelectorAll(".btn");
for(let i=0; i<botBtn.length; i++){
    botBtn[i].addEventListener('mousedown', (event) => {
        event.target.style.color='#17A2B8';
        event.target.style.backgroundColor= 'white';
      });
      botBtn[i].addEventListener('mouseup', (event) => {
        event.target.style.color='white';
        event.target.style.backgroundColor= '#17A2B8';
      });
}
const logo= document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) =>{
    event.target.style.color='red';
})
logo.addEventListener('mouseout', (event) =>{
    event.target.style.color='black';
})
const busImg= document.querySelector('.intro img');
busImg.addEventListener('click',(event)=>{
    alert('clicked bus');
});
const walkPlace= document.querySelector('header h2');
walkPlace.addEventListener('click',(event)=>{
    event.target.classList.toggle('change');
});
logo.addEventListener('dblclick',(event)=>{
    alert('Doubled clicked');
});
logo.addEventListener('mousemove',(event)=>{
    walkPlace.style.color='pink';
});
const navBar = document.querySelectorAll("a");
for(let i=0; i<navBar.length; i++){
    navBar[i].addEventListener('mousedown', (event) => {
        //event.preventDefault();
        event.target.style.color='#17A2B8';
      });
    navBar[i].addEventListener('mouseup', (event) => {
        event.target.style.color='black';
      });
}
const contentDes= document.querySelector('.content-destination');
const contentP=document.querySelector('.content-destination p')
contentDes.addEventListener('click', (event)=>{
    event.target.style.backgroundColor='pink';
});
const contentImg= document.querySelector('.content-destination img');
contentImg.addEventListener('click', (event)=>{
    event.target.style.border.radius='50%';
    event.stopPropagation();

});