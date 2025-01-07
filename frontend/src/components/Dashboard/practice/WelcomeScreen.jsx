import { motion } from 'framer-motion'
import Button from '../../ui/Button'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export function WelcomeScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl  bg-gray-100    rounded-3xl shadow-2xl p-10  w-full text-center flex flex-col items-center"
    >
       <div className='flex flex-col items-center '>
       <DotLottieReact className='hidden md:flex'
          src="https://lottie.host/393336f4-c3a0-4b32-bdff-6b1fd7a2e947/iEW8pFA1Bp.lottie"
          loop
          autoplay
          speed={1}
          style={{ width: "150px", height: "250px" }}
        />
      <h1 className="text-4xl font-extrabold text- mb-6">Timed Quiz Practice</h1>
       </div>
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


