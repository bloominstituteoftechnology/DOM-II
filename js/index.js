document.querySelector("body").addEventListener("paste", function(){
    this.style.backgroundColor = "#FF4F58FF";
    alert('you cant edit this page')
  });
  document.querySelector(".main-navigation").addEventListener("mouseover", function(){
    this.style.backgroundColor = "dodgerblue";
   
  });// Your code goes here
  document.querySelector(".nav").addEventListener("wheel", function(){
    this.style.width = "140vw"; 
  });// Your code goes here

  document.querySelector('body').addEventListener("click", function(){
   alert('you clicked me')
  });// Your code goes here
  document.querySelector("body").addEventListener("pointerleave", function(){
    this.style.backgroundColor = "red";
    alert('please dont leave (*_*)')
  });
  document.querySelector("body").addEventListener("mouseenter", function(){
    this.style.backgroundColor = "red";
    alert('Welcome to our page!')
  });
  document.querySelector("body").addEventListener("dblclick", function(){
   
    alert('click ok to change background color to green')
    this.style.backgroundColor = "lightgreen";
  });

   
  document.querySelector("body").addEventListener("keyup", function(){
    this.style.backgroundColor = "yellow";
    alert("scrolling with the keyboard isn't allowed")
  });

 
    
  document.querySelector("body").addEventListener("copy", function(){
    alert('YOU TRIED TO COPY THE DATA WILL BE ERASED IMMEDIATLEY')
    this.style.display = "none";
  });

  document.querySelector("body").addEventListener("dragstart", function(){
    alert('YOU CANNOT DRAG THIS!!')
    this.style.color = "orange"
  });
 