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
    alert('Why clicked bus?');
})

