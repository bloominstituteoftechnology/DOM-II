const aButtons = document.querySelectorAll('a');

 aButtons.forEach(function(e){
e.addEventListener('click', function(e){
    e.preventDefault();
})
 });

 aButtons[0].addEventListener('click',function(e){
   
    e.target.style.color = 'green'
console.log('Home was clicked');
 });

 aButtons[1].addEventListener('mousemove', function(e){
     
     console.log('mouse moved');
     e.target.style.color = 'purple';
 });

 aButtons[2].addEventListener('dblclick', function(e){
     console.log('double clicked')
     e.target.style.color = 'yellow';
 })

 aButtons[3].addEventListener('contextmenu', function(e){
    console.log('right-click text')
    e.target.style.color = 'blue';
})

const docHeaders = document.querySelector('h2');

window.addEventListener('scroll',function(e){
    console.log('scroll');
    docHeaders.style.color = 'orange';
});

