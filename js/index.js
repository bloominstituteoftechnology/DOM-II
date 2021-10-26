const links = document.querySelectorAll('a')

links.forEach(a => {
    a.addEventListener('mouseover', () => {
        a.style.color = 'red'
    })
    a.addEventListener('mouseout', () => {
        a.style.color = 'black'
    })
});

document.addEventListener('keydown', (a) => {
    if(a.key === 'a'){
        alert('Intruder Alert!!!')
    };
});

const img = document.querySelectorAll('img');

img.forEach(a => {
    a.addEventListener('click', () => {
        a.style.filter = 'invert(1)'
    })
});

  
let scale = 1;

img.forEach(a => {
    a.addEventListener('wheel', (event) => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        a.style.transform = `scale(${scale})`;
    }) 
})

document.addEventListener('copy', (event) => {
    alert('NO PLAGIARISM!!')
});


window.addEventListener('load', (event) => {
    alert('Fully Loaded Site');
  });

  window.addEventListener('dblclick', (event) => {
    location.reload();
  });


  window.addEventListener('dblclick', (event) => {
    location.reload();
  });


  window.addEventListener('afterprint', (event) => {
    alert('Why do you want to do this? There is nothing important...');
  });

  document.addEventListener('cut', (event) => {
    console.log('Scuse ME? What did I say!')
});