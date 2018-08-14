// Your code goes here
let imgSrc = []
let img = document.querySelectorAll('img')

img.forEach(element => imgSrc.push(element.src));



img[0].addEventListener('mousemove', () =>{
   img.forEach((currentImg, i, arr) =>{
    currentImg.src = imgSrc[Math.floor(Math.random() * Math.floor(img.length))]
    console.log(currentImg.src);
    })
})



// document.querySelector('h2').addEventListener('keydown', () => {
//     console.log(querySelector('.logo-heading'))
//     document.querySelector('h2').style = "font-size: 5 rem "
// })

let h1 = document.querySelector('h1');

// h1.addEventListener('click', () =>{
//     console.log('hi');
//     target.style.color = "red"
// }) 

h1.addEventListener('keydown', (event) => {
    event.target.style= 'font-size: 5rem';   
  });

let navLink = document.querySelectorAll('.nav-link')        
// for (let i = 0; i < navLink.length; i++) {
//     navLink[i].addEventListener('click', ()=>{
//         const keyName = event.key;
//     console.log(`keydown event key ${keyName}`);  
//     })        
// }       

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', ()=>{
        console.log('hi');
        navLink[i].style = 'color: green'    
    })        
}       

let nav = document.querySelector('.nav') 
nav.addEventListener('click', ()=>{
    nav.style = 'color:green';
})

document.querySelector('body').addEventListener('wheel', (event)  => {
    event.target.style = 'background-color: red'
})

let btn = document.querySelectorAll('.btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('dblclick', () =>{
      btn[i].style = 'width:2rem'  
    })
    
}

// document.querySelector('.btn').addEventListener('click', (event) =>{    
//     console.log('hi');
    
// })

// window.addEventListener('scroll', () =>{
//     document.querySelector('p').innerHTML = 'Wow'
// })

window.addEventListener('scroll', () =>{
    document.querySelector('body').style = 'background: url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi4na2B1O3cAhWosVQKHb6hDB4QjRx6BAgBEAU&url=http%3A%2F%2Fwww.ign.com%2Farticles%2F2018%2F07%2F18%2Fdragon-ball-fighterzs-next-dlc-includes-base-goku-and-base-vegeta&psig=AOvVaw0ObRK5ElpAiOKWMSm8Wc7w&ust=1534373338372630)'
})

window.addEventListener('resize', () =>{
    document.querySelector('body').style = 'background:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIANAAXQMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcBAAj/xAA/EAACAQMCAwYEBAQEBAcAAAABAgMABBEFIRIxQQYTIlFhcTKBkaEHFFLBI0Kx0RUz4fCCg6LxFlNic5LC0v/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAQIDAAb/xAA0EQACAgEDAwIEAwgDAQEAAAABAgADEQQSIQUxQRNRImGx8DJxkSMzQlKBocHxFNHhFQb/2gAMAwEAAhEDEQA/AKSWwCTyApt4zM4DJpXNIuJS8ip5nerIu5sSCcQ0uFAA6bU4AAGJnOk1M6IdsVU4AzIkO4v2hYrCBkcyd96Fs1JQ4SW2A94vS1lvLnvpyzrGc5PLP+/2qdIjX2b3OcStpCLgSwD0505gsUpPOuM6KZqgTogsABk1UyRA2tNFA9wlu3FEZGSM55rnY/Sk1rFaue5huOeIFoKWhGxg4F7xhudgD5UfpqiBvMzYyV1ormVnjk1OZ0TPiK3aWXYDkP1HpVbRsTc0jdk4EBdd6UfnCIXtNSi0+yWONBLM/jbfAU+XrtR9WpWivavJMHasu3MbbW7xzt3ajyCc6odfd9iSKUEOWEWoyIJbtwincRqozj18qYU+u3NhmDlBwsmgAD4ST5Z/eiszOR8sxJjZVH6mHxe3pWfJ7S4lXvJu+myM8I2FIbX3tDQMR20tDxCSUbDkta005O5pBMn0eDKTw32qc5nRm9uBagAAGQjYH+X3rG+70eB3+k5Rugue5mnP8WQt1weVL3td/wARmgRR2jNZy09UyJY+zukna8ukI6xIRuf/AFYpjo6MH1H/AKQW63+ESwNMsQwc557jAA8yaaFhBwJHYmUHc92fiJ2L/wBhXYzJ7RGAOm3QV0kSvwWyRbnxN5+VKK6VTk8w0mSKIlYtIy+DkAeZNXVM95VmAkhDb27ASyorH9RwTWosorOCwzMzubxK7dv3tzI+c5Y4OaSXOXsLfOFIMKBLJZ6JptxbxWbSyQ3V7FBJbXEqFY++IbiTiO3CcgD1HpQu5s58Qnam3B8xztB2ZOndkNKvZYRHdSKrOcYLLJkgH1GPvXKx348TiqmoEdxKg6NG7I6lWUkMpGCCOYNbZmBEftWu5JQts83Gf0sc1rWLGOEzmZsEA5lpsbW+4FN7crJvng4c7+p606pquH7xv6QNnT+EScxytEzKNFagy4MEJA79MD1oFaXaFlgJIS3VRnmc82G1ErSFmJsJ7Tl1Y3ssbdzcRovkBw7e9YX1XuMBhj9P8yUdQe0rtxCYZChdHI5lGyKTOu1sZzCVOZoXY/QdM1Ds7ZSXUEQnllkIulP8RXR/CD5jGBjHXNCPYVJENqrBUGaNplhY3Gm3WlTWglglYjDRZUHnxdORydutVpbK4M7Ug7sxrWdCa70/R7O9vldrJ43nuFiAeUop4cIQQN9z5YrYTHMwacC+1i5djM4lndyeAF2yxO42APn0oilQzBfpMbGwMyzWNrFawjuoTHkeIHBJ+dehprVFwoxF7sWPeTFHFzzitZnFMg5gZ8x51E6N8GwqDLCRY4eLf71OZqY73P8ALXZkTxgSeMpKvEBtwnODVHRXGGnAkciR5NDtZB4LZSxHRytDPpKSPhX/ABLC5s9472TstYsdbjitX4bWVsyorhwVAz1GzdM8xkUm1mmatCzDiMdJbufAmtdndQgFy1pLKgncApxEAyDpj135UvpHJhepBwDF9pri102yuLi5w91MjQ24zkjbmPLGck+3pRtFDXPtEBewKuZlMFjBbD+BGF23PVvc16SqpKxhRiLXcseZJWNcZG4NaTOeXCtwb8PSunfOO4BGwqspmNMCp8K5qDLiNRLws6eRyKmbGM6lcCyiWRl4uI4APWh9Te1SZUZJmtFau3xHAH3iQbTUVuJwryPDxdc7E0k1Wp1oXcD+kd6JemltrIc/PmEJreRZY+KVmjJwc9KWf/S1DryxyI4HTtGpJFY5++JonZz/AAm5sz+WiSK5jUd+EkBK+pDYOOu21btY2pUOzZiJ0OlsKARy70i01AN+ftnMCDKTQhlc+fiHTkR/xelQiEDBkWWZ7QH2l0q6tZRNK0stsI0Cu0xlKeEZySc4znfrTfR6qmhNr9/eAXUWXN8H6ffeBliVhlSCPMGnC2K4ypzFzq6nDDE8kGDwnlzFWzKZnHttsDIPMGuzI3RSoOHlg9R5VWTEsMVBnCRe6ncd4AEwMevtgf3rswjI7QPbWN/2ju5orYIphXi4ZTwnGceuTSXVarB+LtDaKN/4TBt/Y3On3LW15E0ci8weR9QetVSxXGVkvW1Z+IQ/oFy11avHKQxjOBnypF1GkVWBl8/Wel6VqHtqIY/hk28tI7pV4srIvwSL8S0JTqGqORDL9Ml64bv4PtJOn9tdd7OL3U9tZ3Vtt/EKcDHy8S/uDTuiyi4fBwfaeb1emvpOW5HvJkf4mW7QXFvNooS2lX4IJQpUkeI54ev1og6cnzBBbggwXaOZY1niLLG4yATkj0PTakw1N2kdkrbE9P8A8ajW1q9q5yIQtZUuEkiDKZ4CCVHPhI5/PevU9O1jaikO3fzPIdT0i6XUFE7d4/3WRkbg8qY5iyNNFwMNtm2Pv/v9qjMkHMbeEZ3FdmWBi7dQQ+f1ft/rXGXznmFuz+mxPcXV2jCGVk7tpRglQNycfT6V57qbh7gg8d450AKVFj57Swal2Y03X9MEdyJOIpiKQgAxHzH+96GqwOVmjkklWmLWcb293cQqwPAxQsORwcV2tKkLmMuiK+58duP8yzxriNRzwBSBu8ek8zzKHBVhkHmDXAkciQeRgwNeaCHkD2xCKT4wT8PqKa0dUKrtsGYm1PSFdg1Zx7/+QraosUKwxA8CDhUn+b1pda5dt7dzG1VYrUIvYQbo88//AIsVOFjxM0bhei45/XBr0/TcJUuPM8h1cl7n3eJdlt+FmTy3Hsf9mnBaIiOJyS14lIO2eRHQ9K4NK55jCxl0UlcHG48j1q2ZbGIhISs3Cf0jFTuzzLkY4hnRwv8Ag0WD/nMVY+eXIP8ASvI6hi1zH5z01IArX8pbrhhbaZLIAcRQM23otEIOABBWILcmYQITAxiZeEjmrDBB9RQdobd8YwZ6vSemtYFJBX5QlZTB4mhkPIbe1A2rg7hCHHmdhm4ZjBIQSD4Wz8Q8qqyZG4SCMcxbR3Dvwl1MR8hg+1QGQDPmRkYk/TrSK71K2tbi5MEGGklZTgsoIGM9B4sk+lEaKtbWYvFvUNRZSg2HBMNdnbOCKO4WOFO8W6cPcbEzDhBQZ9ASD9etPdJhDtHieY1zNaN575hGeDgeOTHh4uFvY/64pmHzkRViKaDnUBpTEgTCK0mYTcXC/iXhXO/X9q1U5EuBkSNJGzXcYU7yfwxn16/Y1W24VUlvaE11epaFll0/TzPALV3bwrguDuPKvMIu9o+d9g4itZkmW3hsi5ZRxCRsbvw8JHpjfJ9sUy0iDdz4izVOQuR5md9r4BDqCSEY72Mb45kHH1xWfUwS4bEdf/nrAanrJ88QEnE78GxOdt6V7c9p6I2BUJbxJ1hphvYm7q7g77BZIeLLMB7cqsyEd4Ceo1g4HK+8THrNvGpjuXYSoSpHCeY86yPT7mOVHEq/UdMp/F9YS07UTFNFe2MkUhUFWjZsB1OCR1IOQDy6VWpn0zkMJXUVJq6hsbmXjSZY30iz4QTJIWmlOclScgDPXYAfIU50rbzunmdYnpgoZKmTvI2Q7BqYDg5ikxmPLRBm5kb+/Wr8SpEYuFjDgO6g45E1YEyBmQtTVbZEvFIUwOJCScDA51SwepUyHyIZVZstDCApfxLaG+K6RapJBjBe4yC/sBy+f2pdpdLubDHGYwvvBHAh/Su0y9qJNrVrd7eM8a8XErFjzDY9Pv6UaKDS3MBufcoElX9hHeRCGXZJUaPI5jIzn/pqzYdCplKnapw47iZRqlosmpTxW07NZxOVTI3YDr8zn5Up+BCQk9Ha+ovVfVOPkJKtY9RgmXUk4gmRC0nNgMcOB5eE7H2qjOuOZitTE4XvId3CLrWW/NcXiQyPg77DI+wFXW4rpzYnvj6S50iNqRU/tkx7Q44NP7SQi+kKwB8+jqeWfTcH5VZ3N9IYDPv8jM1q/wCNey7se3zmzzx29raRPlUZ3LYA5jGP2FX0gx2gOs+MH5SKZ3ckRQO2/M7CmW0DuYqIiBb3LZ45QoJ5J/ep3ATohrGEc14j5sd671DIiriFJLd0dQycO6nketQDgy445lG0P8P2lv5TqNz3VukzRoIsF2AOASTsPOl51RptwvcRqlG+vcZddJ7MxdnJZUhmeWC5xhpMeEjO2QBzz9jRI1BtPxd4LbVjtIXbW9ax0gpFkS3BKKRzUY8X22+dZam41px5hfS9L69/I4HMz+1QDu3KkoHHe432zz9sbUtUjEd6mpksyfMuOqT2/wCQkS0kikWd+HwkHg8PQDywKGsO1STKaWsvZx4lH1nNpfx3CjYpg+u2P6Gi+ngX6dqjI6gxo1Nd4/I/f9ZOltItS0+JxgSBBwP+1BVaizS3H2zzDr6KtXUP7H7+kj9n9ZutI1y1/wARurv8rE3DIhYsFXBGwO2Pb5V6Opq3Tcg7zymoqdGKN4myxcE0SSQuskTqGVkOVYdCK7dBPTnTHtXbpBSR5EOauDM9pkaOZJF8EUzZG4CkgfPlV9pEuFjUcvczlJFMbGQNwt+kqN/bNJtWv7UkRzpf3QEIC6kubeCItwsxVAxHEQytvnpnp8jWlL5IzM7a8ZEz/tvctJrBthK0iWqhcnbxHBP7D5VjrLdzBQO0fdF0wSk2fzfQfZgiytTKS7FlXkCpwfrS6y3Z2jazHYjMnRQRwrwxqB7DnQzuznmYgAdhB2vxiSCJR8ZJ4R50Z0+012bvHmD6yhb6SnnxBulan+SJhnBMJO/mhprrtCNQPUr7/WI9Brzpz6dnb6Sy6rYW+odjBd25EtzaTPJxD4hEcZHtuW+tV0BZVAMjqOGtJHkAwh+FGqXkpudLeNpLaJe8ST/ySTuvz549DR9neLQDiaQEz0rPM7bGJVXPMfWrgypQRUcW/L7VBaSiYnZrC3uSvfxByuQDkggHmMjp6Vi4DdxN1yvaKh062gYuqsSW4iXcsAcYzv1x1qgVV7CSzse8xvVbxtT1e6unAUzTbAcgNgPtS65ssTPX6Gv0qAh8f7k9AI1VV5AbUsJycyx5OZ7rUGdBupvxSxgfyjIYeZ/7UTQMAzStckmQBo0811xuOCM+Ik86Zr1NKqNo5YRHqOmerqi/8B5l97EQ2omuNLliU293AU4fPGSRn1BasNFqGextx5MjqOnVKlKDAHEvcNpa2FvwW0MVvAg+GNAoAHtTTJJiaUbtj2umtG/L2MzRyEbKhwQPNj5ny2php9MDyeZja+3gSu2PbDWlRhLdxznPO5iDkexoo6SpvEH9ZxNhVQKS5hwi8Yqs6Vv8QL57Ls64ico9xIIsjnw4JP2GPnWNzFU4hvT6hZdyOACZlUSZYFeS+I+wpazccz1RAA4hrnuKAmUbcguEHI8zUjtmdIMxU6mkbYCgAUQo/ZEy6tjI94SYb0JKSXpNz+U1K1uCcCORSx9M4P2JrfTPstUwfVJ6lLL8poPaG5Frp7sSwQZZyOiqM16ilctPLDjmYZd3Ml3cy3E3+ZIxZvT0p4gCjAi5mycmMjbkTUzhPowCvOZjCeqJ0zv8T7wPeWtmrDEUZdx5M3L7D70JqW+ILHnSK/gew/lKppy8Uz9QUINLrjgCO7e0mQiSKHEoGV2G+c+VYNhm48zInJ4jTv3MckrjPCOXmev7fSpA3EKJAgeRmkfjJy5OQfWjVAAxN2XjA+/9w7bs0kCl1Kv1FL3ADcTIjEcAzsRmqSJddfm/NdiDO0YeSSxzxE/CcDJr1ukbcVb3xPIXrsLr7THafiKzPZrszhPo2vOYjGNXdxDZ20tzcPwRRKWdvICoJxzJVSxCr3MxfXdROq6td3jLwCVxwp+lcAD54FLbG3Punr9HR6NXpE/Zi9II7lifjzg0DqM7pdicCTGUMQT03FYjIlYptMmvNNvrlAVgtoyzP+phyX9/+9Gaagtlz2EHs1QqsRB3JH6Sskb8PQ8vQ1tGGMceIUsrvMSrcZXGyueTfOg7aufhmbjmTDIvAWQhsDYA86xCnOJQgjvNBsYDe9jYIp08PcGM8P8AMm65+Y3r02kc7VPynlNUAL3APmYzeW0lndS282O8jbhOOvr8+degRgVzFLjBjUaM4JA2q3eRnE+jAK89GEGdqBA3Z3URdSiKMwMOM9Gxt7742qr4KkGa0My2qVGSCJijN489cffnSvxPZ5G8ff3xJdlcLblw+cHyrGxN85689pO7x5YuPgMabYzzasAoBx3mDkL5mkdn9DFlo8tnerHILnJkjHIAqBw568qeUVemm0zzGq1Pq2714xMp161jsdavrSIEQRTuke5JUA7b0LYAG4npdJa9lCtZzmc0+QEG2nAZW6HkTQdqn8Swh1OM+ZOit4rdW4QeH4jk0OXLkZmZYkcy/fh7cStpctvIxKwMODPQEbj6gn5040Tl6+fBnnep1qtoK+RG9e7KWuu3c0jWpRo8KssU3AX232KkYz+9Nq72rA5itkDd41Z9h9PtUKtaW0hPNrhmmY/ThA+QrjqXPmcK1EuNCy8yft1qtxfa7c2xmJtLZ+COMHw5AGT6nOd6B1DktjxPT9K0ypSLCPiMrMKBmRH2BwPpWDHGSIeFwAD7fSEILCRZf4jLwj0zmhnuGOJDWZGJMdS7DBOFGPXPp5mslJxx3MxOPPaa5YmQ2lv3ykSGJePPMHhFeiGcTyLYycTLfxC0xtN1trpm4ob5jIreTDHED9c/Og9RWQ24T0fStWhr9Ju4lW3U7fD0x0oc8942/D27ff8Ab7/KfbyXdwVGcx53OAKGYIv5yj7BwJovYCePu72AMBPxq4XqFxjP1/ajun/uz+f/AFPOdVB9RT4xLakYjQKgwAKYd4rjcg32qROEc5VE6Yx2qjWHtJqUachcE/XB/el1/Fhnr+msW0qGD7e3ad/CeHh3zQzuFHMLcgcwoJg7mJCWKjxsvT096G2YG4wY88yz9hLOK4v7iWeNWNvGjRL0Uktv6namGgRSS2OYn6pYyhVB4MvgFM4mlI/FYI2naep/zO/bG3Th3/8ArQ+oOFEa9ITda35f5mZxFoJieLAByCaDbDCP61KEqx4lgjlRoBISOHhzS5lO7Ehhgyxfh4ZH1ZpUXKvA3eH9IyuPuP60y0IIsYeIp6sAK1B75mhkqObAe9M+YhjLumfjX61IkieJn6bf8I//AFXcTpivbrWWTtVeQSxLOsQWNmbwPkDOQV2645HlVLqRZyODCadZZRwp4iLZFGjR6hJei2t7iXulSSM5OOZyudufQUsasm01hckcxsOqKwDOOIT7O2dtqt8thYXkczHLuUVwEUczuozzG3makaS12+MYErZ1RCMgczUNO0uLToO6tFZQd2JccTHzJxTNEVF2qImste1tznJkgRTl2LE8I+ECXn74Wr8TOCO0fZyDWoYu/aSOSM4SQTFscRAOxGD08vesrK1sGDCdLq30zFkmVa7YDRNRlsb68gjkjwVLB/4inkwwpx1HuDQb0upwAT+n/cdL1ith8QxBwu9OWQCS9kkj69xCST7FiP6Vw09p7Lj8zMrOsr2E0X8P7q1n1bUtNit07qGKKSKWXxtIh/m8h8S7Ct9IhSvJPJivV3tc+Wl7EAUYVYQPSL/WicwWJeMg81+Sf6104QGe2OhuvCNTjGds9xIMfaoBXM09F/aYRq92L/Vru6xwrLKzgc8DO32rXvB27wx2smEP+HaUhIWxtl418pHAZv6ig9CuS938x/sOJrecYT2lu/CaTTdPs7q8u762huJ2CKsr4IQfPqf6UXYZWuslcgTRRrFgwympWJ/5y/3qgxL7G9o4uo2rDK3tmf8AnD+9dxI2t7TrXEUqgC4tscQO0oPIg1wMjB9plf4y2ytcWd3FwuU4opXRsgcTFkB/6quBxmQ3aZpGRv0q6zOaP+G88idptMkQZ/Maa8ZXOASjEc/ZVoZMAuvsfqAZseyn5TXw83WED/j/ANKvgSsbdpc/5Q/+dTgSRMD4s/zUJmepABBx4gKxRDfRRzOBH3gDvzAXO5+lEs+KzjvieZFDF8DmTNVlk1LV7q5VWxPMxViMbZ2+wFRQUqpVflLHTXW2kbTyZPhjESKi4wBisS/mPU0u0BRjiLO9cGMsaFiAF64NTulfRSe4V/SuPaq7pYULGbq3WeFowFUndTjkasLMTK3RCxSIC7uRGIZTtzopbFiE6e32hezmla1t1RH47JpZGZG3CPjl8wc48/WhWYK5b+bH6iGU07MbzjGfnCMd/ccAaK7uApGQVlbf712T5jJa1ZQV5EWuqXw2F9dY/wDdb+9Tunej8v7QTf3wRGij+Mjf0qKqyxzI1+uVFNaDn6RlR+Qsm4gv5i6jwQRvHEd/kWx9PetFHqvnwv8Ac/8AkRn9mmB3P0itMLPcYLHCryqdQFVeIx6UbLbviPAEKUHuno/TniwB3NdI+EHE8ZAvNvrU8yC6Du05xq3JgajmcCjdjEtIg2LqPTNSMypNY8wDPZ3Ms0rxQSSLxnxKuRzopba1ABM8vqKLXuYqCeY1J+ZgcSSrLEwOQ5UqR7VopRhgYIg1i2htzgg+8kLqDLgrHGv6uDOG9cZwD7fSqmj2M2o1rVeOIWw+FJHxKGBVsgg7gg+VDKQZ6Corcu5RHtN0vTxepPfXEgQPxNH3XEHHlkH2rJ9TaEKoOYNd0k+rvU5GZyfSbeW4aafVhKXPExS2bJPzIrRNW6oFWvGPnBT0e52yT9/rF91FHtAhVAMLxHLfP1rLezcseY+0ulr06BQOZ6ohWROgVEuJwjyrpBxElAeYB+VTzKlUPcRs20Oc90mfap3N7zP/AI1Gc7BOdzGOSL9K7Jk+hWPEUBwbplfY4qvB7zvRrP8ADFxXEkRJVYSTv4oUY/cVBQH/AGZk2kqPJWcuriW7dXuCHKrwr4QAB5ADFWrRUHwzlpROFE//2Q==)'
})

window.addEventListener('keydown', () =>{    
    document.querySelector('p').style = 'font-size: 10rem'
})

window.addEventListener('dragend', (event)=>{
    event.target.innerHTML = "WOW THANKS BUDDY"
})







