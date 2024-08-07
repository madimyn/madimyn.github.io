// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example: Alert when the page loads
    alert('Welcome to my website!');

    // Example: Change the background color of the header when clicked
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = '#555';
    });

    // Example: Change the text of the footer when the user hovers over it
    const footer = document.querySelector('footer');
    footer.addEventListener('mouseover', () => {
        footer.textContent = 'Thanks for visiting!';
    });
    footer.addEventListener('mouseout', () => {
        footer.textContent = '© 2024 Your Name';
    });
});
