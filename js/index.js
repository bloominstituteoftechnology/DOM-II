// Your code goes here

// catImage.addEventListener('mouseenter', () => {
//     catImage.style.transform = "scale(1.2)"
//     catImage.style.transition = "all 0.3s"
//   });
  
//   catImage.addEventListener('mouseleave', () => {
//     catImage.style.transform = "scale(1)";
//   })

// event listener Click
const funBusLogo = document.querySelector('.logo-heading');
funBusLogo.addEventListener('click', () => {
    funBusLogo.style.color = 'Yellow';
});

const funBusNav = document.querySelectorAll('.nav-link');
funBusNav.forEach(link => {
//eventlistner 'mouseenter'
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = 'red';
    });
// eventlistner 'mouseleave'
    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = 'white';
    });
});

//context menu
//dblclick
//mouseover
//keypress
//copy
//cut
//select or drag