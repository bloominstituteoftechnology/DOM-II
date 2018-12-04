// Your code goes here
// let obj = {
//     scale: 1.0,
//     px: 4,
//     hash: 25,
//     shw: `4px 4px 1px #250000`
// }

// const nav = document.querySelector('.nav-container');
// navItems = nav.querySelectorAll('a');
// // ********* 1
// navItems.forEach(a => {
//     a.addEventListener('mouseleave', function(){
//         obj.scale += 0.1;
//         a.style.transform = `scale(${obj.scale})`;
//     })
// });

// const body = document.querySelector('body');
// // ********* 2
// body.addEventListener('click', function(e){
//     e.target.classList.toggle('darkMode');
// })

// // ********* 3
// body.addEventListener('wheel', function(e){
//     e.target.style.boxShadow = obj.shw;
//     obj.px += 1;
//     if(obj.hash <= 97){
//       obj.hash += 2;
//     }  
//     obj.shw = obj.shw + `, ${obj.px}px ${obj.px}px 1px #${obj.hash}0000`;
//   })

//   const imgs = document.querySelectorAll('img');
// // ********* 4
//   imgs.forEach(x => {
//       x.addEventListener('mouseover', function(){
//         x.style.transformOrigin = `bottom left`;
//         x.style.transform = `scale(1.1)`;
//       })
//   })
// // ********* 5
//   imgs.forEach(x => {
//     x.addEventListener('mouseleave', function(){
//       x.style.transformOrigin = `bottom left`;
//       x.style.transform = `scale(0.9)`;
//     })
// })
// // ********* 6
// window.addEventListener('resize', function(){
//     body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
// })
// // ********* 7
// window.addEventListener('dblclick', function(){
//     document.location.reload();
// })

// // ********* 8
// const home = document.querySelector('.home');
// home.addEventListener('copy', function(){
//     alert("Woa, hey there coyboy, don't copy me");
// })

// // ********* 9
// home.addEventListener('contextmenu', function(e){
//     e.target.style.color = 'red';
// })

// // ********* 10 - stopImmediatePropagation
// imgs.forEach(x => x.addEventListener('dblclick', function(e){
//     x.style.display = 'none';
//     e.stopImmediatePropagation();
// }))

// // ********* preventDefault
// navItems.forEach(a => {
//     a.addEventListener('click', function(e){
//         e.preventDefault();
//     })
// });

// *********** GSAP

TweenMax.fromTo(".logo-heading", 3, {
    transformPerspective:600, 
    rotationX: 10,
    rotationZ: 10,
    rotationY: 30,
},{
    transformPerspective:600, 
    rotationX: -10,
    rotationZ: -10,
    rotationY: -30,
    ease: Elastic.easeOut.config(1, 0.3),
    repeat: -1
});

TweenMax.staggerFromTo("nav a", 1, {
    x:100,
    scale: 0.8,
    rotation: -200
}, {    x:0,
    scale: 1,
    rotation: 0,
    ease: Elastic.easeOut.config(1, 0.3)
}, 1);

const GSAPimgs = document.querySelectorAll('.img-content img');
GSAPimgs.forEach(x => {
    x.addEventListener('mouseover', function(){
        TweenMax.to(x, 2,{
            transformOrigin: 'bottom left',
            scale: 1.1,
        });
    })  

    x.addEventListener('mouseleave', function(){
        TweenMax.to(x, 2,{
            scale: 1,
        });
    }) 
})