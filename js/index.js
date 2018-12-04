// Your code goes here

const funBusHeader = document.querySelector('h1')
funBusHeader.addEventListener('click', e => {funBusHeader.style.color = 'blue';})

const h2 = document.querySelector('h2');
h2.addEventListener('mouseover', e => {h2.style.color = 'orange'});

const p = document.querySelectorAll('p');
p.forEach(p => {p.addEventListener('copy', e => console.log('text copied'))});


const imgs = document.querySelectorAll('img');
imgs.forEach(x => x.addEventListener('drag', function(){
    imgs.forEach(x => x.addEventListener('dblclick', function(e){
        x.style.display = 'none';}
    ))}));

document.body.addEventListener("contextmenu", function(e){
    console.log("Other options");
    });

const allBtns = document.querySelectorAll('.btn');
    allBtns[0].addEventListener('mouseover', function(){
        allBtns[0].textContent = "Lifechanging decision..."
        allBtns[0].style.color = 'green';
    });

    allBtns[1].addEventListener('mouseover', function(){
        allBtns[1].textContent = "There's fun to be had!"
        allBtns[1].style.color = 'green';
    });

    allBtns[2].addEventListener('mouseover', function(){
        allBtns[2].textContent = "Don't miss out!"
        allBtns[2].style.color = 'green';
    });

    allBtns.forEach(function(button){
        button.addEventListener('mouseleave',function(){
            button.textContent = "Sign Me Up!";
        })
    });

    window.addEventListener('resize', function(e) {
        alert('Window resizing may cause visual defects')
      });