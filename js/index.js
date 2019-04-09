// Your code goes here
const destinationBtn = document.querySelectorAll('.destination .btn');

for(let i =0;i<destinationBtn.length;i++){
    destinationBtn[i].addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'red';
    });

    destinationBtn[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'purple';
    });

    destinationBtn[i].addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'pink';
    });
}

window.addEventListener('resize', evt => {
    alert("Why are you resizing me!");
});
 const logo = document.querySelector('.logo-heading');
 logo.addEventListener('mouseover', (event) => {
        event.target.style.color = 'red';
 });

 const header2 = document.querySelector('.intro h2');
 header2.addEventListener('mouseover', (event) => {
        event.target.style.color = 'orange';
        event.stopPropagation();
 });

 const header3 = document.querySelector('.text-content h2');
 header3.addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
        event.stopPropagation();
 });

  header3.addEventListener('mouseout', (event) => {
        event.target.style.color = 'blue';
        event.stopPropagation();
 });

 const aTag = document.querySelector('a');
aTag.addEventListener('click', function(event){
 alert("Click on something else man...");
  event.preventDefault();
});

const paragraph = document.querySelector('.text-content');
 paragraph.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '3rem';
        event.stopPropagation();
 });

//  const intro = document.querySelector('.intro');
// intro.addEventListener('keydown', function(event){
//  console.log(`A key was pressed down! This is the event: ${event.key}`); 
// });

console.log(destinationBtn);