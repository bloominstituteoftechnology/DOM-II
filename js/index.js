// Your code goes here
const logoHeading = document.querySelector(".logo-heading")

        logoHeading.addEventListener('mouseenter', function(){
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
    ele.style.transform = "scale(2)";
    ele.style.transition = 'transform 1s'
});
})
        navBar.forEach((ele)=> {
        ele.addEventListener('mouseleave', function(){
        ele.style.color = "";
        ele.style.transform = "scale(1)";
        ele.style.transition = 'transform 1s'
    });
});

const headerImg = document.querySelector(".intro img")
    
    headerImg.addEventListener('dblclick', function(ele){
        ele.src = 'https://tse2.mm.bing.net/th?id=OIP.2kESbeICEkpv42_kNZBqFQHaEw&pid=Api&P=0&w=275&h=178';
        ele.style.transition = "transform 1s";
    });


const headTitle2 = document.querySelectorAll("h2")

headTitle2.addEventListener(MouseEvent, )
const destinationPage = document.querySelector('content-destination')
const distnationPick =document.querySelector("content-pick")
console.log(destinationPage);




       
