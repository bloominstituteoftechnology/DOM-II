// Your code goes here
const logoTag = document.querySelector('.logo-heading');
const aTags = document.querySelectorAll('nav a');
const introImgTag = document.querySelector('.intro img');
const btnTags = document.querySelectorAll('.btn');
const h2Tags = document.querySelectorAll('h2');
const imaTags = document.querySelectorAll('.content-section img');;
const introPTag = document.querySelector('.intro p');


logoTag.addEventListener('click', (event) => {
  event.stopPropagation();
  event.target.style.background = "red";
    console.log(event.target);
});

document.querySelector(".main-navigation").addEventListener('click', (event)=>{
  event.target.style.background = "blue";
  console.log(event.target);
});
introImgTag.addEventListener('mouseover', (event) => {
     event.target.style.border = "2px red solid";
//    console.log(event.target);
  });
  
  introImgTag.addEventListener('wheel', (event) => {
    event.target.style.opacity = 0.5;
    // console.log(event.target);
   });

   introImgTag.addEventListener('drag', (event) => {
    event.target.style.visibility = "hidden";;
     console.log(event.target);
   });

   document.addEventListener('keydown', (event) => {
    //    console.log(event.target);
       logoTag.style.color = "red";
   });

// keydown example that didn't work.  tried to focus on A tag first...

//    aTags[0].addEventListener('keydown', (event) => {
//     console.log(event.target);
//     aTags[0].style.color = "red";
// });

aTags[1].addEventListener('focus', (event) => {
        // console.log(event.target);
        event.preventDefault();
        aTags[1].style.border = "3px blue dotted";
   });

   document.addEventListener('scroll', (event) => {
//    console.log(event.target);
    h2Tags[0].style.color = "red";
});

btnTags[1].addEventListener('dblclick', (event) => {
   console.log(event.target);
   btnTags[1].style["font-size"] = "3em";
});

document.addEventListener('copy', (event) => {
  //    console.log(event.target);
       document.querySelector('body').style.color = "blue";
  });

  window.addEventListener('resize', (event) => {
       console.log(event.target);

        document.querySelector('body').style.color = "yellow";
    });