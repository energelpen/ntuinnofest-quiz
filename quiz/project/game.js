import { foodItems, beneficiaries } from './data.js';

class Game {
  constructor() {
    this.score = 0;
    this.timeLeft = 60;
    this.timer = null;
    this.gameState = 'start';

    this.startScreen = document.getElementById('start-screen');
    this.gameBoard = document.getElementById('game-board');
    this.endScreen = document.getElementById('end-screen');
    this.scoreElement = document.getElementById('score');
    this.timeLeftElement = document.getElementById('time-left');
    this.finalScoreElement = document.getElementById('final-score');
    this.feedbackElement = document.getElementById('feedback');

    document.getElementById('start-button').addEventListener('click', () => this.startGame());
    document.getElementById('play-again-button').addEventListener('click', () => this.startGame());

    this.selectedFood = null;

    this.initializeGame();
  }

  initializeGame() {
    const foodGrid = document.getElementById('food-items');
    foodGrid.innerHTML = foodItems.map(item => `
      <div class="food-item bg-white p-4 rounded-lg shadow-md cursor-pointer" draggable="true" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="w-full h-32 object-cover mb-2 rounded">
        <p class="text-center">${item.name}</p>
      </div>
    `).join('');

    const beneficiariesContainer = document.getElementById('beneficiaries');
    beneficiariesContainer.innerHTML = beneficiaries.map(beneficiary => `
      <div class="beneficiary p-4 bg-blue-100 rounded-lg shadow-md" data-type="${beneficiary.type}">
        <h3 class="text-center font-semibold">${beneficiary.title}</h3>
        <p class="text-center text-sm">${beneficiary.description}</p>
      </div>
    `).join('');

    this.setupInteractions();
  }

  setupInteractions() {
    const foodItems = document.querySelectorAll('.food-item');
    const beneficiaryZones = document.querySelectorAll('.beneficiary');

    foodItems.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.dataset.id);
        item.classList.add('opacity-50');
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('opacity-50');
      });

      item.addEventListener('click', () => {
        this.selectedFood = item;
        this.highlightSelection(item);
      });
    });

    beneficiaryZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('bg-blue-200');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('bg-blue-200');
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('bg-blue-200');
        const foodId = e.dataTransfer.getData('text/plain');
        const foodItem = document.querySelector(`.food-item[data-id="${foodId}"]`);
        this.handleMatch(foodItem, zone.dataset.type, zone);
      });

      zone.addEventListener('click', () => {
        if (this.selectedFood) {
          this.handleMatch(this.selectedFood, zone.dataset.type, zone);
          this.selectedFood = null;
        }
      });
    });
  }

  highlightSelection(selected) {
    document.querySelectorAll('.food-item').forEach(item => item.classList.remove('border-4', 'border-blue-500'));
    selected.classList.add('border-4', 'border-blue-500');
  }

  handleMatch(foodItem, beneficiaryType, zone) {
    const foodData = foodItems.find(item => item.id === foodItem.dataset.id);
    const isCorrect = foodData.correctBeneficiary === beneficiaryType;

    if (isCorrect) {
      this.score++;
      this.scoreElement.textContent = this.score;
      this.showFeedback(foodData.explanation, true);
      zone.appendChild(foodItem);
      foodItem.classList.remove('cursor-pointer');
      foodItem.classList.add('m-2', 'bg-blue-50', 'shadow-lg');
    } else {
      this.showFeedback('Try again! Consider the specific needs of each group.', false);
    }
  }

  showFeedback(message, isCorrect) {
    this.feedbackElement.textContent = message;
    this.feedbackElement.className = `fixed top-4 left-1/2 transform -translate-x-1/2 p-2 rounded bg-opacity-70 text-white ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`;
    this.feedbackElement.classList.remove('hidden');
    setTimeout(() => {
      this.feedbackElement.classList.add('hidden');
    }, 2000);
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

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});