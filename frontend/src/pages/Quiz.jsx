import { useState } from "react";
import { Brain, Star, ArrowLeft, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { question: "What is 5 + 3?", options: [6, 7, 8, 9], correct: 8 },
    { question: "If you have 4 apples and get 2 more, how many do you have?", options: [4, 5, 6, 7], correct: 6 },
    { question: "What is 2 + 4?", options: [4, 5, 6, 7], correct: 6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <button className="p-2 rounded-full bg-purple-700 hover:bg-purple-800">
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <div className="flex items-center gap-3">
            <Brain className="w-7 h-7 text-yellow-300" />
            <span className="text-2xl font-semibold">Math Quiz</span>
          </div>
          <div className="flex items-center gap-2 bg-white text-purple-600 px-3 py-1 rounded-full shadow-md">
            <Star className="w-6 h-6 text-yellow-500" />
            <span className="font-semibold">{score}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        {!showResult ? (
          <div className="bg-white shadow-lg rounded-2xl p-8">
            {/* Progress Bar */}
            <div className="relative w-full bg-slate-200 rounded-full h-4 mb-8">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Question */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-purple-700">{questions[currentQuestion].question}</h2>
              <p className="text-gray-500">Select the correct answer</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 font-semibold rounded-xl hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  {option}
                </button>
              ))}
            </div>

           <Link to='/dashboard/learn/Math/chatbot'>
           <div className="py-5 text-center ">
                <button className="btn bg-white text-purple-800">Submit</button>
            </div></Link>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
            <div className="mb-6">
              {score === questions.length ? (
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto" />
              ) : (
                <Sparkles className="w-16 h-16 text-purple-500 mx-auto" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-purple-800 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600 mb-6">You scored {score} out of {questions.length}</p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors">
                Try Again
              </button>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
                Next Lesson
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Quiz;
