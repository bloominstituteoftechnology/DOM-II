const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const siteMap = {
  'nav': populateNav,
  'cta': populateCta,
  'main-content': populateMainContent,
  'contact': contact,
  'footer': footer
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

for (const tag in siteContent) {
    const element = document.getElementsByTagName(tag)
    siteMap[tag](element, siteContent[tag])

}

function populateNav (element, data){
  const navElements = element[0].getElementsByTagName('a')
  let counter = 0;
  const newE = document.createElement('h1')
  newE.appendChild(document.createElement('a'))
  newE.prepend('span')

  for (const title in data){
    if (counter !== navElements.length) {
      navElements[counter].style.color = 'green'
      navElements[counter++].text = data[title]
    }
  }
}

function populateCta(element, data) {
  const cta_img = document.getElementById('cta-img')
  element = document.getElementsByClassName('cta-text')[0].childNodes

  element[1].textContent = data.h1
  element[3].textContent = data.button
  cta_img.setAttribute('src', data['img-src'])
}

function populateMainContent (element, data){
  element = document.getElementsByClassName('main-content')[0]
  const topContent = element.getElementsByClassName('top-content')[0].childNodes
  const middle_img = element.getElementsByClassName('middle-img')[0]
  const bottomContten = element.getElementsByClassName('bottom-content')[0].childNodes
  let counter = 0;
  const elements = []

  topContent.forEach(node => {
    if (node.childNodes.length > 0){
      elements.push(node.childNodes[1])
      elements.push(node.childNodes[3])
    }
  })

  bottomContten.forEach(node => {
    if (node.childNodes.length > 0){
        elements.push(node.childNodes[1])
        elements.push(node.childNodes[3])
    }
  })


  for (const i in data){
    if (i === 'middle-img-src')
      middle_img.setAttribute('src', data[i])
    else
      elements[counter++].textContent = data[i]
  }
}

function contact (element, data){
  element = document.getElementsByClassName('contact')[0].childNodes
  const elements = []
  let counter = 0
  element.forEach(e => e.length > 1 ? elements.push(e) : '')

  for (d in data){
    element[counter++].textContent = data[d]
  }
}

function footer (element, data){
  element[0].childNodes[1].textContent = data.copyright
}


// ==============================APPLIES TO ALL IMAGES
const images = document.getElementsByTagName('img');
const paragraphs = document.getElementsByTagName('p')

for (const image of images){
  image.addEventListener("mouseenter", event => {
     event.target.width = event.target.width + 50;
     event.target.height = event.target.height + 50;
  }, false)

  image.addEventListener('mouseout', event => {
    event.target.width = event.target.width - 50;
    event.target.height = event.target.height - 50;
  })
}

const getStartedButton = document.querySelector('.cta button')
getStartedButton.addEventListener('click', event => {
  event.target.style.color = 'grey'

  setTimeout(() => {
    event.target.style.color = ''
  }, 500)
})


document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName === 'c')
      event.target.style.color = 'grey'

});

for (const paragraph of paragraphs){
  paragraph.addEventListener('dblclick', event => {
    console.log('trigered')
      console.log(event.target)
    event.target.fontSize = event.target.fontSize + 10
      console.log(event.target.fontSize)
  })

  paragraph.addEventListener('select', event => {
      alert('do you want to copy this')
  }, false)
}

const navElement = document.getElementsByTagName('nav')[0]
navElement.addEventListener('focus', event => {
    event.target.style.background = 'black'
})

navElement.addEventListener('blur', event => {
    event.target.style.background = ''
})



