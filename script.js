const buttonMobile = document.getElementById('btn_mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}

buttonMobile.addEventListener('click', toggleMenu);


