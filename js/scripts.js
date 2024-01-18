

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', (e) => {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    e.target.classList.toggle('fa-xmark');
});


let typing_effect = new Typed('.auto-input', {
    strings: ['Font-End Developer!', 'Freelancer!', 'Designer!'],
    typeSpeed: 100,         
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});