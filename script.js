// Set the date we're counting down to
var countDownDate = new Date("Sep 21, 2024 11:30:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡El casamiento ha comenzado!";
    }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    
    // Intenta reproducir la música automáticamente
    music.play().catch(function(error) {
        // Si el navegador bloquea la reproducción automática, muestra el botón de reproducción
        var playButton = document.createElement('button');
        playButton.classList.add('btn', 'btn-primary', 'm-3');
        playButton.innerHTML = 'Reproducir música';
        playButton.onclick = function() {
            music.play();
            playButton.remove();
        };
        document.body.appendChild(playButton);
    });
});