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


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUP = document.getElementById('scroll-up')
    //When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll') : scrollUP.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
     const scrollY = window.pageYOffset
     sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
/*https://scrollrevealjs.org/guide/hello-world.html */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.services__card, .projects__card` ,{interval: 100})
