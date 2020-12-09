// Your code goes here
let h2 = document.querySelector('h2')

h2.addEventListener("mouseover", (e) => { 
    e.target.style.color = 'blue'
console.log('h2')
});


let navMenu = document.querySelectorAll('.nav-link');
navMenu.forEach (e => {
    e.addEventListener('mouseover', (e) => {
        e.target.style.color = 'green'
        console.log('.nav-links')
    })
  });

  let imgContent = document.querySelectorAll('.img-content');
  imgContent.forEach(e => {
      e.addEventListener('dblclick', function (e)  {
          e.classList.toggle('large')

      })
      console.log('.img-content')
  });

  let p = document.querySelectorAll('p');
  p.forEach(e => {
      e.addEventListener('mouseout', (e) => {
          e.target.style.color = 'gold'
      })
      console.log ('p')
  });

  let h4 = document.querySelectorAll('h4')
  h4.forEach(e =>{
  e.addEventListener('mouseleave', (e) => {
      e.target.style.border = '8px dashed pink'
  })
      console.log('h4')
  });

  let footer = document.querySelector('.footer')

  footer.addEventListener('mouseup' ,(e) => {
      e.target.style.border = '10 px dotted red'
      console.log('.footer')
  });
  
