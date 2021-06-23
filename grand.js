const navToggler = document.querySelector('.nav-toggler');
const navLinks = document.querySelector('.nav-links-container');

navToggler.addEventListener('click', () => {
 navLinks.classList.toggle('active');
 
})

