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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav Links, Top Button & DOM is awesome
const navBar = document.getElementsByTagName('a');
navBar[0].textContent = "Services";
navBar[1].textContent = "Product";
navBar[2].textContent = "Vision";
navBar[3].textContent = "Features";
navBar[4].textContent = "About";
navBar[5].textContent = "Contact";

const ctaButton = document.getElementsByTagName("button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaTitle = document.getElementsByTagName("h1")[0];
ctaTitle.textContent = siteContent["cta"]["h1"];

//All h4s
const featuresTitle = document.getElementsByTagName("h4")[0];
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
const aboutTitle = document.getElementsByTagName("h4")[1];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
const servicesTitle = document.getElementsByTagName("h4")[2];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
const productTitle = document.getElementsByTagName("h4")[3];
productTitle.textContent = siteContent["main-content"]["product-h4"];
const visionTitle = document.getElementsByTagName ("h4")[4];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

//All p's
const featuresPara = document.getElementsByTagName("p")[0];
featuresPara.textContent = siteContent["main-content"]["features-content"];
const aboutPara = document.getElementsByTagName("p")[1];
aboutPara.textContent = siteContent["main-content"]["about-content"];
const servicesPara = document.getElementsByTagName("p")[2];
servicesPara.textContent = siteContent["main-content"]["services-content"];
const productPara = document.getElementsByTagName("p")[3];
productPara.textContent = siteContent["main-content"]["product-content"];
const visionPara = document.getElementsByTagName ("p")[4];
visionPara.textContent = siteContent["main-content"]["vision-content"];

//Images
const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact & Footer

const contactTitle = document.getElementsByTagName("h4")[5];
contactTitle.textContent = siteContent["contact"]["contact-h4"];
const addressPara = document.getElementsByTagName("p")[5];
addressPara.textContent = siteContent["contact"]["address"];
const phonePara = document.getElementsByTagName("p")[6];
phonePara.textContent = siteContent["contact"]["phone"];
const emailPara = document.getElementsByTagName("p")[7];
emailPara.textContent = siteContent["contact"]["email"];

const footerPara = document.getElementsByTagName("p")[8];
footerPara.textContent = siteContent["footer"]["copyright"];


//Use of append;prepend & change nav to green

navBar[0].style.color = "green";
navBar[1].style.color = "green";
navBar[2].style.color = "green";
navBar[3].style.color = "green";
navBar[4].style.color = "green";
navBar[5].style.color = "green";

const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);

const photosLink = document.createElement('a');
photosLink.textContent = "Photos";
photosLink.href = "#";
document.querySelector("nav").prepend(photosLink);








