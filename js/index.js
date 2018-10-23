// Your code goes here


const navigatinHome = document.getElementById("homeLink").href = "https://www.youtube.com/watch?v=7qnd-hdmgfk";
const navigatinAbout = document.getElementById("aboutLink").href = "https://www.youtube.com/watch?v=7qnd-hdmgfk";
const navigatinBlog = document.getElementById("blogLink").href = "https://www.youtube.com/watch?v=7qnd-hdmgfk";
const navigatinContact = document.getElementById("contactLink").href = "https://www.youtube.com/watch?v=7qnd-hdmgfk";

let demButtons = document.querySelector('.btn');
demButtons.addEventListener('click', function(event) {
        window.open("http://jurassicsystems.com/theking");
})

let headerImg = document.querySelector(document.getElementById("sand bus"));
headerImg.addEventListener('pointerover', function bigImg(x) {
        x.style.height = "10000px";
        x.style.width = "10000px";
})