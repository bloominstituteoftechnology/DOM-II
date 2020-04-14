// Your code goes here


//==== Event 1: change to space man picture on dblclick to document====


document.addEventListener('dblclick', () => {
    window.open('https://www.pexels.com/photo/astronaut-33684/');
  })  
  
  
  //====Event 2: Randomize background color on nav ====
  
  function getRandomColor() {
    const colors = [];
    for (let i = 0; i < 3; i++) {
      const randomColor = Math.floor(Math.random() * 300);
      colors.push(randomColor);
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  }
  
   let navBar = document.querySelector('.nav');
    navBar.addEventListener('click', (event) => {
    event.target.style.backgroundColor = getRandomColor();
    event.stopPropagation();
  });  
  
  
  //====Event 3: Change sign-up btns to read 'Hi Ash!'====
  
  let btnText = document.querySelectorAll('.content-pick .btn');
  btnText.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.innerText = 'Hi Ash!';
    });
  }); 
  
  //====Event 4: Wheel over document changes text and pageColor-colors====
  
  document.addEventListener('wheel', (event) => {
    
      event.target.style.color = "pink";
      event.target.style.backgroundColor= "purple";
    });  
  
  //====Event 5: Add random color on mouse-over, return to normal on mouse-out====
  
  
  let allLinks = document.querySelectorAll('.main-navigation .container nav a');
  allLinks.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
      event.target.style.color = `${getRandomColor()}`;
      event.target.style.fontWeight = 'bolder';
      event.preventDefault();
    });
    link.addEventListener('mouseout', (event) => {
      event.target.style.color = 'black';
      event.target.style.fontWeight = 'normal';
    });
  }); 
  
  //====Event 6: Change text on selection====
  
  let fbText = document.querySelector('.logo-heading');
  fbText.addEventListener(
      "mouseover",
          event => {
              event.target.style.color = "purple";
          setTimeout(function() {
              event.target.style.color = "";
          }, 700);
      },
      false
      ); 
  
  
   //====Event 7: Add no copying event listener====
  
   document.addEventListener('copy',nope);
  
  function nope(){
      alert("Copying not allowed!!");
  } 
  
  
    //====Event 8: Add picture drag to main image====
  
   let topPic = document.querySelector('.intro img')
  console.log(topPic)
  
  topPic.addEventListener("dragleave",dropIt)
  
  function dropIt(event){
      alert("Don't drag it!!")
      event.stopPropagation();
  }  
  
  //====Event 9: Add pageColor color red to all sections====
  
  let destination = document.querySelectorAll('.destination');
  
  destination.forEach((redRum) => {
      return redRum.addEventListener('click', function(event) {
          event.stopPropagation();
          event.target.style.backgroundColor = 'red';
      });
  });
  
  
  //====Event 10: Change nav to red text and increase size on dbl click====
  
  let header1 = document.querySelector('.main-navigation');
  
  console.log(header1);
  header1.addEventListener('dblclick', function(event) {
      event.stopPropagation();
      event.preventDefault();
      event.target.style.color = 'red';
      event.target.style.fontSize = '4.6rem';

  }); 
  