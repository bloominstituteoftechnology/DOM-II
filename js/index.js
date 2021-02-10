
// 1
// Mouse over turns Fun Bus Logo h1 into gold 

// Teal version of funBusLogo
//     funBusLogo.addEventListener("mouseover", function(e){
//         e.target.style.color = "teal";

//         setTimeout(function(){
//             e.target.style.color = "";
//         },500);
// }, false);
const funBusLogo = document.querySelector('h1');

funBusLogo.addEventListener("mouseenter", function(e){
    e.target.style.color = "gold";

    setTimeout(function(){
        e.target.style.color = "";
    },500);
}, false);


// 2
// Mouse over turns nav items bold
const boldNav = document.querySelector('.nav');

boldNav.addEventListener("mouseover", function (e){
    e.target.style.fontWeight ="900";

    setTimeout(function(){
        e.target.style.fontWeight = "";
    },500);
    e.preventDefault();
},false);

// 3 
// change the home container photo on click to a mini slidshow of my own photos: https://photos.smugmug.com/Landscapes/i-TDBV9pn/0/4bc5c582/X3/Alaska63-X3.jpg & https://photos.smugmug.com/Landscapes/i-qf8m2hV/0/3be4571c/X3/alaska2-29-X3.jpg
const changePhoto = document.querySelector('.intro img');

changePhoto.addEventListener("click", function(e){
    e.target.src = "https://photos.smugmug.com/Landscapes/i-qf8m2hV/0/3be4571c/X3/alaska2-29-X3.jpg";

    setTimeout(function(){
        e.target.src="https://photos.smugmug.com/Landscapes/i-pZDQtNh/0/5497bcdc/X3/46184753252-X3.jpg";
    },8000);
},false);

// 4 
// mouse over on 'welcome to fun bus' h2 element turns into a message to click and on click opens new tab to my spotify page - repeats itself to second message
const getOut = document.querySelector('h2');

getOut.addEventListener("mouseover", function (e){
    e.target.style.fontWeight = "900";
    e.target.style.color = "gold";
    e.target.style.fontFamily = "Helvetica";
    e.target.textContent = "Forget This - *Double Click* Here & Listen To Telephone Heater's Newest Album!!!";

    setTimeout(function(){
    e.target.style.fontWeight = "1000";
    e.target.style.color = "black";
    e.target.style.fontFamily = "Helvetica";
    e.target.textContent = "Come on - you know you wanna listen to some new tunes ;)";

    },10000);
},false);
getOut.addEventListener("dblclick", function (e){
    window.open("https://open.spotify.com/artist/1U9oQ2kPIAOymZLvRK4wrs?si=zaN3yqjITDixxE9sMzm2Zg");
});

// 5 scrolling with a mouse wheel turns first p into a bio 
const introText = document.querySelector('p');

introText.addEventListener("wheel", function(e){
    e.target.textContent = "Telephone Heater AKA Erik Burdett is a photographer & writer living in windswept West Texas. erikburdett.github.io";
    

})

// 6 changes img-content for content-section img to telephone Heater collage if right clicked
const teleHeater = document.querySelector('.content-section img');

teleHeater.addEventListener("contextmenu", function(e){
    e.target.src = "https://photos.smugmug.com/Collages/i-Hph9GR5/0/628301df/X3/collage2%20-%201-X3.jpg";
    setTimeout(function(){
        e.target.src="https://photos.smugmug.com/Landscapes/i-pZDQtNh/0/5497bcdc/X3/46184753252-X3.jpg";
    },8000);
},false);

// 7 changes img-content for content-section inverse-content img-fluid.rounded on load
const teleHeater2 = document.querySelector('.img-fluid.rounded');

teleHeater2.addEventListener("load", function(e){
    e.target.src = "https://photos.smugmug.com/Collages/i-Hph9GR5/0/628301df/X3/collage2%20-%201-X3.jpg";
});

// 8 changes h2 on lets go h2
const h2Change = document.querySelector(".text-content h2");

h2Change.addEventListener("mouseout", function(e){
    e.target.style.color = "gold";
    e.target.textContent = "TELEPHONE HEATER!!!";
    
});
// 9 changes h2 for content-destination
const h2InvChange = document.querySelector(".content-destination h2");

h2InvChange.addEventListener("mouseup", function(e){
    e.target.style.color = "gold";
    e.target.textContent = "Book a Shoot!";
    
});

// 10 change p content to booking a shoot info
const pChange = document.querySelector(".content-destination p");

pChange.addEventListener("mousedown", function(e){
    e.target.fontWeight = 900;
    e.target.textContent = "I've shot everything from professional headshots, to travel, live music, documentary, behind the scenes, all the way to conceptual photography I've done a little bit of it all. Email me at: erikaburdet@gmail.com to book a shoot or collaborate."
});


