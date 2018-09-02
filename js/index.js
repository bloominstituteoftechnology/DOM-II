const header = document.querySelector('.main-navigation');
 header.addEventListener('mouseover', function(){
         header.style.backgroundColor = 'lightgrey'
})

const footeralert = document.querySelector('.footer');
footeralert.addEventListener('click', function (event) {
        alert('Copyright Lambda');
        console.log("is this working")
});

const navContent = document.querySelectorAll('.nav-link');
navContent.forEach(navItem => {
    navItem.addEventListener('click', function () {
        navItem.style.color = 'red';
    })
})

const highlight1 = document.querySelector('.intro');
highlight1.addEventListener('mouseover', function () {
        highlight1.style.backgroundColor = 'lightgreen';
})

const highlight2 = document.querySelector('.content-section');
highlight2.addEventListener('mouseover', function () {
        highlight2.style.backgroundColor = 'lightgreen';
})

const highlight3 = document.querySelector('.inverse-content');
highlight3.addEventListener('mouseover', function () {
        highlight3.style.backgroundColor = 'lightgreen';
})

const highlight4 = document.querySelector('.content-destination');
highlight4.addEventListener('mouseover', function () {
        highlight4.style.backgroundColor = 'lightgreen';
})

const buttons = document.getElementsByClassName('.destination .btn');
buttons.addEventListener('click', function () {
        contactbox.style.visibility = 'visible'
})

// const images = document.querySelectorAll('img');
// images.addEventListener('mouseover', function () {
//   images.style.border = '5px solid yellow';
// })
// console.log(images)


       




