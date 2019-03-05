// Your code goes here
//stops nav from refreshing and stops propagation
//1clickx2
const noRefresh = document.querySelector('.nav');
noRefresh.addEventListener('click', function(event){
 console.log(`I was clicked hehe`);
event.preventDefault();
});

const blog = document.querySelectorAll('.nav a');
blog[2].addEventListener('click', function(e){
    alert('My blog is empty do not go there!!! or else!!!!')
    e.stopPropagation()
});

//2mouseover
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function(e){
 console.log(`bang bang`); 
 e.stopPropagation();
});

//3wheel
const foot = document.querySelector('footer');
foot.addEventListener('wheel', function(e){
 console.log(`I was scrolled over :) ${e}`); 
 e.stopPropagation();
});

//4auxclick
const anchors = document.querySelectorAll(".nav a");
anchors.forEach(function(e){ 
    e.addEventListener('auxclick', function() {  
        e.style.color = 'pink';
console.log('I turn all the links pink AND that rhymed')    
     });
    })

//5drag
const beepBeep = document.querySelector('.headerImg');
beepBeep.addEventListener('drag', function() {
    console.log("can you please stop dragging me?")
})
//6keydown
window.addEventListener('keydown', function() {
    alert("NO BUTTON PUSHING ON THIS PAGE!!!!")
})
//7copy
window.addEventListener('copy', function() {
    alert("NO TOUCHY, NO COPY")
})
//8 mousemove 
const btnsOmg = document.querySelectorAll('.btn');
btnsOmg[0].addEventListener('mousemove', function(){
    btnsOmg[0].textContent = "O"
});
btnsOmg[1].addEventListener('mousemove', function(){
    btnsOmg[1].textContent = "M"
});
btnsOmg[2].addEventListener('mousemove', function(){
    btnsOmg[2].textContent = "G"
});
//9contextmenu
btnsOmg.forEach(function(e){
    e.addEventListener('contextmenu', function(){
        e.style.backgroundColor = 'lightBlue';
})
});
//10 mouseleave
const destination = document.querySelectorAll(".destination");
destination.forEach(function(e){ 
    e.addEventListener('mouseleave', function() {  
        e.style.backgroundColor = 'pink';
        e.style.color = 'gray'; 
     });
    })