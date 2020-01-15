// Your code goes here

//click event listener
let myTest = document.querySelector('.logo-heading');
myTest.addEventListener('mouseover', () => {
    myTest.textContent = 'Creepy Bus';
    myTest.style.color ='red';
});

let myTest2 = document.querySelector('.nav-container');
myTest2.addEventListener('click', (event) => {
    
    myTest2.style.backgroundColor ='pink';
    event.stopPropagation();
});


//mouse scroll
let headerImg = document.querySelector('.intro img');
window.addEventListener('scroll', () => {
    // headerImg.style.borderRadius = '50%';
    headerImg.src = './img/evil-tele.jpg';
});

let copyEvent = document.querySelector('section h2');

  
 copyEvent.addEventListener('copy', () => {
    copyEvent.style.display = 'none';      
})
    



//dblclick evenListener
let creepyImg1 = document.querySelector('.img-content img');
creepyImg1.addEventListener('dblclick', () => {
    creepyImg1.src = './img/scary1.jpg';
});

//mouseenter
let creepyImg2 = document.querySelector('.inverse-content div img');
creepyImg2.addEventListener("mouseenter", () => {
    creepyImg2.src = './img/scary2.jpg';
  });

//mouse leave event listener
creepyImg2.addEventListener('mouseleave', () => {
    // headerImg.style.borderRadius = '50%';
    creepyImg2.src = './img/fun.jpg';
});  


//resize window event scroll
window.addEventListener("resize", () => {
    document.querySelector('html').style.backgroundColor = 'red';
  });

  

  //audio attempt
//   let cutEventAudio = document.createElement('Audio');
// cutEventAudio.createAttribute('controls');

//   let EventAudioSource = document.createElement('Source');  
//   EventAudioSource.src = './audio/Evil-laugh-sound.mp3';
//   EventAudioSource.type ="audio/mpeg";

//   console.log(cutEventAudio);
//   console.log(EventAudioSource);

//cut event
let cutEvent = document.querySelector('.intro p');
let eventAudio = document.querySelector('audio');

  cutEvent.addEventListener('cut', () => {
    cutEvent.style.fontSize ='24px';
    cutEvent.textContent = 'Evil Laugh';
    eventAudio.style.display = 'block';
    // document.querySelector('.intro').appendChild(cutEventAudio).appendChild(EventAudioSource);

  });


//select event listener
//   let selectEvent = document.querySelector('p');
//   selectEvent.addEventListener('onselect', () => {
//       selectEvent.style.color = 'red';
//   });



  //mouseover
  let mouseOver = document.querySelector('header');
  mouseOver.addEventListener('mouseover', () => {
      mouseOver.style.backgroundColor = 'gray';
  });

  //mousewheel
  let mouseWheel = document.querySelector('.content-destination img');
  mouseWheel.addEventListener('wheel', () => {
    mouseWheel.style.borderRadius = '50%';
  });

  let mouseWheel2 = document.querySelector('.content-destination');
  mouseWheel2.addEventListener('click', () => {
    mouseWheel2.style.border = '1px solid pink';
  });


//stops links from refreshing page
let stopRefresh = document.querySelectorAll('.nav-link');

for (let i = 0; i <= stopRefresh.length; i++) {
  stopRefresh[i].addEventListener('click', (event) => {
      event.preventDefault();
  })
}



  //copy event

//   let copyEvent = document.querySelectorAll('section h2');

//   for (let i = 0; i <= copyEvent.length; i++) {
//     copyEvent[i].addEventListener('copy', () => {
//       copyEvent[i].style.display = 'none';      
//     })
//     }