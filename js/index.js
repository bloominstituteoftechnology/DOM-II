// Your code goes here

// * [ ] `mouseover`
const navigation = document.querySelectorAll("nav a");
navigation.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.color = 'green';
    })
})

// * [ ] `mouseout`
navigation.forEach(el => {
    el.addEventListener('mouseout', (event) => {
        el.style.color = 'black';
        event.preventDefault();
    })
})

// * [ ] `keydown`
document.addEventListener('keydown', () => {
    document.querySelector('.main-navigation').style.background ='#FFE4B5';
    document.querySelector('body').style.background = '#FFFFE0';
})

// * [ ] `keyup`
const headerColor = document.querySelector('.main-navigation');
// document.addEventListener('keyup', (event) => {
//     headerColor.style.background ='#ffffff';
//     document.querySelector('body').style.background = '#ffffff';
// })

// * [ ] `wheel`
const image = document.querySelector('.img-content');
const image2 = document.querySelector('.img-fluid');
image.addEventListener('wheel', () => {
    image.style.transform = "scale(0.9)"
    
})
image2.addEventListener('wheel', () => {
    image2.style.transform = "scale(0.9)"
    
});

// * [ ] `click`
const button = document.querySelectorAll('.btn');
// for(var btn of button){
//     this.btn.addEventListener('click', (event) => {
//         // button.style.fontSize ="1.5rem";
//         this.btn.style.color = 'red'; 
//         this.btn.style.background = 'gray';
    
//     });
// }
button[0].addEventListener('click', (event) => {
    // button.style.fontSize ="1.5rem";
    button[0].style.color = 'red'; 
    button[0].style.background = 'gray';

});
button[1].addEventListener('click', (event) => {
    // button.style.fontSize ="1.5rem";
    button[1].style.color = 'red'; 
    button[1].style.background = 'gray';

});
button[2].addEventListener('click', (event) => {
    // button.style.fontSize ="1.5rem";
    button[2].style.color = 'red'; 
    button[2].style.background = 'gray';

});

// * [ ] `load`
window.addEventListener('load', (event) => {
    console.log('Fully loaded!');
  });

// * [ ] `scroll`
window.addEventListener('scroll', () => {
    headerColor.style.background = "#FFFFE0";
})

// * [ ] `dblclick`
const content = document.querySelectorAll(".destination h4");
document.addEventListener("dblclick", () => {
    for(var cont of content){
        cont.style.color = "orange";

    }
    
  })

  const content2 = document.querySelectorAll(".destination p");
document.addEventListener("dblclick", () => {
    for(var cont of content2){
        cont.style.color = "brown";

    }
    
  })

  // * [ ] `mouseenter`
var doc = document.querySelectorAll(".destination p");
doc[0].addEventListener('mouseenter', () => {
    console.log("uh oh, it entered");
})

content2[0].addEventListener('mouseenter', (event) => {
    content2[0].style.transform = "scale(1.1)";
    event.stopPropagation();
})
content2[1].addEventListener('mouseenter', (event) => {
    content2[1].style.transform = "scale(1.1)";
    event.stopPropagation();
})
content2[2].addEventListener('mouseenter', (event) => {
    content2[2].style.transform = "scale(1.1)";
    event.stopPropagation();
})

// * [ ] `mouseout`

content2[0].addEventListener('mouseout', (event) => {
    content2[0].style.transform = "scale(1)";
})
content2[1].addEventListener('mouseout', () => {
    content2[1].style.transform = "scale(1)";
})
content2[2].addEventListener('mouseout', () => {
    content2[2].style.transform = "scale(1)";
})