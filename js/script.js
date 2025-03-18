let btnOpen = document.querySelector('.btn-open');
let section2 = document.querySelector('.section2');

btnOpen.addEventListener('click', () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Gagal masuk fullscreen: ${err.message}`);
        });
    }

    section2.classList.remove('hidden');
    btnOpen.classList.add('hidden');
    // section2.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        window.scrollTo({
            top: section2.offsetTop,
            behavior: 'smooth'
        });
    }, 300);
});