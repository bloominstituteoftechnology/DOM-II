import './less/index.less'

//change color of title when mouse goes over it
const colorChangeTitle = document.querySelector('.main-navigation');
colorChangeTitle.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'pink';
});
colorChangeTitle.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'white';
});

//change color of background when page clicked
const colorChangePara = document.querySelector('p');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}
colorChangePara.onclick = function() {
    const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = randomColor;
};

//change the size of an image when clicked
// const imageEnlarged = document.querySelector('.img-content');

// imageEnlarged.onclick = function() {
//     imageEnlarged.style.width = '200%';
//     imageEnlarged.style.height  = 'auto';
// };

//