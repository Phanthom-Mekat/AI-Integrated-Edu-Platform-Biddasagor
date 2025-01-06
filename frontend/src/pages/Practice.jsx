import { useState } from 'react'
import { WelcomeScreen } from '../components/Dashboard/practice/WelcomeScreen'
import { MathQuiz } from '../components/Dashboard/practice/MathQuiz'
import { FinalScoreScreen } from '../components/Dashboard/practice/FinalScoreScreen'


export default function Practice() {
  const [gameState, setGameState] = useState('welcome') 
  const [difficulty, setDifficulty] = useState('easy')
  const [finalScore, setFinalScore] = useState(null)

  const startQuiz = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    setGameState('playing')
  }

  const endQuiz = (score) => {
    setFinalScore(score)
    setGameState('finished')
  }

  const restartQuiz = () => {
    setGameState('welcome')
    setFinalScore(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8 flex justify-center items-center">
      {gameState === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
      {gameState === 'playing' && <MathQuiz difficulty={difficulty} onFinish={endQuiz} />}
      {gameState === 'finished' && <FinalScoreScreen score={finalScore} onRestart={restartQuiz} />}
    </div>
  )
}

