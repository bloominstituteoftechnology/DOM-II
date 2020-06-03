document.getElementsByClassName('logo-heading')[0].addEventListener('mouseover', function(){   
        document.getElementsByClassName('logo-heading')[0].style.color = 'Blue'            
})
document.getElementsByClassName('logo-heading')[0].addEventListener('mouseout', function(){   
    document.getElementsByClassName('logo-heading')[0].style.color = 'Black'
}) 

document.getElementsByTagName('a')[0].addEventListener('mousemove',function(){  
    document.getElementsByTagName('a')[0].style.border = 'green dotted 2px'    
})
document.getElementsByTagName('a')[1].addEventListener('mousemove',function(){   
    document.getElementsByTagName('a')[1].style.border = 'red dotted 2px'
})

document.addEventListener('keydown', function(){    
    document.querySelector('.intro img').style.display = 'none';   
    document.querySelector('.intro').prepend('Where is image?')
})

document.getElementsByClassName('content-destination')[0].addEventListener('wheel', function(){    
    document.querySelector('.content-destination img').src = 'https://live.staticflickr.com/7570/15909233902_87a9f6cdb1_b.jpg';
})

document.getElementsByClassName('img-content')[0].addEventListener('drag', function(){
    document.getElementsByClassName('img-content')[0].style.width = '200px'
})
document.getElementsByClassName('img-content')[0].addEventListener('dragend', function(){
    document.getElementsByClassName('img-content')[0].style.width = '50%'
    })

document.addEventListener('scroll', function(){    
    document.getElementsByTagName('body')[0].style.background = 'LightBlue'
})


const changeTxt = document.getElementsByClassName('text-content');
changeTxt[1].childNodes[1].addEventListener('dblclick', function(){  
    changeTxt[1].childNodes[1].style.textDecoration = 'underline';
})


