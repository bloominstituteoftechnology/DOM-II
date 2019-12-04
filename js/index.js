// Your code goes here


// Mouseover -- Changes Sign Me Up button color on mouseover
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('mouseover', e =>{
        e.target.style.background = 'black';
        e.target.style.color = 'white';
        e.preventDefault();
    })
})



