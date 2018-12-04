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

const docHeaders = document.querySelectorAll('h1');
docHeaders.forEach(function(f){
    
    window.addEventListener('scroll',function(e){
        console.log('scroll');
        f.style.color = 'red';
    });
})

const docText = document.querySelectorAll('p');
docText.forEach(function(f){
    
    window.addEventListener('keydown',function(e){
        console.log('button pressed');
        f.style.color = 'blue';
    });
})
// window.addEventListener('scroll',function(e){
//     console.log('scroll');
//     docHeaders.style.color = 'orange';
// });

