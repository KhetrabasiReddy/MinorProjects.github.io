document.addEventListener('click', function() {
    let audio = document.createElement('audio');
    audio.setAttribute('src', 'sound.mp3');
    audio.loop = true;
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
});
