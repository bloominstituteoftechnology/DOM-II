// Your code goes here
document.getElementById("aboutUs").addEventListener("click",function(){
   this.style.backgroundColor="red";
})
document.getElementById("aboutUs").addEventListener("dblclick", function(){
    this.style.backgroundColor="blue";
})
document.getElementById("welcome").addEventListener("mouseenter",function(){
    this.innerHTML="Your mouse entered this!";
})
document.getElementById("welcome").addEventListener("mouseleave",function(){
    this.innerHTML="Welcome to Fun Bus!";
})
document.getElementById("funImg").addEventListener("mousemove",function(){
    this.style.opacity=".01";
    this.style.transition="all 2s";
})
document.getElementById("funImg").addEventListener("mouseleave",function(){
    this.style.opacity="1";

})
document.getElementById("footer").addEventListener("click",function(){
    this.innerText="kadjsf;laskdjflaksdjf;ladsjf;lasdjflasdjflajsdofjasdlfja;lskdjf;lasdjflajf;lasdjf;lasdjflkadsjf;lasdf;lasdjf;lasjflaksdjf;laskdjf;lasjf;lasdjf;laskdjf;lasdjf;lasdjf;lasdjf;lasdjfl;asdjf;lasdjfl;aksdjf;laksdjf;lasdjf;las"
    this.style.fontSize="30px";
})

document.getElementById("btn").addEventListener("click",function(){
    this.style.height="250px";
    this.style.width="250px";
    this.style.transition="all 3s";
    this.innerHTML="DONT!!!!!!"
})
document.getElementById("logo").addEventListener("mousemove",function(){
    this.innerHTML="ITS HOT WHERE IM AT";
})