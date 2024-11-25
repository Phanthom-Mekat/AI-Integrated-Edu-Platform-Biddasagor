
import { FaUser, FaBook, FaMedal } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Top Achievers</h1>

      <div className="bg-white rounded-lg shadow-lg mb-10 overflow-hidden p-3">
        <LeaderboardTable />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Statistics</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/public/dp-removebg-preview.png"
              alt="User Avatar"
              className="rounded-full w-32 h-32 border-4 border-primary"
            />
            <h2 className="text-2xl font-bold mt-4 text-primary">Kid A</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center text-gray-600">
                <FaUser className="mr-2 text-primary" /> Learning Progress
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center text-gray-600">
                <FaBook className="mr-2 text-primary" /> Lessons Completed
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-secondary h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center text-gray-600">
                <FaMedal className="mr-2 text-primary" /> Achievements Unlocked
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-accent h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <FavTopics />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Weekly Score</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                      border: 'none', 
                      borderRadius: '4px', 
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
                    }}
                  />
                  <Bar dataKey="score" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Win Rate</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Puzzle</span>
                  <span className="text-sm font-medium text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">Quiz</span>
                  <span className="text-sm font-medium text-gray-600">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardContent;

