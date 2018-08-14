// Your code goes here
const toSchoolSite = document.querySelector('.top-img');
const enlarge = document.querySelector('.logo-heading');
const goNow = document.querySelector('.lets-go');
const button = document.querySelector('.btn2');
const pic2 = document.querySelector('.img-content');
const adv = document.querySelector('.adv');
const pickText = document.querySelector('.pick-text');
const welcome = document.querySelector('.welcome');
const fun = document.querySelector('.fun');




// Step 2: Add an Event Listener to the reference
toSchoolSite.addEventListener('dblclick', (event) => { 
    // Step 3: Do something with the event
    //event.preventDefault();
    
    event.currentTarget.parentNode.parentNode.parentNode.style.backgroundColor = "#FCF0E8";
    console.log("hello!!!")
  });

  enlarge.addEventListener('mouseover', (event) => { 
    
    event.currentTarget.parentNode.parentNode.style.backgroundColor = "#B4E6F8";
    
  });

  goNow.addEventListener('click', (event) => { 
    console.log("hello?")
    event.target.style.color = "#11ADE8";
    
  });

  button.addEventListener('click', (event) => { 
    console.log("hello**")
    event.target.style.color = "#11ADE8";
    
  });
  pic2.addEventListener('click', (event) => { 
    console.log("hello^^")
    pic2.classList.toggle('hide-this');
    //hide??
  });
  enlarge.addEventListener('mouseup', (event) => { 
    console.log("resize")
    enlarge.classList.toggle('hide-this');
   
  });

  adv.addEventListener('dblclick', (event) => { 
    console.log("golden")
    event.target.style.color = "#E8C04A";
    
  });
  pickText.addEventListener('dblclick', (event) => { 
    console.log("pink")
    event.target.style.color = "#F599DD";
    
  });
  document.addEventListener('keydown', (event) => { 
    console.log("razzmataz")
    welcome.style.color = "#D7145C";
    //button
  });
  button.addEventListener('dblclick', (event) => { 
    console.log("heller")
    event.target.style.color = "red";
    
  });

  document.addEventListener('keypress', (event) => { 
    console.log("hello^^")
    fun.classList.toggle('hide-this');
    //hide??
  });


  




//buttondown?


