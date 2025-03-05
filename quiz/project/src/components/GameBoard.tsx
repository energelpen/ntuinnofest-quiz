import React, { useState, useEffect } from 'react';
import { FoodItem, BeneficiaryType } from '../types';
import { Heart, Baby, Home } from 'lucide-react';
import { foodItems, beneficiaries } from '../data';

interface GameBoardProps {
  onGameEnd: (score: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ onGameEnd }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [draggedItem, setDraggedItem] = useState<FoodItem | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else {
      onGameEnd(score);
    }
  }, [timeLeft, score, onGameEnd]);

  const handleDragStart = (item: FoodItem) => {
    setDraggedItem(item);
  };

  const handleDrop = (beneficiaryType: BeneficiaryType) => {
    if (!draggedItem) return;

    const isCorrect = draggedItem.correctBeneficiary === beneficiaryType;
    setFeedback({
      message: isCorrect ? draggedItem.explanation : 'Try again! Consider the specific needs of each group.',
      isCorrect
    });

    if (isCorrect) {
      setScore(s => s + 1);
    }

    setTimeout(() => setFeedback(null), 2000);
    setDraggedItem(null);
  };

  const getBeneficiaryIcon = (type: BeneficiaryType) => {
    switch (type) {
      case 'elderly': return <Heart className="w-6 h-6" />;
      case 'children': return <Baby className="w-6 h-6" />;
      case 'low-income': return <Home className="w-6 h-6" />;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold">Score: {score}</div>
        <div className="text-2xl font-bold">Time: {timeLeft}s</div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Food Items Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Food Donations</h2>
          <div className="grid grid-cols-2 gap-4">
            {foodItems.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item)}
                className="bg-gray-50 p-4 rounded-lg cursor-move hover:shadow-md transition-shadow"
              >
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                <p className="font-medium text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficiaries Section */}
        <div className="space-y-4">
          {beneficiaries.map(beneficiary => (
            <div
              key={beneficiary.type}
              onDragOver={e => e.preventDefault()}
              onDrop={() => handleDrop(beneficiary.type)}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                {getBeneficiaryIcon(beneficiary.type)}
                <h3 className="text-lg font-bold">{beneficiary.title}</h3>
              </div>
              <p className="text-gray-600">{beneficiary.description}</p>
            </div>
          ))}
        </div>
      </div>

      {feedback && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
          feedback.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
};