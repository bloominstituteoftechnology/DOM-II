window.onload = function () {

    const navText = document.querySelector('nav');
    navText.onmouseenter = () => {
        navText.style.backgroundColor = 'pink';
        const navTextLinks = navText.querySelectorAll('a');
        navTextLinks.forEach(item => item.style.color = 'white')};
    navText.onmouseleave = () => {
        navText.style.backgroundColor = 'white';
        const navTextLinks = navText.querySelectorAll('a');
        navTextLinks.forEach(item => item.style.color = 'black')};
        ;

    const firstLogo = document.querySelector('.logo-heading');
    firstLogo.addEventListener('click', () => firstLogo.style.transform = 'rotateY(60deg)'); 
    firstLogo.addEventListener('dblClick', () => firstLoro.style.transform = 'initial');
    
    
    
}
