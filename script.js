console.log("JS Running...");


document.addEventListener('DOMContentLoaded', function(){
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active')
        navLinks.classList.toggle('active')
    });
    
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(){
            hamburger.classList.remove('active')
            navLinks.classList.remove('active')
        })
        
    })






    const contactForm = document.getElementById("contact-form")
 contactMessage = document.getElementById("contact-message")

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_agjzg9g','template_ozrhde7','#contact-form','KG8w3aez8PwBvFfFc')
    .then(() => {
        //Show sent message
        contactMessage.textContent = "Thank you! Your message has been sent successfully. I’ll be in touch soon—excited to connect and explore new ideas together! Sent "

        // Remove message after five seconds
        setTimeout (() =>{
            contactMessage.textContent = ""
        }, 5000)

        //clear input field
        contactForm.reset()
    }), () =>{
        //Show error message
        contactMessage.textContent="Message not sent (service error) ❌"
    }
} 

contactForm.addEventListener('submit', sendEmail)
    









    
    


})