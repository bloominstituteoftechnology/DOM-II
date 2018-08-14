// Your code goes here
const mainNav = document.querySelector('.nav');
const funBus = document.querySelector('.logo-heading')
const theH2s = document.querySelector('.intro h2')
const bluringImg = document.querySelector('.bus-img')
// const backgroundImg = document.querySelector('.home')


mainNav.addEventListener('click', (event)=>{
    event.target.style.color = 'brown';
});

funBus.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'pink';
});

funBus.addEventListener('mouseleave', (event)=>{
    event.target.style.color = 'red';
});

theH2s.addEventListener('dblclick', (event)=>{
    event.target.style.color = 'blue';
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'key: ' + keyName);
  });

  funBus.addEventListener('mousedown', (event)=>{
    event.target.style.color = 'green';
});

funBus.addEventListener('mouseup', (event)=>{
    event.target.style.color = 'yellow';
});

document.addEventListener('wheel', (event) => {
    event.target.style.color = getRandomColor();
  });
 
  document.addEventListener('contextmenu', (event) => {
    event.target.style.background = 'yellow';
  });

  funBus.addEventListener('copy', (event)=>{
      event.target.style = 'transform: scale(2)';
  });


  
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }


