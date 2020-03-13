// Your code goes here



//preventDefault()
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
    })
})