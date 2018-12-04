// Your code goes here

const navItems = document.querySelectorAll('a');
console.log(navItems);



navItems.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        item.classList.toggle('scale-up-center');
    })
});







