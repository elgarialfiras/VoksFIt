document.addEventListener('DOMContentLoaded', function() {
    console.log('Website VoksFit! siap digunakan!');

    // Efek gulir animasi untuk navigasi
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Elemen dengan ID ${targetId} tidak ditemukan.`);
            }
        });
    });

    // Tombol "Pick Your Style" untuk navigasi ke halaman departemen
    const pickStyleButton = document.querySelector('button');
    if (pickStyleButton) {
        pickStyleButton.addEventListener('click', function() {
            const departmentsSection = document.querySelector('.departments');
            if (departmentsSection) {
                departmentsSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Elemen dengan class .departments tidak ditemukan.');
            }
        });
    } else {
        console.error('Tombol "Pick Your Style" tidak ditemukan.');
    }
});
