// Your code goes here
const noRefresh = document.querySelector('.nav');
noRefresh.addEventListener('click', function(event){
 console.log(`I was clicked hehe`);
event.preventDefault();
});