// Set the total time for the game in seconds
let totalTime = 30; // 30 seconds
let timeRemaining = totalTime;
let progressBar = document.querySelector('#progress-bar div');
let timerDisplay = document.getElementById('timer');

// Function to update the progress bar and timer
function updateProgressBar() {
    // Calculate the percentage of time remaining
    let percentage = (timeRemaining / totalTime) * 100;
    
    // Update the width of the progress bar
    progressBar.style.width = percentage + '%';

    // Update the timer display
    timerDisplay.textContent = 'Time: ' + timeRemaining + 's';
}

// Function to start the timer and update the progress bar every second
function startTimer() {
    let timerInterval = setInterval(function() {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateProgressBar();
        } else {
            clearInterval(timerInterval);
            // Optional: Add any end game functionality here
            alert('Game Over!');
        }
    }, 1000); // Update every second
}

// Start the timer when the game begins
startTimer();
