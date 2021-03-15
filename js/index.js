// Your code goes here


const mainNav = document.querySelector(".main-navigation")


mainNav.addEventListener('click', () => {

    mainNav.style.backgroundColor = "crimson";  
    logoHeading.style.transform = "scale(2.5)";
    logoHeading.style.color = "white";
     navBar.style.transform = "scale(2.5)";
mainNav.Nav.stopPropagation()
           });

const logoHeading = document.querySelector(".logo-heading")

        logoHeading.addEventListener('mouseover', function(){
        logoHeading.style.transform = "scale(2.5)";
        logoHeading.style.color = "red";
  
  });

        logoHeading.addEventListener('mouseleave', function(){
        logoHeading.style.transform = "scale(1)";
        logoHeading.style.color = "black";
  })


const navBar = document.querySelectorAll("a")

    navBar.forEach((ele)=> {
    ele.addEventListener('click', function(){
    ele.style.color = "purple";
    ele.style.transform = "scale(3)";
    ele.style.transition = 'transform margin-right 2s;'
});
});
        navBar.forEach((ele)=> {
        ele.addEventListener('mouseleave', function(){
        ele.style.color = "";
        ele.style.transform = "scale(1)";
        ele.style.transition = 'transform 1s'
    });
});

const headerImg = document.querySelector(".intro img")


headerImg.addEventListener('dblclick', function(ele){

   // ele.preventDefault()

         ele.target.src = 'https://tse2.mm.bing.net/th?id=OIP.2kESbeICEkpv42_kNZBqFQHaEw&pid=Api&P=0&w=275&h=178';
        ele.style.transition = "transform 1s";

       
    });



const headTitle2 = document.querySelectorAll("h2")

//

headTitle2.forEach((ele)=> {
    ele.addEventListener('mouseover', function(){
    ele.style.backgroundColor = "blue";
   
});
});
const textContent = document.querySelectorAll("p")

textContent.forEach((ele)=> {
    ele.addEventListener('mouseover', function(){
    ele.style.transform = "scale(1.2)";
    ele.style.backgroundColor = "yellow";
    ele.style.border = '5px solid limegreen'
    ele.style.transition = 'transform 2s'
});
});


const destinationPage = document.querySelectorAll('img')

destinationPage.forEach((ele)=> {
ele.addEventListener('click', function(ev){
    ele.style.transform = 'translateY('+(ev.clientY-15)+'px)';
    ele.style.transform += 'translateX('+(ev.clientX-15)+'px)';

} ,false);
})


const destinationPick =document.querySelector("h4")


destinationPick.addEventListener("drag", function(event) {

}, false);

destinationPick.addEventListener("dragstart", function(event) {

  dragged = event.target;

  event.target.style.opacity = .5;
}, false);

destinationPick.addEventListener("dragend", function(event) {

  event.target.style.opacity = "";
}, false);

 
 // const destinationPick = document.querySelector('h4');
  //destinationPick.onwheel = zoom;