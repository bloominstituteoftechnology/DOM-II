var button = document.querySelector("btn");

button.addEventListener("click",function(){
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundColor = "blue";});

const header = document.querySelector(".main-navigation")
    header.addEventListener('mouseenter', function () {
        header.style.backgroundColor = 'yellow'; 
    })
    header.addEventListener('click', function (event) {
        header.style.fontSize = '2rem';
    })

const footer = document.querySelector("footer")
    footer.addEventListener('mouseenter', function (){
        footer.style.backgroundColor = 'yellow';
    })
const picture = document.querySelector("img-fluid rounded")
    picture.addEventListener('resize', function (){
        picture.style.textSize = '150 px';
    })

document.addEventListener('wheel', zoom);