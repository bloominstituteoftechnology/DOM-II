console.log('JS is working');



// when double click on <p> tags, font size becomes bigger. if double click again font size becomes how it was. also added neat transition animation.
const allP = document.querySelectorAll('p');
const fireMouse = document.querySelector('.main-navigation');
const mouseUp = document.querySelectorAll('.destination');
const keyP = document.querySelector('body');
const el = document.querySelector('header img');
const removeObj = document.querySelectorAll('.nav-link');
console.log(removeObj)



allP.forEach(item =>{item.addEventListener('dblclick', event =>{
    if (event.target.style.fontSize == '2rem'){
        event.target.style.fontSize = '1.6rem';
        event.target.style.transition = '0.3s';
    }
    else{
        event.target.style.fontSize = '2rem';
        event.target.style.transition = '0.3s';
    }
}
)}
)

fireMouse.addEventListener('mouseup', event =>{
    if(event.target.style.color == 'rgb(33, 37, 41)'){
        event.target.style.color = "green";
        setTimeout( () =>{
            event.target.style.color ='';
        }, 5000)
    }
    else{
        event.target.style.color = "rgb(33, 37, 41)";
        setTimeout( () =>{
            event.target.style.color ='';
        }, 5000)
    }
}
)


mouseUp.forEach(item=>{item.addEventListener('mouseenter', event =>{
    event.target.style.color = 'aquamarine';
    setTimeout( () =>{
        event.target.style.color ='';
    }, 3000)
})})
mouseUp.forEach(item=>{item.addEventListener('mouseover', event =>{
    event.target.style.color = "red";
    setTimeout( () => {
        event.target.style.color ='';
    }, 3000)
})})

keyP.addEventListener('keydown', event =>{
        alert(`You pressed ${event.key}`)
    }
)

// zoom.addEventListener('wheel', event => {
//     // const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     // keyP.style.background ="#" + randomColor;
//     event.preventDefault();
//     let scale =1;

//     scale += event.deltaY * -0.01;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
// }
//     )

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 1.5);
    el.style.transform = `scale(${scale})`;
    // console.log(scale);
  }
  
  let scale = 1;
  el.onwheel = zoom;

  document.addEventListener('click', event =>{
      el.style.transform = `scale(${1})`;
  })

  document.addEventListener('load', event =>{
      console.log('your page successfully loaded')
  })

  document.addEventListener('copy', event =>{
      let text = window.getSelection().toString();
      alert(`You copied "${text}"`)
  })

  removeObj[0].addEventListener('click', event => {
      event.target.href = "https://google.com"
  })

  
