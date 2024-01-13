document.addEventListener('DOMContentLoaded', function () {
    // Countdown logic
const countDownDate = new Date("March 20, 2024 00:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `<div class="countdown-label"></div><div class="countdown-number">${days}</div>`;
    document.getElementById('hours').innerHTML = `<div class="countdown-label"></div><div class="countdown-number">${hours}</div>`;
    document.getElementById('minutes').innerHTML = `<div class="countdown-label"></div><div class="countdown-number">${minutes}</div>`;
    document.getElementById('seconds').innerHTML = `<div class="countdown-label"></div><div class="countdown-number">${seconds}</div>`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = 'Days: 0';
        document.getElementById('hours').innerHTML = 'Hours: 0';
        document.getElementById('minutes').innerHTML = 'Minutes: 0';
        document.getElementById('seconds').innerHTML = 'Seconds: 0';
        document.querySelector('.countdown').innerHTML = 'Event has already occurred!';
    }
}, 1000);

    // Slideshow logic
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
