function showMessage() {
    const message = document.getElementById('specialMessage');
    message.classList.remove('hidden');
    message.style.animation = "fadeIn 1.5s ease";
}

function playMusicAndShowMessage() {
    const audio = document.getElementById('backgroundMusic');
    const message = document.getElementById('specialMessage');

    // Memulai pemutaran musik
    audio.play(play);

    // Menampilkan pesan spesial
    message.classList.remove('hidden');
    message.style.animation = "fadeIn 1.5s ease";
}
