// Your code goes here
let navLink = document.querySelectorAll(".nav-link");
// console.log(navLink)
navLink.forEach(each => {
    each.addEventListener('mouseover', (event) => {
        each.style.color = "red";
        // console.log('triggering mouse over:');
    })
});

const intro = document.querySelector('.intro')
// console.dir(intro)
intro.addEventListener('click', (event) => {
    intro.style.color = "green";
    console.log(event.target)
});

const textContent = document.querySelectorAll(".text-content")
console.log('.textContent:', textContent);
textContent.addEventListener('mouseenter', (event) => {
    textContent.style.transform = 'scale(12)';
    console.log('triggering mouse enter:');
});
