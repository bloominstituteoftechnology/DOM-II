// Your code goes here
navTags = document.querySelectorAll('header nav a');
mainHeader = document.querySelector('header h1');
picture = document.querySelector('img');
firstBtn = document.querySelector('.btn');
allBtns = document.querySelectorAll('.btn');
footer = document.querySelector('footer');
mainContentTitles = document.querySelectorAll('.text-content h2');
welcomeTitle = document.querySelector('.intro h2');
span = document.querySelector('span');
allBottomPics = document.querySelectorAll('.content-section img')
//1
picture.addEventListener('mouseover', function(){
    picture.classList.toggle('border-radius');
})
//2
mainHeader.addEventListener('click', function(){
    mainHeader.style.color = "blue";
})
//3
for(let i = 0; i<allBtns.length; i++){
    allBtns[i].addEventListener('click',(event) => {
        allBtns[i].style.background = "blue";
        allBtns[i].style.border = "5px solid yellow";
        allBtns[i].innerText = "Signed Up!"
        console.log("one click")
        event.stopPropagation();
    });
}
//4
for(let i = 0; i<allBtns.length; i++){
allBtns[i].addEventListener('dblclick', (event) => {
    allBtns[i].style.background = "red";
    allBtns[i].style.border = "5px solid orange";
    allBtns[i].innerText = "Canceled"
    console.log("double click");
    event.stopPropagation();
});
}
//5
for(let i = 0; i<navTags.length; i++){
    navTags[i].addEventListener('focus', (event) => {
        event.preventDefault();
        navTags[i].style.background = "blue";
    })
}
//6
footer.addEventListener('wheel', (event) => {
    footer.style.background = "green";
})
//7
welcomeTitle.addEventListener('keydown', (event) => {
    welcomeTitle.style.color = "red";
})
//8
for(let i = 0; i < mainContentTitles.length; i++){
    mainContentTitles[i].addEventListener('contextmenu', (event) => {
        mainContentTitles[i].innerText = "Y U BREAK ME?!?";
    })
}
//9
span.addEventListener('click', (event) => {
    span.innerText = "Yes this is up to date";
    event.stopPropagation();
})
//10
for(let i = 0; i < allBottomPics.length; i++){
    allBottomPics[i].addEventListener('mouseover', (event) => {
        allBottomPics[i].style.visibility = "hidden";
    })
}