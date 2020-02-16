//Your code goes here
window.addEventListener('resize', () => {
    alert('STOPPPPPP!!!');
});

window.addEventListener('load', () => {
    setTimeout(function() {
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('.home').style.display = 'inherit';
    }, 1000);

    // GSAP Animations
    gsap.from('#nav a', {
        opacity: 0,
        duration: 1,
        rotationX: 360,
        x: -100, 
        delay: 1,
        stagger: 0.1
    });
})

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

document.querySelector('.content-pick').addEventListener('click', (e) => {
    e.target.style.background = 'green';
});

document.querySelectorAll('.destination').forEach((div) => {
    div.addEventListener('click', (e) => {
        (e.target.style.fontWeight == 'bold') ? 
            e.target.style.fontWeight = 'normal' : 
            e.target.style.fontWeight = 'bold';
            e.stopPropagation();
    });
});

document.addEventListener('wheel', (e) => {
    (e.deltaY < 0) ? document.querySelector('.container').style.border = 'unset' : document.querySelector('.container').style.border = '5px solid black';
});

document.querySelectorAll('.btn').forEach((btn) => {
    btn.setAttribute('draggable', true);
    btn.addEventListener('drag', (e) => {
        e.target.style.backgroundColor = 'gray';  
    });
});

document.querySelectorAll('p').forEach((p) => {
    p.addEventListener('copy', (e) => {
        alert('Rights Reserved');
    });
});

// prevent nav from refreshing the page
document.querySelectorAll('nav a').forEach((nav) => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
    });
})