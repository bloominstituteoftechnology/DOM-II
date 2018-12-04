// Your code goes here
const destBtn = document.querySelectorAll('.destination .btn');

for (let i = 0; i < destBtn.length; i++) {
    destBtn[i].addEventListener('mousedown', (event) => {
        event.target.style.animation = 'innout 1s ease-in-out 0s 1 alternate';
    });
}


const navLinks = document.querySelectorAll('a');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
    });
}

const imgapp = document.querySelectorAll('img');

for (let i = 0; i < imgapp.length; i++) {
    imgapp[i].addEventListener('mouseup', (event) => {
        event.target.style.animation = 'imgapp 1s linear 0s 1 forwards';
    });
}

// const h2fun = document.querySelectorAll('p');

// for (let i = 0; i < h2fun.length; i++){

//     h2fun[i].addEventListener('mouseover', (event) => {
//         event.target.fontSize = '3em';
//     });

//     h2fun[i].addEventListener('mouseleave', (event) => {
//         event.target.fontSize = '1.2em';
//     });
// }


const funText = document.querySelector('.logo-heading');

funText.addEventListener('dblclick', (event) => {
    event.target.style.fontFamily = 'Courier';
});


let scrollcount = 0;

document.addEventListener("scroll", function () {

    console.log("Now we are scrolling!");
    scrollcount = scrollcount + 1;

});

const headimg = document.querySelector('.intro img');


headimg.addEventListener("dblclick", (event) => {

    event.target.src = 'img/leaves.jpg';

})

const mainp = document.querySelector('footer');

mainp.addEventListener("click", (event) => {
    event.target.innerHTML = "Blah blah blah blah blah"
})

const destdiv = document.querySelectorAll('.destination');

for (let i = 0; i < destdiv.length; i++) {
    destdiv[i].addEventListener('mouseover', (event) => {
        event.target.style.animation = 'destcolor .3s linear 0s 1 forwards';
    });
}

const h2go = document.getElementById("h2go");

h2go.addEventListener("click", (event) =>{
    event.target.style.fontSize = "13em";
    h2go.addEventListener("dblclick", (event) =>{
        event.target.style.fontSize = "3em";
        document.addEventListener("scroll", function () {
            mainp.addEventListener("click", (event) => {
                event.target.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            })
        
        });
        
    })
})