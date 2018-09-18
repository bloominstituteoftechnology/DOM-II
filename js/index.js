// Your code goes here
const logoHeading = document.querySelector('.nav-container h1')
logoHeading.addEventListener('mouseleave', () => {
    logoHeading.classList.toggle('change')
})
const homeImg = document.querySelector('.home img')
homeImg.addEventListener('mousemove', () => {
    homeImg.classList.toggle('opacity')
})
 const navLinks = document.querySelector('.nav-link')
 navLinks.addEventListener('click', (e) => {
     e.preventDefault();
     e.stopPropagation();
     navLinks.style.borderBottom = 'solid 2px blue'
 })

  const myButton = document.querySelector('.btn')
  myButton.addEventListener('mouseenter', () => {
      myButton.style.color = 'orange'
  })
  myButton.addEventListener('mouseleave', () => {
    myButton.style.color = 'blue'
})
const container = document.querySelector('.home')
container.addEventListener('click', (e) => {
    container.style.backgroundColor = '#f4f4f4'
})
const letsGo = document.querySelector('#Go')
letsGo.addEventListener('paste', () => {
    letsGo.innerHTML = 'I was pasted here'
})
const pTags = document.querySelector('p')
pTags.addEventListener('copy', () => {
    pTags.style.lineHeight = '3.0'
})
const busImg = document.querySelector('#bus')
busImg.addEventListener('dblclick', () => {
    busImg.src = 'img/mybus.jpg';
})  
busImg.addEventListener('mouseout', () => {
    busImg.src = 'img/adventure.jpg';
}) 
const myForm = document.querySelector('input[type="text"]');
myForm.addEventListener('focus', () => {
    myForm.style.padding = '10px'
})
// const submit = document.querySelector('#submit');
// submit.addEventListener('click', (e) => {
//     e.preventDefault();
// })
const submits = document.querySelector('input[type="submit"]');
submits.addEventListener('mouseover', (e) => {
    e.preventDefault();
    submits.style.backgroundColor = 'teal'
    submits.style.borderRadius = '10px'
    submits.style.padding = '15px'
    submits.style.color = 'white'

})
submits.addEventListener('mouseout', (e) => {
    e.preventDefault();
    submits.style.backgroundColor = 'lightblue'
    submits.style.borderRadius = '10px'
    submits.style.padding = '15px'
    submits.style.color = 'white'
    submits.style.marginLeft = '15px'

})
myForm.addEventListener('input', runEvent)
function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
  
    console.log(e.target.value);
     document.getElementByClassName('box').innerHTML = '<h3>'+e.target.value+'</h3>';
  
     box.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
  
     document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 4)";
  }
