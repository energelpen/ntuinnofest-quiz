import React, { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { Heart } from 'lucide-react';

type GameState = 'start' | 'playing' | 'end';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [finalScore, setFinalScore] = useState(0);

  const handleGameEnd = (score: number) => {
    setFinalScore(score);
    setGameState('end');
  };

  const StartScreen = () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">SourceFoods Matching Game</h1>
      <p className="text-xl mb-8">Help distribute food wisely! Match the right food donations to those who need them most.</p>
      <button
        onClick={() => setGameState('playing')}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Start Game
      </button>
    </div>
  );

  const EndScreen = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
      <p className="text-2xl mb-4">You made {finalScore} correct matches!</p>
      <p className="text-lg mb-8">Remember these needs when donating food to help those in your community!</p>
      <button
        onClick={() => setGameState('playing')}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Play Again
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Heart className="w-8 h-8 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold">SourceFoods</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {gameState === 'start' && <StartScreen />}
        {gameState === 'playing' && <GameBoard onGameEnd={handleGameEnd} />}
        {gameState === 'end' && <EndScreen />}
      </main>
    </div>
  );
}

export default App;