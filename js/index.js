const aButtons = document.querySelectorAll('a');

// aButtons.forEach(function(e){
// e.preventDefault()
//  });

 aButtons[0].addEventListener('click',function(e){
   
    e.target.style.color = 'green'
console.log('Home was clicked');
 });

 aButtons[1].addEventListener('mousemove', function(e){
     
     console.log('mouse moved');
     e.target.style.color = 'purple';
 });