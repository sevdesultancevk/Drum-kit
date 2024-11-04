document.addEventListener('DOMContentLoaded', function() {
    function playSound(e) {
        const keyCode = e.keyCode || e.target.closest('.key').getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        if (!audio) return; 
        audio.currentTime = 0; 
        audio.play();
        key.classList.add('playing');
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', removeTransition);
        key.addEventListener('click', playSound);
    });
    window.addEventListener('keydown', playSound);
});