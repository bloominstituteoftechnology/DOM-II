// Your code goes here
//stops nav from refreshing and stops propagation
//1 
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

//2
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function(e){
 console.log(`bang bang`); 
 e.stopPropagation();
});

//3
const foot = document.querySelector('footer');
foot.addEventListener('wheel', function(e){
 console.log(`I was scrolled over :) ${e}`); 
 e.stopPropagation();
});

//4
const anchors = document.querySelectorAll(".nav a");
anchors.forEach(function(e){ 
    e.addEventListener('auxclick', function() {  
        e.style.color = 'pink';
console.log('I turn all the links pink AND that rhymed')    
     });
    })

//5
const beepBeep = document.querySelector('.headerImg');
beepBeep.addEventListener('drag', function() {
    console.log("can you please stop dragging me?")
})
//6
//7
//8
//9
//10