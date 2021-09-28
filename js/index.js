// --------------------------- EVENT LISTENERS ------------------------ //

const mouseOver = document.querySelector('.logo-heading');
mouseOver.addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
});

window.addEventListener('load', (event) => {
    console.log('The page has successfully loaded');
  });



