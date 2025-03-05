import { foodItems, beneficiaries } from './data.js';

class Game {
  constructor() {
    // Game state
    this.score = 0;
    this.timeLeft = 60;
    this.timer = null;
    this.gameState = 'start'; // 'start', 'playing', 'end'

    // DOM elements
    this.startScreen = document.getElementById('start-screen');
    this.gameBoard = document.getElementById('game-board');
    this.endScreen = document.getElementById('end-screen');
    this.scoreElement = document.getElementById('score');
    this.timeLeftElement = document.getElementById('time-left');
    this.finalScoreElement = document.getElementById('final-score');
    this.feedbackElement = document.getElementById('feedback');

    // Event listeners
    document.getElementById('start-button').addEventListener('click', () => this.startGame());
    document.getElementById('play-again-button').addEventListener('click', () => this.startGame());

    // Initialize the game
    this.initializeGame();
  }

  initializeGame() {
    // Initialize food items
    const foodGrid = document.getElementById('food-items');
    foodGrid.innerHTML = foodItems.map(item => `
      <div class="food-item" draggable="true" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
      </div>
    `).join('');

    // Initialize beneficiaries
    const beneficiariesContainer = document.getElementById('beneficiaries');
    beneficiariesContainer.innerHTML = beneficiaries.map(beneficiary => `
      <div class="beneficiary" data-type="${beneficiary.type}">
        <div class="beneficiary-header">
          ${beneficiary.icon}
          <h3>${beneficiary.title}</h3>
        </div>
        <p class="beneficiary-description">${beneficiary.description}</p>
      </div>
    `).join('');

    // Set up drag and drop
    this.setupDragAndDrop();
  }

  setupDragAndDrop() {
    const foodItems = document.querySelectorAll('.food-item');
    const beneficiaryZones = document.querySelectorAll('.beneficiary');

    foodItems.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.dataset.id);
        item.classList.add('dragging');
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });

    beneficiaryZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        
        const foodId = e.dataTransfer.getData('text/plain');
        const foodItem = foodItems.find(item => item.dataset.id === foodId);
        const beneficiaryType = zone.dataset.type;
        
        if (foodItem) {
          this.handleMatch(foodId, beneficiaryType);
        }
      });
    });
  }

  startGame() {
    this.score = 0;
    this.timeLeft = 60;
    this.gameState = 'playing';
    
    this.scoreElement.textContent = this.score;
    this.timeLeftElement.textContent = this.timeLeft;
    
    this.showScreen('game-board');
    
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    this.timeLeft--;
    this.timeLeftElement.textContent = this.timeLeft;
    
    if (this.timeLeft <= 0) {
      this.endGame();
    }
  }

  handleMatch(foodId, beneficiaryType) {
    const food = foodItems.find(item => item.id === foodId);
    const isCorrect = food.correctBeneficiary === beneficiaryType;
    
    if (isCorrect) {
      this.score++;
      this.scoreElement.textContent = this.score;
      this.showFeedback(food.explanation, true);
    } else {
      this.showFeedback('Try again! Consider the specific needs of each group.', false);
    }
  }

  showFeedback(message, isCorrect) {
    this.feedbackElement.textContent = message;
    this.feedbackElement.className = `feedback ${isCorrect ? 'success' : 'error'}`;
    this.feedbackElement.classList.remove('hidden');
    
    setTimeout(() => {
      this.feedbackElement.classList.add('hidden');
    }, 2000);
  }

  endGame() {
    clearInterval(this.timer);
    this.gameState = 'end';
    this.finalScoreElement.textContent = this.score;
    this.showScreen('end-screen');
  }

  showScreen(screenId) {
    [this.startScreen, this.gameBoard, this.endScreen].forEach(screen => {
      screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
  }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Game();
});