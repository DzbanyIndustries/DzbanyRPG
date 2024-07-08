document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");

    if (countdownElement) {
        const countDownDate = new Date("Jul 20, 2024 19:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.innerHTML = (days < 10 ? "0" + days : days) + " dni<br>" +
                                             (hours < 10 ? "0" + hours : hours) + " godzin<br>" +
                                             (minutes < 10 ? "0" + minutes : minutes) + " minut<br>" +
                                             (seconds < 10 ? "0" + seconds : seconds) + " sekund";
            } else {
                clearInterval(countdownFunction);
                countdownElement.innerHTML = "Serwer jest już otwarty!";
            }
        }

        updateCountdown();

        const countdownFunction = setInterval(updateCountdown, 1000);
    } else {
        console.error("Element with ID 'countdown' not found.");
    }
});