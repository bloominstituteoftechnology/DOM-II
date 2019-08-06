// Your code goes here
const foot = document.querySelector(".footer p");

foot.addEventListener('mouseover', e => {
    console.log("Moused over!")
});



//const funBusH1 = document.querySelector('h1');

//funBusH1.addEventListener('mouseover', e => {
//    funBusH1.style.color = 'rgb(153, 186, 221)';
//})


//const paragraphs = document.querySelectorAll('p');
//paragraphs.forEach((elementP) => {
//    elementP.addEventListener("click", (e) => {
//        e.target.style.color = "green";
//    });
//});

const funBush2 = document.querySelector(".container .intro h2");

funBush2.addEventListener('mouseover', e => {
    funBush2.style.color = "green";
})

const letsGo = document.querySelector(".container .content-section .text-content h2");

letsGo.addEventListener("mouseover", e => {
    letsGo.style.color = "red";
})

const logo = document.querySelector(".main-navigation .container .logo-heading");

logo.addEventListener("click", e => {
    logo.style.height = "10rem";
    logo.style.color = "cyan";
})




//from a youtube video
window.addEventListener('scroll', e => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scroll1 = window.scrollY;

    if (Math.ceil(scroll1) === scrollable){
        alert("You\'ve reached the bottom!");
    }
    //console.log(scrollable)
})



