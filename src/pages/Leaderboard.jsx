
import { FaUser, FaBook, FaMedal } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import LeaderboardTable from '../components/Dashboard/LeaderboardTable';
import FavTopics from '../components/Dashboard/FavTopics';

const data = [
  { day: "Mon", score: 4 },
  { day: "Tue", score: 7 },
  { day: "Wed", score: 5 },
  { day: "Thu", score: 6 },
  { day: "Fri", score: 8 },
  { day: "Sat", score: 9 },
  { day: "Sun", score: 7 },
];

function LeaderboardContent() {
  return (

   <div className=''>

    <div className='text-center '>
        <h1 className='text-4xl font-bold'>Top Achievers</h1>
    </div>

    <div className='mb-10 mt-5 '>
        <LeaderboardTable></LeaderboardTable>
    </div>
    <div className='my-5 '>
        <h1 className='text-center text-4xl font-bold'>Statistics</h1>
    </div>
    <div className="grid gap-8 md:grid-cols-2">

      <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex  mb-6 flex-col items-center">
          <img
            src="/public/dp-removebg-preview.png"
            alt="User Avatar"
            className="rounded-full w-32 h-32"
          />
        
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Kid A</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <FaUser className="mr-2" /> Learning Progress
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <FaBook className="mr-2" /> Lessons Completed
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 flex items-center">
              <FaMedal className="mr-2" /> Achievements Unlocked
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>


        <div className=' my-5' >
            <FavTopics></FavTopics>
        </div>

        
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        
        <div className="h-[470px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='h-[200px]  flex flex-col gap-4 p-3'>
          <h1 className='text-2xl font-semibold'>Win Rate</h1>
        <span>Puzzle</span><div className='flex gap-2 items-center'><progress className="progress progress-success w-56 h-5" value="70" max="100"></progress><span>70%</span></div>
        <span>Quiz</span><div className='flex gap-2 items-center' ><progress className="progress progress-info  w-56 h-5" value="50" max="100"></progress><span>50%</span></div>
        </div>
      </div>
    </div>
    </div> 
  );
}

export default LeaderboardContent;

