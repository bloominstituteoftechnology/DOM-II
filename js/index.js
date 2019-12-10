// Your code goes here
let busImg = document.querySelector('.intro img')
busImg.addEventListener('mouseover', () =>{
busImg.style.transform = 'scale(1.2)';
busImg.style.transition = 'transform 0.3s';
})
busImg.addEventListener('mouseleave', () =>{
    busImg.style.transform = 'scale(1)';
})

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode =='70'){
        alert("The 'f' letter key has been pressed!")
    }
}

window.addEventListener('scroll', () =>{
    const scrolled = window.scrollX;
});
const selectBtn = document.querySelectorAll('.btn').forEach(el =>{
  
    el.addEventListener('dblclick', ()=>{
    el.style.background = 'purple'
  })  
});

const navMenu = document.querySelectorAll('.nav-link').forEach(el =>{

el.addEventListener('focus', ()=>{
    el.style.background ='gray';
  })
  el.addEventListener('blur', ()=>{
      el.style.background = '';
  })
}); 







