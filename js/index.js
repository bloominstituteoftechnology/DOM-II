// Your code goes here
document.querySelector("h1").addEventListener("click", function(){ alert("Clicked!"); });
document.querySelector("nav a").addEventListener("mouseover", function(){ alert("Home!")});
document.querySelector("header img").addEventListener("dblclick", function(){ alert("This is a bus!")});
document.querySelector("header img").addEventListener("mouseout", function(){document.querySelector("h1").style.color = "blue"; });
document.querySelector(".img-content img").addEventListener("wheel", function(){document.querySelector("header img").style.display = "none"});
document.querySelector(".text-content h2").addEventListener("mouseup", function(){document.querySelector(".text-content").style.color = "rebeccapurple";});
document.addEventListener("scroll", function(){ if (document.querySelector("h1").style.color === "blue"){
                                                    document.querySelector("h1").style.color = "red";
                                                  }
                                                });
