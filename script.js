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





    



    
    


})