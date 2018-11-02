// Your code goes here
const nav = document.querySelector('nav')
console.log(nav)

// this as an example of event delegation
// where setting the event listener on the parent
// is more efficient and then adding one to each child
nav.addEventListener('mouseover',e=>{
    if(e.target &&e.target.matches('a.nav-link')  ){
        e.target.classList.toggle('emphasize')
        // console.log(e.target.classList.toggle('.emphasize'))
    }
})
nav.addEventListener('mouseout',e=>{
    if(e.target &&e.target.matches('a.nav-link')  ){
        e.target.classList.toggle('emphasize')
        // console.log(e.target.classList.toggle('.emphasize'))
    }
})

// section content pick event delegation
const  contentPick= document.querySelector('section.content-pick');
const signupForm= document.querySelector('.sign-up')
console.log(signupForm)
contentPick.addEventListener('click',e=>{
    if(e.target &&e.target.matches('div.btn')){
        console.log(e.target)
        signupForm.classList.toggle('display-none')
    }
})

signupForm.addEventListener('click',e=>{
    if(e.target){
        if(e.target.matches('div.close')){
            console.log(e.target)
            signupForm.classList.toggle('display-none')
        }
        if(e.target.matches(' input[type= submit]')){
            e.preventDefault();
            signupForm.classList.toggle('display-none')

        }
    }
    
 })



//  const homeContainer= document.querySelector('div.home');
//  homeContainer.addEventListener('mouse over')
