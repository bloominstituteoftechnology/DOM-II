// Your code goes here
// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });


// ============================NAV 1 =======================================
document.getElementById('nav1').addEventListener("click", function(){
    nav1.style.color = "blue";
})
// ============================NAV 2 =======================================
document.getElementById('nav2').addEventListener("mouseover", function(){
    nav2.style.color = "green";
})

// ============================NAV 3 =======================================
document.getElementById('nav3').addEventListener("mouseover", function (event) {
    alert('Seriously, nothing much interesting About Us!');
  });


// ============================ BUS IMAGE =======================================

// document.getElementById('img1').addEventListener("mouseover", function (event) {
//     event.target.src ="img2.jpg"
// })


img1.addEventListener('mouseover', function(){img1.style.width = "200px"})

p1.addEventListener('click', function(){p1.style.background = "lightgreen"});

p2.addEventListener("click", changeText)
function changeText() {
  p2.textContent = "When I am clicked, this content changes";
}
p2.addEventListener('mouseover', function(){p2.style.fontSize = "20px"})
p2.addEventListener('mouseover', function(){p2.style.color = "blue"})


document.querySelectorAll("img1").forEach(function (img1) {
    img.onmouseover = mouseoverHandler;
    img.onmouseout = mouseoutHandler;
});

// p2.addEventListener('mouseover', function(){myDiv3.style.fontSize = "20px"})



// function setNewImage() {
//     document.getElementById("img2").src = "https://thumbs.worthpoint.com/zoom/images1/1/0313/17/25-junkyard-diorama-school-bus_1_c56e655a91c46744136f658e1a95a958.jpg";
//   }
  
//   function setOldImage() {
//     document.getElementById("img1").src = "img/fun-bus.jpg";
//   }
  











// document.getElementById('nav2').addEventListener("mouseover", function(){
    
// })

// document.querySelector('busImg');
// dogImg.src =  
// 'https://1.bp.blogspot.com/-OwMUgzp6H4U/T0kLK52OBUI/AAAAAAAAIeQ/9A-Y5cg9KaI/s280/Funny+Boston+Terrier+Puppy_6.jpg'





//   const kittyImg = document.querySelector('.custom-img');
//   kittyImg.src =  
//   'https://1.bp.blogspot.com/-OwMUgzp6H4U/T0kLK52OBUI/AAAAAAAAIeQ/9A-Y5cg9KaI/s280/Funny+Boston+Terrier+Puppy_6.jpg'