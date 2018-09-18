document.querySelector('.logo-heading').addEventListener('mouseover', (event) => { 
    event.currentTarget.innerHTML = 'Fun Bus!!!'
    event.currentTarget.style.color = 'orange';
});

const container = document.querySelector('html')
document.addEventListener('wheel', () => {
    container.style.backgroundColor = '#ffdae0';
});

document.addEventListener('scroll', () => {
    container.style.backgroundColor = '#ffedcc';
});

