
import { FaPlus, FaMinus, FaTimes, FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MathPage = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center bg-white rounded-lg p-4 shadow-md">
            <h1 className="text-4xl font-bold text-blue-600 flex items-center gap-2">
              <FaBook className="text-yellow-500" />
              Learn Math
            </h1>
            <select
              className="w-[180px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Grade</option>
              <option value="grade1">Grade 1</option>
              <option value="grade2">Grade 2</option>
              <option value="grade3">Grade 3</option>
              <option value="grade4">Grade 4</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to='/dashboard/learn/Math/addition'><MathCard title="Addition" color="bg-green-500" icon={<FaPlus className="w-8 h-8" />} image={'/public/addition.png'} /></Link>
            <MathCard title="Subtraction" color="bg-yellow-500" icon={<FaMinus className="w-8 h-8" />} image={'/public/subtr.png'} />
            <MathCard title="Multiplication" color="bg-pink-500" icon={<FaTimes className="w-8 h-8" />} image={'/public/multiplication.png'} />
          </div>
        </div>
      </div>
    </div>
  )
}

const MathCard = ({ title, color, icon, image }) => (
  <div className={`${color} text-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer`}>
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {icon}
      </div>
      <div className="aspect-video bg-white/70 rounded-lg mb-4">
        <img src={image} alt=""  className='h-[250px] object-center'/>
      </div>
      <p className="text-sm">Learn {title.toLowerCase()} with fun exercises!</p>
    </div>
  </div>
)

export default MathPage

