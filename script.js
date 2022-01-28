const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navItem = document.querySelector('.nav-list');

closeBtn.addEventListener('click', () => {
    navItem.classList.toggle('active');
});

menuBtn.addEventListener('click', () => {
    navItem.classList.toggle('active');
});
