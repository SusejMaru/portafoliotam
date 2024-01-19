document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('display');

    document.querySelectorAll('.drum-pad').forEach(function(pad) {
        pad.addEventListener('click', function() {
            playSound(pad.id);
        });
    });

    document.addEventListener('keydown', function(event) {
        var key = event.key.toUpperCase();
        if (document.getElementById(key)) {
            playSound(key);
        }
    });

    function playSound(padId) {
        var audio = document.getElementById('clip' + padId);
        audio.currentTime = 0;
        audio.play();

        display.textContent = audio.parentNode.textContent.trim();
    }
});
