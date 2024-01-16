

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    e.target.classList.toggle('fa-xmark');
});