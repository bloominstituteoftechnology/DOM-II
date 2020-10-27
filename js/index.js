// Your code goes here
window.addEventListener("load", function(event) {
    alert("howdy howdy howdy");
    });

const button1 = document.querySelector('#btn1');
button1.addEventListener('click', function(event){
  event.target.style.color = 'blue';
});

const button2 = document.querySelector('#btn2');
const doc = document;
const header = doc.querySelector('.main-navigation');



header.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold';
});

button2.addEventListener('mouseover', function(event){
  event.target.style.background = 'black';
});

const button3 = document.querySelector('#btn3');
button3.addEventListener('dblclick', function(event){
  event.target.style.borderColor = 'red';
});
const img1 = document.querySelector('#img1');
img1.addEventListener('mouseenter', function(event){
  event.target.style.border = '8px dashed blue';
});


img3.addEventListener('mouseout', function(event){
  event.target.style.border = 'none';
});

doc.addEventListener('keydown', (event) => {
    const keydown = event.key;
    alert('Do not touch that key! ' + keydown + ' yes, that key');
});

const password = document.querySelector('input[type="password"]');
password.addEventListener('blur', (event) => {
    password.style.background = 'skyblue';    
  })

const input = document.querySelector('input[type="text"]');
input.addEventListener('blur', (event) => {
    input.style.background = 'lightblue';    
  })

  document.addEventListener('keydown', function (event){
    if(event.target === 'ArrowUp')
    scrollToTop();
  });


  const buttons = document.getElementsByClassName('btn');
buttons[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    event.stopPropagation();
})

const funBus = document.querySelector('.intro')
funBus.addEventListener('wheel', function zoom(event) {
    event.preventDefault;
    console.log('Number of times you scrolled');
})



const destination = document.querySelector('.destination')
const destinationH4 = destination.querySelector('h4')

destinationH4.addEventListener('click', function(event){
  event.stopPropagation()
  event.target.style.color = 'green'
})
destination.addEventListener('click', function(event){
  event.target.style.color = 'purple'
}) 
const sectionText = document.querySelectorAll('section p')

sectionText.forEach(function(item){
  item.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'grey'
  })
})

sectionText.forEach(function(item){
  item.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = ''
  })
})