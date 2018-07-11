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

let opacityEvents = Array.from(document.querySelectorAll("img"));
opacityEvents.forEach(el => el.addEventListener("mouseenter", (e) => {
  e.target.style.opacity = 0.5;
}));
opacityEvents.forEach(el => el.addEventListener("mouseleave", (e) => {
  e.target.style.opacity = 1;
}));
let customButton = document.querySelector("button");
customButton.addEventListener("click", () => {
  contactArea.scrollIntoView({behavior:'smooth'});
})
let contactArea = document.querySelector(".contact h4");
contactArea.addEventListener("mouseover", (e) => {
  // TweenMax.to(".contact", 1.5, {y:25});
  document.querySelector("#map").style.display = "block";
});

//MapId
// var map = L.map('map').setView([30.26, -97.74], 10);
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ',
//     maxZoom: 18
// }).addTo(map);

// var marker = new L.Marker([30.27, -97.77], {
//   icon: icon_normal
// });

// map.addLayer(marker);
// var popup = L.popup()
//     .setContent('<p>Zilker Park</p>');
// marker.bindPopup(popup).openPopup();

var map = L.map('map').setView([30.27, -97.70], 10);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ',
    maxZoom: 18
}).addTo(map);

// var icon_normal = new L.icon({
//     iconUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-icon.png',
//     iconAnchor: [12, 41],
//     popupAnchor: [0, -41]
// });

var marker = new L.Marker([30.27, -97.77], {
    icon: icon_normal
});

map.addLayer(marker);
var popup = L.popup()
    .setContent('<p>Zilker Park</p>');
marker.bindPopup(popup).openPopup();
