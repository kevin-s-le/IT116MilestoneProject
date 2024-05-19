let countdown;
const endDate = new Date("June 14, 2024 00:00:00").getTime(); // Set the end date to June 14th, 2024

const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

// Function to calculate the difference and update the countdown display
function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeLeft = endDate - currentTime;
    if(timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        daysSpan.textContent = days.toString().padStart(2, '0');
        hoursSpan.textContent = hours.toString().padStart(2, '0');
        minutesSpan.textContent = minutes.toString().padStart(2, '0');
        secondsSpan.textContent = seconds.toString().padStart(2, '0');
    } else {
        clearInterval(countdown);
        daysSpan.textContent = "00";
        hoursSpan.textContent = "00";
        minutesSpan.textContent = "00";
        secondsSpan.textContent = "00";
    }
}

// Function to start the countdown
function startCountdown() {
    clearInterval(countdown);
    countdown = setInterval(updateCountdown, 1000);
}

// Call startCountdown initially to start the countdown immediately
startCountdown();

// Function to click button to create confetti
document.getElementById('confettiBtn').addEventListener('click', () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.7 }
    });
  });