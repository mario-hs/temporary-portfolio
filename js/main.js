const Menu = (iconId, navId) => {
    const icon = document.getElementById(iconId),
    nav = document.getElementById(navId)

    if(icon && nav){
        icon.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

Menu('nav-icon','nav-menu')

const navLink = document.querySelectorAll('.nav_link')

function linkActive(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkActive))


const srTop = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1500,
    reset: true
});

srTop.reveal('.home_title',{}); 
srTop.reveal('.home_img',{delay: 400}); 
srTop.reveal('.home_social-icon',{interval: 200}); 

srTop.reveal('.contact_input',{interval: 200}); 

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 1500,
    reset: true
});

srLeft.reveal('.about_img',{}); 
srLeft.reveal('.about_subtitle',{delay: 400}); 
srLeft.reveal('.about_text',{delay: 400}); 

srLeft.reveal('.skills_subtitle',{}); 
srLeft.reveal('.skills_text',{}); 
srLeft.reveal('.skills_data',{interval: 200}); 
srLeft.reveal('.skills_img',{delay: 600});

srLeft.reveal('.work_img',{interval: 200}); 