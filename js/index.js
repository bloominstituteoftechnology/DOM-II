// Your code goes here

//1
const headingWarp = document.querySelector('.logo-heading');

headingWarp.addEventListener('mouseover', () =>{
    headingWarp.textContent = 'Bun Fus';
    
});

headingWarp.addEventListener('mouseout', () => {
    headingWarp.textContent = 'Fun Bus'
})

//2
const scaryPic = document.querySelectorAll('.img-content img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.src = 'https://i.ytimg.com/vi/a5xYjc_s0kI/maxresdefault.jpg';
    })
    img.addEventListener('mouseleave', () => {
        img.src = 'https://smalbanynewyork.files.wordpress.com/2018/09/gotcha.png?w=645';
    })
})

3//