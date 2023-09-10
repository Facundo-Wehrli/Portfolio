/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*=============== MENU SHOW ===============*/
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// validate if constant exists 


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    //When the scroll is greaterthan 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
/*=============== EMAIL JS ===============*/
//DOCS:  https://www.emailjs.com/docs/tutorial/creating-contact-form/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

// serviceID - templateID - #form - publivcKey
emailjs.sendForm('service_hnhfcvm', 'template_o4xwpy7', '#contact-form', 'nMa5rYlyfQyz1LF2j')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'
        
        //Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent= ''
        }, 4000)

        //Clear input fields
        contactForm.reset()
    }, (error) =>{
        //Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
        console.log(error)
    })
}
contactForm.addEventListener('submit', sendEmail)

// TODO Min: 1:12:36

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
