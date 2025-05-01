const boxes = document.querySelectorAll('.box');
const sections = {
    opening: document.getElementById('section-opening'),
    welcome: document.getElementById('section-welcome'),
    event: document.getElementById('section-event'),
    maps: document.getElementById('section-maps'),
    gift: document.getElementById('section-gift'),
    thanks: document.getElementById('section-thanks'),
};

// Fungsi untuk aktifkan section & menu
function activateSection(target) {
    boxes.forEach(b => b.classList.remove('bg-[#FFFF]', 'text-black'));

    Object.values(sections).forEach(section => {
        section.classList.add('opacity-0', 'pointer-events-none');
        section.classList.remove('opacity-100');
    });

    const selectedBox = document.querySelector(`.box[data-target="${target}"]`);
    const selectedSection = sections[target];

    if (selectedBox && selectedSection) {
        selectedBox.classList.add('bg-[#FFFF]', 'text-black');
        selectedSection.classList.remove('opacity-0', 'pointer-events-none');
        selectedSection.classList.add('opacity-100');

        selectedBox.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });

        const fadeUp = selectedSection.querySelectorAll('[data-anim="fade-up"]');
        fadeUp.forEach(el => {
            el.classList.remove('fade-up');
            void el.offsetWidth; // force reflow
            el.classList.add('fade-up');
        });
        const fadeDown = selectedSection.querySelectorAll('[data-anim="fade-down"]');
        fadeDown.forEach(el => {
            el.classList.remove('fade-down');
            void el.offsetWidth; // force reflow
            el.classList.add('fade-down');
        });
        const zoomIn = selectedSection.querySelectorAll('[data-anim="zoom-in"]');
        zoomIn.forEach(el => {
            el.classList.remove('zoom-in');
            void el.offsetWidth; // force reflow
            el.classList.add('zoom-in');
        });
        const zoomOut = selectedSection.querySelectorAll('[data-anim="zoom-out"]');
        zoomOut.forEach(el => {
            el.classList.remove('zoom-out');
            void el.offsetWidth; // force reflow
            el.classList.add('zoom-out');
        });

    }
}


// Event klik pada menu box
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const target = box.getAttribute('data-target');
        activateSection(target);
    });
});

// Aktifkan default: opening
activateSection('opening');

// Event tombol open
const btnOpen = document.querySelector('.btn-open');
const navbarBottom = document.querySelector('.navbar-bottom');
let audio = document.getElementById('background-audio');

btnOpen.addEventListener("click", () => {
    // audio.play().catch(error => console.log("Autoplay gagal: ", error));

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Gagal masuk fullscreen: ${err.message}`);
        });
    }

    navbarBottom.classList.remove('hidden');
    btnOpen.classList.add('hidden');

    // Aktifkan langsung section welcome
    activateSection('welcome');
});

// document.addEventListener('visibilitychange', () => {
//     if (document.hidden) {
//         audio.pause(); 
//     } else {
//         audio.play().catch(error => console.log("Autoplay gagal: ", error));
//     }
// });
