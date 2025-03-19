let btnOpen = document.querySelector('.btn-open');
let section2 = document.querySelector('.section2');
let audio = document.getElementById('background-audio');

btnOpen.addEventListener('click', () => {

    audio.play().catch(error => console.log("Autoplay gagal: ", error));

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

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        audio.pause(); 
    } else {
        audio.play().catch(error => console.log("Autoplay gagal: ", error));
    }
});