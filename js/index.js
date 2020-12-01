const navLinks = document.querySelectorAll("a" )




Array.from(navLinks).forEach(function (link) {
    link.addEventListener("click", function (event) {
       event.target.style.backGroundColor = "red"
    });
  });
  const headerClass = document.querySelector(".intro")
  const header = headerClass.querySelector("h2")
  

  header.addEventListener("click",function(event){
      event.target.style.fontSize = "3rem"
      
      
  })


  const div = document.querySelector(".text-content")

  const paragraph = div.querySelector("p")
  paragraph.addEventListener(`dblclick`, function(event){
   event.target.style.fontsize = "3.8rem"
   
  })
  
