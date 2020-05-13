 //Load Events   
    //Body
    const body = document.querySelector('h2')
    console.log("check", body)
    body.addEventListener("load", () =>{
        body.style.color = 'green'
    })
        //Logo
    // const logo = document.querySelector(".logo-heading")
    // console.log("check", logo)
    // logo.addEventListener("load", () =>{
    //     logo.style.
    // })
        //Headers
    const headers = document.querySelectorAll('h2')
    console.log("check", headers)
    headers.forEach((element, index) =>{
        headers[index].addEventListener('load', (element) =>{
            headers[index].style.webkitTransform = 'scale(2)';
        })
    })
    
    
    //Mouse Enter Events
        //Images
    const mainImg = document.querySelectorAll('img')
    console.log('check', mainImg)
    mainImg.forEach((element, index) =>{
        //Mouse Enter
        mainImg[index].addEventListener('mouseenter', (element) => {
            mainImg[index].style.transform = "scale(1.2)"
            mainImg[index].style.transition = "all 0.3s"
        })
    })
        //Mouse leave
        mainImg.forEach((element, index) =>{
             mainImg[index].addEventListener('mouseleave', (element) =>{
            mainImg[index].style.transform = "scale(1)";   
        })
    })
    
    
    //CLick Events
        //Nav
    const nav = document.querySelectorAll('a')
    console.log('check', nav)
    nav.forEach((element, index) =>{
        //Click
        nav[index].addEventListener('click', (element) =>{
            nav[index].style.color = 'purple'
        })
    })
    nav.forEach((element, index) => {
        //Prevent Default
        nav[index].addEventListener('click', (element) => {
          event.preventDefault() 
        })
    })
        //Buttons
    const button = document.querySelectorAll('.btn')
    console.log("check", button)
    button.forEach((element, index) => {
        button[index].addEventListener('click', (element) =>{
        button[index].style.backgroundColor = 'purple'
        button[index].style.color = 'white'
        })
    })
    //DblClick Events
        //Text
    const text = document.querySelectorAll('p')
    console.log('check', text)
    text.forEach((element, index) => {
        text[index].addEventListener('dblclick', (element) =>{
        text[index].style.color = 'white'
        })
    })
