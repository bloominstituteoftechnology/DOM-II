// Your code goes here


//prevent default in nav items.
const nav = document.querySelector('.nav');
const home = document.getElementsByTagName('a')[0];
 home.addEventListener('click', function(e){
    e.preventDefault();
})
nav.addEventListener('click', function(e){
    e.preventDefault();
})

// backgound color
const background = document.querySelector('body');

console.log(background);

background.addEventListener('keydown', e => {
  console.log(e.target);
   e.target.style.backgroundColor = 'aqua';});

//    background.addEventListener('click', e=> {
//        e.target.style.backgroundColor='yellow';
//    })
  
 
const button1 = document.querySelector('.btn')
// const button2= document.querySelector('.btn')

 // button2.style.backgroundColor ='green'


//sign up function////
const funP = document.querySelector('#funP')
  const dest = document.querySelector('.destination');
 const  contentPick = document.querySelector('.content-pick');
 
//sign up Buttons
 
 const newInput = document.createElement('input');
 
 function signUp(){
funP.textContent ='ENTER YOUR EMAIL AND WE WILL BE WITH YOU SHORTLY!'
  button1.style.display =' none';
  funP.style.fontSize = '20px';
   funP.append(newInput);
   newInput.addEventListener('keydown', e => {
    console.log(e.target);
    e.stopPropagation();
 });
}
    button1.addEventListener('click', function  (e){
        funP.textContent ='ENTER YOUR EMAIL AND WE WILL BE WITH YOU SHORTLY!'
          button1.style.display =' none';
          funP.style.fontSize = '20px';
          console.log(e);
          e.stopPropagation();
           funP.append(newInput);
           newInput.addEventListener('keydown', e => {
            console.log(e.target);
            e.stopPropagation();
         });
        } )

    //// BUS /////
    const intro = document.querySelector('.intro')
const bus = document.querySelector('#bus')
intro.addEventListener('mouseover', function()  {
    intro.style.backgroundColor ='aqua';
    bus.src = 'img/newBus.jpg';
}  )
 
///Lets GO
const letsGoPic = document.querySelector('#letsGoPic');
const letsGo = document.getElementsByTagName('h2')[1];

 
letsGo.addEventListener('mouseover', function(e){
    letsGoPic.src='img/angkor.JPG'
    e.stopPropagation();
});
//Adventure awaits.
const adv = document.getElementsByTagName('h2')[2];
 const advPic = document.querySelector('#advPic')
adv.addEventListener('click', function (e){
    e.stopPropagation();
    advPic.src = 'img/volcano.jpg';

});

///Pick your destination

const pick = document.getElementsByTagName('h2')[3];
 const pickP = document.querySelector('#pickP');
const destination = document.querySelector('.content-destination');
 const jamaica = document.createElement('h1');
jamaica.textContent = 'JAMAICA';
const india = document.createElement('h1');
india.textContent ='India';

const brazil = document.createElement('h1');
brazil.textContent ='Brazil'
 // change pic for each destination
const boat = document.querySelector('#boat');
  pick.addEventListener('mouseover', function(){
    destination.style.backgroundColor ='yellow';

    pickP.style.display= 'none'; 
    destination.append(jamaica )
    destination.append(brazil);
    destination.append(india);
    jamaica.addEventListener('click', function (){
        boat.src = 'img/Jamaica_720x420.jpg'

    } )
    brazil.addEventListener('click', function(){
        boat.src ='img/brazil2.jpg';
    })
    india.addEventListener('mousedown',function(){
        boat.src ='img/india.jpg'
    })

 
})
 