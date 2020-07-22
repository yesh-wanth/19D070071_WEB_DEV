const navSlide = () => {
    const menic = document.querySelector('.menic');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    menic.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });

        menic.classList.toggle('toggle');
    });

    
}

navSlide();
