// Your code goes here


const images = document.querySelectorAll('img');

images.forEach( item => {
    item.addEventListener('mouseover', function () {
        item.style.transform = 'scale(1.1)';
        item.style.transition = "transform 0.4s";
        console.log('moused over!');
    });

    item.addEventListener('mouseleave', function (){
        item.style.transform = 'scale(1.0)';
item.style.zIndex = '.1';
    })

});