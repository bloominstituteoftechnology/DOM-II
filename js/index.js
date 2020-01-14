// Your code goes here

document.querySelectorAll(".logo-heading").forEach( el => {
    el.addEventListener("mouseover", () => {
      el.style.color = "hotpink";
    })
  })

  const changeImg = document.querySelector('img');
  changeImg.addEventListener("dblclick", () => {
      changeImg.src = "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
  })

document.querySelectorAll(".nav-link").forEach( link => {
    link.addEventListener('mouseleave', () => {
        link.style.color = "red"
        event.preventDefault();
    })
})

const letsGo = document.querySelector('.text-content')
letsGo.addEventListener('mousedown', () => {
    letsGo.style.backgroundColor = 'blue'
})

const pic = document.querySelector('.content-destination img')
pic.addEventListener('mousemove', () => {
    pic.style.display = 'none'
})

const pic2 = document.querySelector('.img-content')
pic2.addEventListener('wheel', () => {
    pic2.style.transform ="scale(1.2)";
})

const headers = document.querySelector("h4")
   headers.addEventListener('mouseout', (event) => {
        headers.style.backgroundColor = "brown"
        event.stopPropagation()
    })

document.querySelectorAll("h2").forEach( header => {
    header.addEventListener('mouseenter', () => {
        header.style.backgroundColor = "red"
    })
})


document.querySelectorAll(".destination p" ).forEach( para => {
    para.addEventListener('mouseup', (event) => {
        para.style.backgroundColor = "brown"
        
    })
})

let button = document.querySelector('.btn')
    button.addEventListener('click', (event) => {
        alert('You clicked a button')
    })