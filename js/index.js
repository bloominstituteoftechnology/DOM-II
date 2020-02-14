// Your code goes here
document.addEventListener('scroll', () => {
    const bgColors = ['red', 'orange', 'blue', 'violet', 'black'];
    document.getElementById("main-navigation").style.backgroundColor = (this.scrollY === 0) ? 'white' : bgColors[Math.floor(Math.random() * bgColors.length) + 1];
});

document.querySelector("#nav").addEventListener("mouseover", (e) => {   
    e.target.style.color = "red";

    setTimeout(function() {
        e.target.style.color = "";
    }, 1000);
}, false);

document.addEventListener('keydown', (e) => {
    document.querySelector("#keyDownP").textContent += ` ${e.code}`;
    if(e.code === 'Backspace') {
        document.querySelector("#keyDownP").textContent = "";
    }
});

document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('dblclick', () => {
        image.classList.toggle('transform');
    });
});

document.querySelectorAll('h2').forEach((h2) => {
    h2.addEventListener('click', (e) => {
        (e.target.style.fontWeight == 'bold') ? 
            e.target.style.fontWeight = 'normal' : 
            e.target.style.fontWeight = 'bold';
    });
});

document.addEventListener('wheel', (e) => {
    (e.deltaY < 0) ? document.querySelector('.container').style.border = 'unset' : document.querySelector('.container').style.border = '5px solid black';
});
