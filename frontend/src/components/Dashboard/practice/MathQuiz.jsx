import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Circle } from 'rc-progress'
import Lottie from 'lottie-react'
import celebrationAnimation from '../../../../public/celebration.json'
import { Check, X, Clock, Star, Trophy } from 'lucide-react'
import { generateProblem } from '../../../utils/mathProblems'
import Button from '../../ui/Button'

function CompletionScreen({ score, highestStreak, onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Adventure Complete!</h2>
      <div className="space-y-4 mb-8">
        <div className="bg-emerald-100 p-4 rounded-xl">
          <p className="text-emerald-700 text-xl font-semibold">Final Score: {score}/10</p>
        </div>
        <div className="bg-amber-100 p-4 rounded-xl">
          <p className="text-amber-700 text-xl font-semibold">Highest Streak: {highestStreak}</p>
        </div>
      </div>
      <Button onClick={onRestart} className="w-full">
        Start New Adventure
      </Button>
    </motion.div>
  )
}

export function MathQuiz({ difficulty, onFinish }) {
  const [problems, setProblems] = useState([])
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [streak, setStreak] = useState(0)
  const [highestStreak, setHighestStreak] = useState(0)
  const [hints, setHints] = useState(3)
  const [showHint, setShowHint] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const characters = ['🦸‍♂️', '🚀', '🌟', '🦄', '🎨', '🎮', '🎪', '🦹‍♂️', '🧙‍♂️', '🏆']

  const generateProblems = useCallback(() => {
    const newProblems = Array(10).fill().map(() => {
      const problem = generateProblem(difficulty)
      return {
        ...problem,
        hint: `Think about ${problem.problem.split('=')[0]} step by step!`
      }
    })
    setProblems(newProblems)
  }, [difficulty])

  useEffect(() => {
    generateProblems()
  }, [generateProblems])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          setIsComplete(true)
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = () => {
    const currentProblem = problems[currentProblemIndex]
    const isCorrect = parseInt(answer) === currentProblem.answer
    setSubmitted(true)

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1)
      setStreak((prev) => prev + 1)
      setHighestStreak((prev) => Math.max(prev, streak + 1))
      setShowCelebration(true)
      setTimeout(() => setShowCelebration(false), 1500)
    } else {
      setStreak(0)
    }
  }

  const handleHint = () => {
    if (hints > 0) {
      setHints((prev) => prev - 1)
      setShowHint(true)
    }
  }

  const handleNextQuest = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex((prev) => prev + 1)
      setAnswer('')
      setSubmitted(false)
      setShowHint(false)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    onFinish()
  }

  const progress = ((currentProblemIndex + 1) / problems.length) * 100

  if (isComplete) {
    return <CompletionScreen score={score} highestStreak={highestStreak} onRestart={handleRestart} />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl w-full relative overflow-hidden"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="relative h-16 bg-white rounded-2xl shadow-inner p-2">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 rounded-xl"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-between px-4">
            {characters.map((char, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: idx <= currentProblemIndex ? 1.2 : 0.8,
                  opacity: idx <= currentProblemIndex ? 1 : 0.5
                }}
              >
                <span className="text-2xl">{char}</span>
                {idx <= currentProblemIndex && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    ⭐️
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same... */}
      {/* Current Problem */}
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Math Adventure</h1>
          <p className="text-gray-500">Quest {currentProblemIndex + 1} of {problems.length}</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-amber-600" />
            <div className="flex flex-col">
              <span className="text-amber-600 font-medium">Streak: {streak}</span>
              <span className="text-xs text-amber-500">Best: {highestStreak}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-600 font-medium">Hints: {hints}</span>
          </div>
          <motion.div
            className="flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full"
            animate={{
              scale: timeLeft <= 10 ? [1, 1.1, 1] : 1,
              backgroundColor: timeLeft <= 10 ? ['#fef2f2', '#fee2e2', '#fef2f2'] : '#fef2f2'
            }}
            transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
          >
            <Clock className="w-5 h-5 text-rose-600" />
            <span className="text-rose-600 font-medium">{timeLeft}s</span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProblemIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-6"
        >
          {problems[currentProblemIndex] && (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-gray-800">
                  {problems[currentProblemIndex].problem}
                </span>
              </div>
              {/* Input */}
              <div className="relative max-w-xs mx-auto">
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className={`w-full text-center text-2xl py-4 rounded-xl border-3 outline-none transition-colors
                    ${submitted
                      ? answer === problems[currentProblemIndex].answer.toString()
                        ? 'border-green-400 bg-green-50'
                        : 'border-red-400 bg-red-50'
                      : 'border-indigo-200 focus:border-indigo-400'
                    }`}
                  placeholder="?"
                  disabled={submitted}
                />
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className={`absolute right-3 top-1/2 -translate-y-1/2
                        ${answer === problems[currentProblemIndex].answer.toString() ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {answer === problems[currentProblemIndex].answer.toString() ? <Check size={24} /> : <X size={24} />}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-center text-indigo-600 font-medium"
                  >
                    💡 {problems[currentProblemIndex].hint}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-8 flex justify-center gap-4">
        {!submitted && hints > 0 && (
          <Button
            onClick={handleHint}
            className="bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
          >
            Use Hint
          </Button>
        )}
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!answer}>
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuest}>
            {currentProblemIndex < problems.length - 1 ? 'Next Quest' : 'Complete Adventure'}
          </Button>
        )}
      </div>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 bottom-0 w-48 h-48"
          >
            <Lottie animationData={celebrationAnimation} loop={false} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}