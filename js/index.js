// Your code goes here

document.querySelectorAll("a")
.forEach(link => link.addEventListener("mouseover", event => {
    event.target.style.color = "green";
}))

document.querySelectorAll("a")
.forEach(link => link.addEventListener("mouseout", event => {
    event.target.style.color = ""
}))

const title = document.querySelector('.logo-heading');

document.addEventListener('focus', event => {
        if(event.focus === "true")
        title.style.backgroundColor = "yellow";
        title.style.color = "blue";
    })





    


// function logMouseOver(){
//     navLink.style.color = 'green'
// }
// function logMouseOut() {
//     navlink.style.color = ''
// }








