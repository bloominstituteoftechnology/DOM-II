import './less/index.less'

//change color of title when mouse goes over it
const colorChangeTitle = document.querySelector('.main-navigation');
colorChangeTitle.addEventListener('mouseenter', function(event){
    event.target.style.color = 'purple';
});
// colorChangeNav.addEventListener('mouseout', function(){
//     colorChangeNav.style.backgroundColor = 'pink';
// });

//change color of background when page clicked
const colorChangeNav = document.querySelector('p');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}
colorChangeNav.onclick = function() {
    const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = randomColor;
}