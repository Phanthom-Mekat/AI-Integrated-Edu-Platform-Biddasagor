import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import trophyAnimation from '../../../../public/trophy.json'
import  Button  from '../../ui/Button'
export function FinalScoreScreen({ score, onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
    >
      <div className="w-32 h-32 mx-auto mb-6">
        <Lottie animationData={trophyAnimation} loop={true} />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
      <p className="text-gray-600 mb-6">Your final score is:</p>
      <p className="text-5xl font-bold text-indigo-600 mb-8">{score} / 10</p>
      <Button onClick={onRestart} className="w-full">
        Play Again
      </Button>
    </motion.div>
  )
}

