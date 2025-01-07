import { motion } from 'framer-motion'
import Button from '../../../ui/Button'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Link } from 'react-router-dom'

export function WelcomeCard({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl  bg-gray-100    rounded-3xl shadow-2xl p-10  w-full text-center flex flex-col items-center"
    >
        <div className='flex flex-col items-center '>
         <DotLottieReact className='hidden md:flex'
          src="https://lottie.host/bb2f98bc-8675-4850-baf6-36d439a5c880/DEGkrRVFCG.lottie"
          loop
          autoplay
          speed={1}
          style={{ width: "150px", height: "250px" }}
        />
      <h1 className="text-4xl font-extrabold text- mb-6">Problem Solve Practice</h1>
      </div>
      <p className="text- text-xl mb-8">Try and solve math problems</p>
        <div className=" flex flex-col gap-4">
                <Link to='/dashboard/basicPracticePage' >
                <button  className="w-[300px] py-4 bg-green-500 hover:bg-green-600 text- font-semibold rounded-lg shadow-md transition duration-300">Easy</button>
                </Link>

                <Link to='/dashboard/basicPracticePage'><Button  className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text- font-semibold rounded-lg shadow-md transition duration-300">
                  Medium 
                </Button></Link>
                
               <Link to='/dashboard/basicPracticePage'> <Button  className="w-full py-4 bg-red-500 hover:bg-red-600 text- font-semibold rounded-lg shadow-md transition duration-300"> Hard </Button></Link>
              </div>
      <p className="text- text-sm mt-8">
        Select a difficulty level to start . Few Questions will be given for you to solve.
      </p>
    </motion.div>
  )
}


