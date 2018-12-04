const aButtons = document.querySelectorAll('a');

// aButtons.forEach(function(e){
// e.preventDefault()
//  });

 aButtons[0].addEventListener('click',function(e){
   
    e.target.style.color = 'green'
console.log('Home was clicked');
 });