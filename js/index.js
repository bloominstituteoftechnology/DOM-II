// Your code goes here
const busDestroy = document.querySelector(".intro img");
//1
busDestroy.addEventListener('mouseover', function(){
    busDestroy.style.display ='none';

    setTimeout(function () {
        busDestroy.style.display = 'block'
    }, 1500);
});

const rotateMap = document.querySelector(".img-content img");
rotateMap.addEventListener('dblclick', function(){
    rotateMap.style.transform ='rotate(100deg)';

    setTimeout(function() {
        rotateMap.style.transform = 'rotate(360deg)';
    }, 1500);
});


const h2Color = document.querySelectorAll("h2");
for (let i=0; i<h2Color.length; i++){
    h2Color[i].addEventListener('drag', function(){
        h2Color[i].style.color = 'blue';
    })
}

const enlarge = document.querySelector(".logo-heading");
enlarge.addEventListener('wheel', function(){
    enlarge.style.fontSize ='12rem';
})
