// Your code goes here

//click event listener
let myTest = document.querySelector('.logo-heading');
myTest.addEventListener('click', () => {
    myTest.textContent = 'Creepy Bus';
    myTest.style.color ='red';
});

//mouse enter event listener
let headerImg = document.querySelector('.intro img');
window.addEventListener('scroll', () => {
    // headerImg.style.borderRadius = '50%';
    headerImg.src = './img/evil-tele.jpg';
});



//dblclick evenListener
let creepyImg1 = document.querySelector('.img-content img');
creepyImg1.addEventListener('dblclick', () => {
    creepyImg1.src = './img/scary1.jpg';
});

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
