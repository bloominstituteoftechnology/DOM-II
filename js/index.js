// Your code goes here
//chrome calls the even listener. JS is nothing without the environment that it is in
// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!')
// }

// const header = document.
// document.querySelector('header').addEventListener('click', () => {

// })

// document.body.addEventListener('click', (stuff) => {
//     console.log('the body was clicked');
// } )

document.querySelector("header").addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "blue";
});

document.querySelector("nav").addEventListener("click", event => {
  event.target.style.color = "red";
});

document.querySelector('header').addEventListener("mouseleave", event => {
  event.target.style.backgroundColor = "white";
});

// document.body.querySelector('p').addEventListener("mouseover", (event) => {
//  event.target.style.backgroundColor = 'red';
// });

document.body.addEventListener('wheel', event => {
    event.target.style.backgroundColor = 'yellow';
})

bus.addEventListener('dblclick', event =>{
    event.target.style.display = "none";
})


bus.addEventListener('mouseenter', event => {
    event.target.style.width = "500px";
})

bus.addEventListener('mouseout', event => {
    event.target.style.width = "100%";
})


document.querySelectorAll('p').forEach(function (item){
    item.addEventListener('copy', item =>{
        alert("NO COPY FOR YOU"); 
    })
 })

window.addEventListener('resize', event => {
    bus.style.display = 'none';
})


document.body.addEventListener('contextmenu', event => {
    alert('OBVIOUSLY, YOU HAVE MADE A RIGHT CLICKER');
})