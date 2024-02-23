document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and audio element
    var playButton = document.getElementById("playButton");
    var backgroundMusic = document.getElementById("backgroundMusic");

    // Add event listener to the button
    playButton.addEventListener("click", function() {
        // Toggle playback
        if (backgroundMusic.paused) {
            backgroundMusic.play(); // Start playing
            playButton.textContent = "Pause Background Music";
        } else {
            backgroundMusic.pause(); // Pause
            playButton.textContent = "Play Background Music";
        }
    });
});
