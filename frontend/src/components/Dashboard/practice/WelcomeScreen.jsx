import { motion } from 'framer-motion'
import Button from '../../ui/Button'

export function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl  bg-gray-100    rounded-3xl shadow-2xl p-10  w-full text-center flex flex-col items-center"
    >
      <h1 className="text-5xl font-extrabold text- mb-6">Select Practice Mode</h1>
      <p className="text- text-xl mb-8">Test your math skills with our timed quiz!</p>
      <div className="space-y-5">
        <Button onClick={() => onStart('easy')}  className="w-full py-4 bg-green-500 hover:bg-green-600 text- font-semibold rounded-lg shadow-md transition duration-300">
          Easy
        </Button>
        <Button onClick={() => onStart('medium')} className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text- font-semibold rounded-lg shadow-md transition duration-300">
          Medium    
        </Button>
        <Button onClick={() => onStart('hard')} className="w-full py-4 bg-red-500 hover:bg-red-600 text- font-semibold rounded-lg shadow-md transition duration-300">
          Hard
        </Button>
      </div>
      <p className="text- text-sm mt-8">
        Select a difficulty level to start the quiz. The timer will start as soon as you click the button.
      </p>
    </motion.div>
  )
}


