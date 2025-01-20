const menuIcon = document.querySelector('#menu-icons'); // Updated to match the HTML ID
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};
