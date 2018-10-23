// Your code goes here
const busDestroy = document.querySelector(".intro img");
busDestroy.addEventListener('mouseover', function () {
    busDestroy.style.display = 'none';

    setTimeout(function () {
        busDestroy.style.display = 'block'
    }, 1500);
});

const rotateMap = document.querySelector(".img-content img");
rotateMap.addEventListener('dblclick', function () {
    event.stopPropagation();
    rotateMap.style.transform = 'rotate(100deg)';

    setTimeout(function () {
        rotateMap.style.transform = 'rotate(360deg)';
    }, 1500);
});


const h2Color = document.querySelectorAll("h2");
for (let i = 0; i < h2Color.length; i++) {
    h2Color[i].addEventListener('drag', function () {
        h2Color[i].style.color = 'blue';
    })
}

const enlarge = document.querySelector(".logo-heading");
enlarge.addEventListener('wheel', function () {
    enlarge.style.fontSize = '12rem';
})

const button = document.querySelectorAll(".btn");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        button[i].style.width = '300px';
        button[i].style.backgroundColor = 'red';
    });
}

//5
const link = document.querySelectorAll(".nav-link");
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('contextmenu', function () {
        link[i].style.transform = 'skew(20deg, 20deg)';
    })
}

const pColor = document.querySelectorAll("p");
for (let i = 0; i < pColor.length; i++) {
    pColor[i].addEventListener('cut', function () {
        pColor[i].style.color = 'aqua';
    })
}

//8
const allImg = document.querySelectorAll("img");
for (let i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener('mouseleave', function () {
        allImg[i].style.transform = 'scale(2, .5)';
    })
}

//9
const h4Change = document.querySelectorAll("h4");
for (let i = 0; i < h4Change.length; i++) {
    h4Change[i].addEventListener('mouseenter', function () {
        h4Change[i].style.fontSize = '30rem';
    })
}

//10
const destruction = document.querySelector(".footer p");
const destroyed = document.querySelector("body");
destruction.addEventListener('copy', function () {
    destroyed.style.display = 'none';
});

const navigation = document.querySelector("nav");

navigation.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.style.color = "red";
});
