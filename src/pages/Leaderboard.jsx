import { FaUser, FaBook, FaMedal } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import LeaderboardTable from "../components/Dashboard/LeaderboardTable";
import FavTopics from "../components/Dashboard/FavTopics";
import NavBarDashboard from "../components/Dashboard/NavBarDashboard";

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
    <div>
        <NavBarDashboard/>
      <div className="container mx-auto px-4 py-8 lg:px-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Leaderboard & Insights
      </h1>

      {/* Leaderboard Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center py-6 text-primary">
          Top Achievers
        </h2>
        <LeaderboardTable />
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Profile & Progress */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-6">
            <img
              src="/dp-removebg-preview.png"
              alt="User Avatar"
              className="rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-primary mx-auto"
            />
            <h2 className="text-xl md:text-2xl font-semibold mt-4 text-primary">Kid A</h2>
            <p className="text-gray-600 text-sm md:text-base">Dedicated Learner</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="flex items-center text-sm font-medium text-gray-600 mb-2">
                <FaUser className="mr-2 text-primary" /> Learning Progress
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-sm font-medium text-gray-600 mb-2">
                <FaBook className="mr-2 text-primary" /> Lessons Completed
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-secondary h-3 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-sm font-medium text-gray-600 mb-2">
                <FaMedal className="mr-2 text-primary" /> Achievements Unlocked
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-accent h-3 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Favorite Topics */}
          <div className="mt-6">
            <FavTopics />
          </div>
        </div>

        {/* Insights & Analytics */}
        <div className="space-y-6">
          {/* Weekly Score */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              Weekly Score
            </h3>
            <div className="h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      border: "none",
                      borderRadius: "4px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Bar
                    dataKey="score"
                    fill="#4CAF50"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Win Rate */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              Win Rate
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm md:text-base font-medium text-gray-600">Puzzle</span>
                  <span className="text-sm md:text-base font-medium text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm md:text-base font-medium text-gray-600">Quiz</span>
                  <span className="text-sm md:text-base font-medium text-gray-600">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
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
