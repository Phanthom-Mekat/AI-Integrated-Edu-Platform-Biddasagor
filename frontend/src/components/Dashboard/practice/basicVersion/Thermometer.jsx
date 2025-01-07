import { motion } from 'framer-motion';

const Thermometer = ({ score }) => {
    const percentage = (score / 10) * 100;
  
    return (
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-4 max-w-2xl mx-auto mb-8" // Increased max-width
      >
         <div className='flex justify-center py-5'> <h1 className='text-4xl font-bold'>Progress</h1></div>
        
        <div className="relative w-40 h-[600px] mx-auto"> 
             
          {/* Thermometer Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500 rounded-full" /> 
          
          {/* Thermometer Tube */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-16 h-[500px] bg-white rounded-t-full border-8 border-red-500 overflow-hidden"> 
            {/* Mercury */}
            <motion.div 
              initial={{ height: '0%' }}
              animate={{ height: `${percentage}%` }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 right-0 bg-red-500"
            />
          </div>
  
          {/* Temperature Markers */}
          <div className="absolute bottom-16 -left-12 h-[500px] flex flex-col justify-between py-2"> 
            {[10, 8, 6, 4, 2, 0].map(mark => (
              <div key={mark} className="flex items-center">
                <div className="w-6 h-2 bg-gray-400 mr-2" /> 
                <span className="text-lg font-bold">{mark}</span> 
              </div>
            ))}
          </div>
  
          {/* Current Score Display */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4" 
          >
            <span className="text-3xl font-bold text-red-500">{score}/10</span> 
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  export default Thermometer;
