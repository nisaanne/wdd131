const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

{var currentYear = new Date().getFullYear();

    document.getElementById('current-year').textContent = currentYear;

};


    {let lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "This document was last modified on: " + lastModifiedDate;}