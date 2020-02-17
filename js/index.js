window.onload= function (){

    const logo = document.querySelector('h1');
    logo.addEventListener("click", (event) => {
    logo.style.transform = "rotateX(360deg)";
    logo.style.transitionDuration = "3s";
    event.stopPropagation();
    })

    const smallDiv = document.querySelector('.text-content');
    smallDiv.addEventListener("click", (event) => {
        smallDiv.style.backgroundColor = "lightblue";
        event.stopPropagation();
    })


    const bigDiv = document.querySelector('.content-section');
    bigDiv.addEventListener("click", (event) => {
        bigDiv.style.backgroundColor = "blue";
    })


    const secondBig = document.querySelector('.content-pick');
    secondBig.addEventListener("click", (event) => {
        secondBig.style.backgroundColor = "violet";
    })

    const secondSmall = document.querySelector('.destination');
    secondSmall.addEventListener("click", (event) => {
        secondSmall.style.backgroundColor = "teal";
        event.stopPropagation();
    })


    const newImg = document.querySelectorAll('img').forEach( item =>{
        item.addEventListener("mouseenter", () => {
          item.style.transform = "scale(1.2)";
          item.style.transition = "transform(3s)";
      })
        item.addEventListener("mouseleave", () => {
          item.style.transform = "scale(1)";
          item.style.transition = "transform(.3s)";
        })
    })


    const navStyle = document.querySelectorAll('.nav-link').forEach( item =>{
        item.addEventListener("dblclick", () => {
            item.style.color = "red";
        })
    })


    const textColor = document.querySelector("p");
    window.addEventListener('resize', () => {
    textColor.style.color = "yellow";
    })


    document.addEventListener('scroll', function() {
        document.querySelectorAll('h2').forEach ( item => {
            item.style.color = "teal";
        })
    });


    document.addEventListener('scroll', function () {
        document.querySelectorAll('p').forEach (item => {
        item.style.color = "Grey";
        })
    })


    document.addEventListener('keydown', function () {
        document.querySelectorAll('.btn').forEach (item => {
            item.style.transform = "scale(1.5)";
            item.style.transition = "transform(.5s)";
            item.style.color = "green";
            item.style.backgroundColor = "red";
        })
        document.addEventListener('keyup', function () {
            document.querySelectorAll('.btn').forEach (item => {
                item.style.transform = "scale(1)";
                item.style.transition = "transform(.5s)";
                item.style.color = "white";
                item.style.backgroundColor = "#17A2B8";
            })
        })
    })


    const textChange = document.querySelector('h4')
        textChange.addEventListener("mouseover", (event) => {
            textChange.style.transform = "rotateY(350deg)";
            textChange.style.transitionDuration = "3s";
            textChange.style.color = "lightpink";
        })


    const footerStyle = document.querySelector('.footer')
    footerStyle.addEventListener('mouseup', (event) => {
        footerStyle.style.backgroundColor = "red";
    })

    
    document.getElementsByClassName('.nav-link')
    addEventListener('click', (event) => {
        event.preventDefault();
    })
   
}