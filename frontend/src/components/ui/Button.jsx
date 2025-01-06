import { motion } from 'framer-motion'

export default function Button({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-2 bg-green-600 text-white rounded-lg font-medium
        shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}


