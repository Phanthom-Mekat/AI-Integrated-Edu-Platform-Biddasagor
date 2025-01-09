import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Brain, Star, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Thermometer from './Thermometer';

const MathProblems = () => {
  const problems = [
    { id: 1, question: "What is 5 + 3?", answer: "8" },
    { id: 2, question: "What is 10 - 4?", answer: "6" },
    { id: 3, question: "What is 2 × 6?", answer: "12" },
    { id: 4, question: "What is 15 ÷ 3?", answer: "5" },
    { id: 5, question: "What is 7 + 8?", answer: "15" },
    { id: 6, question: "What is 20 - 7?", answer: "13" },
    { id: 7, question: "What is 4 × 4?", answer: "16" },
    { id: 8, question: "What is 18 ÷ 2?", answer: "9" },
    { id: 9, question: "What is 11 + 6?", answer: "17" },
    { id: 10, question: "What is 25 - 8?", answer: "17" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (value) => {
    setAnswer(value);
    if (value === problems[currentQuestion].answer) {
      setIsCorrect(true);
      setScore(prev => prev + 1);
      // Wait for 1 second before moving to next question
      setTimeout(() => {
        if (currentQuestion < problems.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setAnswer('');
          setIsCorrect(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Header */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-purple-600">Practice Problems</h1>
        </div>
        <div className="bg-white rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span className="text-xl font-bold">Score: {score}/10</span>
        </div>
      </motion.div>

      <div className='flex gap-2'>
        <div className="space-y-6 w-1/2 mx-auto">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentQuestion}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-gray-700">
                  Question {currentQuestion + 1}
                </h3>
              </div>
              
              <p className="text-2xl text-gray-800 mb-3">{problems[currentQuestion].question}</p>
              
              <div className="flex items-center gap-3">
                <div>Answer:</div>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  className="w-2/3 px-4 py-2 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="?"
                  disabled={isCorrect}
                />
                
                {answer && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2"
                  >
                    {isCorrect ? (
                      <Check className="w-8 h-8 text-green-500" />
                    ) : (
                      <X className="w-8 h-8 text-red-500" />
                    )}
                  </motion.div>
                )}
              </div>

              {isCorrect && currentQuestion < problems.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center text-green-600"
                >
                  <ArrowRight className="w-6 h-6 mx-auto animate-bounce" />
                  Next question coming up...
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='w-1/3'>
          <Thermometer score={score} />
        </div>
      </div>

      {/* Celebration when all answers are correct */}
      {score === 10 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">
              🎉 Perfect Score! 🎉
            </h2>
            <p className="text-xl text-gray-700 py-5">
              You're a Math Superstar!
            </p>
            <Link to="/dashboard/practice">
              <button className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'>
                Practice again
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MathProblems;
