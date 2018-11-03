// Your code goes here
const navLink= document.querySelectorAll('.nav-link');
const introArea = document.querySelector('.intro');
const introH2 = document.querySelector('.intro h2');
const introImg = document.querySelector('.intro img');
const contentSection = document.querySelector('.content-section');
const inverseSection = document.querySelector('.inverse-content');
const destination = document.querySelector('.destination');
const buttons = document.querySelectorAll('.btn');
const middleImage = document.querySelector('.content-destination img');

introArea.addEventListener('mouseenter', function(){
  introH2.style.fontSize="2rem";
})

introArea.addEventListener('mouseleave', function(){
  introH2.style.fontSize="3.2rem";
})

introImg.addEventListener('dragend', function(){
  alert('STOP DRAGGING ME');
})

document.addEventListener('scroll', function(){
  contentSection.style.flexDirection = "row-reverse";
})

contentSection.addEventListener('dblclick', function(){
  contentSection.style.flexDirection = "row";
})

for (var i = 0; i < navLink.length; i++){
  navLink[i].addEventListener('click', function(event) {
     event.preventDefault()
     event.target.style.color = "blue"
     function revertColor(){
       event.target.style.color = "black"
     }
     setTimeout(revertColor, 2000);
  });
}

destination.addEventListener('copy', function(event){
  alert("can't touch this!!")
})


  buttons[0].addEventListener('mousedown', function(){
    let newDiv = document.createElement('div');
    console.log(newDiv);
    newDiv.style.width = '300px';
    newDiv.style.height = '200px';
    newDiv.className = 'newDiv';
    newDiv.style.left="500px";
    newDiv.style.top="50px";
    newDiv.style.position="relative";
    document.getElementsByTagName('header')[0].appendChild(newDiv)
    let newImg = document.createElement('img');
    newImg.className = "addedImage";
    document.getElementsByClassName('newDiv')[0].appendChild(newImg);
    newImg.setAttribute('src', "https://blog.yellowoctopus.com.au/wp-content/uploads/2017/06/yellow-octopus-Funny-Party-Meme-1.jpg")
    newImg.style.opacity="1";

    const removeImage = function(){
      newImg.style.display = "none";
    }
    setTimeout(removeImage, 3000);
  })

  middleImage.addEventListener('mousemove', function(){
    middleImage.style.opacity="0.5";
    middleImage.style.filter="alph(opacity=50)";
  })

  middleImage.addEventListener('dragstart', function(){
    alert("WHERE DO YOU THINK YOU'RE TAKING ME?");
  })

  const home = document.querySelector('.home');
  console.log(home);
  home.addEventListener('click', function(event){
    console.log('container was clicked');
  })

  buttons[1].addEventListener('click', function(event){
    event.stopPropagation();
    console.log('this button was clicked');
  })
