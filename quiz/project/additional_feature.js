document.addEventListener("DOMContentLoaded", () => {
  // Game timer logic (to control countdown and progress bar movement)
  let timeLeft = 60; // Total time in seconds
  const timeLeftDisplay = document.getElementById('time-left'); // Display for time
  const progressBarInner = document.getElementById('progress-bar'); // The inner moving part of the bar
  
  // Initially hide the end screen
  const endScreen = document.getElementById('end-screen');
  endScreen.classList.add('hidden');

  // Wait for the user to start the game
  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    // Show game board
    document.getElementById('game-board').classList.remove('hidden');
    document.getElementById('start-screen').classList.add('hidden');
    
    // Update the time every second
    const timer = setInterval(() => {
      // Update the time left display
      timeLeftDisplay.textContent = timeLeft;
      
      // Calculate the width of the progress bar as a percentage of time remaining
      const percentageLeft = (timeLeft / 60) * 100;
      
      // Update the width of the progress bar
      progressBarInner.style.width = `${percentageLeft}%`;
      
      // Decrement the time left
      timeLeft--;
  
      // Stop the timer when time runs out
      if (timeLeft < 0) {
        clearInterval(timer);
        // Trigger end of game or any other logic here
        endScreen.classList.remove('hidden');
        document.getElementById('final-score').textContent = document.getElementById('score').textContent;
      }
    }, 1000); // Updates every second
  });
});
