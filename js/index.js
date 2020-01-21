window.onload = function () {
    let firstLogoClickCounter = 0;


    const navText = document.querySelector('nav');
    navText.addEventListener('mouseenter', () => {
        navText.style.backgroundColor = 'pink';
        const navTextLinks = navText.querySelectorAll('a');
        navTextLinks.forEach(item => item.style.color = 'white')});
    navText.addEventListener('mouseleave', () => {
        navText.style.backgroundColor = 'white';
        const navTextLinks = navText.querySelectorAll('a');
        navTextLinks.forEach(item => item.style.color = 'black')});
    navText.addEventListener('click', (e) => e.preventDefault());
    navText.addEventListener('dblclick', (e) => e.preventDefault());

    const firstLogo = document.querySelector('.logo-heading');
    firstLogo.addEventListener('click', () => {
        if (firstLogoClickCounter === 0) {
            firstLogo.style.transform = 'rotateY(60deg)';
            firstLogoClickCounter++;
        } 
        else if (firstLogoClickCounter === 1) {
            firstLogo.style.transform = 'rotateY(120deg)';
            firstLogoClickCounter++;
        } else if (firstLogoClickCounter === 2) {
            firstLogo.style.transform = 'rotateY(180deg)';
            firstLogoClickCounter++;
        } else if (firstLogoClickCounter === 3) {
            firstLogo.style.transform = 'rotateY(240deg)';
            firstLogoClickCounter++;
        } else if (firstLogoClickCounter === 4) {
            firstLogo.style.transform = 'rotateY(300deg)';
            firstLogoClickCounter++;
        } else if (firstLogoClickCounter === 5) {
            firstLogo.style.transform = 'rotateY(0deg)';
            firstLogoClickCounter = 0;
        }   
    })
    firstLogo.addEventListener('dblclick', () => firstLogo.style.transform = 'rotateY(0deg)');

    const topPic = document.querySelector('.intro img');
    topPic.addEventListener('mouseenter', () => topPic.style.filter = 'blur(5px) grayscale(75%)');
    topPic.addEventListener('mouseleave', () => topPic.style.filter = 'blur(0px) grayscale(0%)');    

    const contentPicA = document.querySelectorAll('.content-section .img-content img')[0];
    const contentPicB= document.querySelectorAll('.content-section .img-content img')[1];
    contentPicA.addEventListener('dblclick', () => {
        if (contentPicA.src === 'http://127.0.0.1:5501/img/adventure.jpg') {
            contentPicA.src = 'img/fun.jpg';
            contentPicB.src = 'img/adventure.jpg';
        } else {
            contentPicB.src = 'img/fun.jpg';
            contentPicA.src = 'img/adventure.jpg';
        }
    })

    contentPicB.addEventListener('dblclick', () => {
        if (contentPicA.src === 'http://127.0.0.1:5501/img/adventure.jpg') {
            contentPicA.src = 'img/fun.jpg';
            contentPicB.src = 'img/adventure.jpg';
        } else {
            contentPicB.src = 'img/fun.jpg';
            contentPicA.src = 'img/adventure.jpg';
        }
    })


    const destSelect = document.querySelector('.content-pick');
    const destinations = document.querySelectorAll('.destination');
    const destTitles = document.querySelectorAll('.destination h4')
    this.console.log(destTitles);
    let destCount = 0;
    destSelect.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (destCount%2 === 0) {
            destinations.forEach(item => item.style.transform = "scale(0.5)")
            destCount++;
        } else {
            destinations.forEach(item => item.style.transform = "scale(1.0)")
            destCount++
        }
    })

    let destCountA = 0;
    destTitles.forEach(item => item.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (destCountA%2 === 0) {
            e.target.style.color = 'red';
            e.target.style.backgroundColor = 'black';
            destCountA++;
        } else {
            e.target.style.color = 'black';
            e.target.style.backgroundColor = 'white';
            destCountA++
        }
    }))

    contentPicA.addEventListener('mouseenter', () => {gsap.to(contentPicA, {duration: 4, rotation: 720})});
    contentPicA.addEventListener('mouseleave', () => {gsap.to(contentPicA, {duration: 4, rotation: -720})});
    contentPicB.addEventListener('mouseenter', () => {gsap.to(contentPicB, {duration: 4, rotation: -720})});
    contentPicB.addEventListener('mouseleave', () => {gsap.to(contentPicB, {duration: 4, rotation: 720})});



}
  