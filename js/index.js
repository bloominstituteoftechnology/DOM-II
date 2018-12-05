const aButtons = document.querySelectorAll('a');

 aButtons.forEach(function(e){
e.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
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

const docHeaders = document.querySelectorAll('h2');
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


const docClick = document.querySelectorAll('.container');
docClick.forEach(function(f){
    f.addEventListener('click', function(e){
        console.log('click fired');
        e.target.style.color = "green";
    });
});



const doc = document.querySelectorAll('.container');
doc.forEach(function(f){
    window.addEventListener('resize',function(e){
        console.log('night mode')
        //f.style.backgroundColor = "yellow";
        f.classList.toggle('blackout');
    });
});

const itemDrag = document.querySelector('.intro img');
itemDrag.addEventListener('drag', function(e){
    console.log('erased image')
    e.target.style.display= 'none';
});

const itemDrop = document.querySelector('.intro img');
itemDrop.addEventListener('drop', function(e){
    console.log('returned image')
    e.target.style.display = 'visible';
});





// document.addEventListener('fullscreenchange',function(e){
//     console.log(e);
//     console.log('entered full screen');
//     darkMode.classList.toggle('blackout');
// })


// window.addEventListener('scroll',function(e){
//     console.log('scroll');
//     docHeaders.style.color = 'orange';
// });


