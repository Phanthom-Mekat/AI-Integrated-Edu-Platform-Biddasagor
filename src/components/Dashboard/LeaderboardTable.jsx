import { FaTrophy, FaMedal,  FaUser, FaChartLine, FaBolt, FaFire, FaBook } from 'react-icons/fa';

const leaderboardData = [
  { id: 1, name: "John Doe", score: 1250, change: 2, totalXP: 15000, totalWins: 47, lessonsCompleted: 120 },
  { id: 2, name: "Jane Smith", score: 1150, change: -1, totalXP: 14200, totalWins: 42, lessonsCompleted: 115 },
  { id: 3, name: "Bob Johnson", score: 1100, change: 3, totalXP: 13800, totalWins: 39, lessonsCompleted: 110 },
  { id: 4, name: "Alice Brown", score: 1050, change: 0, totalXP: 13100, totalWins: 36, lessonsCompleted: 105 },
  { id: 5, name: "Charlie Davis", score: 1000, change: 1, totalXP: 12500, totalWins: 33, lessonsCompleted: 100 },
];

const LeaderboardTable = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-br from-primary to-blue-600 p-8 rounded-xl shadow-lg">
      {/* Leaderboard Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-white flex items-center">
          <FaTrophy className="mr-3 text-yellow-400" />
          Leaderboard
        </h2>
        <p className="text-sm text-blue-200">Track the top learners at Biddasagor!</p>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-6">
        {leaderboardData.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center bg-white bg-opacity-10 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-20 shadow-md"
          >
            {/* Rank Badge */}
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-2xl font-bold">
              {index === 0 && <FaTrophy />}
              {index === 1 && <FaMedal className="text-gray-300" />}
              {index === 2 && <FaMedal className="text-yellow-700" />}
              {index > 2 && <span>{index + 1}</span>}
            </div>

            {/* User Info */}
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold text-white">{user.name}</h3>
              <p className="text-sm text-blue-200">Score: {user.score}</p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-green-300">
                <FaUser className="mr-2" />
                <span>{user.score}</span>
              </div>
              <div
                className={`flex items-center ${
                  user.change > 0 ? "text-green-400" : user.change < 0 ? "text-red-400" : "text-gray-400"
                }`}
              >
                <FaChartLine className="mr-2" />
                <span>{user.change > 0 ? "+" : ""}{user.change}</span>
              </div>
              <div className="flex items-center text-yellow-300">
                <FaBolt className="mr-2" />
                <span>{user.totalXP} XP</span>
              </div>
              <div className="flex items-center text-red-400">
                <FaFire className="mr-2" />
                <span>{user.totalWins} Wins</span>
              </div>
              <div className="flex items-center text-green-300">
                <FaBook className="mr-2" />
                <span>{user.lessonsCompleted} Lessons</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable;
